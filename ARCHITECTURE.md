# DevCraft AI - Full-Stack SaaS Architecture

This document outlines the backend architecture, database schema, and deployment instructions for the DevCraft AI platform.

## 1. Backend API Structure (Node.js / Express)

The backend is designed to support a multi-client SaaS architecture.

```typescript
// src/routes/index.ts
import { Router } from 'express';
import authRoutes from './auth.routes';
import clientRoutes from './client.routes';
import paymentRoutes from './payment.routes';
import aiRoutes from './ai.routes';
import whatsappRoutes from './whatsapp.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/clients', clientRoutes);
router.use('/payments', paymentRoutes);
router.use('/ai', aiRoutes);
router.use('/whatsapp', whatsappRoutes);

export default router;
```

### Key Endpoints

**Authentication (`/api/auth`)**
- `POST /register` - Register new client
- `POST /login` - Client/Admin login
- `GET /me` - Get current user profile

**Client Management (`/api/clients`)**
- `GET /` - List all clients (Admin only)
- `POST /` - Create new client instance
- `GET /:id/dashboard` - Get client dashboard metrics
- `PUT /:id/settings` - Update client website settings

**Payments (`/api/payments`)**
- `POST /create-intent` - Create Stripe/JazzCash/Easypaisa payment intent
- `POST /webhook` - Handle payment provider webhooks
- `GET /history` - Get client payment history

**AI Chatbot (`/api/ai`)**
- `POST /chat` - Process incoming chat message (Groq API integration)
- `PUT /train` - Update chatbot knowledge base for specific client

**WhatsApp Automation (`/api/whatsapp`)**
- `POST /webhook` - Receive incoming WhatsApp messages (Meta Cloud API)
- `POST /send` - Send automated template message (order confirmation, etc.)

---

## 2. Database Schema (MongoDB / Mongoose)

Designed for multi-tenancy where each client has their own isolated data.

```typescript
// models/User.ts (Admin & Clients)
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['ADMIN', 'CLIENT'], default: 'CLIENT' },
  plan: { type: String, enum: ['BASIC', 'STANDARD', 'PREMIUM'], default: 'BASIC' },
  createdAt: { type: Date, default: Date.now }
});

// models/ClientSettings.ts (Website & Feature Config)
const ClientSettingsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  websiteUrl: { type: String },
  theme: {
    primaryColor: { type: String, default: '#2563eb' },
    mode: { type: String, enum: ['light', 'dark'], default: 'light' }
  },
  features: {
    hasBlog: { type: Boolean, default: false },
    hasEcommerce: { type: Boolean, default: false },
    hasAiChatbot: { type: Boolean, default: false }
  },
  paymentGateways: {
    stripeEnabled: { type: Boolean, default: false },
    jazzCashEnabled: { type: Boolean, default: false },
    easypaisaEnabled: { type: Boolean, default: false }
  }
});

// models/Lead.ts (CRM Data per Client)
const LeadSchema = new Schema({
  clientId: { type: Schema.Types.ObjectId, ref: 'User' }, // Which client owns this lead
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  source: { type: String, enum: ['WEBSITE', 'WHATSAPP', 'MANUAL'] },
  status: { type: String, enum: ['NEW', 'CONTACTED', 'CONVERTED'], default: 'NEW' },
  createdAt: { type: Date, default: Date.now }
});
```

---

## 3. AI Chatbot Integration (Groq API)

```typescript
// services/ai.service.ts
import { Groq } from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generateChatbotResponse(clientId: string, userMessage: string) {
  // 1. Fetch client's specific system prompt/knowledge base
  const clientContext = await getClientKnowledgeBase(clientId);
  
  // 2. Call Groq API (Llama 3 or Mixtral for fast, free inference)
  const completion = await groq.chat.completions.create({
    messages: [
      { role: "system", content: `You are a helpful sales assistant for ${clientContext.businessName}. ${clientContext.rules}` },
      { role: "user", content: userMessage }
    ],
    model: "llama3-8b-8192",
    temperature: 0.7,
  });

  return completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
}
```

---

## 4. WhatsApp Automation Flow (Meta Cloud API)

```typescript
// services/whatsapp.service.ts
import axios from 'axios';

export async function handleIncomingWhatsAppMessage(req, res) {
  const message = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  
  if (message) {
    const senderPhone = message.from;
    const text = message.text.body;
    
    // 1. Identify which client this WhatsApp number belongs to
    const clientId = await getClientIdByWhatsAppNumber(req.body.entry[0].id);
    
    // 2. Pass to AI Chatbot service
    const aiResponse = await generateChatbotResponse(clientId, text);
    
    // 3. Send response back via WhatsApp API
    await sendWhatsAppMessage(senderPhone, aiResponse);
    
    // 4. Save lead in CRM
    await saveLead(clientId, senderPhone, text);
  }
  
  res.sendStatus(200);
}
```

---

## 5. Deployment Instructions

### Frontend (Netlify / Vercel)
1. Push code to GitHub.
2. Connect repository to Netlify/Vercel.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Add Environment Variables:
   - `VITE_API_URL=https://api.yourdomain.com`

### Backend (Render / Railway)
1. Create a new Web Service on Render/Railway.
2. Connect backend repository.
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`
5. Add Environment Variables:
   - `PORT=8080`
   - `MONGO_URI=mongodb+srv://...`
   - `GROQ_API_KEY=gsk_...`
   - `WHATSAPP_TOKEN=EA...`
   - `STRIPE_SECRET_KEY=sk_...`

### Database (MongoDB Atlas)
1. Create a free cluster on MongoDB Atlas.
2. Whitelist IP addresses (allow access from anywhere `0.0.0.0/0` for Render).
3. Copy connection string to backend environment variables.
