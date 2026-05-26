import React, { useState, useEffect } from "react";
import { Play, RotateCcw, AlertTriangle, ShieldCheck } from "lucide-react";

interface CaseStudyProps {
  onUnlockBadge: (badgeId: string) => void;
  onAddPoints: (pts: number) => void;
  isBadgeUnlocked: (badgeId: string) => boolean;
}

export default function CaseStudy({ onUnlockBadge, onAddPoints, isBadgeUnlocked }: CaseStudyProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0); // 0 to 100% falling down
  const [physicsTheory, setPhysicsTheory] = useState<"aristotle" | "galileo">("aristotle");
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            setComplete(true);
            // Unlock badge
            if (!isBadgeUnlocked("badge-2")) {
              onUnlockBadge("badge-2");
              onAddPoints(15);
            }
            return 100;
          }
          return prev + 4; // fall velocity
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const startSimulation = (theory: "aristotle" | "galileo") => {
    setPhysicsTheory(theory);
    setProgress(0);
    setComplete(false);
    setIsPlaying(true);
  };

  const resetSim = () => {
    setProgress(0);
    setComplete(false);
    setIsPlaying(false);
  };

  return (
    <section className="py-16 px-6 md:px-8 bg-[#E8DED3] border-b border-[#C9B5A3]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row bg-white border border-[#C9B5A3] rounded-sm overflow-hidden shadow-sm">
          
          {/* Left Visual and interactive Pisa Tower simulation */}
          <div className="lg:w-5/12 bg-[#1a1c1c] text-white p-6 relative flex flex-col justify-between min-h-[420px]">
            
            {/* Background absolute nebula image */}
            <img
              alt="Starry Space Galileo"
              className="absolute inset-0 w-full h-full object-cover opacity-25 select-none pointer-events-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYFTLW8EDLxJGI3DOMljQTvawdYhDJgrB6uhfWx2J_UdLEr3WfJ9dYVJFCso5BHs9km6-lPTYTkkUJPDtCVlF9smcdhK-vuzsD_nEgr4m9Umor4QAshDQk2dBJdImqMiyszdgULCpo2ew3HoF0XLIdi5jQCXic9uW8-opFLdXZ0DHKvN9x6XdDO-kMvUhYMAOX7xRPgwCyCOV1a73xR7uH8B4SPnStYLOX86R19WhBAcZoUHbHfeLV88wq96l-Hn_66Z-yNw2pypI"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative z-10">
              <span className="text-[10px] font-sans font-extrabold text-[#E8D5C4] tracking-widest uppercase bg-[#663300] px-2 py-1 rounded-sm">
                Thực nghiệm Trực quan
              </span>
              <h4 className="font-sans font-bold text-base mt-3 text-white">
                Mô phỏng Tháp nghếng Pisa
              </h4>
              <p className="font-serif text-xs text-[#A99B8F] mt-1">
                Kiểm chứng sự rơi tự do lý thuyết đối đầu trực diện thực tế khách quan!
              </p>
            </div>

            {/* Simulated Arena */}
            <div className="relative z-10 my-6 h-52 bg-black/40 border border-[#C9B5A3]/20 rounded-sm flex">
              
              {/* Vertical ruler indicator */}
              <div className="w-10 border-r border-[#C9B5A3]/15 flex flex-col justify-between items-center text-[10px] font-mono py-2 text-[#8B7355]">
                <span>50m</span>
                <span>25m</span>
                <span>0m</span>
              </div>

              {/* Tower Graphic / Falling Balls Arena */}
              <div className="flex-1 relative overflow-hidden">
                {/* Simplified Tower line on the left */}
                <div className="absolute top-0 left-4 w-4 h-full bg-[#E8DED3]/10 border-r border-dashed border-white/20"></div>
                
                {/* Aristotle's falling physics (Gold hits first, silver falls slow) */}
                {physicsTheory === "aristotle" ? (
                  <>
                    {/* Gold Ball (10kg) */}
                    <div 
                      style={{ top: `${(progress / 100) * 165}px` }}
                      className="absolute left-10 w-6 h-6 rounded-full bg-amber-400 border border-white flex items-center justify-center text-[8px] font-mono text-black font-extrabold transition-all duration-75 shadow-md shadow-amber-400/20"
                    >
                      10kg
                    </div>
                    {/* Silver Ball (1kg) - falls slower under Aristotle's mindset */}
                    <div 
                      style={{ top: `${Math.min(165, (progress / 120) * 165)}px` }}
                      className="absolute left-24 w-4 h-4 rounded-full bg-slate-300 border border-white flex items-center justify-center text-[6px] font-mono text-black font-extrabold transition-all duration-75 shadow-md"
                    >
                      1kg
                    </div>
                  </>
                ) : (
                  <>
                    {/* Galileo's falling physics - both fall exactly at the same rate */}
                    {/* Gold Ball (10kg) */}
                    <div 
                      style={{ top: `${(progress / 100) * 165}px` }}
                      className="absolute left-10 w-6 h-6 rounded-full bg-amber-400 border border-white flex items-center justify-center text-[8px] font-mono text-black font-extrabold transition-all duration-75 shadow-md shadow-amber-400/20"
                    >
                      10kg
                    </div>
                    {/* Silver Ball (1kg) */}
                    <div 
                      style={{ top: `${(progress / 100) * 165}px` }}
                      className="absolute left-24 w-4 h-4 rounded-full bg-slate-300 border border-white flex items-center justify-center text-[6px] font-mono text-black font-extrabold transition-all duration-75 shadow-md"
                    >
                      1kg
                    </div>
                  </>
                )}

                {/* Ground surface sensor platform */}
                <div className="absolute bottom-0 w-full h-4 bg-emerald-950/40 border-t border-emerald-500/20 flex items-center justify-center text-[9px] font-mono font-bold text-emerald-400 tracking-wider">
                  {complete ? (
                    physicsTheory === "galileo" ? (
                      <span className="text-emerald-400 animate-pulse font-sans">⚡ CHẠM ĐẤT CÙNG LÚC! CHÂN LÝ.</span>
                    ) : (
                      <span className="text-yellow-400 font-sans">⚠️ THIẾU KIỂM CHỨNG TRỰC QUAN</span>
                    )
                  ) : (
                    <span>CẢM BIẾN TIẾP ĐẮT CHỜ ĐỢI...</span>
                  )}
                </div>
              </div>
            </div>

            {/* Simulation Controllers */}
            <div className="relative z-10 flex flex-wrap gap-2">
              <button
                disabled={isPlaying}
                onClick={() => startSimulation("aristotle")}
                className={`flex-1 px-3 py-2 text-[11px] font-sans font-bold border transition-colors ${
                  physicsTheory === "aristotle" && complete
                    ? "bg-amber-600 text-white border-amber-500"
                    : "bg-black/40 hover:bg-black/60 text-[#A99B8F] border-[#C9B5A3]/20"
                }`}
              >
                Aristotle (Cảm tính)
              </button>
              <button
                disabled={isPlaying}
                onClick={() => startSimulation("galileo")}
                className={`flex-1 px-3 py-2 text-[11px] font-sans font-bold border transition-colors ${
                  physicsTheory === "galileo" && complete
                    ? "bg-[#663300] text-white border-[#663300]"
                    : "bg-black/40 hover:bg-[#663300]/40 text-white border-[#C9B5A3]/20"
                }`}
              >
                Galileo (Thực tiễn)
              </button>
              {(complete || progress > 0) && (
                <button
                  onClick={resetSim}
                  className="px-2.5 py-2 bg-[#E8DED3] text-[#1a1c1c] hover:bg-[#E8D5C4] rounded-sm transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Right Case Study Reading Details (Spans 7 cols) */}
          <div className="lg:w-7/12 p-8 lg:p-12 text-left">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[#663300] font-semibold text-xs uppercase tracking-widest block font-sans">
                  Case Study Học thuật
                </span>
                <h2 className="text-2xl font-extrabold text-[#1a1c1c] font-sans mt-1">
                  Thí nghiệm Tháp nghiêng Pisa của Galileo
                </h2>
              </div>
              
              {isBadgeUnlocked("badge-2") && (
                <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-2 py-1 rounded-sm text-[10px] font-sans font-bold animate-pulse">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ĐÃ VƯỢT QUA</span>
                </div>
              )}
            </div>

            <div className="prose max-w-none text-sm text-[#8B7355] font-serif leading-relaxed text-justify space-y-4">
              <p>
                Trước Galileo Galilei, trong suốt gần hai nghìn năm, giới học giả Tây Âu tôn thờ mù quáng vào lập thuyết “nhận thức cảm tính” của triết gia tối cao cổ đại Aristotle: 
                <strong className="text-black"> Vật nặng hơn sẽ rơi tự do nhanh hơn vật nhẹ hơn.</strong>
              </p>
              
              <p>
                Đây là một sai lệch nhận thức nghiêm trọng kéo dài hàng thế kỷ chỉ vì người ta tin lầm vào trực giác thô sơ và tôn sùng giáo điều bề nổi, 
                <span className="text-[#663300] font-semibold"> hoàn toàn thiếu đi hoạt động thực nghiệm thực tiễn khoa học khách quan để kiểm chứng chân lý.</span>
              </p>

              <p>
                Vào cuối thế kỷ 16, nhà khoa học trẻ tuổi Galileo đã thực hiện một bước ngoặt cách mạng: 
                <strong className="text-black"> Đưa giả ý chí vào thực nghiệm cụ thể.</strong> Ông đứng trước đám đông hâm mộ tại Tháp nghiêng Pisa thả rơi đồng thời hai quả cầu có khối lượng chênh lệch hàng gấp chục lần. Kết quả khách quan giáng một đòn chí mạng vào lập luận phong kiến cũ kỹ: Hai khối sắt chạm đất cùng lúc!
              </p>

              <div className="border-l-4 border-[#663300] pl-4 py-2 italic font-serif text-sm text-[#1a1c1c] bg-[#E8D5C4]/10 mt-6 mb-6">
                "Trong khoa học, uy tín học thức của hàng nghìn giáo sư giáo chủ không đáng giá bằng một thực nghiệm khách quan chứng minh rõ ràng một lập luận nhỏ bé vững vàng."
              </div>

              <div className="p-4 bg-[#E8D5C4]/40 border-l-4 border-[#8B5A2B] font-sans text-xs">
                <strong className="text-[#663300] font-bold block mb-1">
                  Bài học rút ra sâu sắc:
                </strong>
                Trong lý luận nhận thức Mác - Lênin, thực tiễn được khẳng định là tiêu chuẩn chân lý khách quan duy nhất. Mọi học thuyết, tư duy giáo điều dù được ca tụng lộng lẫy bao nhiêu cũng sẽ sụp đổ trước một thực tế khách quan duy nhất!
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
