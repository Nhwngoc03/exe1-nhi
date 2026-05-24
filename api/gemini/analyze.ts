import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration to allow local/production access
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { text, mode } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Nội dung phân tích quá ngắn hoặc không có nội dung." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: "GEMINI_API_KEY chưa được cấu hình. Học viên có thể cấu hình thông qua bảng điều khiển Secrets (Secrets panel) trong Google AI Studio hoặc thiết lập Environment Variables trên Vercel." 
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
}
