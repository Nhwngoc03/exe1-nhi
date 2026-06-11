import React from "react";
import { BookOpen, Map, Sparkles, BookMarked, Trophy } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userPoints: number;
}

export default function Header({ activeTab, setActiveTab, userPoints }: HeaderProps) {
  return (
    <>
      <header className="flex justify-between items-center px-4 md:px-8 h-16 w-full fixed top-0 z-50 bg-[#f9f9f9]/90 backdrop-blur-md border-b border-[#C9B5A3] transition-all">
        <div 
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setActiveTab("curriculum")}
        >
          <BookOpen className="text-[#663300] w-6 h-6 animate-pulse" />
          <span className="text-xl font-bold tracking-tight text-[#663300] font-sans">
            Nhóm 3
          </span>
          <span className="hidden sm:inline-block text-xs bg-[#E8D5C4] text-[#663300] px-2 py-0.5 rounded-full font-sans font-medium">
            Mác - Lênin
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center h-full">
          {[
            { id: "curriculum", label: "Lộ trình" },
            { id: "library", label: "Thư viện" },
            { id: "leaderboard", label: "Xếp hạng" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-sans text-sm font-semibold tracking-wider uppercase h-full border-b-2 px-1 transition-all ${
                  isActive
                    ? "border-[#663300] text-[#663300] font-bold"
                    : "border-transparent text-[#8B7355] hover:text-[#663300]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-[#E8D5C4] text-[#663300] px-3 py-1 rounded-sm text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{userPoints} ĐIỂM</span>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Fixed Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 pb-safe bg-white border-t border-[#C9B5A3] shadow-lg">
        {[
          { id: "curriculum", label: "Lộ trình", icon: Map },
          { id: "library", label: "Thư viện", icon: BookMarked },
          { id: "leaderboard", label: "Xếp hạng", icon: Trophy },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full py-2 transition-all ${
                isActive ? "text-[#663300] font-bold" : "text-[#8B7355]"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "scale-110 text-[#663300]" : ""}`} />
              <span className="text-[10px] mt-1 font-sans font-medium tracking-wide">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
