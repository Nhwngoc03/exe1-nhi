import React from "react";
import { Sparkles, HelpCircle } from "lucide-react";

export default function TruthSection() {
  return (
    <section className="py-20 px-6 md:px-8 bg-[#6f0022] text-white relative overflow-hidden">
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
          
          <div className="p-4 rounded-sm hover:bg-white/5 transition-all">
            <span className="block text-4xl sm:text-5xl font-extrabold text-[#ffb2ba] font-sans tracking-tight">100%</span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest opacity-85 block mt-2 text-white">
              Tính khách quan
            </span>
            <span className="text-[11px] font-serif opacity-70 block mt-1.5 leading-relaxed text-center">
              Nội dung chân lý thuộc về hiện thực vật chất tự thân, ko lệ thuộc cảm nhận chủ quan bất kì người nào.
            </span>
          </div>

          <div className="p-4 rounded-sm hover:bg-white/5 transition-all mb-4 md:mb-0">
            <span className="block text-4xl sm:text-5xl font-extrabold text-[#ffb2ba] font-sans">∞</span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest opacity-85 block mt-2 text-white">
              Sự phát triển
            </span>
            <span className="text-[11px] font-serif opacity-70 block mt-1.5 leading-relaxed text-center">
              Sự thống nhất biện chứng tuyệt diệu giữa tính tương đối và tính tuyệt đối để đạt sự hiểu biết sâu rộng.
            </span>
          </div>

          <div className="p-4 rounded-sm hover:bg-white/5 transition-all">
            <span className="block text-4xl sm:text-5xl font-extrabold text-[#ffb2ba] font-sans">Δ</span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest opacity-85 block mt-2 text-white">
              Tính cụ thể
            </span>
            <span className="text-[11px] font-serif opacity-70 block mt-1.5 leading-relaxed text-center">
              Chân lý luôn sinh ra trong không gian, thời gian lịch sử - cụ thể nhất định. Không có chân lý trừu tượng chung chung!
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
