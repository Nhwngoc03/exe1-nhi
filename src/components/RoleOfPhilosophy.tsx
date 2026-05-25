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

  const [sandboxTheory, setSandboxTheory] = useState<"startup" | "vaccine" | "physics">("startup");
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
    },
    physics: {
      title: "Thí nghiệm rơi tự do (Galileo)",
      theory: "Lý thuyết của bạn: Trái ngược với Aristot bảo thủ cho rằng vật nặng rơi nhanh hơn, bạn tin mọi vật rơi tự do cùng tốc độ bất chấp khối lượng.",
      steps: {
        idle: "Lập luận học thuật: Phe giáo điều Aristot phản đối và cự cãi kịch liệt.",
        testing: "Đang thả hai quả cầu sắt 10kg và 1kg từ đỉnh tháp nghiêng Pisa...",
        success: "🎉 Thành công chứng thực! Cả hai chạm đất cùng một lúc trước sự kinh ngạc của mọi người. Lý luận rơi tự do trở thành Chân lý khách quan (+10 điểm)!",
        failure: "❌ Sai số thực tế! Gió thổi mạnh làm lệch đường rơi quả cầu. Cần làm lại thí nghiệm chuẩn xác trong môi trường chân không."
      },
      btnText: "Thả từ tháp nghiêng Pisa",
      points: 10
    }
  };

  const runSandboxTest = (scenarioKey: "startup" | "vaccine" | "physics") => {
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Worldview Card */}
          <div
            onClick={() => setSelectedConcept(selectedConcept === "worldview" ? null : "worldview")}
            className={`cursor-pointer transition-all duration-300 relative p-8 border rounded-sm hover:-translate-y-1 ${selectedConcept === "worldview"
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
              Giúp ta hiểu rõ cách thế giới vận hành. Từ đó, ta có góc nhìn khoa học, không bị rơi vào mê tín dị đoan hay ảo tưởng.

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
            className={`cursor-pointer transition-all duration-300 relative p-8 border rounded-sm hover:-translate-y-1 ${selectedConcept === "methodology"
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
              Triết học dạy ta cách phân tích, đánh giá và giải quyết vấn đề theo logic. Giúp ta làm việc có kế hoạch, không giải quyết vấn đề theo kiểu "mò mẫm" hay rập khuôn máy móc.
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

          {/* Critical Thinking Card */}
          <div
            onClick={() => setSelectedConcept(selectedConcept === "critical" ? null : "critical")}
            className={`cursor-pointer transition-all duration-300 relative p-8 border rounded-sm hover:-translate-y-1 ${selectedConcept === "critical"
              ? "border-[#6f0022] bg-[#ffd9dc]/10 shadow-md"
              : "border-[#e1bec0] bg-white shadow-sm hover:border-[#6f0022]"
              }`}
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#6f0022]"></div>

            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#ffd9dc] text-[#6f0022] rounded-sm">
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
                <ShieldCheck className="w-4 h-4 text-[#6f0022]" />
                Nhận diện các thiên kiến nhận thức và tin giả
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6f0022]" />
                Đòi hỏi thực nghiệm, đối chiếu kiểm chứng khách quan
              </li>
            </ul>

            {selectedConcept === "critical" && (
              <div className="mt-6 p-4 bg-white/80 border border-[#e1bec0] rounded-sm font-serif text-xs text-[#5d5f5f] leading-relaxed animate-fade-in">
                <strong className="text-[#6f0022] font-sans font-bold">Tư duy phản biện triết học:</strong> Là năng lực tự ý thức khoa học, dùng lý tính và thực tiễn để thẩm định thông tin, chống lại sự áp đặt giáo điều và tư duy một chiều phiến diện.
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
                className={`px-4 py-2 text-xs font-sans font-bold transition-all border ${scoreCheck.answered
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

        {/* Karl Marx Quote & Core Epistemology Section */}
        <div className="mt-16 pt-12 border-t border-[#e1bec0]">
          <div className="text-center mb-10">
            <span className="text-[#6f0022] font-sans font-bold text-xs tracking-widest uppercase bg-[#ffd9dc] px-3 py-1 rounded-full">
              Chuyên đề học thuật
            </span>
            <h3 className="text-2xl font-extrabold text-[#1a1c1c] font-sans mt-3 tracking-tight">
              Thực Tiễn — Tiêu Chuẩn Duy Nhất Của Chân Lý
            </h3>
            <div className="w-12 h-1 bg-[#6f0022] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Column 1: Karl Marx's Quote - Span 7 */}
            <div className="lg:col-span-7 bg-[#fbfbfb] border border-[#e1bec0] rounded-sm p-6 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -top-8 text-[#e1bec0]/10 pointer-events-none">
                <Quote className="w-36 h-36" />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Quote className="text-[#6f0022] w-5 h-5 flex-shrink-0" />
                  <span className="font-sans font-extrabold text-xs text-[#6f0022] tracking-wider uppercase">
                    Ý nghĩa câu nói của Karl Marx
                  </span>
                </div>

                <div className="bg-[#ffd9dc]/20 border-l-4 border-[#6f0022] p-4 mb-6">
                  <p className="font-serif text-sm md:text-base italic text-[#1a1c1c] leading-relaxed">
                    "Vấn đề tìm hiểu xem tư duy của con người có thể đạt tới chân lý khách quan không, hoàn toàn không phải là một vấn đề lý luận mà là một vấn đề thực tiễn."
                  </p>
                  <p className="font-sans text-[10px] text-[#5d5f5f] mt-3 font-semibold tracking-wider">
                    — Luận cương về Feuerbach (1845) • C. Mác và Ph. Ăngghen: Toàn tập, Tập 3
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border border-[#e1bec0] p-4 rounded-sm">
                    <span className="inline-block text-[10px] font-sans font-extrabold bg-[#6f0022] text-white px-2 py-0.5 mb-2 rounded-sm uppercase">
                      Hiểu một cách đơn giản nhất
                    </span>
                    <p className="font-sans font-bold text-sm text-[#1a1c1c]">
                      Đừng chỉ tranh cãi lý thuyết suông trên giấy, hãy mang ra áp dụng và thử nghiệm thực tế.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-[#e1bec0]/60 p-4 rounded-sm bg-white/50">
                      <h4 className="font-sans font-bold text-xs text-[#6f0022] mb-1.5 uppercase">
                        Lý thuyết không tự chứng minh
                      </h4>
                      <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed">
                        Nếu dùng lời nói để chứng minh một lời nói khác, ta sẽ rơi vào vòng cãi vã luẩn quẩn. Suy nghĩ chủ quan không thể tự khẳng định độ chính xác của chính nó.
                      </p>
                    </div>

                    <div className="border border-[#e1bec0]/60 p-4 rounded-sm bg-white/50">
                      <h4 className="font-sans font-bold text-xs text-[#6f0022] mb-1.5 uppercase">
                        Thực tiễn là "trọng tài" duy nhất
                      </h4>
                      <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed">
                        Để biết ý tưởng có phải là chân lý (đúng với sự thật khách quan) hay không, bắt buộc phải áp dụng nó vào lao động, sản xuất hoặc thí nghiệm khoa học.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e1bec0]/50 bg-[#ffd9dc]/10 -mx-6 -mb-6 p-6 rounded-b-sm">
                <span className="font-sans font-bold text-xs text-[#6f0022] block mb-1.5 uppercase tracking-wider">
                  💡 Ví dụ thực tế:
                </span>
                <p className="font-serif text-xs text-[#594043] leading-relaxed">
                  Bạn lập ra một mô hình kinh doanh sáng tạo mới trên bản vẽ (tư duy). Để biết mô hình này đúng hay sai, bạn phải vận hành kinh doanh thực tế (thực tiễn). Nếu dự án mang lại hiệu quả thực tế và có lãi, mô hình của bạn đã đạt tới chân lý khách quan.
                </p>
              </div>
            </div>

            {/* Column 2: Core Epistemology & Simulator - Span 5 */}
            <div className="lg:col-span-5 bg-[#1d0007] text-white rounded-sm p-6 md:p-8 flex flex-col justify-between shadow-md relative overflow-hidden border border-[#6f0022]">
              <div className="absolute -left-10 -bottom-10 text-white/5 pointer-events-none animate-spin" style={{ animationDuration: '20s' }}>
                <RefreshCw className="w-48 h-48" />
              </div>

              <div className="z-10 w-full">
                {/* Column Section Header */}
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="text-[#ffd9dc] w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                    <span className="font-sans font-extrabold text-xs text-[#ffd9dc] tracking-wider uppercase">
                      Lý luận nhận thức
                    </span>
                  </div>
                  
                  {/* Tab Toggles */}
                  <div className="flex bg-white/10 p-0.5 rounded-sm">
                    <button
                      onClick={() => setColTab("sandbox")}
                      className={`text-[9px] font-sans font-bold px-2 py-1 rounded-sm transition-all ${
                        colTab === "sandbox" ? "bg-[#6f0022] text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      Mô phỏng
                    </button>
                    <button
                      onClick={() => setColTab("theory")}
                      className={`text-[9px] font-sans font-bold px-2 py-1 rounded-sm transition-all ${
                        colTab === "theory" ? "bg-[#6f0022] text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      Lý thuyết
                    </button>
                  </div>
                </div>

                {colTab === "sandbox" ? (
                  <div className="animate-fade-in">
                    <p className="font-serif text-[11px] text-[#ffd9dc] italic leading-relaxed mb-4">
                      Nhận thức không phải là "copy-paste". Hãy chọn một lý thuyết dưới đây và kích hoạt thử nghiệm thực tiễn để kiểm chứng chân lý.
                    </p>

                    {/* Scenario Tabs */}
                    <div className="flex gap-1.5 mb-4">
                      {(["startup", "vaccine", "physics"] as const).map((key) => (
                        <button
                          key={key}
                          disabled={sandboxStatus === "testing"}
                          onClick={() => {
                            setSandboxTheory(key);
                            setSandboxStatus("idle");
                            setSandboxProgress(0);
                          }}
                          className={`flex-1 text-[9px] font-sans font-bold py-1.5 px-1 border transition-all ${
                            sandboxTheory === key
                              ? "bg-[#ffd9dc] text-[#6f0022] border-[#ffd9dc]"
                              : "bg-white/5 hover:bg-white/10 border-white/10 text-white/85"
                          }`}
                        >
                          {key === "startup" ? "Cần Tây - Bơ" : key === "vaccine" ? "Vắc-xin X" : "Tháp Pisa"}
                        </button>
                      ))}
                    </div>

                    {/* Sandbox Display Card */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-sm mb-4">
                      <h4 className="font-sans font-bold text-xs text-[#ffd9dc] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#ffd9dc] rounded-full"></span>
                        {sandboxScenarios[sandboxTheory].title}
                      </h4>
                      <p className="font-serif text-[11.5px] text-white/90 leading-relaxed mb-3">
                        {sandboxScenarios[sandboxTheory].theory}
                      </p>

                      <div className="border-t border-white/10 pt-3 mt-3">
                        <span className="text-[9px] font-sans font-extrabold tracking-wider uppercase text-[#ffd9dc] block mb-1">
                          Trạng thái hiện tại:
                        </span>
                        <div className="font-sans text-[11.5px] leading-relaxed">
                          {sandboxStatus === "idle" && (
                            <span className="text-white/70 italic">{sandboxScenarios[sandboxTheory].steps.idle}</span>
                          )}
                          {sandboxStatus === "testing" && (
                            <span className="flex items-center gap-2 text-yellow-300 font-medium">
                              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
                              {sandboxScenarios[sandboxTheory].steps.testing}
                            </span>
                          )}
                          {sandboxStatus === "success" && (
                            <span className="text-green-300 font-bold block bg-green-500/10 border border-green-500/20 p-2 rounded-sm">
                              {sandboxScenarios[sandboxTheory].steps.success}
                            </span>
                          )}
                          {sandboxStatus === "failure" && (
                            <span className="text-red-300 font-bold block bg-red-500/10 border border-red-500/20 p-2 rounded-sm">
                              {sandboxScenarios[sandboxTheory].steps.failure}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Progress Bar for Testing */}
                      {sandboxStatus === "testing" && (
                        <div className="w-full bg-white/10 h-1 rounded-full mt-4 overflow-hidden">
                          <div
                            className="bg-yellow-400 h-full transition-all duration-100 ease-out"
                            style={{ width: `${sandboxProgress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>

                    {/* Simulation Controls */}
                    <div>
                      {sandboxStatus === "idle" && (
                        <button
                          onClick={() => runSandboxTest(sandboxTheory)}
                          className="w-full bg-[#ffd9dc] text-[#6f0022] hover:bg-[#ffc2c7] font-sans font-bold text-xs tracking-wider py-2.5 rounded-sm transition-all active:scale-[0.98] uppercase cursor-pointer"
                        >
                          ⚡ {sandboxScenarios[sandboxTheory].btnText}
                        </button>
                      )}

                      {sandboxStatus === "testing" && (
                        <button
                          disabled
                          className="w-full bg-white/10 text-white/40 font-sans font-bold text-xs tracking-wider py-2.5 rounded-sm cursor-not-allowed uppercase"
                        >
                          ⏳ Đang đối chiếu thực tiễn ({sandboxProgress}%)
                        </button>
                      )}

                      {sandboxStatus === "success" && (
                        <div className="space-y-2">
                          <button
                            onClick={() => {
                              setSandboxStatus("idle");
                              setSandboxProgress(0);
                            }}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-sans font-bold text-xs py-2.5 rounded-sm transition-all uppercase cursor-pointer"
                          >
                            Thử lại kịch bản / Đổi kịch bản
                          </button>
                        </div>
                      )}

                      {sandboxStatus === "failure" && (
                        <div className="space-y-2">
                          <button
                            onClick={() => {
                              setSandboxStatus("idle");
                              setSandboxProgress(0);
                            }}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-sans font-bold text-xs py-2.5 rounded-sm transition-all active:scale-[0.98] uppercase cursor-pointer"
                          >
                            💡 Cải tiến lý luận & Thử lại
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    <p className="font-serif text-sm text-[#ffd9dc] italic leading-relaxed mb-6">
                      Nhận thức không phải là "copy-paste". Bộ não không chụp ảnh thế giới thụ động, mà chúng ta chỉ thực sự hiểu thế giới thông qua quá trình chủ động tương tác và cải tạo nó.
                    </p>

                    <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
                      Vòng lặp nhận thức hoàn hảo
                    </h4>

                    <div className="relative border-l border-[#ffd9dc]/30 pl-5 ml-2.5 space-y-6">
                      {/* Step 1 */}
                      <div className="relative">
                        <span className="absolute -left-[27px] top-0 w-3.5 h-3.5 rounded-full bg-[#ffd9dc] border-2 border-[#6f0022] flex items-center justify-center text-[8px] font-sans font-black text-[#6f0022]">1</span>
                        <h5 className="font-sans font-bold text-xs text-white uppercase">Bước 1: Nhu cầu Thực tiễn</h5>
                        <p className="font-serif text-[11px] text-white/85 mt-1 leading-relaxed">
                          Con người đối mặt với vấn đề nảy sinh trong thực tế đời sống xã hội (Ví dụ: bùng phát dịch bệnh nguy hiểm).
                        </p>
                      </div>

                      {/* Step 2 */}
                      <div className="relative">
                        <span className="absolute -left-[27px] top-0 w-3.5 h-3.5 rounded-full bg-[#ffd9dc] border-2 border-[#6f0022] flex items-center justify-center text-[8px] font-sans font-black text-[#6f0022]">2</span>
                        <h5 className="font-sans font-bold text-xs text-white uppercase">Bước 2: Phát triển Nhận thức</h5>
                        <p className="font-serif text-[11px] text-white/85 mt-1 leading-relaxed">
                          Tư duy, lý tính tìm kiếm giải pháp và đúc kết lý thuyết (Tiến hành nghiên cứu, chế tạo thuốc điều trị).
                        </p>
                      </div>

                      {/* Step 3 */}
                      <div className="relative">
                        <span className="absolute -left-[27px] top-0 w-3.5 h-3.5 rounded-full bg-[#ffd9dc] border-2 border-[#6f0022] flex items-center justify-center text-[8px] font-sans font-black text-[#6f0022]">3</span>
                        <h5 className="font-sans font-bold text-xs text-white uppercase">Bước 3: Kiểm chứng thực tế</h5>
                        <p className="font-serif text-[11px] text-white/85 mt-1 leading-relaxed">
                          Đưa lý thuyết/thuốc trở lại ứng dụng điều trị. Nếu bệnh được chữa khỏi, lý thuyết được xác nhận là chân lý. Nếu thất bại, ta điều chỉnh và bắt đầu lại.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 bg-white/10 border border-white/20 p-4 rounded-sm z-10">
                <span className="font-sans font-bold text-xs text-[#ffd9dc] block mb-1 uppercase tracking-wider">
                  📌 Kết luận quan trọng:
                </span>
                <p className="font-serif text-xs text-white/90 leading-relaxed">
                  Nhận thức là con đường biện chứng đi từ thực tiễn khách quan, đúc rút thành lý thuyết khoa học lý tính, rồi lại mang lý thuyết quay về phục vụ thực tiễn xã hội.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
