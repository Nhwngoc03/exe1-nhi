import React, { useState } from "react";
import { Eye, BrainCircuit, RotateCcw, AlertCircle, HelpCircle } from "lucide-react";

export default function CognitiveProcess() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stageDetails = [
    {
      title: "Nhận thức cảm tính",
      subtitle: "Giai đoạn thấp",
      icon: Eye,
      summary: "Cảm giác, tri giác và biểu tượng. Tiếp xúc trực tiếp với bề ngoài của sự vật.",
      description: "Nhận thức bắt sinh động từ các giác quan tiếp xúc vật lý trực tiếp với khách thể bên ngoài. Con người ghi lại hình dáng, màu sắc, âm thanh bên ngoài của đối tượng mà chưa đi sâu vào lý thuyết vận hành bên trong.",
      forms: [
        { name: "Cảm giác (Sensation)", desc: "Phản ánh từng thuộc tính riêng lẻ của sự vật (nóng, lạnh, đỏ, ngọt)." },
        { name: "Tri giác (Perception)", desc: "Tổng hợp các cảm giác để cho ra hình ảnh trọn vẹn về sự vật." },
        { name: "Biểu tượng (Representation)", desc: "Hình ảnh sự vật được tái hiện lại trong trí nhớ khi không còn trực tiếp quan sát." }
      ],
      interactiveDemo: {
        scenario: "Quan sát ngọn lửa",
        experience: "Mắt thấy đỏ rực, tai nghe tiếng nổ lép bép, tay cảm thấy sức nóng bỏng tay (Cảm tính thô sơ)."
      }
    },
    {
      title: "Nhận thức lý tính",
      subtitle: "Giai đoạn cao",
      icon: BrainCircuit,
      summary: "Khái niệm, phán đoán và suy luận. Đi sâu vào bản chất và quy luật bên trong.",
      description: "Thực hiện phép trừu tượng hóa, khái quát hóa để trích xuất ra các quy luật, thuộc tính bản chất sâu xa nhất mà các giác quan thông thường hoàn toàn bất lực không nhìn thấy được.",
      forms: [
        { name: "Khái niệm (Concept)", desc: "Phản ánh những thuộc tính chung, bản chất và quy luật của nhóm sự vật." },
        { name: "Phán đoán (Judgment)", desc: "Liên kết các khái niệm để khẳng định hoặc phủ nhận một thuộc tính nào đó." },
        { name: "Suy luận (Inference)", desc: "Liên kết các phán đoán cũ để rút ra tri thức phán đoán mới hoàn toàn." }
      ],
      interactiveDemo: {
        scenario: "Lập công thức hóa học",
        experience: "Hiểu rằng lửa là phản ứng ô-xy hóa tỏa nhiệt mạnh, viết phương trình C + O₂ → CO₂ + ΔH (Lý luận trừu tượng)."
      }
    },
    {
      title: "Trở về Thực tiễn",
      subtitle: "Vòng lặp vĩnh cửu",
      icon: RotateCcw,
      summary: "Kiểm chứng lý luận thông qua hành động thực tế để xác định tính đúng đắn.",
      description: "Trở lại cải biến thực tiễn đời sống. Tri thức lý thuyết dù cao siêu thế nào cũng chỉ là 'tiền giả định' nếu không được ném vào lửa thực tế kiểm định. Thước đo cao nhất của chân lý nằm ở kết quả thực hiện xã hội học.",
      forms: [
        { name: "Ứng dụng công nghệ", desc: "Đưa công thức lý thuyết chế tạo động cơ nhiệt áp dụng vào công nghiệp." },
        { name: "Khảo sát thực hư", desc: "Thử sai, kiểm định thực nghiệm hàng loạt trong môi trường xã hội thực tế." },
        { name: "Hoàn thiện tri thức", desc: "Cách mạng hóa tư duy, sinh ra chân lý mới hoặc đào thải tri thức lỗi thời." }
      ],
      interactiveDemo: {
        scenario: "Vận hành động cơ hơi nước",
        experience: "Xây dựng lò hơi thực tế, tạo năng lượng kéo tàu hỏa, điều chỉnh công thức nếu bị quá nhiệt (Kiểm chứng thực tiễn)."
      }
    }
  ];

  const StageIcon = stageDetails[activeStage].icon;

  return (
    <section className="py-16 bg-white px-6 md:px-8 border-b border-[#e1bec0]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-[#6f0022] font-sans font-bold text-xs tracking-widest uppercase">
            Tiên trình Luận thuyết
          </span>
          <h2 className="text-3xl font-extrabold text-[#1a1c1c] font-sans mt-2 tracking-tight">
            Hành trình của Nhận thức
          </h2>
          <p className="font-serif text-sm text-[#5d5f5f] mt-3">
            Biện chứng duy vật chỉ rõ con đường từ trực quan sinh động đến tư duy trừu tượng
          </p>
        </div>

        {/* Dynamic Timeline Wrapper */}
        <div className="relative mb-12">
          {/* Horizontal line (shows on desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-0 w-full h-0.5 bg-[#e1bec0] -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {stageDetails.map((stage, idx) => {
              const IconComp = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`bg-white p-6 border transition-all duration-300 text-center cursor-pointer select-none group ${
                    isSelected 
                      ? "border-[#6f0022] shadow-md ring-2 ring-[#ffd9dc]/50 transform -translate-y-1" 
                      : "border-[#e1bec0] hover:border-[#6f0022]/60 hover:shadow-sm"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-105 ${
                    isSelected ? "bg-[#6f0022] text-white" : "bg-[#f3f3f3] text-[#6f0022]"
                  }`}>
                    <IconComp className="w-8 h-8" />
                  </div>

                  <span className="text-[10px] font-sans font-bold text-[#6f0022] tracking-wider uppercase bg-[#ffd9dc] px-2 py-0.5 rounded-sm">
                    {stage.subtitle}
                  </span>

                  <h3 className="font-sans font-bold text-lg text-[#1a1c1c] mt-3 mb-2">
                    {stage.title}
                  </h3>

                  <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed">
                    {stage.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation Showcase of Selected Stage */}
        <div className="bg-[#f9f9f9] border border-[#e1bec0] rounded-sm p-6 lg:p-8 animate-fade-in text-left">
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-7/12 border-b lg:border-b-0 lg:border-r border-[#e1bec0] pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#ffd9dc] text-[#6f0022] rounded-sm">
                  <StageIcon className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xl text-[#6f0022]">
                    Khảo cứu: {stageDetails[activeStage].title}
                  </h4>
                  <span className="text-xs text-[#5d5f5f] font-mono uppercase tracking-widest block">
                    Khái quát qua lăng kính Lý luận nhận thức Mác-Lênin
                  </span>
                </div>
              </div>

              <p className="font-serif text-sm text-[#5d5f5f] leading-relaxed text-justify mb-6">
                {stageDetails[activeStage].description}
              </p>

              <h5 className="font-sans font-semibold text-xs text-[#6f0022] uppercase tracking-wide mb-3">
                Các hình thức biểu hiện cốt lõi:
              </h5>
              <div className="space-y-4">
                {stageDetails[activeStage].forms.map((form, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-xs">
                    <span className="w-5 h-5 flex items-center justify-center bg-[#6f0022] text-white text-[10px] font-mono rounded-full flex-shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <strong className="font-sans text-[#1a1c1c] block mb-0.5">{form.name}</strong>
                      <span className="font-serif text-[#5d5f5f] leading-relaxed">{form.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Demo simulation box inside stage */}
            <div className="lg:w-5/12 flex flex-col justify-between">
              <div className="p-4 bg-white border border-[#e1bec0] rounded-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-[#6f0022]" />
                    <span className="font-sans font-bold text-xs text-[#1a1c1c] uppercase tracking-wide">
                      Mô phỏng Nhận thức: {stageDetails[activeStage].interactiveDemo.scenario}
                    </span>
                  </div>
                  
                  <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-sm italic font-serif text-xs text-amber-900 leading-relaxed text-justify">
                    {stageDetails[activeStage].interactiveDemo.experience}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e1bec0] border-dashed">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#6f0022]">
                    <HelpCircle className="w-4 h-4 animate-bounce" />
                    <span>Ý NGHĨA BIỆN CHỨNG</span>
                  </div>
                  <p className="font-serif text-xs text-[#5d5f5f] mt-1.5 leading-relaxed text-justify">
                    {activeStage === 0 && "Nhận thức cảm tính tuy trực quan sinh động nhưng còn hời hợt, dễ bị đánh lừa bởi hiện tượng giả tạo (như ngọn cây gãy trong nước). Ta cần vươn lên Lý tính."}
                    {activeStage === 1 && "Lý tính tuy thấu hiểu bản chất quy luật nhưng nếu cô lập bản thân xa rời quần chúng nhân dân sẽ biến thành giáo điều rỗng túi. Ta phải quay về Thực tiễn."}
                    {activeStage === 2 && "Nhận thức khởi phát từ thực tiễn và quay đầu phục vụ thực tiễn. Đây là chu kỳ tự hoàn thiện vô hạn cải cách thế giới quan tiến bộ."}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
