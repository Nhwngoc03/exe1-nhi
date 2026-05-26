import React, { useState } from "react";
import { AlertCircle, Eye, BrainCircuit, Zap, TrendingDown, Info } from "lucide-react";

interface DistortedPerceptionProps {
  onAddPoints?: (pts: number) => void;
}

export default function DistortedPerception({ onAddPoints }: DistortedPerceptionProps) {
  const [expandedExample, setExpandedExample] = useState<string | null>(null);
  const [pointsAwarded, setPointsAwarded] = useState<boolean>(false);

  const handleExpandExample = (id: string) => {
    if (expandedExample === id) {
      setExpandedExample(null);
    } else {
      setExpandedExample(id);
      if (!pointsAwarded && onAddPoints) {
        onAddPoints(10);
        setPointsAwarded(true);
      }
    }
  };

  const distortionReasons = [
    {
      id: "surface",
      title: "Do nhìn bề ngoài",
      icon: Eye,
      examples: [
        {
          situation: "Thấy một bạn học ít nói",
          assumption: "Nghĩ bạn đó chảnh hoặc khó gần",
          reality: "Thật ra bạn đó chỉ nhút nhát",
          lesson: "Nhận thức bị sai vì chỉ nhìn bên ngoài"
        }
      ]
    },
    {
      id: "emotion",
      title: "Do cảm xúc cá nhân",
      icon: Zap,
      examples: [
        {
          situation: "Đang giận ai đó",
          assumption: "Thấy họ nói gì cũng khó chịu",
          reality: "Cảm xúc ảnh hưởng đến cách nhìn nhận",
          lesson: "Không nên quyết định khi còn tức giận"
        }
      ]
    },
    {
      id: "information",
      title: "Do thiếu thông tin",
      icon: AlertCircle,
      examples: [
        {
          situation: "Thấy clip cắt ngắn trên TikTok",
          assumption: "Nghĩ một người sai hoàn toàn",
          reality: "Xem đầy đủ mới biết nội dung khác hẳn",
          lesson: "Cần tìm hiểu đầy đủ trước khi kết luận"
        }
      ]
    },
    {
      id: "majority",
      title: "Do tin theo số đông",
      icon: TrendingDown,
      examples: [
        {
          situation: "Thấy nhiều người bình luận: 'Quán này dở lắm'",
          assumption: "Chưa ăn thử nhưng cũng nghĩ quán đó dở",
          reality: "Số đông không phải lúc nào cũng đúng",
          lesson: "Cần có phán xét riêng, không bị lũ cuốn"
        }
      ]
    }
  ];

  const currentFactors = [
    {
      id: "fake-news",
      title: "Mạng xã hội và tin giả",
      icon: AlertCircle,
      description: "Có người chỉnh sửa hình ảnh hoặc cắt ghép video của người nổi tiếng để tạo drama. Người xem chưa biết thật giả đã vào chửi hoặc đánh giá người đó.",
      impact: "Nhận thức bị ảnh hưởng bởi thông tin sai lệch trên mạng"
    },
    {
      id: "algorithm",
      title: "Thuật toán mạng xã hội",
      icon: Zap,
      description: "Hay xem video tiêu cực → Facebook/TikTok tiếp tục hiện video tiêu cực. Dần dần nghĩ cuộc sống toàn chuyện xấu.",
      impact: "Tạo ra 'bong bóng lọc' (filter bubble) làm méo mó thế giới quan"
    },
    {
      id: "critical-thinking",
      title: "Thiếu tư duy phản biện",
      icon: BrainCircuit,
      description: "Nghe người khác nói: 'Ngành này thất nghiệp nhiều' → Tin ngay mà không tự tìm hiểu.",
      impact: "Dễ bị tác động bởi thông tin chưa xác thực"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-white relative">
      <div className="max-w-[900px] mx-auto animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-xs font-sans font-extrabold text-[#663300] tracking-widest uppercase bg-[#E8D5C4] px-2.5 py-1 rounded-sm inline-block mb-6">
            Chương IV
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1c1c] mb-6 font-sans tracking-tight">
            Mối quan hệ giữa nhận thức cảm tính và lý tính
          </h2>
          
          <div className="bg-[#F0E8DF] border-l-4 border-[#663300] p-6 rounded-r-lg text-left max-w-2xl mx-auto mb-12">
            <p className="font-serif text-sm md:text-base text-[#1a1c1c] leading-relaxed mb-4">
              Hai giai đoạn nhận thức này có mối quan hệ chặt chẽ và bổ sung cho nhau:
            </p>
            <ul className="space-y-2 text-sm md:text-base font-serif text-[#3a3c3c]">
              <li className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">•</span>
                <span><strong>Nhận thức cảm tính</strong> là cơ sở để hình thành nhận thức lý tính</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">•</span>
                <span><strong>Nhận thức lý tính</strong> giúp con người hiểu sâu và định hướng lại nhận thức cảm tính</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">•</span>
                <span>Chỉ tin vào <strong>cảm giác bên ngoài</strong> sẽ dễ phiến diện; chỉ <strong>suy luận mà không dựa vào thực tế</strong> cũng dễ dẫn đến chủ quan, sai lầm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Part 1: Why Perception Gets Distorted */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-8 h-8 text-[#663300] flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] font-sans">
              1. Vì sao nhận thức bị sai lệch?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {distortionReasons.map((reason) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={reason.id}
                  className="border border-[#C9B5A3] rounded-lg p-6 hover:shadow-md transition-all cursor-pointer bg-[#fafaf8]"
                  onClick={() => handleExpandExample(reason.id)}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <IconComponent className="w-6 h-6 text-[#663300] flex-shrink-0 mt-1" />
                    <h4 className="font-sans font-bold text-lg text-[#1a1c1c]">{reason.title}</h4>
                  </div>

                  {reason.examples.length > 0 && (
                    <div className="space-y-3">
                      {reason.examples.map((example, idx) => (
                        <div key={idx} className="bg-white rounded p-4 border border-[#C9B5A3]">
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-sans font-bold text-[#663300]">💭 Tình huống:</span>
                              <p className="text-[#3a3c3c] mt-1">{example.situation}</p>
                            </div>
                            <div>
                              <span className="font-sans font-bold text-[#663300]">❌ Nhận thức sai:</span>
                              <p className="text-[#3a3c3c] mt-1">{example.assumption}</p>
                            </div>
                            {expandedExample === reason.id && (
                              <>
                                <div>
                                  <span className="font-sans font-bold text-[#663300]">✓ Sự thật:</span>
                                  <p className="text-[#3a3c3c] mt-1">{example.reality}</p>
                                </div>
                                <div className="bg-[#E8D5C4] p-3 rounded">
                                  <span className="font-sans font-bold text-[#663300]">💡 Bài học:</span>
                                  <p className="text-[#663300] text-xs mt-1">{example.lesson}</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="text-xs text-[#999] text-center mt-3 font-sans">
                    {expandedExample === reason.id ? "Thu gọn ▲" : "Xem chi tiết ▼"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Current Factors Causing Distorted Perception */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-[#663300] flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] font-sans">
              2. Các yếu tố làm sai lệch nhận thức hiện nay
            </h3>
          </div>

          <div className="space-y-6">
            {currentFactors.map((factor) => {
              const IconComponent = factor.icon;
              return (
                <div
                  key={factor.id}
                  className="border-l-4 border-[#663300] bg-[#fafaf8] p-6 rounded-r-lg hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <IconComponent className="w-6 h-6 text-[#663300] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-3">
                        {factor.title}
                      </h4>
                      <p className="font-serif text-sm md:text-base text-[#3a3c3c] leading-relaxed mb-3">
                        {factor.description}
                      </p>
                      <div className="bg-[#E8D5C4] px-4 py-2 rounded flex items-start gap-2">
                        <Info className="w-4 h-4 text-[#663300] flex-shrink-0 mt-0.5" />
                        <p className="font-sans text-xs md:text-sm text-[#663300] font-semibold">
                          {factor.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-[#C9B5A3] text-center">
          <div className="bg-[#F0E8DF] p-8 rounded-lg">
            <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-3">
              🎯 Mục tiêu của chúng ta
            </h4>
            <p className="font-serif text-sm md:text-base text-[#3a3c3c] leading-relaxed max-w-2xl mx-auto">
              Kết hợp đúng cách giữa <strong>nhận thức cảm tính</strong> (quan sát kỹ lưỡng) và <strong>nhận thức lý tính</strong> (suy luận logic, tìm hiểu sâu) để đạt được nhận thức chính xác và toàn diện về thế giới.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
