import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RoleOfPhilosophy from "./components/RoleOfPhilosophy";
import PracticalitySection from "./components/PracticalitySection";
import CognitiveProcess from "./components/CognitiveProcess";
import DistortedPerception from "./components/DistortedPerception";
import VerificationOfCognition from "./components/VerificationOfCognition";
import TruthSection from "./components/TruthSection";
import LibraryTab from "./components/LibraryTab";
import QuizTab from "./components/QuizTab";
import LeaderboardTab from "./components/LeaderboardTab";
import { submitScore } from "./utils/leaderboard";


import { UserProgress, Badge } from "./types";
import { badges, scenarios } from "./data";
import { Sparkles, ArrowRight, AlertCircle, BookOpen, Clock, PlaySquare } from "lucide-react";

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
  // loi deploy
  // loi deployyy fix đ đưođư

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

  const handleSubmitScore = async (name: string, score: number): Promise<boolean> => {
    try {
      return await submitScore(name, score);
    } catch (e) {
      console.error("Lỗi gửi điểm:", e);
      return false;
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
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] selection:bg-[#E8D5C4] selection:text-[#663300]">
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
            <CognitiveProcess onAddPoints={addPoints} />

            {/* Chapter IV: Distorted Perception and Factors Affecting Cognition */}
            <DistortedPerception onAddPoints={addPoints} />

            {/* Chapter V: Verification of Cognition and Truth through Practice */}
            <VerificationOfCognition onAddPoints={addPoints} />

            {/* Concept section explaining Truth */}
            <TruthSection />

            {/* Quick entry links to test quiz */}
            <section className="bg-white py-14 border-t border-b border-[#C9B5A3] px-6 text-center">
              <div className="max-w-[850px] mx-auto space-y-6">
                <span className="text-[10px] sm:text-xs font-sans font-extrabold text-[#663300] tracking-widest uppercase bg-[#E8D5C4] px-2.5 py-1 rounded-sm">
                  Đánh giá lý thuyết
                </span>
                <h3 className="font-sans font-black text-2xl text-[#1a1c1c] tracking-tight">
                  Sẵn sàng giải mã học thuyết Triết học để kiểm danh hiệu?
                </h3>
                <p className="font-serif text-sm text-[#8B7355] leading-relaxed max-w-xl mx-auto">
                  Trải nghiệm đợt trắc nghiệm độc lập giúp ghi nhớ sâu sắc các quy luật cơ bản của ý thức và thế giới quan khoa học.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setActiveTab("quiz")}
                    className="bg-[#663300] hover:bg-[#8B5A2B] text-white font-sans font-bold text-xs tracking-widest px-8 py-3.5 rounded-sm transition-all"
                  >
                    MỞ ĐỀ KIỂM TRA TRẮC NGHIỆM
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

        {/* Tab 4: Đánh giá trắc nghiệm chính thức */}
        {activeTab === "quiz" && (
          <QuizTab 
            onAddPoints={addPoints} 
            onCompleteQuiz={handleCompleteQuiz} 
            onUnlockBadge={unlockBadge} 
            isBadgeUnlocked={isBadgeUnlocked} 
            onSubmitScore={handleSubmitScore}
            onGoToLeaderboard={() => setActiveTab("leaderboard")}
          />
        )}

        {/* Tab 5: Bảng xếp hạng */}
        {activeTab === "leaderboard" && (
          <LeaderboardTab 
            userPoints={userPoints} 
          />
        )}
      </main>

      {/* Structured Footer Area which coordinates link responses */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
