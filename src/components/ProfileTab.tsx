import React from "react";
import { badges } from "../data";
import { UserProgress } from "../types";
import { Award, User, Sparkles, BrainCircuit, ShieldAlert, Compass, Cpu, BookOpen, Clock, CheckCircle2, Lock } from "lucide-react";

interface ProfileTabProps {
  progress: UserProgress;
  readTermsCount: number;
}

export default function ProfileTab({ progress, readTermsCount }: ProfileTabProps) {
  
  // Icon mapper helper
  const renderIcon = (iconName: string, unlocked: boolean) => {
    const iconStyle = `w-8 h-8 ${unlocked ? "text-[#663300]" : "text-[#c0c0c0]"}`;
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className={iconStyle} />;
      case "ShieldAlert":
        return <ShieldAlert className={iconStyle} />;
      case "Compass":
        return <Compass className={iconStyle} />;
      case "Cpu":
        return <Cpu className={iconStyle} />;
      case "BookOpen":
        return <BookOpen className={iconStyle} />;
      default:
        return <Award className={iconStyle} />;
    }
  };

  // Level calculator based on points
  const getPhilosophyLevel = (score: number) => {
    if (score >= 60) return { title: "Học Giả Thượng Hạng", desc: "Sâu rộng, kiên phóng thế giới quan biện chứng tuyệt diệu." };
    if (score >= 30) return { title: "Kẻ Khách Quan Biện Chứng", desc: "Thực hành lý luận thực tế, tránh bẫy tinh thần dogmatism." };
    return { title: "Nhà Thực Hành Sơ Khai", desc: "Vừa bắt đầu bước chân vào hành trình vượt thoát các ảo ảnh nhận thức thô sơ." };
  };

  const level = getPhilosophyLevel(progress.score);

  return (
    <div className="py-12 px-4 md:px-8 max-w-[1000px] mx-auto min-h-[70vh] animate-fade-in text-left">
      
      {/* Intro Profile card */}
      <div className="bg-white border border-[#C9B5A3] rounded-sm p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#663300]"></div>
        
        {/* User avatar mockup */}
        <div className="w-24 h-24 rounded-full bg-[#E8D5C4] text-[#663300] flex items-center justify-center text-4xl font-extrabold border-2 border-[#663300] flex-shrink-0">
          ML
        </div>

        {/* User description metadata */}
        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <h2 className="text-2xl font-black text-[#1a1c1c] font-sans">
              Học Viên Biện Chứng
            </h2>
            <span className="px-2.5 py-0.5 bg-[#663300] text-white text-[10px] font-sans font-bold uppercase tracking-wider rounded-full">
              Thành viên tích cực
            </span>
          </div>

          <p className="font-serif text-sm text-[#5d5f5f]">
            Chào mừng bạn quay lại hành trình khai phá chân lý. Hãy tiếp tục giải trắc nghiệm và thử nghiệm thực tiễn để tích lũy huân chương học thuật quý giá!
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <div className="bg-[#f9f9f9] border border-[#C9B5A3] rounded-sm px-4 py-2 flex items-center gap-2.5 text-xs text-[#1a1c1c] font-sans font-semibold">
              <Sparkles className="w-4.5 h-4.5 text-[#663300]" />
              <span>Chức danh: <strong>{level.title}</strong></span>
            </div>
            
            <div className="bg-[#E8D5C4]/20 border border-[#C9B5A3] rounded-sm px-4 py-2 flex items-center gap-2.5 text-xs text-[#663300] font-sans font-bold">
              <Award className="w-4.5 h-4.5 text-[#663300]" />
              <span>Điểm kinh nghiệm: <strong>{progress.score} XP</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid statistics metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
        
        <div className="bg-white p-5 border border-[#C9B5A3] rounded-sm flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans font-bold text-[#c6c6c7] uppercase">Tiến trình Thư học</span>
            <span className="block text-2xl font-black text-[#663300] mt-1 font-mono">{readTermsCount}/8</span>
            <span className="text-xs font-serif text-[#5d5f5f] mt-1 block">Khái niệm đã giải nghĩa</span>
          </div>
          <BookOpen className="w-10 h-10 text-[#E8D5C4]" />
        </div>

        <div className="bg-white p-5 border border-[#C9B5A3] rounded-sm flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans font-bold text-[#c6c6c7] uppercase">Bài thi Trọn vẹn</span>
            <span className="block text-2xl font-black text-[#663300] mt-1 font-mono">
              {progress.completedQuizzes.length > 0 ? "1" : "0"} / 1
            </span>
            <span className="text-xs font-serif text-[#5d5f5f] mt-1 block">Bộ đề trắc nghiệm hoàn tất</span>
          </div>
          <CheckCircle2 className="w-10 h-10 text-[#E8D5C4]" />
        </div>

        <div className="bg-white p-5 border border-[#C9B5A3] rounded-sm flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans font-bold text-[#c6c6c7] uppercase">Số giờ Tích lũy</span>
            <span className="block text-2xl font-black text-[#663300] mt-1 font-mono">25 phút</span>
            <span className="text-xs font-serif text-[#5d5f5f] mt-1 block">Tập trung nghiên cứu triệt để</span>
          </div>
          <Clock className="w-10 h-10 text-[#E8D5C4]" />
        </div>

      </div>

      {/* Badges Cabinet Cabinet */}
      <div className="space-y-6">
        <div className="border-b border-[#C9B5A3] pb-3 text-left">
          <h3 className="font-sans font-extrabold text-xl text-[#1a1c1c]">
            Tủ Huân Chương Danh Dự
          </h3>
          <p className="font-serif text-sm text-[#5d5f5f] mt-1">
            Đạt điểm tuyệt đối trắc nghiệm, giải trình AI, kích hoạt Pisa Galileo để thắp sáng huy chương.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {badges.map((badge) => {
            const unlockedBadge = progress.badges.find((b) => b.id === badge.id);
            const isUnlocked = !!unlockedBadge;
            
            return (
              <div
                key={badge.id}
                className={`p-5 border rounded-sm flex gap-4 transition-all ${
                  isUnlocked
                    ? "border-[#663300] bg-white shadow-sm"
                    : "border-gray-200 bg-gray-50/50"
                }`}
              >
                {/* Badge Icon circle */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border ${
                  isUnlocked
                    ? "bg-[#E8D5C4] border-[#663300]"
                    : "bg-[#eeeeee] border-gray-200"
                }`}>
                  {isUnlocked ? (
                    renderIcon(badge.iconName, true)
                  ) : (
                    <Lock className="w-6 h-6 text-gray-300" />
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className={`font-sans font-bold text-sm ${isUnlocked ? "text-[#1a1c1c]" : "text-gray-400"}`}>
                      {badge.name}
                    </h4>
                    {isUnlocked ? (
                      <span className="text-[9px] font-sans font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                        ĐÃ ĐẠT
                      </span>
                    ) : (
                      <span className="text-[9px] font-sans font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-sm">
                        CHƯA ĐẠT
                      </span>
                    )}
                  </div>

                  <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed">
                    {badge.description}
                  </p>

                  {!isUnlocked ? (
                    <span className="text-[10px] font-sans font-semibold text-gray-400 block pt-1 italic">
                      Yêu cầu: {badge.requirement}
                    </span>
                  ) : (
                    <span className="text-[10px] font-sans font-bold text-[#663300] block pt-1">
                      🔋 Nhận thưởng: Hoạt động học vấn hoàn chỉnh
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
