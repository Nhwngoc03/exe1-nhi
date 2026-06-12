import React from "react";
import { Shield } from "lucide-react";

export default function AIUsageAppendix() {
  const criteria = [
    {
      title: "Kiểm chứng thông tin",
      details: "Mọi nội dung lý thuyết đều được đối chiếu trực tiếp từ giáo trình của giáo viên và một số trang website về triết học.",
      responsibility: "Nhóm tự kiểm chứng và chịu trách nhiệm về tính chính xác cho nội dung cuối cùng"
    },
    {
      title: "Xây dựng nội dung",
      details: "Nội dung do các thành viên trong nhóm tự tìm tra và lọc nội dung từ những nguồn tham khảo khác. AI chỉ đóng vai trò hỗ trợ soạn thảo lại chuẩn prompt.",
      responsibility: "AI chỉ là công cụ hỗ trợ, không thay thế hoàn toàn."
    },
    {
      title: "Sáng tạo & Sản phẩm",
      details: "Sử dụng Google Gemini và ChatGPT để xây dựng prompt và trao đổi giải đáp thắc mắc; VSCode, AI Claude để tạo sản phẩm và ngôn ngữ HTML cho sản phẩm lý thuyết trang Website.",
      responsibility: "Khâu chỉnh sửa, edit web và sản phẩm cuối cùng hoàn toàn do các thành viên trong nhóm và có hỗ trợ từ bên ngoài để rà lại hình thức sản phẩm."
    },
    {
      title: "Cam kết liêm chính",
      details: "Nhóm cam kết AI chỉ đóng vai trò hỗ trợ (tạo ảnh, chatbot, sàn lọc nội dung để soạn thảo), không thay thế công việc tư duy và nghiên cứu lý thuyết của sinh viên.",
      responsibility: "Nhóm xác nhận đã đối chiếu nguồn chính thống cho các thông tin do AI sinh ra và chịu trách nhiệm toàn bộ về sản phẩm."
    }
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-8 border-t border-[#C9B5A3]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-[#663300] w-6 h-6" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1c1c] font-sans tracking-tight">
              PHỤ LỤC: AI USAGE
            </h2>
          </div>
          <p className="text-[#8B7355] font-serif text-sm md:text-base">
            Minh bạch phạm vi ứng dụng AI và phân định trách nhiệm học thuật của nhóm
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#4A3728] text-white">
                <th className="border border-[#C9B5A3] p-4 text-left font-sans font-bold text-sm">
                  TIÊU CHÍ
                </th>
                <th className="border border-[#C9B5A3] p-4 text-left font-sans font-bold text-sm">
                  NỘI DUNG CHI TIẾT
                </th>
                <th className="border border-[#C9B5A3] p-4 text-left font-sans font-bold text-sm">
                  PHÂN ĐỊNH TRÁCH NHIỆM
                </th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"}>
                  <td className="border border-[#C9B5A3] p-4 align-top">
                    <p className="font-sans font-bold text-[#663300] text-sm">
                      {item.title}
                    </p>
                  </td>
                  <td className="border border-[#C9B5A3] p-4 align-top">
                    <p className="font-serif text-[#594043] text-xs md:text-sm leading-relaxed">
                      {item.details}
                    </p>
                  </td>
                  <td className="border border-[#C9B5A3] p-4 align-top">
                    <p className="font-serif text-[#594043] text-xs md:text-sm leading-relaxed">
                      {item.responsibility}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-6 bg-[#E8D5C4]/20 border-l-4 border-[#663300] p-4 rounded-sm">
          <p className="font-sans font-bold text-[#663300] text-xs uppercase tracking-widest mb-2">
            📋 Ghi chú
          </p>
          <p className="font-serif text-xs text-[#594043]">
            Mọi nội dung được tạo ra thông qua quá trình nghiên cứu sâu, đối chiếu nguồn tài liệu chính thống, và được xác nhận bởi các thành viên của nhóm. AI được sử dụng như một công cụ hỗ trợ, không phải thay thế cho tư duy và trách nhiệm học thuật.
          </p>
        </div>
      </div>
    </section>
  );
}
