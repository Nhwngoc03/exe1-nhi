import React, { useState, useEffect } from "react";
import { 
  Trophy, 
  Award, 
  RefreshCw, 
  Database, 
  Settings, 
  Medal, 
  Check, 
  AlertTriangle,
  User,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { 
  fetchLeaderboard, 
  getFirebaseUrl, 
  saveFirebaseUrl, 
  LeaderboardEntry
} from "../utils/leaderboard";

interface LeaderboardTabProps {
  userPoints: number;
}

export default function LeaderboardTab({ userPoints }: LeaderboardTabProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState<boolean>(true);
  
  // Settings state
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [dbUrlInput, setDbUrlInput] = useState<string>("");
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const currentDbUrl = getFirebaseUrl();

  const loadData = async () => {
    setLoading(true);
    setError(null);
    const url = getFirebaseUrl();
    
    if (!url) {
      // Không có database, không hiển thị dữ liệu fake
      setLeaderboard([]);
      setIsDemoMode(true);
      setLoading(false);
      return;
    }

    try {
      const data = await fetchLeaderboard();
      setLeaderboard(data);
      setIsDemoMode(false);
    } catch (err: any) {
      console.error(err);
      setError("Không thể tải bảng xếp hạng trực tuyến.");
      setLeaderboard([]);
      setIsDemoMode(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    if (currentDbUrl) {
      setDbUrlInput(currentDbUrl);
    }
  }, []);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveFirebaseUrl(dbUrlInput);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setShowSettings(false);
    }, 1500);
    loadData();
  };

  const handleClearSettings = () => {
    localStorage.removeItem("dialectica_firebase_url");
    setDbUrlInput("");
    loadData();
  };

  // Tách biệt Top 3 và phần còn lại
  const topThree = leaderboard.slice(0, 3);
  const remainingPlayers = leaderboard.slice(3);

  // Helper render huy hiệu
  const renderMedal = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center text-amber-600 shadow-sm animate-bounce" style={{ animationDuration: "2s" }}>
            <Trophy className="w-5.5 h-5.5 fill-amber-400" />
          </div>
        );
      case 1:
        return (
          <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-slate-400 flex items-center justify-center text-slate-600 shadow-sm">
            <Trophy className="w-5.5 h-5.5 fill-slate-300" />
          </div>
        );
      case 2:
        return (
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border-2 border-amber-700/60 flex items-center justify-center text-amber-800 shadow-sm">
            <Trophy className="w-5.5 h-5.5 fill-amber-600/30" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-[#E8DED3] border border-[#C9B5A3] flex items-center justify-center text-[#663300] font-mono text-xs font-bold">
            {index + 1}
          </div>
        );
    }
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-[850px] mx-auto min-h-[75vh] animate-fade-in text-left">
      
      {/* Banner Tiêu đề */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#C9B5A3] pb-6 mb-8 gap-4">
        <div>
          <span className="text-[#663300] font-sans font-bold text-[10px] tracking-wider bg-[#E8D5C4] px-2 py-0.5 rounded-sm uppercase">
            Bảng Vàng Học Thuật
          </span>
          <h1 className="text-3xl font-black text-[#1a1c1c] font-sans mt-2 flex items-center gap-2">
            Đấu Trường Triết Học Mác - Lênin
          </h1>
          <p className="font-serif text-xs text-[#8B7355] mt-1">
            Nơi ghi nhận các tư duy biện chứng xuất sắc vượt qua các khảo cứu lý luận thực tiễn.
          </p>
        </div>

        <div className="flex gap-2">
          {/* Nút Refresh */}
          <button
            onClick={loadData}
            disabled={loading}
            className="p-2 border border-[#C9B5A3] text-[#663300] bg-white hover:bg-[#E8D5C4]/30 rounded-sm transition-colors flex items-center gap-1.5 font-sans font-bold text-xs"
            title="Làm mới bảng xếp hạng"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            <span>LÀM MỚI</span>
          </button>

          {/* Nút Cấu hình */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 border rounded-sm transition-colors flex items-center gap-1.5 font-sans font-bold text-xs ${
              showSettings 
                ? "border-[#663300] bg-[#663300] text-white" 
                : "border-[#C9B5A3] text-[#8B7355] bg-white hover:bg-[#E8D5C4]/30"
            }`}
            title="Cấu hình cơ sở dữ liệu"
          >
            <Database className="w-4 h-4" />
            <span>{currentDbUrl ? "ĐÃ KẾT NỐI" : "KẾT NỐI DB"}</span>
          </button>
        </div>
      </div>

      {/* Thông báo Demo Mode / Lỗi */}
      {isDemoMode && (
        <div className="p-4 bg-blue-50 border border-blue-200 text-blue-950 rounded-sm text-xs font-serif mb-6 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-sans font-bold text-blue-950">
              ℹ️ Bảng xếp hạng chưa được kết nối
            </p>
            <p>
              Để bắt đầu ghi nhận điểm số và xem bảng xếp hạng của lớp, vui lòng click vào nút <strong>"KẾT NỐI DB"</strong> ở góc trên bên phải và dán link Firebase Database của bạn.
            </p>
          </div>
        </div>
      )}

      {error && !isDemoMode && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-900 rounded-sm text-xs font-sans mb-6">
          {error}
        </div>
      )}

      {/* Cấu hình Database Panel */}
      {showSettings && (
        <div className="bg-white border border-[#C9B5A3] rounded-sm p-6 mb-8 shadow-sm space-y-4 animate-fade-in">
          <div className="flex items-center gap-2 border-b border-[#E8DED3] pb-2">
            <Settings className="w-5 h-5 text-[#663300]" />
            <h3 className="font-sans font-bold text-sm text-[#1a1c1c] uppercase">
              Cấu hình cơ sở dữ liệu Firebase
            </h3>
          </div>
          <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed">
            Nhập URL Firebase Realtime Database của bạn để kết nối trực tuyến bảng xếp hạng. Các điểm số được thi trên các thiết bị khác nhau sẽ tự động đồng bộ thời gian thực.
          </p>

          <form onSubmit={handleSaveSettings} className="space-y-3">
            <div>
              <label className="block text-[10px] font-sans font-bold text-[#8B7355] uppercase mb-1">
                URL Firebase Database
              </label>
              <input
                type="url"
                required
                placeholder="https://tên-dự-án-default-rtdb.firebaseio.com"
                value={dbUrlInput}
                onChange={(e) => setDbUrlInput(e.target.value)}
                className="w-full p-2.5 border border-[#C9B5A3] bg-[#f9f9f9] text-xs font-mono rounded-sm focus:outline-none focus:border-[#663300]"
              />
            </div>

            <div className="flex gap-2 justify-end pt-2">
              {currentDbUrl && (
                <button
                  type="button"
                  onClick={handleClearSettings}
                  className="px-4 py-2 border border-red-600 text-red-600 hover:bg-red-50 font-sans font-bold text-[10px] tracking-wider rounded-sm uppercase transition-colors"
                >
                  Ngắt kết nối
                </button>
              )}
              <button
                type="submit"
                disabled={saveSuccess}
                className="px-4 py-2 bg-[#663300] text-white hover:bg-[#8B5A2B] font-sans font-bold text-[10px] tracking-wider rounded-sm uppercase transition-all flex items-center gap-1"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> ĐÃ LƯU
                  </>
                ) : (
                  "LƯU CẤU HÌNH"
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Trạng thái Loading */}
      {loading ? (
        <div className="py-20 text-center">
          <RefreshCw className="w-8 h-8 text-[#663300] animate-spin mx-auto mb-2" />
          <p className="font-serif text-xs text-[#8B7355]">Đang truy xuất bảng xếp hạng...</p>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* TOP 3 PODIUM CARDS */}
          {topThree.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end pt-4">
              
              {/* Hạng 2 */}
              {topThree[1] && (
                <div className="bg-white border border-[#C9B5A3] rounded-sm p-5 text-center shadow-sm relative md:order-1 order-2 mt-4">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-400"></div>
                  <div className="flex justify-center mb-3">
                    {renderMedal(1)}
                  </div>
                  <h4 className="font-sans font-extrabold text-[#1a1c1c] text-sm truncate">
                    {topThree[1].name}
                  </h4>
                  <span className="block text-2xl font-black text-slate-600 font-mono mt-1">
                    {topThree[1].score} XP
                  </span>
                  <span className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest block mt-0.5">
                    HẠNG NHÌ
                  </span>
                </div>
              )}

              {/* Hạng 1 (Chính giữa, to hơn) */}
              {topThree[0] && (
                <div className="bg-white border-2 border-amber-500 rounded-sm p-6 text-center shadow-md relative md:order-2 order-1 md:scale-105 z-10">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-sans font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3 h-3 fill-amber-100 text-amber-500" />
                    Quán Quân
                  </div>
                  <div className="flex justify-center mb-3 mt-1">
                    {renderMedal(0)}
                  </div>
                  <h4 className="font-sans font-black text-[#1a1c1c] text-base truncate">
                    {topThree[0].name}
                  </h4>
                  <span className="block text-3xl font-black text-amber-600 font-mono mt-1">
                    {topThree[0].score} XP
                  </span>
                  <span className="text-[10px] font-sans font-bold text-amber-600 uppercase tracking-widest block mt-0.5">
                    DẪN ĐẦU
                  </span>
                </div>
              )}

              {/* Hạng 3 */}
              {topThree[2] && (
                <div className="bg-white border border-[#C9B5A3] rounded-sm p-5 text-center shadow-sm relative md:order-3 order-3 mt-4">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-700/60"></div>
                  <div className="flex justify-center mb-3">
                    {renderMedal(2)}
                  </div>
                  <h4 className="font-sans font-extrabold text-[#1a1c1c] text-sm truncate">
                    {topThree[2].name}
                  </h4>
                  <span className="block text-2xl font-black text-amber-800 font-mono mt-1">
                    {topThree[2].score} XP
                  </span>
                  <span className="text-[10px] font-sans font-bold text-amber-700 uppercase tracking-widest block mt-0.5">
                    HẠNG BA
                  </span>
                </div>
              )}

            </div>
          )}

          {/* Dòng hiển thị điểm số hiện tại của chính người dùng */}
          <div className="bg-[#F0E8DF] border border-[#C9B5A3] rounded-sm p-4 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#663300] text-white flex items-center justify-center">
                <User className="w-4.5 h-4.5" />
              </div>
              <div className="font-serif">
                Bạn đang tích lũy được: <strong className="font-sans text-[#663300]">{userPoints} XP</strong>
              </div>
            </div>
            <span className="text-[10px] font-sans font-bold text-[#8B7355] uppercase tracking-wider">
              {userPoints >= 45 ? "Nhà Duy Vật Thượng Hạng 🎓" : "Đang Tích Lũy Lý Luận 💡"}
            </span>
          </div>

          {/* TABLE FOR REMAINING PLAYERS */}
          <div className="bg-white border border-[#C9B5A3] rounded-sm overflow-hidden shadow-sm">
            <div className="px-5 py-4 border-b border-[#E8DED3] bg-[#fdfdfd] flex justify-between items-center">
              <h3 className="font-sans font-extrabold text-sm text-[#1a1c1c] uppercase flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#663300]" />
                Danh sách anh hào biện chứng
              </h3>
              <span className="text-[10px] font-sans font-semibold text-[#8B7355]">
                TỔNG CỘNG: {leaderboard.length} HỌC VIÊN
              </span>
            </div>

            {leaderboard.length === 0 ? (
              <div className="p-12 text-center text-[#8B7355] font-serif text-sm">
                Bảng xếp hạng hiện tại đang trống. Hãy là người đầu tiên làm kiểm tra và ghi danh!
              </div>
            ) : (
              <div className="divide-y divide-[#E8DED3]">
                {/* Trộn Top 3 vào danh sách đầy đủ nhưng hiển thị theo dòng */}
                {leaderboard.map((player, idx) => {
                  const isTopThree = idx < 3;
                  const dateStr = player.timestamp 
                    ? new Date(player.timestamp).toLocaleDateString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })
                    : "Không rõ";

                  return (
                    <div 
                      key={player.id || idx} 
                      className={`px-5 py-4 flex items-center justify-between transition-colors hover:bg-[#E8D5C4]/5 ${
                        isTopThree ? "bg-[#E8D5C4]/5" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0 mr-4">
                        {/* Hạng / Huy chương */}
                        <div className="flex-shrink-0">
                          {renderMedal(idx)}
                        </div>

                        {/* Tên & Ngày giờ */}
                        <div className="min-w-0">
                          <h5 className="font-sans font-bold text-sm text-[#1a1c1c] truncate">
                            {player.name}
                          </h5>
                          <span className="flex items-center gap-1 text-[10px] font-sans text-gray-400 mt-0.5">
                            <Calendar className="w-3 h-3" />
                            {dateStr}
                          </span>
                        </div>
                      </div>

                      {/* Điểm số */}
                      <div className="text-right flex-shrink-0">
                        <span className="text-base sm:text-lg font-black text-[#663300] font-mono">
                          {player.score} XP
                        </span>
                        <span className="block text-[8px] font-sans font-bold text-gray-400 uppercase tracking-widest">
                          ĐIỂM SỐ
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}
