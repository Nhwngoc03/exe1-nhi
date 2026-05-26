import React, { useState } from "react";
import { CheckCircle, AlertCircle, Microscope, TrendingUp, Shield, ArrowRight } from "lucide-react";

interface VerificationProps {
  onAddPoints?: (pts: number) => void;
}

export default function VerificationOfCognition({ onAddPoints }: VerificationProps) {
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

  return (
    <section className="py-20 px-6 md:px-8 bg-white relative">
      <div className="max-w-[900px] mx-auto animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-xs font-sans font-extrabold text-[#663300] tracking-widest uppercase bg-[#E8D5C4] px-2.5 py-1 rounded-sm inline-block mb-6">
            Chương V
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1c1c] mb-6 font-sans tracking-tight">
            Kiểm chứng nhận thức và chân lý của thực tiễn
          </h2>
        </div>

        {/* Part 1: Why Verify Cognition */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-8 h-8 text-[#663300] flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] font-sans">
              Vì sao con người cần kiểm chứng nhận thức?
            </h3>
          </div>

          <div className="bg-[#E0D7CF] border-l-4 border-[#663300] p-6 rounded-r-lg mb-8">
            <p className="font-serif text-sm md:text-base text-[#1a1c1c] leading-relaxed mb-4">
              Mặc dù con người nhận thức thế giới thông qua cảm tính và lý tính, nhận thức vẫn có thể bị sai lệch bởi:
            </p>
            <div className="space-y-2 font-serif text-sm md:text-base text-[#3a3c3c]">
              <div className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">•</span>
                <span>Cảm xúc cá nhân</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">•</span>
                <span>Thông tin thiếu đầy đủ</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">•</span>
                <span>Hiệu ứng số đông</span>
              </div>
              <div className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">•</span>
                <span>Mạng xã hội, fake news, thuật toán truyền thông</span>
              </div>
            </div>
            <p className="font-serif text-sm md:text-base text-[#1a1c1c] mt-4 font-bold">
              → Không phải mọi nhận thức đều phản ánh đúng hiện thực khách quan
            </p>
          </div>

          <div className="bg-white border border-[#C9B5A3] p-6 rounded-lg mb-8">
            <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-4">Ví dụ về nhận thức sai:</h4>
            <ul className="space-y-2 font-serif text-sm md:text-base text-[#3a3c3c]">
              <li className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">✗</span>
                <span>Nhìn một đoạn clip ngắn chưa chắc hiểu đúng sự việc</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">✗</span>
                <span>Thấy nhiều người bình luận giống nhau chưa chắc thông tin đó đúng</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#663300] font-bold mr-3">✗</span>
                <span>Cảm giác hoặc suy nghĩ cá nhân chưa chắc phản ánh đúng bản chất sự vật</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#E8D5C4] p-6 rounded-lg">
            <p className="font-serif text-sm md:text-base text-[#663300] font-bold mb-3">Từ đó xuất hiện câu hỏi:</p>
            <ul className="space-y-2 font-serif text-sm md:text-base text-[#663300]">
              <li className="flex items-start">
                <span className="font-bold mr-3">?</span>
                <span>Làm sao để biết nhận thức nào là đúng và nhận thức nào là sai?</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3">?</span>
                <span>Thực tiễn kiểm chứng nhận thức như thế nào?</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Part 2: What is Practice */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Microscope className="w-8 h-8 text-[#663300] flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] font-sans">
              Thực tiễn là gì?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#E0D7CF] p-6 rounded-lg">
              <p className="font-serif text-sm text-[#3a3c3c] leading-relaxed">
                <strong className="text-[#663300]">Hoạt động thực tế</strong>
              </p>
            </div>
            <div className="bg-[#E0D7CF] p-6 rounded-lg">
              <p className="font-serif text-sm text-[#3a3c3c] leading-relaxed">
                <strong className="text-[#663300]">Trải nghiệm thực tế</strong>
              </p>
            </div>
            <div className="bg-[#E0D7CF] p-6 rounded-lg">
              <p className="font-serif text-sm text-[#3a3c3c] leading-relaxed">
                <strong className="text-[#663300]">Thực nghiệm khoa học</strong>
              </p>
            </div>
            <div className="bg-[#E0D7CF] p-6 rounded-lg">
              <p className="font-serif text-sm text-[#3a3c3c] leading-relaxed">
                <strong className="text-[#663300]">Kiểm tra bằng hiện thực khách quan</strong>
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#C9B5A3] p-6 rounded-lg mt-6">
            <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-4">Thông qua thực tiễn, con người sẽ:</h4>
            <ul className="space-y-3 font-serif text-sm md:text-base text-[#3a3c3c]">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#663300] flex-shrink-0 mr-3 mt-0.5" />
                <span>Đối chiếu nhận thức với thực tế</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#663300] flex-shrink-0 mr-3 mt-0.5" />
                <span>Kiểm tra kết quả</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-[#663300] flex-shrink-0 mr-3 mt-0.5" />
                <span>Xác nhận điều đúng và bác bỏ điều sai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Part 3: Examples */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-[#663300] flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] font-sans">
              Ví dụ cụ thể
            </h3>
          </div>

          <div className="space-y-6">
            {/* Example 1: Galileo */}
            <div
              className="border border-[#C9B5A3] rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all"
              onClick={() => handleExpandExample("galileo")}
            >
              <div className="bg-[#E0D7CF] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-2">
                      Ví dụ 1: Galileo và vật rơi
                    </h4>
                    <p className="font-serif text-sm text-[#3a3c3c]">
                      Theo Aristotle: "Vật nặng sẽ rơi nhanh hơn vật nhẹ"
                    </p>
                  </div>
                  <span className="text-[#663300] ml-3 flex-shrink-0">{expandedExample === "galileo" ? "▲" : "▼"}</span>
                </div>
              </div>

              {expandedExample === "galileo" && (
                <div className="bg-white p-6 border-t border-[#C9B5A3] space-y-4">
                  <div className="bg-[#E8D5C4] p-4 rounded">
                    <p className="font-serif text-sm text-[#663300] font-bold mb-2">📊 Nhận thức cũ:</p>
                    <p className="font-serif text-sm text-[#3a3c3c]">
                      Nhận định này từng là phổ biến trong thời gian dài vì nghe có vẻ hợp lý, phù hợp với cảm giác trực quan
                    </p>
                  </div>

                  <div className="bg-white border border-[#e1bec0] p-4 rounded">
                    <p className="font-serif text-sm text-[#1a1c1c] font-bold mb-2">🔬 Thực nghiệm của Galileo:</p>
                    <p className="font-serif text-sm text-[#3a3c3c] mb-3">
                      Thay vì chỉ tin vào suy nghĩ có sẵn, Galileo tiến hành thực nghiệm: thả các vật có khối lượng khác nhau từ trên cao xuống để quan sát kết quả thực tế
                    </p>
                  </div>

                  <div className="bg-[#E0D7CF] p-4 rounded">
                    <p className="font-serif text-sm text-[#1a1c1c] font-bold mb-2">✓ Kết quả:</p>
                    <ul className="space-y-2 font-serif text-sm text-[#3a3c3c]">
                      <li className="flex items-start">
                        <span className="text-[#663300] font-bold mr-3">•</span>
                        <span>Trong cùng điều kiện, các vật rơi với gia tốc đều như nhau</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#663300] font-bold mr-3">•</span>
                        <span>Vật nặng không rơi nhanh hơn vật nhẹ như người ta từng nghĩ</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#663300] font-bold mr-3">•</span>
                        <span>Sự khác biệt chủ yếu đến từ lực cản không khí</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#E8D5C4] p-4 rounded">
                    <p className="font-serif text-sm text-[#663300] font-bold">
                      → Thực tiễn bác bỏ nhận thức sai và xác nhận nhận thức mới phù hợp với hiện thực khách quan
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Example 2: Fake News */}
            <div
              className="border border-[#e1bec0] rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all"
              onClick={() => handleExpandExample("fakenews")}
            >
              <div className="bg-[#f0e8e9] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-2">
                      Ví dụ 2: Fake news trên mạng xã hội
                    </h4>
                    <p className="font-serif text-sm text-[#3a3c3c]">
                      Thông tin được cắt ghép, chỉnh sửa và lan truyền rất nhanh
                    </p>
                  </div>
                  <span className="text-[#6f0022] ml-3 flex-shrink-0">{expandedExample === "fakenews" ? "▲" : "▼"}</span>
                </div>
              </div>

              {expandedExample === "fakenews" && (
                <div className="bg-white p-6 border-t border-[#e1bec0] space-y-4">
                  <div className="bg-[#ffd9dc] p-4 rounded">
                    <p className="font-serif text-sm text-[#6f0022] font-bold mb-2">❌ Hành vi phổ biến:</p>
                    <ul className="space-y-1 font-serif text-sm text-[#3a3c3c]">
                      <li>• Tin ngay khi chưa kiểm chứng</li>
                      <li>• Chỉ dựa vào số đông hoặc cảm xúc</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-[#e1bec0] p-4 rounded">
                    <p className="font-serif text-sm text-[#1a1c1c] font-bold mb-2">🔍 Kiểm chứng:</p>
                    <p className="font-serif text-sm text-[#3a3c3c]">
                      Khi kiểm tra nguồn gốc, xem đầy đủ thông tin, và đối chiếu với sự thật thực tế...
                    </p>
                  </div>

                  <div className="bg-[#f0e8e9] p-4 rounded">
                    <p className="font-serif text-sm text-[#1a1c1c] font-bold mb-2">✓ Phát hiện:</p>
                    <p className="font-serif text-sm text-[#3a3c3c]">
                      Nhiều thông tin là sai lệch
                    </p>
                  </div>

                  <div className="bg-[#ffd9dc] p-4 rounded">
                    <p className="font-serif text-sm text-[#6f0022] font-bold">
                      → Nhận thức muốn đúng phải được kiểm chứng bằng thực tiễn
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Part 4: Why Practice is the Standard */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-[#6f0022] flex-shrink-0" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1c1c] font-sans">
              Vì sao thực tiễn là tiêu chuẩn của chân lý?
            </h3>
          </div>

          <div className="bg-[#f0e8e9] border-l-4 border-[#6f0022] p-6 rounded-r-lg mb-8">
            <p className="font-serif text-sm md:text-base text-[#1a1c1c] leading-relaxed mb-4">
              Theo quan điểm của chủ nghĩa CNDV biện chứng: <strong>chân lý là tri thức phản ánh đúng hiện thực khách quan</strong>. Tuy nhiên, con người không thể biết ngay nhận thức của mình có đúng hay không.
            </p>
            <div className="space-y-3 font-serif text-sm md:text-base text-[#3a3c3c]">
              <div className="flex items-start">
                <span className="text-[#6f0022] font-bold mr-3">→</span>
                <span>Nếu nhận thức được thực tiễn chứng minh là đúng → nhận thức đó trở thành <strong>chân lý</strong></span>
              </div>
              <div className="flex items-start">
                <span className="text-[#6f0022] font-bold mr-3">→</span>
                <span>Nếu thực tiễn bác bỏ → nhận thức đó là <strong>sai</strong></span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#e1bec0] p-6 rounded-lg">
            <h4 className="font-sans font-bold text-lg text-[#1a1c1c] mb-4">Thách thức hiện nay:</h4>
            <div className="space-y-3 font-serif text-sm md:text-base text-[#3a3c3c]">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-[#6f0022] flex-shrink-0 mr-3 mt-0.5" />
                <span><strong>AI</strong> - Trí tuệ nhân tạo</span>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-[#6f0022] flex-shrink-0 mr-3 mt-0.5" />
                <span><strong>Deepfake</strong> - Mô phỏng hình ảnh khuôn mặt con người</span>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-[#6f0022] flex-shrink-0 mr-3 mt-0.5" />
                <span><strong>Fake news</strong> - Tin tức giả</span>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-[#6f0022] flex-shrink-0 mr-3 mt-0.5" />
                <span><strong>Thuật toán mạng xã hội</strong> - Filter bubble</span>
              </div>
            </div>

            <div className="bg-[#ffd9dc] p-4 rounded mt-6">
              <p className="font-serif text-sm md:text-base text-[#6f0022] font-bold mb-3">
                ⚠️ Những công nghệ này đang làm cho con người:
              </p>
              <ul className="space-y-2 font-serif text-sm md:text-base text-[#6f0022]">
                <li className="flex items-start">
                  <span className="font-bold mr-3">•</span>
                  <span>Dễ hiểu sai</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">•</span>
                  <span>Dễ bị thao túng nhận thức</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3">•</span>
                  <span>Khó phân biệt thật và giả</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#6f0022] text-white rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ArrowRight className="w-6 h-6" />
          </div>
          <h4 className="font-sans font-bold text-xl text-white mb-4">
            Con người cần:
          </h4>
          <div className="space-y-2 font-serif text-base text-white/90">
            <p>✓ Kiểm chứng thông tin trước khi tin tưởng</p>
            <p>✓ Rèn luyện tư duy phản biện</p>
            <p>✓ Đối chiếu với thực tế khách quan</p>
          </div>
          <p className="font-serif text-sm text-white/75 mt-6 italic">
            Vai trò của thực tiễn trong việc xác nhận chân lý ngày càng quan trọng
          </p>
        </div>
      </div>
    </section>
  );
}
