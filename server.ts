import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware representing JSON parser of incoming payloads
  app.use(express.json());

  // API Proxy Endpoint for secure Gemini AI calls keeps Secrets hidden from browser console
  app.post("/api/gemini/analyze", async (req, res) => {
    try {
      const { text, mode } = req.body;
      if (!text) {
        return res.status(400).json({ error: "Nội dung phân tích quá ngắn hoặc không có nội dung." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: "GEMINI_API_KEY chưa được cấu hình. Học viên có thể cấu hình thông qua bảng điều khiển Secrets (Secrets panel) trong Google AI Studio." 
        });
      }

      // Initialize Google GenAI client with Telemetry headers
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });

      let systemInstruction = "Bạn là Trợ lý Triết học Mác - Lênin nhiệt tâm, giải thích bằng thế giới quan khách quan và biện chứng.";
      let prompt = `Nội dung: "${text}"`;

      if (mode === "analyser") {
        systemInstruction = "Bạn là Nhà Phân Tích Biện Chứng Mác - Lênin. Phân tích nội dung được cung cấp theo lý luận nhận thức (Thực tiễn & Nhận thức, mâu thuẫn biện chứng, tính khách quan, sự phát triển). Nhận biết bẫy cảm xúc (Emotional Bias), tính bảo thủ (Dogmatism), hoặc sự phiến diện (Asymmetric Info) rồi rút ra bài học thực tiễn thiết thực.";
        prompt = `Hãy mổ xẻ biện chứng lập luận/sự việc sau:
"${text}"
Hãy phản hồi bằng tiếng Việt học thuật, chặt chẽ, chia rõ các mục: Phân tích nhận thức, Sai lệch nhận thức, và Bài học thực tiễn hành động.`;
      } else if (mode === "assistant") {
        systemInstruction = "Bạn là một học giả Triết học Mác - Lênin thông thái, đóng vai trò trợ lý hỏi đáp học phần. Trả lời một cách chi tiết, mạch lạc bằng Việt ngữ chuẩn xác học thuật, luôn đưa ra ví dụ trực quan sinh động gần gũi trong đời sống thường ngày.";
        prompt = `Câu hỏi của học viên: "${text}"
Hãy đưa ra giải đáp lý luận ngắn gọn và bổ sung sự liên hệ thực tế giàu giá trị giáo dục.`;
      }

      // Generate content securely server-side
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini server proxy error:", err);
      res.status(500).json({ 
        error: `Không thể kết thúc phân tích do lỗi hệ thống AI: ${err.message || "Lỗi giao tiếp."}` 
      });
    }
  });

  // Serve the frontend static assets or inject Vite middleware
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
    console.log(`Express dev server running securely on http://localhost:${PORT}`);
  });
}

startServer();
