import React, { useState } from "react";
import { Map, Wrench, Brain, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, Quote, RefreshCw } from "lucide-react";

interface RoleOfPhilosophyProps {
  onAddPoints: (pts: number) => void;
  unlockedTermsCount: number;
}

export default function RoleOfPhilosophy({ onAddPoints, unlockedTermsCount }: RoleOfPhilosophyProps) {
  const [selectedConcept, setSelectedConcept] = useState<"worldview" | "methodology" | "critical" | null>(null);
  const [scoreCheck, setScoreCheck] = useState<{ answered: boolean; correct: boolean | null; answerSelected: number | null }>({
    answered: false,
    correct: null,
    answerSelected: null
  });

  const [sandboxTheory, setSandboxTheory] = useState<"startup" | "vaccine">("startup");
  const [sandboxStatus, setSandboxStatus] = useState<"idle" | "testing" | "success" | "failure">("idle");
  const [sandboxProgress, setSandboxProgress] = useState<number>(0);
  const [completedSandbox, setCompletedSandbox] = useState<string[]>([]);
  const [colTab, setColTab] = useState<"sandbox" | "theory">("sandbox");

  const sandboxScenarios = {
    startup: {
      title: "Khởi nghiệp nước ép Cần Tây - Bơ",
      theory: "Lý thuyết của bạn: Nước ép cần tây vị bơ sẽ là thức uống tốt cho sức khỏe bán chạy nhất vì vừa ngậy béo vừa thơm ngon.",
      steps: {
        idle: "Lý thuyết trên giấy: Bạn tin rằng sản phẩm sẽ thành công lớn.",
        testing: "Đang mở cửa hàng, nhập nguyên liệu và bán thử nghiệm cho 100 khách hàng...",
        success: "🎉 Thành công! Nước uống bán sạch trong 2 giờ, khách phản hồi rất tốt. Thực tiễn chứng minh lý thuyết của bạn là Chân lý khách quan (+10 điểm)!",
        failure: "❌ Thất bại! Khách chê vị cần tây bơ uống ngấy và khó uống. Thực tiễn chỉ ra ý tưởng của bạn là Sai lầm. Cần cải tiến lý luận!"
      },
      btnText: "Bán thử nghiệm thực tế",
      points: 10
    },
    vaccine: {
      title: "Vắc-xin thế hệ mới ngừa Virus X",
      theory: "Lý thuyết của bạn: Công thức vắc-xin tổng hợp chuỗi protein mới sẽ ngăn chặn hoàn toàn khả năng lây nhiễm của Virus X.",
      steps: {
        idle: "Mô hình phòng lab: Công thức vẽ trên mô phỏng máy tính.",
        testing: "Đang tiến hành thử nghiệm lâm sàng trên các mẫu tế bào thực tế...",
        success: "🎉 Thành công rực rỡ! Kháng thể tạo ra đạt 98% và an toàn. Thực tiễn đã chính thức xác nhận lý thuyết của bạn là Chân lý khoa học (+10 điểm)!",
        failure: "❌ Thất bại! Vắc-xin gây tác dụng phụ ở một số mẫu. Thực tiễn bác bỏ lý luận ban đầu. Bạn cần nghiên cứu lại công thức!"
      },
      btnText: "Thử nghiệm lâm sàng",
      points: 10
    }
  };

  const runSandboxTest = (scenarioKey: "startup" | "vaccine") => {
    if (sandboxStatus === "testing") return;
    setSandboxStatus("testing");
    setSandboxProgress(0);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setSandboxProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        // Determine outcome: 70% success, 30% failure
        const isSuccess = Math.random() > 0.3;
        if (isSuccess) {
          setSandboxStatus("success");
          if (!completedSandbox.includes(scenarioKey)) {
            setCompletedSandbox(prev => [...prev, scenarioKey]);
            onAddPoints(10);
          }
        } else {
          setSandboxStatus("failure");
        }
      }
    }, 150);
  };

  const miniQuiz = {
    question: "Đặt giả thuyết khách quan và nghiên cứu sự phát triển thực tế mang tính lịch sử thuộc về:",
    options: [
      { text: "Thế giới quan (Tấm bản đồ nhận định định vị thế giới)", category: "worldview" },
      { text: "Phương pháp luận (Hộp công cụ đưa ra hành động, nguyên tắc)", category: "methodology" },
      { text: "Rèn luyện (Tư duy phản biện)", category: "critical" }
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
    <section id="role-section" className="py-16 px-6 md:px-8 bg-white border-b border-[#C9B5A3] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-12">
          <span className="text-[#663300] font-sans font-bold text-xs tracking-widest uppercase">
            Vai trò của Triết học
          </span>
          <h2 className="text-3xl font-extrabold text-[#1a1c1c] font-sans mt-2 tracking-tight">
            Kim chỉ nam cho Tư duy
          </h2>
          <div className="w-12 h-1 bg-[#663300] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Worldview Card */}
          <div
            onClick={() => setSelectedConcept(selectedConcept === "worldview" ? null : "worldview")}
            className={`cursor-pointer transition-all duration-300 relative p-8 border rounded-sm hover:-translate-y-1 ${selectedConcept === "worldview"
              ? "border-[#663300] bg-[#E8D5C4]/10 shadow-md"
              : "border-[#C9B5A3] bg-white shadow-sm hover:border-[#663300]"
              }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#663300]"></div>

            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#E8D5C4] text-[#663300] rounded-sm">
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
              Giúp ta hiểu rõ cách thế giới vận hành. Từ đó, ta có góc nhìn khoa học, không bị rơi vào mê tín dị đoan hay ảo tưởng.

            </p>

            <ul className="space-y-3 font-sans text-xs font-semibold text-[#594043]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#663300]" />
                Định hướng giá trị đạo đức & lẽ sống
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#663300]" />
                Giải thích khoa học các hiện tượng tự nhiên, xã hội
              </li>
            </ul>

            {selectedConcept === "worldview" && (
              <div className="mt-6 p-4 bg-white/80 border border-[#C9B5A3] rounded-sm font-serif text-xs text-[#5d5f5f] leading-relaxed animate-fade-in">
                <strong className="text-[#663300] font-sans font-bold">Thế giới quan duy vật biện chứng:</strong> Là đỉnh cao phát triển của thế giới quan triết học, không chỉ giải thích thế giới dựa trên thực tế vật chất tự có mà còn khẳng định thế giới luôn biến đổi, tác động qua lại lẫn nhau chặt chẽ.
              </div>
            )}
          </div>

          {/* Methodology Card */}
          <div
            onClick={() => setSelectedConcept(selectedConcept === "methodology" ? null : "methodology")}
            className={`cursor-pointer transition-all duration-300 relative p-8 border rounded-sm hover:-translate-y-1 ${selectedConcept === "methodology"
              ? "border-[#663300] bg-[#E8D5C4]/10 shadow-md"
              : "border-[#C9B5A3] bg-white shadow-sm hover:border-[#663300]"
              }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#663300]"></div>

            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#E8D5C4] text-[#663300] rounded-sm">
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
              Triết học dạy ta cách phân tích, đánh giá và giải quyết vấn đề theo logic. Giúp ta làm việc có kế hoạch, không giải quyết vấn đề theo kiểu "mò mẫm" hay rập khuôn máy móc.
            </p>

            <ul className="space-y-3 font-sans text-xs font-semibold text-[#594043]">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#663300]" />
                Phân tích mâu thuẫn biện chứng nội tại để tìm nguồn lực tự thân
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#663300]" />
                Cách tiếp cận hệ thống, lịch sử - cụ thể trong mọi sự việc
              </li>
            </ul>

            {selectedConcept === "methodology" && (
              <div className="mt-6 p-4 bg-white/80 border border-[#C9B5A3] rounded-sm font-serif text-xs text-[#5d5f5f] leading-relaxed animate-fade-in">
                <strong className="text-[#663300] font-sans font-bold">Phương pháp luận duy vật biện chứng:</strong> Yêu cầu nhìn nhận đối tượng toàn diện (nhiều mối quan hệ), phát triển (trong xu hướng biến đổi liên tục) và lịch sử cụ thể (gắn liền bối cảnh cụ thể).
              </div>
            )}
          </div>

          {/* Critical Thinking Card */}
          <div
            onClick={() => setSelectedConcept(selectedConcept === "critical" ? null : "critical")}
            className={`cursor-pointer transition-all duration-300 relative p-8 border rounded-sm hover:-translate-y-1 ${selectedConcept === "critical"
              ? "border-[#663300] bg-[#E8D5C4]/10 shadow-md"
              : "border-[#C9B5A3] bg-white shadow-sm hover:border-[#663300]"
              }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#663300]"></div>

            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#E8D5C4] text-[#663300] rounded-sm">
                <Brain className="w-8 h-8" />
              </div>
              <span className="text-xs text-[#5d5f5f] font-mono select-none">
                {selectedConcept === "critical" ? "Đang mở giải nghĩa" : "Xem chi tiết"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#1a1c1c] font-sans mb-3">
              Rèn luyện (Tư duy phản biện)
            </h3>

            <p className="text-sm font-serif text-[#5d5f5f] text-justify leading-relaxed mb-6">
              Giữa thời đại mạng xã hội bùng nổ và thông tin nhiễu loạn (tin giả, thao túng tâm lý), tư duy triết học giúp ta biết đặt câu hỏi, nhìn thấu bản chất sự việc thay vì tin tưởng mù quáng.
            </p>

            <ul className="space-y-3 font-sans text-xs font-semibold text-[#594043]">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#663300]" />
                Nhận diện các thiên kiến nhận thức và tin giả
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#663300]" />
                Đòi hỏi thực nghiệm, đối chiếu kiểm chứng khách quan
              </li>
            </ul>

            {selectedConcept === "critical" && (
              <div className="mt-6 p-4 bg-white/80 border border-[#C9B5A3] rounded-sm font-serif text-xs text-[#5d5f5f] leading-relaxed animate-fade-in">
                <strong className="text-[#663300] font-sans font-bold">Tư duy phản biện triết học:</strong> Là năng lực tự ý thức khoa học, dùng lý tính và thực tiễn để thẩm định thông tin, chống lại sự áp đặt giáo điều và tư duy một chiều phiến diện.
              </div>
            )}
          </div>

        </div>

        {/* Interactive mini-check */}
        <div className="p-6 bg-[#f9f9f9] border border-[#C9B5A3] rounded-sm flex flex-col lg:flex-row shadow-sm gap-6 justify-between items-center text-left">
          <div className="flex items-start gap-4">
            <HelpCircle className="w-10 h-10 text-[#663300] flex-shrink-0 mt-1" />
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
                className={`px-4 py-2 text-xs font-sans font-bold transition-all border ${scoreCheck.answered
                  ? scoreCheck.answerSelected === i
                    ? scoreCheck.correct
                      ? "bg-[#663300] text-white border-[#663300]"
                      : "bg-red-100 text-red-800 border-red-300"
                    : "bg-[#eeeeee] text-[#c0c0c0] border-transparent"
                  : "bg-white hover:bg-[#E8D5C4]/30 text-[#663300] border-[#C9B5A3]"
                  }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {scoreCheck.answered && (
          <div className="mt-3 p-4 bg-[#E8D5C4]/30 border border-[#C9B5A3] text-xs font-serif text-[#1a1c1c] rounded-sm animate-fade-in">
            {scoreCheck.correct ? (
              <span className="text-[#663300] font-sans font-bold block mb-1">🎉 Xuất sắc! Nhận ngay +10 điểm tư duy.</span>
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
