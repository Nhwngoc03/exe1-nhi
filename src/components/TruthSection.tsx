import React from "react";
import { Sparkles, HelpCircle } from "lucide-react";

export default function TruthSection() {
  return (
    <section className="py-20 px-6 md:px-8 bg-[#663300] text-white relative overflow-hidden">
      {/* Decorative blurry glowing blobs inside matching the original prototype layout style */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-[800px] mx-auto text-center relative z-10 animate-fade-in">
        
        <span className="text-[10px] sm:text-xs font-sans font-extrabold text-[#ffb2ba] tracking-widest uppercase bg-white/10 px-3 py-1 rounded-sm inline-block mb-6 select-none">
          Phạm Trù Chân Lý
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 font-sans tracking-tight leading-tight">
          Chân lý là gì?
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-serif mb-12 opacity-95 leading-relaxed text-justify sm:text-center italic">
          "Chân lý là những tri thức phù hợp với hiện thực khách quan và đã được thực tiễn kiểm nghiệm nghiêm khắc. Nó không phải là một đích đến tĩnh lặng cuối cùng đóng băng cố định, mà là một quá trình tiệm cận năng động không ngừng nghỉ của óc người với tự nhiên và xã hội."
        </p>

        {/* 3 columns metrics table matching original prototype */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-6 border-t border-white/20">
          
          <div className="p-6 rounded-lg hover:bg-white/5 transition-all">
            <span className="block text-4xl sm:text-5xl font-extrabold text-[#ffb2ba] font-sans tracking-tight">100%</span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest opacity-85 block mt-3 mb-3 text-white">
              Tính khách quan
            </span>
            <span className="text-[12px] font-serif opacity-75 block leading-relaxed text-center">
              Nội dung chân lý thuộc về hiện thực vật chất tự thân, không lệ thuộc cảm nhận chủ quan của bất kì người nào.
            </span>
          </div>

          <div className="p-6 rounded-lg hover:bg-white/5 transition-all">
            <span className="block text-4xl sm:text-5xl font-extrabold text-[#ffb2ba] font-sans">∞</span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest opacity-85 block mt-3 mb-4 text-white">
              Tính phát triển
            </span>
            <div className="space-y-3">
              <div className="text-[12px] font-serif opacity-75 text-center leading-relaxed">
                <strong className="block text-[#ffb2ba] mb-1">Tính tuyệt đối</strong>
                <span>Sự phù hợp hoàn toàn giữa tri thức và khách thể (rất khó đạt tới)</span>
              </div>
              <div className="border-t border-white/10"></div>
              <div className="text-[12px] font-serif opacity-75 text-center leading-relaxed">
                <strong className="block text-[#ffb2ba] mb-1">Tính tương đối</strong>
                <span>Sự phù hợp chưa hoàn toàn vì nhận thức con người luôn phát triển</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg hover:bg-white/5 transition-all">
            <span className="block text-4xl sm:text-5xl font-extrabold text-[#ffb2ba] font-sans">Δ</span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest opacity-85 block mt-3 mb-3 text-white">
              Tính cụ thể
            </span>
            <span className="text-[12px] font-serif opacity-75 block leading-relaxed text-center">
              Chân lý luôn sinh ra trong không gian, thời gian lịch sử cụ thể nhất định. Không có chân lý trừu tượng chung chung!
            </span>
          </div>

        </div>

        {/* Section 2: Truth and Practice */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 font-sans tracking-tight">
             Mối quan hệ của chân lý với thực tiễn
          </h3>
          <div className="bg-white/5 rounded-lg p-8 border border-white/10 backdrop-blur-sm">
            <p className="text-[13px] sm:text-sm font-serif opacity-90 leading-relaxed text-justify space-y-4">
              <span className="block mb-3">
                Chân lý và thực tiễn gắn bó chặt chẽ với nhau, có mối quan hệ song trùng trong quá trình vận động và phát triển của chúng.
              </span>
              <span className="block mb-3">
                <strong className="text-[#ffb2ba]">Thực tiễn là tiêu chuẩn kiểm tra chân lý:</strong> Một tri thức chỉ được coi là đúng khi nó được kiểm nghiệm trong thực tế.
              </span>
              <span className="block">
                <strong className="text-[#ffb2ba]">Mối quan hệ tương hỗ:</strong> Chân lý phát triển nhờ thực tiễn, còn thực tiễn cũng phát triển nhờ vận dụng đúng chân lý.
              </span>
            </p>
          </div>
        </div>

        {/* Section 3: Significance of Truth in Modern Society */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 font-sans tracking-tight">
             Ý nghĩa của chân lý trong xã hội hiện nay
          </h3>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all">
              <div className="flex gap-4">
                <span className="text-[#ffb2ba] font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-[13px] sm:text-sm font-serif opacity-90 leading-relaxed text-justify">
                  <strong className="text-[#ffb2ba]">Phân biệt đúng – sai:</strong> Giúp con người phân biệt đúng – sai, nhất là trong thời đại mạng xã hội, nơi tin giả và thông tin sai lệch xuất hiện rất nhiều.
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all">
              <div className="flex gap-4">
                <span className="text-[#ffb2ba] font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-[13px] sm:text-sm font-serif opacity-90 leading-relaxed text-justify">
                  <strong className="text-[#ffb2ba]">Cơ sở ra quyết định:</strong> Là cơ sở để ra quyết định đúng trong học tập, quản lý, kinh tế, y tế, khoa học và đời sống.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
