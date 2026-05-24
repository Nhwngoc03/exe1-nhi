import React, { useState } from "react";
import { quizQuestions } from "../data";
import { QuizQuestion } from "../types";
import { CheckCircle, XCircle, AlertCircle, Sparkles, Trophy, RotateCcw, ChevronRight, ShieldCheck } from "lucide-react";

interface QuizTabProps {
  onAddPoints: (pts: number) => void;
  onCompleteQuiz: (quizId: string) => void;
  onUnlockBadge: (badgeId: string) => void;
  isBadgeUnlocked: (badgeId: string) => boolean;
}

export default function QuizTab({ onAddPoints, onCompleteQuiz, onUnlockBadge, isBadgeUnlocked }: QuizTabProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [answeredWrongCount, setAnsweredWrongCount] = useState<number>(0);

  const currentQuestion: QuizQuestion = quizQuestions[currentQuestionIdx];

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);

    const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setQuizScore((prev) => prev + currentQuestion.points);
      onAddPoints(currentQuestion.points);
    } else {
      setAnsweredWrongCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      onCompleteQuiz("quiz-main");
      // Check for perfect score badge
      if (quizScore + (selectedOption === currentQuestion.correctAnswerIndex ? currentQuestion.points : 0) === 50) {
        onUnlockBadge("badge-1");
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizScore(0);
    setQuizFinished(false);
    setAnsweredWrongCount(0);
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-[800px] mx-auto min-h-[70vh] animate-fade-in text-left">
      
      {/* Quiz finished view */}
      {quizFinished ? (
        <div className="bg-white border border-[#e1bec0] rounded-sm p-8 text-center space-y-6 shadow-sm">
          <div className="w-20 h-20 bg-[#ffd9dc] text-[#6f0022] rounded-full flex items-center justify-center mx-auto">
            <Trophy className="w-10 h-10" />
          </div>

          <h2 className="text-3xl font-black text-[#1a1c1c] font-sans">
            Kết quả Trắc nghiệm Triết học
          </h2>
          
          <p className="font-serif text-sm text-[#5d5f5f] max-w-lg mx-auto">
            Chúc mừng bạn đã hoàn tất đợt khảo cứu lý luận nhận thức và thế giới quan khách quan thành công mỹ mãn!
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-4">
            <div className="bg-[#f9f9f9] p-4 border border-[#e1bec0] rounded-sm">
              <span className="block text-3xl font-black text-[#6f0022] font-mono">{quizScore}/50</span>
              <span className="text-[10px] font-sans font-bold text-[#5c5c5c] uppercase">ĐIỂM TRẮC NGHIỆM</span>
            </div>
            <div className="bg-[#f9f9f9] p-4 border border-[#e1bec0] rounded-sm">
              <span className="block text-3xl font-black text-emerald-700 font-mono">
                {Math.round((quizScore / 50) * 100)}%
              </span>
              <span className="text-[10px] font-sans font-bold text-[#5c5c5c] uppercase">Chính xác</span>
            </div>
          </div>

          {/* Badge Unlocked Notification in Quiz */}
          {quizScore === 50 && (
            <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-sm text-xs font-serif flex items-start gap-3 text-left max-w-md mx-auto">
              <ShieldCheck className="w-8 h-8 text-amber-600 flex-shrink-0 animate-pulse" />
              <div>
                <strong className="font-sans font-bold text-amber-950 block">🔑 Đã kích hoạt Huy hiệu Đặc biệt!</strong>
                Nhận được huy hiệu vinh dự <strong className="text-[#6f0022]">"Nhà Duy Vật Biện Chứng"</strong> vì đã vượt qua kiểm tra với số điểm tuyệt đối 50/50.
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-[#e1bec0] flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="px-6 py-3 border border-[#6f0022] text-[#6f0022] hover:bg-[#ffd9dc]/30 font-sans font-bold text-xs rounded-sm transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" /> THỬ SỨC LẠI
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Header */}
          <div className="flex justify-between items-end border-b border-[#e1bec0] pb-4">
            <div>
              <span className="text-[#6f0022] font-sans font-bold text-xs tracking-wider bg-[#ffd9dc] px-2 py-0.5 rounded-sm uppercase">
                Bài kiểm tra Độc lập
              </span>
              <h1 className="text-2xl font-extrabold text-[#1a1c1c] font-sans mt-2">
                Học thuyết và Biện chứng quan
              </h1>
            </div>
            <div className="text-right font-mono text-xs text-[#5d5f5f] font-semibold">
              CÂU {currentQuestionIdx + 1} / {quizQuestions.length}
            </div>
          </div>

          {/* Progress Indicators Bar */}
          <div className="w-full bg-[#eeeeee] h-1.5 rounded-full overflow-hidden">
            <div 
              style={{ width: `${((currentQuestionIdx + 1) / quizQuestions.length) * 100}%` }}
              className="bg-[#6f0022] h-full transition-all duration-300"
            ></div>
          </div>

          {/* Simulated Test Body Card */}
          <div className="bg-white border border-[#e1bec0] rounded-sm p-6 sm:p-8 shadow-sm space-y-6">
            
            <h3 className="font-sans font-bold text-lg sm:text-xl text-[#1a1c1c] leading-snug">
              {currentQuestion.question}
            </h3>

            {/* Options list */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectAnswer = idx === currentQuestion.correctAnswerIndex;
                
                let optionStyle = "border-[#e1bec0] bg-white text-[#1a1c1c] hover:border-[#6f0022] hover:bg-[#ffd9dc]/10";
                
                if (isAnswered) {
                  if (isCorrectAnswer) {
                    optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                  } else if (isSelected) {
                    optionStyle = "border-red-500 bg-red-50 text-red-950";
                  } else {
                    optionStyle = "border-[#eeeeee] bg-white text-gray-300 cursor-not-allowed";
                  }
                } else if (isSelected) {
                  optionStyle = "border-[#6f0022] bg-[#ffd9dc]/20 text-[#6f0022] font-semibold";
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleOptionSelect(idx)}
                    className={`w-full p-4 border text-left rounded-sm font-serif text-sm transition-all flex items-center justify-between group ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-5 h-5 flex items-center justify-center rounded-sm text-[10px] font-mono font-bold flex-shrink-0 mt-0.5 border ${
                        isSelected 
                          ? "bg-[#6f0022] text-white border-[#6f0022]" 
                          : "bg-[#eeeeee] text-[#5d5f5f] border-[#e1bec0] group-hover:border-[#6f0022]/40"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswered && isCorrectAnswer && (
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-3" />
                    )}
                    {isAnswered && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-0.5 h-0.5 text-red-600 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Display Box */}
            {isAnswered && (
              <div className="p-5 bg-[#f9f9f9] border border-[#e1bec0] rounded-sm font-serif text-xs text-slate-800 leading-relaxed text-justify space-y-2 animate-fade-in">
                <div className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase text-[#6f0022]">
                  <AlertCircle className="w-4 h-4" />
                  <span>Giải nghĩa chi tiết:</span>
                </div>
                <p>{currentQuestion.explanation}</p>
                <span className="text-[10px] font-sans font-bold text-emerald-700 block mt-2">
                  {selectedOption === currentQuestion.correctAnswerIndex ? "🔋 LỜI GIẢI ĐÚNG. NHẬN NGAY +10 ĐIỂM!" : "💡 HÃY SUY NGẪM THÊM ĐIỀU NÀY!"}
                </span>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#e1bec0] flex justify-end">
              {!isAnswered ? (
                <button
                  type="button"
                  disabled={selectedOption === null}
                  onClick={handleAnswerSubmit}
                  className="px-6 py-3 bg-[#6f0022] text-white font-sans font-bold text-xs tracking-wider uppercase rounded-sm hover:shadow active:scale-95 transition-all disabled:opacity-50"
                >
                  XÁC NHẬN ĐÁP ÁN
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-[#990033] hover:bg-[#6f0022] text-white font-sans font-bold text-xs tracking-wider uppercase rounded-sm hover:shadow active:scale-95 transition-all flex items-center gap-1"
                >
                  {currentQuestionIdx < quizQuestions.length - 1 ? (
                    <>
                      CÂU HỎI TIẾP THEO <ChevronRight className="w-4 h-4" />
                    </>
                  ) : (
                    "HOÀN TẤT KIỂM TRA"
                  )}
                </button>
              )}
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
