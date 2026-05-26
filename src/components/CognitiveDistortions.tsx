import React, { useState } from "react";
import { AlertTriangle, EyeOff, Megaphone, ShieldClose, Shield, Sparkles, Brain, Loader2 } from "lucide-react";

interface CognitiveDistortionsProps {
  onAddPoints: (pts: number) => void;
  onUnlockBadge: (badgeId: string) => void;
  isBadgeUnlocked: (badgeId: string) => boolean;
}

export default function CognitiveDistortions({ onAddPoints, onUnlockBadge, isBadgeUnlocked }: CognitiveDistortionsProps) {
  const [inputText, setInputText] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorStatus, setErrorStatus] = useState<string>("");

  const handleAIAnalyze = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setErrorStatus("");
    setAnalysisResult("");

    try {
      const response = await fetch("/api/gemini/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: inputText,
          mode: "analyser"
        })
      });

      const data = await response.json();
      if (response.ok && data.text) {
        setAnalysisResult(data.text);
        onAddPoints(15);
        if (!isBadgeUnlocked("badge-4")) {
          onUnlockBadge("badge-4");
        }
      } else {
        setErrorStatus(data.error || "Không thể khởi động trợ lý AI phân tích tại thời điểm này.");
      }
    } catch (err) {
      console.error(err);
      setErrorStatus("Lỗi kết nối cơ sở hạ tầng. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  const sampleTexts = [
    { title: "Nước ép cần tây thải độc trị bách bệnh", text: "\"Chỉ cần uống nước ép cần tây thô mỗi sáng liên tục 7 ngày, mọi tế bào ung thư sẽ bị bỏ đói trực tiếp, các bác sĩ viện K đang tích cực giấu kín thông tin này để làm giàu!\"" },
    { title: "Giáo điều thị trường không đổi", text: "\"Chiến lược kinh doanh của các nhà buôn lúa gạo thế hệ trước là bất biến, thị trường không bao giờ đòi hỏi các giải pháp số hóa thương mại điện tử!\"" }
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-white border-b border-[#C9B5A3]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Summary of Distortions */}
          <div className="col-span-12 lg:col-span-4 text-left">
            <span className="text-[#663300] font-sans font-bold text-xs tracking-widest uppercase bg-[#E8D5C4] px-2 py-0.5 rounded-sm">
              Tư duy Kỷ nguyên Số
            </span>
            <h2 className="text-3xl font-extrabold text-[#1a1c1c] font-sans mt-3 mb-6 leading-tight tracking-tight">
              Sai lệch Nhận thức trong Kỷ nguyên Số
            </h2>
            <p className="font-serif text-sm text-[#8B7355] leading-relaxed text-justify">
              Tại sao hàng ngày hàng triệu trí thức vẫn mắc bẫy Tin giả (Fake News)? Lý lý nhận thức Mác - Lênin giúp ta nhận diện và thấu triệt những rào cản tư duy tinh vi nhất ngáng cản ta đến gần chân lý khách quan.
            </p>
          </div>

          {/* Right Grid of Distortions */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Bias 1 */}
            <div className="p-6 bg-[#f9f9f9] border border-[#e1bec0] rounded-sm relative hover:border-[#6f0022] transition-colors group">
              <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#6f0022] transition-all"></div>
              <div className="text-[#6f0022] mb-3 flex justify-between items-center">
                <AlertTriangle className="w-8 h-8" />
                <span className="text-[10px] font-mono tracking-widest text-[#5d5f5f]">BIAS 01</span>
              </div>
              <h4 className="font-sans font-bold text-base text-[#1a1c1c] mb-2">
                Bẫy cảm xúc (Emotional Bias)
              </h4>
              <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed text-justify">
                Bộ óc chúng ta vô thức chấp nhận ngay các thông tin củng cố nỗi lo âu, ước mơ chủ quan sẵn có, đồng thời bài xích dồn dập các dữ kiện thực tế gây đau đớn, khó chịu.
              </p>
            </div>

            {/* Bias 2 */}
            <div className="p-6 bg-[#f9f9f9] border border-[#e1bec0] rounded-sm relative hover:border-[#6f0022] transition-colors group">
              <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#6f0022] transition-all"></div>
              <div className="text-[#6f0022] mb-3 flex justify-between items-center">
                <EyeOff className="w-8 h-8" />
                <span className="text-[10px] font-mono tracking-widest text-[#5d5f5f]">BIAS 02</span>
              </div>
              <h4 className="font-sans font-bold text-base text-[#1a1c1c] mb-2">
                Thiếu hụt thông tin (Asymmetric Info)
              </h4>
              <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed text-justify">
                Đưa ra nhận định quy chụp toàn diện thế giới quan chỉ dựa trên một vài dữ liệu hiện tượng bề nổi lẻ tẻ phiến diện, không hiểu mối quan hệ bản chất gốc rễ.
              </p>
            </div>

            {/* Bias 3 */}
            <div className="p-6 bg-[#f9f9f9] border border-[#e1bec0] rounded-sm relative hover:border-[#6f0022] transition-colors group">
              <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#6f0022] transition-all"></div>
              <div className="text-[#6f0022] mb-3 flex justify-between items-center">
                <Megaphone className="w-8 h-8" />
                <span className="text-[10px] font-mono tracking-widest text-[#5d5f5f]">BIAS 03</span>
              </div>
              <h4 className="font-sans font-bold text-base text-[#1a1c1c] mb-2">
                Fake News & Thao túng
              </h4>
              <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed text-justify">
                Sự bóp méo, phóng đại thực tại một cách có hệ thống thông qua thuật toán máy tính hay truyền thông tư bản, nhằm thu hút sự hiếu kỳ lười biếng tư duy.
              </p>
            </div>

            {/* Bias 4 */}
            <div className="p-6 bg-[#f9f9f9] border border-[#e1bec0] rounded-sm relative hover:border-[#6f0022] transition-colors group">
              <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#6f0022] transition-all"></div>
              <div className="text-[#6f0022] mb-3 flex justify-between items-center">
                <Brain className="w-8 h-8" />
                <span className="text-[10px] font-mono tracking-widest text-[#5d5f5f]">BIAS 04</span>
              </div>
              <h4 className="font-sans font-bold text-base text-[#1a1c1c] mb-2">
                Tính bảo thủ (Dogmatism)
              </h4>
              <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed text-justify">
                Từ chối kiên quyết việc tiếp tục học hỏi, cập nhật tri thức khi thực tế biện chứng khách quan xung quanh đã biến chuyển sang một chất lượng lịch sử mới.
              </p>
            </div>

          </div>
        </div>

        {/* AI dialectical thinker helper playground */}
            <div className="p-6 lg:p-8 border border-[#C9B5A3] bg-gradient-to-br from-[#ffffff] to-[#E8DED3] rounded-sm text-left shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-[#E8D5C4] text-[#663300] rounded-sm">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-sans font-extrabold text-[#663300] text-sm">
                TRÌNH KIỂM CHỨNG & PHÂN TÍCH BIỆN CHỨNG (Dự án AI Mác-Lênin)
              </h3>
              <p className="font-serif text-xs text-[#5d5f5f]">
                Nhập bất cứ thông tin xã hội, tin giật gân, hoặc mâu thuẫn nhận thức để AI phân tích qua lãng kính duy vật khoa học.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
            {/* Input Side (Spans 5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ví dụ: 'Uống giấm ăn sáng giúp cơ thể diệt mọi virus lạ...' hoặc 'Nhà đất mãi tăng giá, không bao giờ chịu tác động của khủng hoảng chu kỳ...'"
                rows={5}
                className="w-full p-4 border border-[#C9B5A3] rounded-sm text-sm font-serif focus:outline-none focus:ring-2 focus:ring-[#663300]/40 focus:border-[#663300] bg-white text-black resize-none"
              />

              <div className="flex flex-wrap gap-2">
                {sampleTexts.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setInputText(item.text)}
                    className="p-2 border border-dashed border-[#C9B5A3] hover:border-[#663300] bg-white text-[11px] font-sans text-[#8B7355] hover:text-[#663300] transition-all rounded-sm flex items-center gap-1"
                  >
                    Mẫu {idx + 1}: {item.title}
                  </button>
                ))}
              </div>

              <button
                disabled={loading || !inputText.trim()}
                onClick={handleAIAnalyze}
                className="w-full bg-[#663300] hover:bg-[#8B5A2B] text-white py-3.5 px-6 font-sans font-bold text-xs tracking-wider uppercase rounded-sm hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    ĐANG PHÂN TÍCH HỆ THỐNG BIỆN CHỨNG...
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4" />
                    KÍCH HOẠT PHÂN TÍCH KHÁCH QUAN (AI)
                  </>
                )}
              </button>
            </div>

            {/* AI Response Output (Spans 7 cols) */}
            <div className="lg:col-span-7 bg-white p-5 border border-[#e1bec0] rounded-sm min-h-[180px] flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#c6c6c7] block uppercase border-b border-[#e1bec0] pb-2.5 mb-3.5">
                  MÔ-ĐUN GIẢI THÍCH CHÂN LÝ BIỆN CHỨNG
                </span>
                
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                    <Loader2 className="w-8 h-8 text-[#663300] animate-spin" />
                    <p className="font-serif text-sm text-[#5d5f5f] animate-pulse">
                      Học giả ảo Gemini đang xem xét, áp dụng nguyên lý Lượng-Chất, Thống nhất đấu tranh của các mặt đối lập và Lý luận Thực tiễn để đưa phản ánh toàn diện...
                    </p>
                  </div>
                ) : errorStatus ? (
                  <div className="p-4 bg-red-50 text-red-800 border border-red-200 rounded-sm text-xs font-serif leading-relaxed">
                    {errorStatus}
                  </div>
                ) : analysisResult ? (
                  <div className="font-serif text-sm text-slate-800 leading-relaxed text-justify max-h-[350px] overflow-y-auto pr-2 space-y-3 whitespace-pre-line">
                    {analysisResult}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-12 text-[#c6c6c7]">
                    <Shield className="w-12 h-12 mb-3 text-[#e1bec0]" />
                    <p className="font-serif text-xs text-[#5d5f5f]">
                      Điền lập luận vào hộp bên trái và nhấn Kích hoạt để xem giải trình học thuật. 
                      Nhận ngay <strong className="text-[#663300]">+15 Điểm học thuật</strong> và Huy hiểu Tri thức đặc biệt!
                    </p>
                  </div>
                )}
              </div>

              {analysisResult && (
                <div className="mt-4 pt-3 border-t border-dashed border-[#e1bec0] text-[10px] font-mono text-emerald-700 flex items-center gap-1.5 font-bold">
                  <span>🔋 ĐÃ KIỂM CHỨNG KHÁCH QUAN HOÀN TẤT. NHẬN NGAY +15 ĐIỂM TƯ DUY!</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
