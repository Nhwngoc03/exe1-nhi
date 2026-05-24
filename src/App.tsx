import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RoleOfPhilosophy from "./components/RoleOfPhilosophy";
import PracticalitySection from "./components/PracticalitySection";
import CognitiveProcess from "./components/CognitiveProcess";
import TruthSection from "./components/TruthSection";
import CaseStudy from "./components/CaseStudy";
import CognitiveDistortions from "./components/CognitiveDistortions";
import LibraryTab from "./components/LibraryTab";
import QuizTab from "./components/QuizTab";
import ProfileTab from "./components/ProfileTab";

import { UserProgress, Badge } from "./types";
import { badges, scenarios } from "./data";
import { Sparkles, ArrowRight, HelpCircle, AlertCircle, BookOpen, Clock, PlaySquare } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("curriculum");

  // Load progress states from localStorage
  const [userPoints, setUserPoints] = useState<number>(() => {
    const saved = localStorage.getItem("dialectica_points");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [unlockedBadges, setUnlockedBadges] = useState<Badge[]>(() => {
    const saved = localStorage.getItem("dialectica_badges");
    return saved ? JSON.parse(saved) : [];
  });

  const [readTerms, setReadTerms] = useState<string[]>(() => {
    const saved = localStorage.getItem("dialectica_read_terms");
    return saved ? JSON.parse(saved) : [];
  });

  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>(() => {
    const saved = localStorage.getItem("dialectica_completed");
    return saved ? JSON.parse(saved) : [];
  });

  // Scenario state
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [scenarioAnswered, setScenarioAnswered] = useState<boolean>(false);
  const [selectedScenarioOption, setSelectedScenarioOption] = useState<number | null>(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem("dialectica_points", userPoints.toString());
  }, [userPoints]);

  useEffect(() => {
    localStorage.setItem("dialectica_badges", JSON.stringify(unlockedBadges));
  }, [unlockedBadges]);

  useEffect(() => {
    localStorage.setItem("dialectica_read_terms", JSON.stringify(readTerms));

    // Check for "Học Giả Thư Viện" badge unlock
    if (readTerms.length >= 4 && !isBadgeUnlocked("badge-5")) {
      unlockBadge("badge-5");
    }
  }, [readTerms]);

  useEffect(() => {
    localStorage.setItem("dialectica_completed", JSON.stringify(completedQuizzes));
  }, [completedQuizzes]);

  // Point scoring helper
  const addPoints = (pts: number) => {
    setUserPoints((prev) => {
      const newVal = prev + pts;
      // Auto unlock "Người Đi Tìm Chân Lý" if they cross 30 points
      if (newVal >= 30 && !isBadgeUnlocked("badge-3")) {
        setTimeout(() => unlockBadge("badge-3"), 100);
      }
      return newVal;
    });
  };

  // Badge unlock helper
  const unlockBadge = (badgeId: string) => {
    if (isBadgeUnlocked(badgeId)) return;
    const badgeToUnl = badges.find((b) => b.id === badgeId);
    if (badgeToUnl) {
      const newBadge: Badge = {
        ...badgeToUnl,
        unlockedAt: new Date().toLocaleDateString("vi-VN"),
      };
      setUnlockedBadges((prev) => [...prev, newBadge]);
    }
  };

  const isBadgeUnlocked = (badgeId: string) => {
    return unlockedBadges.some((b) => b.id === badgeId);
  };

  const handleReadTerm = (termId: string) => {
    if (!readTerms.includes(termId)) {
      setReadTerms((prev) => [...prev, termId]);
    }
  };

  const handleCompleteQuiz = (quizId: string) => {
    if (!completedQuizzes.includes(quizId)) {
      setCompletedQuizzes((prev) => [...prev, quizId]);
    }
  };

  const handleScenarioOptionSelect = (idx: number) => {
    if (scenarioAnswered) return;
    setSelectedScenarioOption(idx);
  };

  const submitScenarioAnswer = () => {
    if (selectedScenarioOption === null || scenarioAnswered) return;
    setScenarioAnswered(true);

    const isCorrect = scenarios[activeScenarioIdx].options[selectedScenarioOption].isCorrect;
    if (isCorrect) {
      addPoints(15);
    }
  };

  const handleNextScenario = () => {
    setSelectedScenarioOption(null);
    setScenarioAnswered(false);
    setActiveScenarioIdx((prev) => (prev + 1) % scenarios.length);
  };

  // Switch to top layout or scroll cleanly
  const startLearningFlow = () => {
    setActiveTab("curriculum");
    setTimeout(() => {
      document.getElementById("role-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const learnMoreFlow = () => {
    setActiveTab("library");
  };

  const progressObj: UserProgress = {
    completedQuizzes,
    score: userPoints,
    badges: unlockedBadges,
    learningTimeMinutes: 25,
    correctAnswersCount: 0,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#ffd9dc] selection:text-[#6f0022]">
      {/* Structural Header Area with reactive points summary */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        userPoints={userPoints} 
      />

      <main className="flex-grow pt-16 pb-16 md:pb-0">
        {activeTab === "curriculum" && (
          <div className="animate-fade-in">
            {/* Elegant Hero Frame containing hotlinked graphics */}
            <Hero 
              onStartClicked={startLearningFlow} 
              onLearnMoreClicked={learnMoreFlow} 
            />

            {/* Interactive Worldview & Methodology Comparison Frame */}
            <RoleOfPhilosophy 
              onAddPoints={addPoints} 
              unlockedTermsCount={readTerms.length} 
            />

            {/* Practicality Section demonstrating industrial facility graphics */}
            <PracticalitySection 
              onAddPoints={addPoints} 
            />

            {/* Epistemological Cognitive Timeline showing Sensorial & Mental progress */}
            <CognitiveProcess />

            {/* Concept section explaining Truth */}
            <TruthSection />

            {/* Quick entry links to test quiz */}
            <section className="bg-white py-14 border-t border-b border-[#e1bec0] px-6 text-center">
              <div className="max-w-[850px] mx-auto space-y-6">
                <span className="text-[10px] sm:text-xs font-sans font-extrabold text-[#6f0022] tracking-widest uppercase bg-[#ffd9dc] px-2.5 py-1 rounded-sm">
                  Đánh giá lý thuyết
                </span>
                <h3 className="font-sans font-black text-2xl text-[#1a1c1c] tracking-tight">
                  Sẵn sàng giải mã học thuyết Triết học để kiểm danh hiệu?
                </h3>
                <p className="font-serif text-sm text-[#5d5f5f] leading-relaxed max-w-xl mx-auto">
                  Trải nghiệm đợt trắc nghiệm độc lập giúp ghi nhớ sâu sắc các quy luật cơ bản của ý thức và thế giới quan khoa học.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setActiveTab("quiz")}
                    className="bg-[#6f0022] hover:bg-[#990033] text-white font-sans font-bold text-xs tracking-widest px-8 py-3.5 rounded-sm transition-all"
                  >
                    MỞ ĐỀ KIỂM TRA TRẮC NGHIỆM
                  </button>
                  <button
                    onClick={() => setActiveTab("practice")}
                    className="border border-[#6f0022] text-[#6f0022] hover:bg-[#ffd9dc]/20 font-sans font-bold text-xs tracking-widest px-8 py-3.5 rounded-sm transition-all"
                  >
                    MỞ KHU THỰC TIỄN & AI
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Thư viện (Term Search & AI Assistant Question Box) */}
        {activeTab === "library" && (
          <LibraryTab 
            onAddPoints={addPoints} 
            onReadTerm={handleReadTerm} 
            readTerms={readTerms} 
          />
        )}

        {/* Tab 3: Thực tiễn & AI (Case Study Galileo and Cognitive bias, and scenarios) */}
        {activeTab === "practice" && (
          <div className="animate-fade-in">
            {/* Deep practice educational prompt */}
            <div className="py-12 px-6 max-w-[1200px] mx-auto text-left">
              <span className="text-[#6f0022] font-sans font-bold text-xs tracking-wider bg-[#ffd9dc] px-2.5 py-1 rounded-sm">
                XƯỞNG THỰC HÀNH & AI
              </span>
              <h1 className="text-3xl font-extrabold text-[#1a1c1c] font-sans mt-3">
                Thực tiễn & Áp dụng Tư duy Biện chứng
              </h1>
              <p className="font-serif text-sm text-[#5d5f5f] mt-2">
                Trải nghiệm thực tế thông qua mô phỏng tháp Pisa của Galileo, xử lý tin đồn mạng xã hội, và sử dụng trí tuệ nhân tạo Gemini để phân tích bẫy cảm tính.
              </p>
            </div>

            {/* Scenario simulator layout */}
            <div className="bg-[#f9f9f9] border-t border-b border-[#e1bec0] py-12 px-6">
              <div className="max-w-[1200px] mx-auto text-left space-y-6">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#6f0022]" />
                  <span className="font-sans font-bold text-xs text-[#1a1c1c] uppercase tracking-wide">
                    TÌNH HUỐNG THỰC TẾ: {scenarios[activeScenarioIdx].topic}
                  </span>
                </div>

                <div className="bg-white border border-[#e1bec0] rounded-sm p-6 space-y-4 shadow-sm">
                  <h3 className="font-sans font-bold text-lg text-[#1a1c1c]">
                    {scenarios[activeScenarioIdx].title}
                  </h3>
                  <p className="font-serif text-sm text-[#5d5f5f] leading-relaxed text-justify">
                    {scenarios[activeScenarioIdx].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {scenarios[activeScenarioIdx].options.map((option, idx) => {
                      const isSelected = selectedScenarioOption === idx;
                      let btnStyle = "border-[#e1bec0] bg-white group-hover:border-[#6f0022]";
                      
                      if (scenarioAnswered) {
                        if (option.isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-950 font-bold";
                        } else if (isSelected) {
                          btnStyle = "border-red-500 bg-red-50 text-red-950";
                        } else {
                          btnStyle = "border-gray-100 bg-gray-50/20 text-gray-300";
                        }
                      } else if (isSelected) {
                        btnStyle = "border-[#6f0022] bg-[#ffd9dc]/20 text-[#6f0022] font-semibold";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={scenarioAnswered}
                          onClick={() => handleScenarioOptionSelect(idx)}
                          className={`w-full text-left p-4 border text-xs font-serif rounded-sm transition-all flex items-start gap-3 group ${btnStyle}`}
                        >
                          <span className={`w-4.5 h-4.5 flex-shrink-0 flex items-center justify-center rounded-sm text-[9px] font-mono font-bold mt-0.5 border ${
                            isSelected ? "bg-[#6f0022] text-white border-[#6f0022]" : "bg-gray-100 border-[#e1bec0]"
                          }`}>
                            {idx + 1}
                          </span>
                          <span>{option.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {scenarioAnswered && (
                    <div className="p-4 bg-[#f9f9f9] border border-[#e1bec0] rounded-sm text-xs font-serif leading-relaxed text-justify animate-fade-in">
                      {scenarios[activeScenarioIdx].options[selectedScenarioOption!].isCorrect ? (
                        <strong className="text-emerald-700 block mb-1 font-sans">🎉 Nhận thức chuẩn xác! Rinh thêm +15 điểm học thuật.</strong>
                      ) : (
                        <strong className="text-red-800 block mb-1 font-sans">
                          ⚠️ Nhầm lẫn nhận thức: {scenarios[activeScenarioIdx].options[selectedScenarioOption!].biasSelected || "Bảo thủ"}
                        </strong>
                      )}
                      <p>{scenarios[activeScenarioIdx].options[selectedScenarioOption!].explanation}</p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-[#e1bec0] border-dashed flex justify-end">
                    {!scenarioAnswered ? (
                      <button
                        type="button"
                        disabled={selectedScenarioOption === null}
                        onClick={submitScenarioAnswer}
                        className="px-5 py-2.5 bg-[#6f0022] hover:bg-[#990033] text-white font-sans font-bold text-xs tracking-wider rounded-sm uppercase transition-all disabled:opacity-45"
                      >
                        NỘP LỜI GIẢI TỔNG HỢP
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleNextScenario}
                        className="px-5 py-2.5 border border-[#6f0022] text-[#6f0022] hover:bg-[#ffd9dc]/30 font-sans font-bold text-xs tracking-wider rounded-sm uppercase transition-all"
                      >
                        CHUYỂN SANG BÀI KẾ TIẾP
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Galileo Scientific Experiment and Pisa simulation section */}
            <CaseStudy 
              onUnlockBadge={unlockBadge} 
              onAddPoints={addPoints} 
              isBadgeUnlocked={isBadgeUnlocked} 
            />

            {/* AI News Analyzer and Fake News Bias classifier section */}
            <CognitiveDistortions 
              onAddPoints={addPoints} 
              onUnlockBadge={unlockBadge} 
              isBadgeUnlocked={isBadgeUnlocked} 
            />
          </div>
        )}

        {/* Tab 4: Đánh giá trắc nghiệm chính thức */}
        {activeTab === "quiz" && (
          <QuizTab 
            onAddPoints={addPoints} 
            onCompleteQuiz={handleCompleteQuiz} 
            onUnlockBadge={unlockBadge} 
            isBadgeUnlocked={isBadgeUnlocked} 
          />
        )}

        {/* Tab 5: Hồ sơ (Stats & Badges collection cabinet cabinet) */}
        {activeTab === "profile" && (
          <ProfileTab 
            progress={progressObj} 
            readTermsCount={readTerms.length} 
          />
        )}
      </main>

      {/* Structured Footer Area which coordinates link responses */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
