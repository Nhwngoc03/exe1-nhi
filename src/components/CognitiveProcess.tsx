import React, { useState } from "react";
import { 
  Eye, BrainCircuit, RotateCcw, AlertCircle, HelpCircle, CheckCircle, Sparkles,
  ArrowRight, Info
} from "lucide-react";

interface CognitiveProcessProps {
  onAddPoints?: (pts: number) => void;
}

export default function CognitiveProcess({ onAddPoints }: CognitiveProcessProps) {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeSubStage, setActiveSubStage] = useState<number>(0);
  const [readSubstages, setReadSubstages] = useState<string[]>(["0-0"]);
  const [pointsAwarded, setPointsAwarded] = useState<boolean>(false);

  // Lemon interactive sensory node
  const [lemonNode, setLemonNode] = useState<"none" | "eye" | "hand" | "tongue">("none");

  const stageData = [
    {
      title: "Giai đoạn 1: Nhận thức cảm tính",
      subtitle: "Trực quan sinh động",
      icon: Eye,
      intro: "Là giai đoạn đầu tiên của quá trình nhận thức, khi sự vật khách quan trực tiếp tác động vào các giác quan con người, giúp ta thu nhận các thuộc tính trực quan bên ngoài.",
      substages: [
        {
          name: "Cảm giác",
          concept: "Phản ánh từng thuộc tính riêng lẻ của sự vật khi chúng đang tác động trực tiếp vào các giác quan của ta.",
          example: "Khi bạn cầm một quả chanh, mắt bạn thấy nó màu xanh, tay thấy vỏ hơi sần sùi, lưỡi nếm thấy vị chua. Đó là các cảm giác riêng biệt.",
          visualType: "lemon_sensation"
        },
        {
          name: "Tri giác",
          concept: "Tổng hợp nhiều cảm giác riêng lẻ để hình thành nên một hình ảnh trọn vẹn, tương đối hoàn chỉnh về sự vật khách quan.",
          example: "Tổng hợp các cảm giác về màu đỏ, hình dáng tròn, mùi thơm và vị ngọt để nhận biết rõ ràng: 'Đây là một quả táo'.",
          visualType: "apple_perception"
        },
        {
          name: "Biểu tượng",
          concept: "Hình ảnh của sự vật được lưu giữ và tái hiện lại trong trí nhớ của con người khi sự vật không còn ở ngay trước mắt. Đây là nấc thang cao nhất của nhận thức cảm tính.",
          example: "Bạn cất quả chanh vào tủ lạnh và nhắm mắt lại. Trong đầu bạn vẫn hình dung rõ rệt hình ảnh quả chanh màu xanh, có vị chua đó nhờ vào năng lực tái hiện của bộ nhớ.",
          visualType: "lemon_representation"
        }
      ]
    },
    {
      title: "Giai đoạn 2: Nhận thức lý tính",
      subtitle: "Tư duy trừu tượng",
      icon: BrainCircuit,
      intro: "Là giai đoạn cao của quá trình nhận thức. Bộ não tiến hành phân tích, khái quát hóa dữ liệu cảm tính để tìm ra bản chất, quy luật sâu xa bên trong sự vật một cách gián tiếp.",
      substages: [
        {
          name: "Khái niệm",
          concept: "Phản ánh những thuộc tính chung, bản chất và cốt lõi nhất của một nhóm sự vật, hiện tượng đồng nhất.",
          example: "Từ việc uống nhiều loại nước (trà sữa, sinh tố, cà phê, nước ép...), bộ não đúc kết ra khái niệm 'Đồ uống giải khát': Chất lỏng dùng để con người uống nhằm bù nước hoặc thỏa mãn vị giác.",
          visualType: "beverage_concept"
        },
        {
          name: "Phán đoán",
          concept: "Liên kết các khái niệm lại với nhau để khẳng định hoặc phủ nhận một thuộc tính nào đó của sự vật, xác định tính đúng/sai.",
          example: "Đưa ra nhận định liên kết khái niệm: 'Uống trà sữa liên tục mỗi ngày sẽ gây ra nguy cơ béo phì'.",
          visualType: "milktea_judgment"
        },
        {
          name: "Suy luận",
          concept: "Liên kết nhiều phán đoán đã biết để tự rút ra một phán đoán mới chứa tri thức mới hoàn toàn mà không cần qua thử nghiệm trực tiếp.",
          example: "Ý 1: Trà sữa chứa rất nhiều đường và calo.\nÝ 2: Nạp nhiều đường và calo vào cơ thể chắc chắn gây tăng cân.\nSuy ra tri thức mới: Muốn giảm cân thì phải cắt giảm trà sữa.",
          visualType: "weightloss_inference"
        }
      ]
    },
    {
      title: "Giai đoạn 3: Trở về thực tiễn",
      subtitle: "Vòng lặp vĩnh cửu",
      icon: RotateCcw,
      intro: "Nhận thức không chỉ để tích lũy lý luận suông. Để xác định tri thức lý tính có chính xác hay không, con người bắt buộc phải đưa lý thuyết quay trở về ứng dụng và kiểm chứng trong thực tiễn.",
      substages: [
        {
          name: "Ứng dụng thực tiễn",
          concept: "Đưa lý thuyết khoa học/suy luận vào hành động thực tế đời sống để giải quyết các nhu cầu tồn tại.",
          example: "Sau khi suy luận ra việc uống trà sữa gây béo phì, bạn thực sự tiến hành cắt giảm trà sữa trong khẩu phần ăn uống thực tế hàng ngày của mình.",
          visualType: "diet_application"
        },
        {
          name: "Kiểm nghiệm chân lý",
          concept: "Thực tiễn là thước đo duy nhất. Sự cải biến thực tế sẽ xác nhận lý thuyết của bạn là chân lý hay sai lầm.",
          example: "Sau thời gian cắt giảm trà sữa, cân nặng của bạn giảm đi thành công, sức khỏe tốt lên rõ rệt. Thực tế này xác nhận suy luận ban đầu là Chân lý.",
          visualType: "weight_verification"
        }
      ]
    }
  ];

  const handleSubstageSelect = (stageIdx: number, subIdx: number) => {
    setActiveSubStage(subIdx);
    const key = `${stageIdx}-${subIdx}`;
    if (!readSubstages.includes(key)) {
      const nextRead = [...readSubstages, key];
      setReadSubstages(nextRead);
      // There are 3 sensory + 3 rational + 2 practice = 8 substages in total
      if (nextRead.length === 8 && !pointsAwarded) {
        setPointsAwarded(true);
        if (onAddPoints) {
          onAddPoints(15);
        }
      }
    }
  };

  const handleStageChange = (idx: number) => {
    setActiveStage(idx);
    handleSubstageSelect(idx, 0);
  };

  const activeSubstageData = stageData[activeStage].substages[activeSubStage];
  const StageIcon = stageData[activeStage].icon;

  return (
    <section className="py-16 bg-white px-6 md:px-8 border-b border-[#C9B5A3]">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="text-[#663300] font-sans font-bold text-xs tracking-widest uppercase bg-[#E8D5C4] px-3 py-1 rounded-sm">
            Chương III: Tiến trình biện chứng
          </span>
          <h2 className="text-3xl font-extrabold text-[#1a1c1c] font-sans mt-3 mb-2 tracking-tight">
            Cách Thức Con Người Nhận Thức Thế Giới
          </h2>
          <p className="font-serif text-sm text-[#5d5f5f] max-w-xl mx-auto leading-relaxed">
            Nhận thức không phải là sự phản ánh một bước thụ động, mà là quá trình đi từ thấp đến cao, từ cảm tính trực quan sinh động đến lý tính trừu tượng sâu sắc.
          </p>
          <div className="w-12 h-1 bg-[#663300] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Desktop Stage Selector */}
        <div className="relative mb-12">
          <div className="hidden md:block absolute top-[52px] left-0 w-full h-0.5 bg-[#C9B5A3] -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {stageData.map((stage, idx) => {
              const IconComp = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => handleStageChange(idx)}
                  className={`bg-white p-6 border transition-all duration-300 text-center cursor-pointer select-none group rounded-sm ${
                    isSelected 
                      ? "border-[#663300] shadow-md ring-2 ring-[#E8D5C4]/50 transform -translate-y-0.5" 
                      : "border-[#C9B5A3] hover:border-[#663300]/60 bg-[#fbfbfb]"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-105 ${
                    isSelected ? "bg-[#663300] text-white" : "bg-[#f3f3f3] text-[#663300]"
                  }`}>
                    <IconComp className="w-7 h-7" />
                  </div>

                  <span className="text-[9px] font-sans font-bold text-[#663300] tracking-wider uppercase bg-[#E8D5C4] px-2.5 py-0.5 rounded-sm">
                    {stage.subtitle}
                  </span>

                  <h3 className="font-sans font-bold text-base text-[#1a1c1c] mt-3">
                    {stage.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Interactive Content Box */}
        <div className="bg-[#fcfcfc] border border-[#C9B5A3] rounded-sm p-6 lg:p-8 text-left shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left selector menu & explanation (Span 6) */}
            <div className="lg:col-span-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r lg:border-[#C9B5A3] pb-6 lg:pb-0 lg:pr-8">
              <div>
                {/* Stage Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#E8D5C4] text-[#663300] rounded-sm">
                    <StageIcon className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-[#663300]">
                      {stageData[activeStage].title}
                    </h3>
                    <span className="text-[10px] text-[#5d5f5f] font-mono uppercase tracking-widest block font-semibold">
                      {stageData[activeStage].subtitle}
                    </span>
                  </div>
                </div>

                <p className="font-serif text-xs md:text-sm text-[#5d5f5f] leading-relaxed mb-6 text-justify">
                  {stageData[activeStage].intro}
                </p>

                {/* Sub-stages Tabs */}
                <h4 className="font-sans font-bold text-xs text-[#663300] uppercase tracking-wider mb-3">
                  Nấc thang nhận thức:
                </h4>
                
                <div className="flex flex-col gap-2">
                  {stageData[activeStage].substages.map((sub, i) => {
                    const isSelected = activeSubStage === i;
                    const isRead = readSubstages.includes(`${activeStage}-${i}`);
                    return (
                      <div
                        key={i}
                        onClick={() => handleSubstageSelect(activeStage, i)}
                        className={`p-3.5 border rounded-sm cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? "border-[#663300] bg-[#E8D5C4]/20 shadow-xs"
                            : "border-[#C9B5A3]/60 bg-white hover:bg-slate-50"
                        }`}
                      >
                        <div>
                          <strong className={`font-sans text-xs uppercase block ${isSelected ? "text-[#663300]" : "text-[#1a1c1c]"}`}>
                            Nấc {i + 1}: {sub.name}
                          </strong>
                          <span className="font-serif text-[11px] text-[#5d5f5f] line-clamp-1 mt-0.5">{sub.concept}</span>
                        </div>
                        {isRead && <CheckCircle className="w-3.5 h-3.5 text-[#663300] flex-shrink-0 ml-2" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress and score display */}
              <div className="mt-6 pt-4 border-t border-dashed border-[#C9B5A3] flex items-center justify-between text-xs">
                <span className="font-serif text-[#5d5f5f]">
                  Tiến độ: {readSubstages.length}/8 nấc thang nhận thức
                </span>
                {pointsAwarded ? (
                  <span className="font-sans font-bold text-green-700 flex items-center gap-1 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    +15 Điểm chân lý đã nhận!
                  </span>
                ) : (
                  <span className="font-sans text-[10px] text-[#663300] bg-[#E8D5C4] px-2 py-0.5 rounded-sm font-semibold">
                    Đọc đủ 8 nấc để nhận +15 điểm
                  </span>
                )}
              </div>
            </div>

            {/* Right Detailed Visualizer Box (Span 6) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              
              {/* Concept & Example text */}
              <div className="mb-6">
                <span className="text-[10px] font-sans font-bold text-[#663300] tracking-wider uppercase bg-[#E8D5C4] px-2 py-0.5 rounded-sm">
                  Chi tiết nấc thang
                </span>
                
                <h4 className="font-sans font-bold text-base text-[#1a1c1c] mt-3 mb-2 uppercase">
                  {activeSubstageData.name}
                </h4>
                
                <p className="font-serif text-xs md:text-sm text-[#5d5f5f] leading-relaxed text-justify mb-4">
                  {activeSubstageData.concept}
                </p>

                <div className="bg-white border border-[#C9B5A3]/80 p-4 rounded-sm border-l-4 border-[#663300]">
                  <span className="font-sans font-bold text-[10px] text-[#663300] block mb-1 uppercase tracking-wider">
                    Ví dụ thực tế:
                  </span>
                  <p className="font-serif text-xs text-[#594043] leading-relaxed text-justify whitespace-pre-line">
                    {activeSubstageData.example}
                  </p>
                </div>
              </div>

              {/* Dynamic Interactive SVG Canvas */}
              <div className="bg-white border border-[#C9B5A3] p-4 rounded-sm flex flex-col items-center justify-center min-h-[200px] shadow-inner relative overflow-hidden">
                <span className="absolute left-2.5 top-2.5 font-mono text-[9px] text-[#5d5f5f] uppercase tracking-wide flex items-center gap-1 select-none">
                  <Info className="w-3 h-3 text-[#663300]" />
                  Trực quan hóa nhận thức
                </span>

                {/* Case 1: Lemon sensory details */}
                {activeSubstageData.visualType === "lemon_sensation" && (
                  <div className="flex flex-col md:flex-row items-center gap-6 w-full px-2">
                    {/* Interactive Lemon SVG */}
                    <div className="relative w-28 h-20 bg-yellow-300 rounded-full flex items-center justify-center border border-yellow-400 shadow-md">
                      {/* Lemon end peaks */}
                      <div className="absolute -left-1.5 w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
                      <div className="absolute -right-1.5 w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
                      <span className="font-sans font-extrabold text-[10px] text-[#663300] select-none">QUẢ CHANH</span>
                    </div>

                    {/* Sensor Nodes to interact */}
                    <div className="flex-1 flex flex-col gap-2 w-full text-[11px] font-sans">
                      <button 
                        onClick={() => setLemonNode("eye")}
                        className={`text-left p-1.5 border transition-all ${lemonNode === "eye" ? "bg-[#663300] text-white border-[#663300]" : "bg-[#fcfcfc] border-[#C9B5A3] hover:bg-[#E8D5C4]/20 text-[#1a1c1c] font-medium"}`}
                      >
                        👁️ Mắt nhìn: Màu xanh lá
                      </button>
                      <button 
                        onClick={() => setLemonNode("hand")}
                        className={`text-left p-1.5 border transition-all ${lemonNode === "hand" ? "bg-[#663300] text-white border-[#663300]" : "bg-[#fcfcfc] border-[#C9B5A3] hover:bg-[#E8D5C4]/20 text-[#1a1c1c] font-medium"}`}
                      >
                        ✋ Tay sờ: Hơi sần sùi nhẹ
                      </button>
                      <button 
                        onClick={() => setLemonNode("tongue")}
                        className={`text-left p-1.5 border transition-all ${lemonNode === "tongue" ? "bg-[#663300] text-white border-[#663300]" : "bg-[#fcfcfc] border-[#C9B5A3] hover:bg-[#E8D5C4]/20 text-[#1a1c1c] font-medium"}`}
                      >
                        👅 Lưỡi nếm: Vị chua rát
                      </button>
                      
                      <div className="mt-1 text-[10px] font-serif text-[#5d5f5f] leading-normal italic min-h-[30px] border-t border-dashed border-[#C9B5A3] pt-1">
                        {lemonNode === "none" && "Nhấp các nút trên để mô phỏng tiếp nhận cảm giác."}
                        {lemonNode === "eye" && "👉 Đây là cảm giác về thị giác (màu sắc)."}
                        {lemonNode === "hand" && "👉 Đây là cảm giác về xúc giác (bề mặt cấu tạo)."}
                        {lemonNode === "tongue" && "👉 Đây là cảm giác về vị giác (chất hóa học)."}
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 2: Apple perception details */}
                {activeSubstageData.visualType === "apple_perception" && (
                  <div className="flex flex-col items-center w-full py-2">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-sans text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded-sm">Đỏ</span>
                      <span className="text-white/60 text-xs">+</span>
                      <span className="font-sans text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-sm">Thơm</span>
                      <span className="text-white/60 text-xs">+</span>
                      <span className="font-sans text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded-sm">Ngọt</span>
                      <span className="text-white/60 text-xs">+</span>
                      <span className="font-sans text-[10px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded-sm">Tròn</span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                      <ArrowRight className="w-4 h-4 text-[#663300] transform rotate-90 animate-bounce" />
                      <div className="bg-[#F0E8DF] border border-red-200 px-6 py-3 rounded-md flex items-center gap-3 shadow-xs">
                        <span className="text-3xl">🍎</span>
                        <div className="text-left">
                          <strong className="font-sans text-xs text-[#663300] block uppercase">Tri giác hoàn chỉnh</strong>
                          <span className="font-serif text-[11px] text-[#5d5f5f]">"ĐÂY LÀ QUẢ TÁO"</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 3: Lemon representation */}
                {activeSubstageData.visualType === "lemon_representation" && (
                  <div className="flex flex-col items-center w-full py-2">
                    <div className="flex items-center gap-8 mb-2">
                      <div className="flex flex-col items-center opacity-65">
                        <span className="text-2xl">🧊</span>
                        <span className="font-sans text-[9px] text-[#5d5f5f] mt-1">Chanh ở trong tủ lạnh</span>
                      </div>
                      
                      <div className="w-12 border-t-2 border-dashed border-[#C9B5A3]"></div>

                      <div className="relative bg-[#E8D5C4]/10 border border-[#C9B5A3] p-4 rounded-sm flex flex-col items-center">
                        <span className="text-2xl">💭</span>
                        <strong className="font-sans text-[10px] text-[#663300] mt-1 block uppercase">Biểu tượng trí nhớ</strong>
                        <span className="font-serif text-[10px] text-[#5d5f5f] text-center mt-1">"Vẫn nhớ rõ quả chanh màu xanh vị chua"</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 4: Beverage concept details */}
                {activeSubstageData.visualType === "beverage_concept" && (
                  <div className="flex flex-col items-center w-full py-1.5 text-center">
                    <div className="flex gap-4 mb-3">
                      <span className="text-2xl filter drop-shadow-xs" title="Trà sữa">🧋</span>
                      <span className="text-2xl filter drop-shadow-xs" title="Sinh tố">🥤</span>
                      <span className="text-2xl filter drop-shadow-xs" title="Cà phê">☕</span>
                      <span className="text-2xl filter drop-shadow-xs" title="Nước ép">🍹</span>
                    </div>

                    <div className="bg-[#E8D5C4]/10 border border-[#C9B5A3] p-4 rounded-sm max-w-sm">
                      <strong className="font-sans text-xs text-[#663300] block uppercase mb-1">Khái niệm: Đồ uống giải khát</strong>
                      <p className="font-serif text-[11px] text-[#5d5f5f] leading-relaxed">
                        Khái quát bản chất: "Là chất lỏng được tạo ra nhằm mục đích phục vụ nhu cầu bù nước hoặc thỏa mãn vị giác của con người."
                      </p>
                    </div>
                  </div>
                )}

                {/* Case 5: Milktea judgment */}
                {activeSubstageData.visualType === "milktea_judgment" && (
                  <div className="flex flex-col items-center w-full py-3">
                    <div className="flex items-center gap-3 bg-red-50 border border-red-100 p-4 rounded-md shadow-xs max-w-sm">
                      <span className="text-3xl">🧋</span>
                      <span className="text-xl text-[#663300] font-sans font-bold">➡️</span>
                      <span className="text-3xl">⚖️</span>
                      <div className="text-left flex-1">
                        <strong className="font-sans text-xs text-[#663300] block uppercase">Phán đoán biện chứng</strong>
                        <p className="font-serif text-[11px] text-red-900 mt-1 font-semibold leading-relaxed">
                          "Uống trà sữa liên tục mỗi ngày sẽ gây ra nguy cơ béo phì." (Khẳng định là ĐÚNG)
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 6: Weightloss inference */}
                {activeSubstageData.visualType === "weightloss_inference" && (
                  <div className="flex flex-col items-center w-full py-1 text-left">
                    <div className="space-y-2 text-[10px] font-sans max-w-xs w-full">
                      <div className="bg-slate-50 border border-slate-200 p-2 rounded-sm">
                        <strong className="text-[#663300] uppercase block">Phán đoán 1 (Tiền đề):</strong>
                        Trà sữa chứa lượng đường và calo rất cao.
                      </div>
                      <div className="bg-slate-50 border border-slate-200 p-2 rounded-sm">
                        <strong className="text-[#663300] uppercase block">Phán đoán 2 (Tiền đề):</strong>
                        Nạp dư calo và đường vào cơ thể chắc chắn sẽ tăng cân.
                      </div>
                      
                      <div className="flex justify-center my-0.5">
                        <ArrowRight className="w-4 h-4 text-[#663300] transform rotate-90" />
                      </div>
                      
                      <div className="bg-[#F0E8DF] border border-red-200 p-2 rounded-sm font-bold">
                        <strong className="text-[#663300] uppercase block">Kết luận (Tri thức mới):</strong>
                        Nếu muốn giảm cân, bắt buộc phải cắt giảm trà sữa.
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 7: Diet application */}
                {activeSubstageData.visualType === "diet_application" && (
                  <div className="flex items-center gap-4 py-2">
                    <span className="text-3xl animate-pulse">🏃‍♀️</span>
                    <div className="bg-green-50 border border-green-200 p-3 rounded-md max-w-xs">
                      <strong className="font-sans text-xs text-green-700 block uppercase">Hành động thực tiễn</strong>
                      <p className="font-serif text-[11px] text-green-950 mt-1 leading-normal">
                        Cắt giảm uống trà sữa trong chế độ ăn hàng ngày, chăm tập thể dục.
                      </p>
                    </div>
                  </div>
                )}

                {/* Case 8: Weight verification */}
                {activeSubstageData.visualType === "weight_verification" && (
                  <div className="flex flex-col items-center py-2 text-center">
                    <div className="bg-[#F0E8DF] border border-red-200 p-4 rounded-md max-w-xs shadow-xs">
                      <span className="text-3xl">📉 ⚖️</span>
                      <strong className="font-sans text-xs text-[#663300] block uppercase mt-2">Kết quả thực tiễn</strong>
                      <p className="font-serif text-[11.5px] text-red-950 mt-1 font-bold">
                        Cân nặng giảm rõ rệt, cơ thể săn chắc hơn ➡️ Xác nhận lý luận trước đó là Chân lý khách quan!
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
