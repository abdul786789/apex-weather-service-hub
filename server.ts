import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "dummy",
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/chat", async (req, res) => {
    try {
      if (!process.env.GROQ_API_KEY) {
        return res.status(500).json({ error: "GROQ_API_KEY is not configured." });
      }

      const { messages } = req.body;

      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages format." });
      }

      const systemPrompt = {
        role: "system",
        content: `You are a helpful, professional, and persuasive sales assistant for Aciano Technologies. 
Aciano Technologies is a premium IT agency offering AI Development, IT Staff Augmentation, Custom Software Development, IoT Solutions, Mobile App Development, SEO Services, WordPress Development, eCommerce Solutions, DevOps, and Microsoft D365 Consultancy.
Your goal is to assist visitors, answer their questions about our services, and encourage them to start a project or get in touch. Keep your responses concise, friendly, and focused on how Aciano can solve their business problems.`
      };

      const chatCompletion = await groq.chat.completions.create({
        messages: [systemPrompt, ...messages],
        model: "llama3-8b-8192", // or another fast model like "mixtral-8x7b-32768"
        temperature: 0.7,
        max_tokens: 500,
      });

      res.json({ reply: chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't process that." });
    } catch (error: any) {
      console.error("Groq API Error:", error);
      res.status(500).json({ error: "Failed to communicate with the AI assistant." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
