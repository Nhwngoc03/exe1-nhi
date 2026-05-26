import React from "react";
import { ArrowRight, BookOpen, Quote } from "lucide-react";

interface HeroProps {
  onStartClicked: () => void;
  onLearnMoreClicked: () => void;
}

export default function Hero({ onStartClicked, onLearnMoreClicked }: HeroProps) {
  return (
    <section className="relative min-h-screen md:min-h-[700px] flex items-center overflow-hidden border-b border-[#C9B5A3]">
      {/* Background Image - Full Screen */}
      <img
        alt="Academic Library"
        className="absolute inset-0 w-full h-full object-cover"
        src="/anh_1.jpg"
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative ambient background circle */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E8D5C4] opacity-10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-12 md:py-16 md:px-8 w-full">
        <div className="max-w-xl">
          <div className="inline-block self-start px-3 py-1 bg-[#663300] text-white text-xs font-sans font-bold tracking-widest mb-6 lg:mb-8 rounded-sm uppercase">
            Nhập môn Triết học
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight font-sans tracking-tight drop-shadow-lg">
            Học triết học để làm gì?
          </h1>
          
          <div className="relative mb-8">
            <Quote className="absolute -left-5 -top-4 text-[#E8D5C4]/30 w-10 h-10 -z-10 opacity-60" />
            <p className="text-lg md:text-xl font-serif text-white/95 leading-relaxed italic pl-3 border-l-2 border-[#E8D5C4] drop-shadow-md">
              "Triết học không phải là những giáo điều xơ cứng, mà là kim chỉ nam cho hành động để cải tạo thế giới."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={onStartClicked}
              className="group bg-[#8B5A2B] hover:bg-[#663300] text-white px-8 py-4 font-sans font-bold text-sm tracking-widest rounded-sm shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              BẮT ĐẦU HÀNH TRÌNH
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onLearnMoreClicked}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 font-sans font-bold text-sm tracking-widest rounded-sm transition-all backdrop-blur-sm"
            >
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
