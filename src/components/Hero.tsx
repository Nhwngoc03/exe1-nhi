import React from "react";
import { ArrowRight, BookOpen, Quote } from "lucide-react";

interface HeroProps {
  onStartClicked: () => void;
  onLearnMoreClicked: () => void;
}

export default function Hero({ onStartClicked, onLearnMoreClicked }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#ffffff] to-[#eeeeee] min-h-[550px] md:min-h-[600px] flex items-center relative overflow-hidden px-6 py-12 md:py-16 md:px-8 border-b border-[#e1bec0]">
      {/* Decorative ambient background circle */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ffd9dc] opacity-20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 w-full z-10">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center animate-fade-in">
          <div className="inline-block self-start px-3 py-1 bg-[#6f0022] text-white text-xs font-sans font-bold tracking-widest mb-6 lg:mb-8 rounded-sm uppercase">
            Nhập môn Triết học
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#6f0022] mb-6 leading-tight font-sans tracking-tight">
            Học triết học để làm gì?
          </h1>
          
          <div className="relative mb-8 max-w-xl">
            <Quote className="absolute -left-5 -top-4 text-[#e1bec0] w-10 h-10 -z-10 opacity-60" />
            <p className="text-lg md:text-xl font-serif text-[#5d5f5f] leading-relaxed italic pl-3 border-l-2 border-[#6f0022]">
              "Triết học không phải là những giáo điều xơ cứng, mà là kim chỉ nam cho hành động để cải tạo thế giới."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={onStartClicked}
              className="group bg-[#990033] hover:bg-[#6f0022] text-white px-8 py-4 font-sans font-bold text-sm tracking-widest rounded-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              BẮT ĐẦU HÀNH TRÌNH
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onLearnMoreClicked}
              className="border border-[#6f0022] text-[#6f0022] hover:bg-[#ffd9dc]/40 px-8 py-4 font-sans font-bold text-sm tracking-widest rounded-sm transition-all"
            >
              TÌM HIỂU THÊM
            </button>
          </div>
        </div>

        <div className="hidden md:flex col-span-5 relative items-center justify-center">
          <div className="absolute inset-0 bg-[#6f0022] opacity-5 rounded-full blur-3xl"></div>
          <div className="relative group p-1 bg-[#eeeeee] border border-[#e1bec0] rounded-sm transform hover:scale-[1.01] transition-transform duration-300">
            <img
              alt="Academic Library"
              className="rounded-sm shadow-xl w-full h-[380px] lg:h-[450px] object-cover border-t-4 border-[#6f0022]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuUsHuvLP3Vx7DNOJEon0OKZPhGXUGg7sGR4XIQrSJzHOnNi5zbeEPcZ82hCr1HvfItm4yhDCGp9vMn3stImXXN8-0-H7IhYGdDaXrjbu27y4NA72qoSWaPsq4t2jPKV2I6kPT33WZBaxaM0CgyujY1wJx8GAEEBJc_Ub9C1SasA6txXrC_ZAS30BXiiEDTO21zsSk6ys79RcC9E4SxET_q7520GXyv4iby-l2W_6BNDNd725YTOzt2iDizZ5N_ukaovZglg9ZHCU"
              referrerPolicy="no-referrer"
            />
            {/* Soft subtle frame decorative tag */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm shadow border border-[#e1bec0] px-3 py-1 font-mono text-[10px] text-[#5d5f5f]">
              THƯ VIỆN KHOA HỌC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
