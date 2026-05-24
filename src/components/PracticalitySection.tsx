import React, { useState } from "react";
import { Factory, Users, Beaker, HelpCircle, Check, ArrowRight } from "lucide-react";

interface PracticalitySectionProps {
  onAddPoints: (pts: number) => void;
}

export default function PracticalitySection({ onAddPoints }: PracticalitySectionProps) {
  const [activeComponent, setActiveComponent] = useState<"production" | "political" | "scientific">("production");

  const componentData = {
    production: {
      title: "Sản xuất vật chất",
      description: "Hình thức hoạt động cơ bản nhất, quyết định sự sinh tồn và phát triển vững bền của toàn bộ xã hội loài người.",
      detail: "Con người bắt buộc phải ăn, mặc, ở trước khi có thể làm chính trị, khoa học, triết học hay tôn giáo. Do đó, hoạt động cải tạo giới tự nhiên để tạo ra tư liệu sinh hoạt quyết định gián tiếp hành vi tư duy lý tưởng.",
      example: "Công nhân vận hành dây chuyền tự động hóa, nông dân nuôi trồng lương thực xuất khẩu."
    },
    political: {
      title: "Hoạt động Chính trị - Xã hội",
      description: "Cải tạo các quan hệ xã hội một cách tích cực, thúc đẩy công bằng, tự do và sự tiến bộ văn minh của toàn cộng đồng.",
      detail: "Đây là hoạt động điều chỉnh quyền lực, bình ổn mâu thuẫn giai cấp, hoàn thiện bộ máy quản trị đất nước thông qua hệ thống pháp luật, các phong trào xã hội tiến bộ dũng cảm.",
      example: "Bầu cử đại biểu quốc hội, đấu tranh vì bình quyền và tự do lao động."
    },
    scientific: {
      title: "Thực nghiệm Khoa học",
      description: "Kiểm chứng các mô hình lý thuyết khoa học trong điều kiện nhân tạo cực kỳ nghiêm ngặt nhằm khám phá quy luật tự nhiên xã hội.",
      detail: "Hình thức đặc biệt xuất hiện muộn hơn, phục vụ nghiên cứu chế tạo. Nó cho phép con người cô lập các tham số khách quan, tăng tốc tiến trình mô phỏng lý thuyết để ứng dụng vào công nghệ sản xuất hiện đại.",
      example: "Thử nghiệm vắc-xin bảo vệ cộng đồng, mô phỏng phản ứng lò hạt nhân."
    }
  };

  return (
    <section className="py-16 bg-[#f9f9f9] px-6 md:px-8 border-b border-[#e1bec0]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Explanatory Panel (Spans 6 cols) */}
          <div className="md:col-span-6">
            <h2 className="text-3xl font-extrabold text-[#6f0022] font-sans mb-8 leading-tight tracking-tight">
              Thực tiễn: Nền tảng của Nhận thức
            </h2>
            
            <div className="space-y-6">
              
              {/* Product Card */}
              <div 
                onClick={() => setActiveComponent("production")}
                className={`flex gap-4 p-4 cursor-pointer transition-all border ${
                  activeComponent === "production" 
                    ? "border-[#6f0022] bg-[#ffd9dc]/20 shadow-sm" 
                    : "border-transparent hover:bg-[#eeeeee]/50"
                }`}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[#ffd9dc] text-[#6f0022] flex items-center justify-center rounded-sm">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-1 flex items-center gap-2">
                    {componentData.production.title}
                    {activeComponent === "production" && <Check className="w-4 h-4 text-[#6f0022]" />}
                  </h4>
                  <p className="font-serif text-sm text-[#5d5f5f]">
                    {componentData.production.description}
                  </p>
                </div>
              </div>

              {/* Political Card */}
              <div 
                onClick={() => setActiveComponent("political")}
                className={`flex gap-4 p-4 cursor-pointer transition-all border ${
                  activeComponent === "political" 
                    ? "border-[#6f0022] bg-[#ffd9dc]/20 shadow-sm" 
                    : "border-transparent hover:bg-[#eeeeee]/50"
                }`}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[#ffd9dc] text-[#6f0022] flex items-center justify-center rounded-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-1 flex items-center gap-2">
                    {componentData.political.title}
                    {activeComponent === "political" && <Check className="w-4 h-4 text-[#6f0022]" />}
                  </h4>
                  <p className="font-serif text-sm text-[#5d5f5f]">
                    {componentData.political.description}
                  </p>
                </div>
              </div>

              {/* Science Card */}
              <div 
                onClick={() => setActiveComponent("scientific")}
                className={`flex gap-4 p-4 cursor-pointer transition-all border ${
                  activeComponent === "scientific" 
                    ? "border-[#6f0022] bg-[#ffd9dc]/20 shadow-sm" 
                    : "border-transparent hover:bg-[#eeeeee]/50"
                }`}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[#ffd9dc] text-[#6f0022] flex items-center justify-center rounded-sm">
                  <Beaker className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-1 flex items-center gap-2">
                    {componentData.scientific.title}
                    {activeComponent === "scientific" && <Check className="w-4 h-4 text-[#6f0022]" />}
                  </h4>
                  <p className="font-serif text-sm text-[#5d5f5f]">
                    {componentData.scientific.description}
                  </p>
                </div>
              </div>

            </div>

            {/* Sub-explanation drawer based on selection */}
            <div className="mt-8 p-5 bg-white border border-[#e1bec0] rounded-sm shadow-sm animate-fade-in text-left">
              <span className="text-[10px] font-sans font-bold text-[#6f0022] tracking-wider uppercase bg-[#ffd9dc] px-2 py-0.5 rounded-sm">
                Tìm hiểu sâu
              </span>
              <p className="font-serif text-sm text-[#5d5f5f] leading-relaxed mt-3">
                {componentData[activeComponent].detail}
              </p>
              <div className="mt-3 text-xs font-mono text-[#6f0022] font-semibold flex items-center gap-1.5 border-t border-dashed border-[#e1bec0] pt-2.5">
                <span>Ví dụ thực tiễn:</span>
                <span className="text-[#1a1c1c] font-sans font-medium italic">{componentData[activeComponent].example}</span>
              </div>
            </div>

          </div>

          {/* Right Image Display & Quote (Spans 6 cols) */}
          <div className="md:col-span-6 relative">
            <div className="relative overflow-hidden border border-[#e1bec0] rounded-sm group">
              <img
                alt="Industrial Production"
                className="w-full h-[380px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsK0hEHRiD2TWjkqfVaLKclk-iUiT7VfBxQMhNUWDskeFICUAaTHhHd-0bB91dai92zn8CtGl6JjANYn6lsTRnIlzHtdiLkemTPV_N7v2F1PQDh2Nun4c_6cxeVIdbJIUkwLRyvIpPrPDWIe9RiGTHBf6SL4jnpJ2ipxL66Juw07REQwh8uJoJUqklnWhh3JJsk6U4R1G71HJWA3j5tBguzqVujvShW63hX67wOYKet8FJMaklLpq9l_p_Y2mK3-kUq_Xs7QZIlZw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6f0022]/45 via-transparent to-transparent"></div>
              
              <div className="absolute -bottom-1 -left-1 bg-[#6f0022] text-white p-6 max-w-[280px] select-none border-r-4 border-t-4 border-white shadow-lg">
                <p className="text-sm font-serif font-bold tracking-normal italic leading-relaxed text-justify">
                  "Thực tiễn là tiêu chuẩn khách quan duy nhất của chân lý."
                </p>
                <div className="w-8 h-0.5 bg-white mt-3"></div>
                <p className="text-[9px] font-mono tracking-widest uppercase text-[#ffb2ba] mt-1.5">
                  V.I. LÊ-NIN
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
