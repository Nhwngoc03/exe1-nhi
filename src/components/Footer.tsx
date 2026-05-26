import React from "react";
import { BookOpen } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-[#f3f3f3] border-t border-[#C9B5A3] py-12 px-6 md:px-8 mt-12 mb-16 md:mb-0">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActiveTab("curriculum")}
        >
          <BookOpen className="text-[#663300] w-6 h-6" />
          <span className="text-lg font-bold text-[#663300] font-sans">
            Nhóm 3
          </span>
        </div>
        
        <div className="flex gap-8 font-sans text-sm font-medium text-[#5d5f5f]">
          <a href="#" className="hover:text-[#663300] transition-colors">Điều khoản</a>
          <a href="#" className="hover:text-[#663300] transition-colors">Bảo mật</a>
          <a href="#" className="hover:text-[#663300] transition-colors">Liên hệ</a>
        </div>
        
        <p className="text-xs text-[#594043] font-serif text-center md:text-right">
          © 2026 Educational Platform. Khơi nguồn tư duy biện chứng & thế giới quan khoa học.
        </p>
      </div>
    </footer>
  );
}
