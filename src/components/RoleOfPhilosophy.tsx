import React, { useState } from "react";
import { Map, Wrench, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";

interface RoleOfPhilosophyProps {
  onAddPoints: (pts: number) => void;
  unlockedTermsCount: number;
}

export default function RoleOfPhilosophy({ onAddPoints, unlockedTermsCount }: RoleOfPhilosophyProps) {
  const [selectedConcept, setSelectedConcept] = useState<"worldview" | "methodology" | null>(null);
  const [scoreCheck, setScoreCheck] = useState<{ answered: boolean; correct: boolean | null; answerSelected: number | null }>({
    answered: false,
    correct: null,
    answerSelected: null
  });

  const miniQuiz = {
    question: "Đặt giả thuyết khách quan và nghiên cứu sự phát triển thực tế mang tính lịch sử thuộc về:",
    options: [
      { text: "Thế giới quan (Tấm bản đồ nhận định định vị thế giới)", category: "worldview" },
      { text: "Phương pháp luận (Hộp công cụ đưa ra hành động, nguyên tắc)", category: "methodology" }
    ],
    correctIdx: 1,
    explanation: "Đúng thế! Phương pháp luận chính là hệ thống những nguyên lý, nguyên tắc chỉ dẫn cho con người cách thức hành động thực tiễn để giải quyết vấn đề và cải tạo xã hội."
  };

  const handleQuizAnswer = (idx: number) => {
    if (scoreCheck.answered) return;
    const isCorrect = idx === miniQuiz.correctIdx;
    setScoreCheck({
      answered: true,
      correct: isCorrect,
      answerSelected: idx
    });
    if (isCorrect) {
      onAddPoints(10);
    }
  };

  return (
    <section id="role-section" className="py-16 px-6 md:px-8 bg-white border-b border-[#e1bec0] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-[#6f0022] font-sans font-bold text-xs tracking-widest uppercase">
            Vai trò của Triết học
          </span>
          <h2 className="text-3xl font-extrabold text-[#1a1c1c] font-sans mt-2 tracking-tight">
            Kim chỉ nam cho Tư duy
          </h2>
          <div className="w-12 h-1 bg-[#6f0022] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Worldview Card */}
          <div 
            onClick={() => setSelectedConcept(selectedConcept === "worldview" ? null : "worldview")}
            className={`cursor-pointer transition-all duration-300 relative p-8 border rounded-sm hover:-translate-y-1 ${
              selectedConcept === "worldview" 
                ? "border-[#6f0022] bg-[#ffd9dc]/10 shadow-md" 
                : "border-[#e1bec0] bg-white shadow-sm hover:border-[#6f0022]"
            }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#6f0022]"></div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#ffd9dc] text-[#6f0022] rounded-sm">
                <Map className="w-8 h-8" />
              </div>
              <span className="text-xs text-[#5d5f5f] font-mono select-none">
                {selectedConcept === "worldview" ? "Đang mở giải nghĩa" : "Xem chi tiết"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#1a1c1c] font-sans mb-3">
              Tấm bản đồ (Thế giới quan)
            </h3>
            
            <p className="text-sm font-serif text-[#5d5f5f] text-justify leading-relaxed mb-6">
              Thế giới quan là toàn bộ những quan niệm của con người về thế giới, về bản thân con người và vị trí của con người trong thế giới đó. Nó như một tấm bản đồ tư duy sâu giúp ta chủ động định vị mục đích và ý nghĩa cuộc sống.
            </p>

            <ul className="space-y-3 font-sans text-xs font-semibold text-[#594043]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6f0022]" />
                Định hướng giá trị đạo đức & lẽ sống
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6f0022]" />
                Giải thích khoa học các hiện tượng tự nhiên, xã hội
              </li>
            </ul>

            {selectedConcept === "worldview" && (
              <div className="mt-6 p-4 bg-white/80 border border-[#e1bec0] rounded-sm font-serif text-xs text-[#5d5f5f] leading-relaxed animate-fade-in">
                <strong className="text-[#6f0022] font-sans font-bold">Thế giới quan duy vật biện chứng:</strong> Là đỉnh cao phát triển của thế giới quan triết học, không chỉ giải thích thế giới dựa trên thực tế vật chất tự có mà còn khẳng định thế giới luôn biến đổi, tác động qua lại lẫn nhau chặt chẽ.
              </div>
            )}
          </div>

          {/* Methodology Card */}
          <div 
            onClick={() => setSelectedConcept(selectedConcept === "methodology" ? null : "methodology")}
            className={`cursor-pointer transition-all duration-300 relative p-8 border rounded-sm hover:-translate-y-1 ${
              selectedConcept === "methodology" 
                ? "border-[#6f0022] bg-[#ffd9dc]/10 shadow-md" 
                : "border-[#e1bec0] bg-white shadow-sm hover:border-[#6f0022]"
            }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#6f0022]"></div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#ffd9dc] text-[#6f0022] rounded-sm">
                <Wrench className="w-8 h-8" />
              </div>
              <span className="text-xs text-[#5d5f5f] font-mono select-none">
                {selectedConcept === "methodology" ? "Đang mở giải nghĩa" : "Xem chi tiết"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#1a1c1c] font-sans mb-3">
              Hộp công cụ (Phương pháp luận)
            </h3>
            
            <p className="text-sm font-serif text-[#5d5f5f] text-justify leading-relaxed mb-6">
              Phương pháp luận là hệ thống các nguyên tắc, cách thức để tiếp cận và cải tạo thực tiễn. Triết học Mác - Lênin cung cấp phương pháp luận duy vật biện chứng - công cụ tư duy sắc bén nhất để phân tích sự phát triển khách quan.
            </p>

            <ul className="space-y-3 font-sans text-xs font-semibold text-[#594043]">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6f0022]" />
                Phân tích mâu thuẫn biện chứng nội tại để tìm nguồn lực tự thân
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6f0022]" />
                Cách tiếp cận hệ thống, lịch sử - cụ thể trong mọi sự việc
              </li>
            </ul>

            {selectedConcept === "methodology" && (
              <div className="mt-6 p-4 bg-white/80 border border-[#e1bec0] rounded-sm font-serif text-xs text-[#5d5f5f] leading-relaxed animate-fade-in">
                <strong className="text-[#6f0022] font-sans font-bold">Phương pháp luận duy vật biện chứng:</strong> Yêu cầu nhìn nhận đối tượng toàn diện (nhiều mối quan hệ), phát triển (trong xu hướng biến đổi liên tục) và lịch sử cụ thể (gắn liền bối cảnh cụ thể).
              </div>
            )}
          </div>

        </div>

        {/* Interactive mini-check */}
        <div className="p-6 bg-[#f9f9f9] border border-[#e1bec0] rounded-sm flex flex-col lg:flex-row shadow-sm gap-6 justify-between items-center text-left">
          <div className="flex items-start gap-4">
            <HelpCircle className="w-10 h-10 text-[#6f0022] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-sans font-bold text-[#1a1c1c] text-sm">
                Trắc nghiệm nhanh: Nhận diện vai trò tư duy
              </h4>
              <p className="font-serif text-xs text-[#5d5f5f] mt-1">
                {miniQuiz.question}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch sm:items-center">
            {miniQuiz.options.map((option, i) => (
              <button
                key={i}
                disabled={scoreCheck.answered}
                onClick={() => handleQuizAnswer(i)}
                className={`px-4 py-2 text-xs font-sans font-bold transition-all border ${
                  scoreCheck.answered
                    ? scoreCheck.answerSelected === i
                      ? scoreCheck.correct
                        ? "bg-[#6f0022] text-white border-[#6f0022]"
                        : "bg-red-100 text-red-800 border-red-300"
                      : "bg-[#eeeeee] text-[#c0c0c0] border-transparent"
                    : "bg-white hover:bg-[#ffd9dc]/30 text-[#6f0022] border-[#e1bec0]"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {scoreCheck.answered && (
          <div className="mt-3 p-4 bg-[#ffd9dc]/30 border border-[#e1bec0] text-xs font-serif text-[#1a1c1c] rounded-sm animate-fade-in">
            {scoreCheck.correct ? (
              <span className="text-[#6f0022] font-sans font-bold block mb-1">🎉 Xuất sắc! Nhận ngay +10 điểm tư duy.</span>
            ) : (
              <span className="text-red-800 font-sans font-bold block mb-1">💡 Chưa chính xác, hãy đọc lại lý thuyết nhé:</span>
            )}
            {miniQuiz.explanation}
          </div>
        )}

      </div>
    </section>
  );
}
