import React, { useState } from "react";
import { libraryTerms } from "../data";
import { LibraryTerm } from "../types";
import { Search, BookOpen, Bookmark, HelpCircle, ArrowRight, Loader2, Minimize2, Sparkles } from "lucide-react";

interface LibraryTabProps {
  onAddPoints: (pts: number) => void;
  onReadTerm: (termId: string) => void;
  readTerms: string[];
}

export default function LibraryTab({ onAddPoints, onReadTerm, readTerms }: LibraryTabProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTerm, setActiveTerm] = useState<LibraryTerm | null>(null);

  // AI Assistant section state
  const [userQuestion, setUserQuestion] = useState<string>("");
  const [aiAnswer, setAiAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  const handleAskAI = async () => {
    if (!userQuestion.trim()) return;
    setLoading(true);
    setErrorText("");
    setAiAnswer("");

    try {
      const response = await fetch("/api/gemini/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: userQuestion,
          mode: "assistant"
        })
      });

      const data = await response.json();
      if (response.ok && data.text) {
        setAiAnswer(data.text);
        onAddPoints(10); // Reward active questioning
      } else {
        setErrorText(data.error || "Không thể kết nối học bổng giáo dục ảo tại thời điểm này.");
      }
    } catch (err) {
      console.error(err);
      setErrorText("Lỗi máy chủ kết nối trí tuệ giáo dục.");
    } finally {
      setLoading(false);
    }
  };

  const filteredTerms = libraryTerms.filter((item) => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const categories = ["All", "Duy vật biện chứng", "Duy vật lịch sử", "Lý luận nhận thức", "Chân lý"];

  const selectTerm = (term: LibraryTerm) => {
    setActiveTerm(term);
    if (!readTerms.includes(term.id)) {
      onReadTerm(term.id);
    }
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-[1200px] mx-auto min-h-[70vh] animate-fade-in text-left">
      
      {/* Upper header section */}
      <div className="mb-12">
        <span className="text-[#6f0022] font-sans font-bold text-xs tracking-wider uppercase bg-[#ffd9dc] px-2.5 py-1 rounded-sm">
          Tài nguyên Tri thức
        </span>
        <h1 className="text-3xl font-extrabold text-[#1a1c1c] font-sans mt-3">
          Thư viện Thuật ngữ Triết học Mác - Lênin
        </h1>
        <p className="font-serif text-sm text-[#5d5f5f] mt-2 max-w-3xl">
          Tra cứu, nghiên cứu định nghĩa chuẩn xác nhất của các khái niệm cơ bản cùng ví dụ thực tế liên hệ trực quan sinh động nhất.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Term Explorer Database (Spans 7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5d5f5f] w-4.5 h-4.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm vật chất, thực tiễn, chân lý..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e1bec0] rounded-sm text-sm font-sans focus:ring-1 focus:ring-[#6f0022] focus:border-[#6f0022] focus:outline-none"
              />
            </div>

            {/* Category Select Filters */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2.5 px-4 bg-white border border-[#e1bec0] rounded-sm text-xs font-sans font-semibold text-[#1a1c1c] focus:outline-none focus:ring-1 focus:ring-[#6f0022]"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat === "All" ? "Tất cả học phần" : cat}
                </option>
              ))}
            </select>

          </div>

          {/* Catalog grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredTerms.map((item) => {
              const isRead = readTerms.includes(item.id);
              const isSelected = activeTerm?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => selectTerm(item)}
                  className={`p-5 border cursor-pointer select-none transition-all rounded-sm flex flex-col justify-between relative ${
                    isSelected
                      ? "border-[#6f0022] bg-[#ffd9dc]/10 shadow-sm"
                      : "border-[#e1bec0] bg-white hover:border-[#6f0022]"
                  }`}
                >
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {isRead ? (
                      <span className="text-[9px] font-sans font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-sm">
                        ĐÃ ĐỌC
                      </span>
                    ) : (
                      <span className="text-[9px] font-sans font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-sm animate-pulse">
                        MỚI
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#6f0022] tracking-wider uppercase block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-sans font-black text-base text-[#1a1c1c] mb-2 group-hover:text-[#6f0022]">
                      {item.term}
                    </h3>
                    <p className="font-serif text-xs text-[#5d5f5f] line-clamp-3 text-justify leading-relaxed">
                      {item.definition}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-dashed border-[#e1bec0] text-right font-sans text-[11px] font-semibold text-[#6f0022] flex items-center justify-end gap-1">
                    Xem chi tiết minh họa <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}

            {filteredTerms.length === 0 && (
              <div className="col-span-2 py-12 text-center text-[#5d5f5f] font-serif text-sm">
                Không tìm thấy thuật nghĩa tương ứng nào trong giáo án. Vui lòng gõ từ khóa khác.
              </div>
            )}
          </div>

        </div>

        {/* Right Side: Term Detail Viewer & AI Questioner (Spans 5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Detail card */}
          {activeTerm ? (
            <div className="bg-[#f9f9f9] border-2 border-[#6f0022] rounded-sm p-6 relative shadow-sm">
              <span className="absolute top-4 right-4 text-[9px] font-sans font-bold bg-[#ffd9dc] text-[#6f0022] px-2 py-0.5 rounded-sm uppercase tracking-wider block">
                {activeTerm.category}
              </span>

              <h4 className="font-sans font-black text-2xl text-[#6f0022] border-b border-[#e1bec0] pb-3 mb-4">
                {activeTerm.vietnameseTerm}
              </h4>

              <div className="space-y-4">
                <div>
                  <h5 className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#1a1c1c] mb-1">
                    Định nghĩa lý thuyết:
                  </h5>
                  <p className="font-serif text-sm text-[#1a1c1c] leading-relaxed text-left text-justify">
                    {activeTerm.definition}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#e1bec0] rounded-sm italic">
                  <h5 className="text-[10px] font-sans font-semibold uppercase tracking-wider text-[#6f0022] mb-1.5 not-italic">
                    Ví dụ trực quan sinh động:
                  </h5>
                  <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed text-justify">
                    {activeTerm.example}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveTerm(null)}
                className="mt-6 w-full py-2 bg-white hover:bg-[#eeeeee] text-[#1a1c1c] border border-[#e1bec0] font-sans font-bold text-xs rounded-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Minimize2 className="w-4 h-4" /> Đóng chi tiết thuật ngữ
              </button>
            </div>
          ) : (
            <div className="bg-white border border-[#e1bec0] border-dashed rounded-sm p-8 text-center text-[#5c5c5c] flex flex-col items-center justify-center min-h-[220px]">
              <BookOpen className="w-12 h-12 text-[#e1bec0] mb-3 animate-bounce" />
              <p className="font-serif text-sm">
                Vui lòng nhấn chọn bất kỳ thuật ngữ nào ở cột bên học viên để mở rộng cấu trúc tri thức khoa học.
              </p>
            </div>
          )}

          {/* AI Interactive Assistant widget */}
          <div className="bg-[#6f0022]/5 border border-[#e1bec0] rounded-sm p-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-[#6f0022] w-5 h-5 animate-pulse" />
              <h4 className="font-sans font-bold text-[#6f0022] text-sm uppercase">
                HỎI TRỢ LÝ TRIẾT HỌC 24/7 (AI Assistant)
              </h4>
            </div>
            
            <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed mb-4">
              Bạn có khúc mắc nào về Duy vật biện chứng, Duy vật lịch sử, Quy luật ngẫu nhiên hay bất cứ bài thi nào? Hãy hỏi Trợ lý Gemini để nhận đáp án rõ ràng có ví dụ trực quan.
            </p>

            <div className="space-y-3">
              <input
                type="text"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                placeholder="Câu hỏi: 'Phân biệt ý thức và bộ não người?'"
                className="w-full px-4 py-2.5 bg-white border border-[#e1bec0] rounded-sm text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#6f0022]"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAskAI();
                }}
              />

              <button
                disabled={loading || !userQuestion.trim()}
                onClick={handleAskAI}
                className="w-full py-2 px-4 bg-[#6f0022] hover:bg-[#990033] text-white font-sans font-bold text-xs tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    ĐANG KẾT NỐI HỌC GIẢ AI...
                  </>
                ) : (
                  "GỬI THẮC MẮC ĐẾN TRỢ LÝ"
                )}
              </button>
            </div>

            {/* Answer Display */}
            {(aiAnswer || errorText) && (
              <div className="mt-4 p-4 bg-white border border-[#e1bec0] rounded-sm shadow-inner animate-fade-in">
                {errorText ? (
                  <p className="font-serif text-xs text-red-800">{errorText}</p>
                ) : (
                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-extrabold text-[#6f0022] block uppercase border-b border-[#e1bec0] pb-1.5 mb-2">
                      GIẢI ĐÁP TỪ TRỢ LÝ DIALECTICA:
                    </span>
                    <p className="font-serif text-xs text-slate-800 leading-relaxed text-justify whitespace-pre-line max-h-[300px] overflow-y-auto pr-1">
                      {aiAnswer}
                    </p>
                    <div className="text-[9px] font-mono text-[#6f0022] mt-2 block font-extrabold">
                      🔋 NHẬN NGAY +10 ĐIỂM HỌC THUẬT VÌ TINH THẦN HỎI ĐÚNG!
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
