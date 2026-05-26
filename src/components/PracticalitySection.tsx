import React, { useState } from "react";
import { 
  Factory, Users, Beaker, HelpCircle, Check, ArrowRight, 
  Sun, Leaf, CloudSnow, Flower2, Hammer, Target, 
  History, BookOpen, Flame, CheckCircle, Sparkles, Quote
} from "lucide-react";

interface PracticalitySectionProps {
  onAddPoints: (pts: number) => void;
}

export default function PracticalitySection({ onAddPoints }: PracticalitySectionProps) {
  const [activeTab, setActiveTab] = useState<"concept" | "forms" | "roles">("concept");
  const [activeSeason, setActiveSeason] = useState<"spring" | "summer" | "autumn" | "winter">("spring");
  const [clickedSeasons, setClickedSeasons] = useState<string[]>(["spring"]);
  const [seasonPointsAwarded, setSeasonPointsAwarded] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<"production" | "political" | "scientific">("production");
  const [activeRole, setActiveRole] = useState<number>(0);
  const [clickedRoles, setClickedRoles] = useState<number[]>([0]);
  const [rolePointsAwarded, setRolePointsAwarded] = useState<boolean>(false);

  // Handle season click
  const handleSeasonClick = (season: "spring" | "summer" | "autumn" | "winter") => {
    setActiveSeason(season);
    if (!clickedSeasons.includes(season)) {
      const nextClicked = [...clickedSeasons, season];
      setClickedSeasons(nextClicked);
      if (nextClicked.length === 4 && !seasonPointsAwarded) {
        setSeasonPointsAwarded(true);
        onAddPoints(10);
      }
    }
  };

  // Handle role click
  const handleRoleClick = (idx: number) => {
    setActiveRole(idx);
    if (!clickedRoles.includes(idx)) {
      const nextClicked = [...clickedRoles, idx];
      setClickedRoles(nextClicked);
      if (nextClicked.length === 4 && !rolePointsAwarded) {
        setRolePointsAwarded(true);
        onAddPoints(10);
      }
    }
  };

  const seasonDetails = {
    spring: {
      label: "🌸 Mùa Xuân",
      bg: "from-[#F0E8DF] to-[#E8D5C4]/40 border-[#E8D5C4]",
      treeColor: "text-[#d97706]",
      desc: "Hoa mai nở rộ sắc vàng rực rỡ, đâm chồi nảy lộc đón năm mới ấm áp.",
      insight: "Trực quan sinh động: Thị giác trực tiếp quan sát hoa mai nở rộ vàng tươi và chồi non lộc biếc trong thực tế."
    },
    summer: {
      label: "🌿 Mùa Hạ",
      bg: "from-[#f4fcf6] to-[#dcfce7]/40 border-[#bbf7d0]",
      treeColor: "text-[#16a34a]",
      desc: "Lá mai xum xuê xanh mướt, hấp thụ ánh sáng để quang hợp tích lũy dinh dưỡng.",
      insight: "Hoạt động vật chất: Cây cối sinh trưởng, trao đổi chất hữu cơ trực tiếp với môi trường tự nhiên."
    },
    autumn: {
      label: "🍂 Mùa Thu",
      bg: "from-[#fffbeb] to-[#fef3c7]/40 border-[#fde68a]",
      treeColor: "text-[#b45309]",
      desc: "Thời tiết se lạnh, lá mai dần chuyển vàng úa và bắt đầu rụng xuống đất.",
      insight: "Quy luật vận động: Trực quan hóa tiến trình biến đổi vật lý sinh học khi lượng nhiệt giảm dần theo chu kỳ."
    },
    winter: {
      label: "❄️ Mùa Đông",
      bg: "from-[#f0f9ff] to-[#e0f2fe]/40 border-[#bae6fd]",
      treeColor: "text-[#475569]",
      desc: "Lá cây rụng sạch, cành khẳng khiu trơ trọi tích tụ nhựa sống ấp ủ nụ mai.",
      insight: "Tích lũy chuyển hóa: Sự nhẫn nại ẩn giấu sức sống bên trong, chờ thời cơ để thực hiện bước nhảy vọt sang chất mới."
    }
  };

  const characteristics = [
    {
      icon: Hammer,
      title: "1. Mang tính vật chất",
      desc: "Con người sử dụng sức lao động và công cụ vật chất để tác động và biến đổi thế giới thực tế xung quanh.",
      example: "Công nhân vận hành máy móc, nông dân trồng lúa, kỹ sư lắp ráp thiết bị."
    },
    {
      icon: Target,
      title: "2. Mang tính mục đích",
      desc: "Mọi hoạt động thực tiễn luôn hướng tới kết quả cụ thể nhằm đáp ứng các nhu cầu sống thiết thực của con người.",
      example: "Học tập chăm chỉ để thi đỗ, nghiên cứu y học gắt gao nhằm bào chế vắc-xin."
    },
    {
      icon: History,
      title: "3. Mang tính lịch sử – xã hội",
      desc: "Diễn ra trong quan hệ xã hội của loài người và liên tục biến đổi, phát triển qua các thời kỳ lịch sử khác nhau.",
      example: "Sản xuất nông nghiệp thủ công thời xưa khác biệt hoàn toàn với sản xuất nông nghiệp số tự động hóa ngày nay."
    }
  ];

  const formsData = {
    production: {
      title: "Sản xuất vật chất",
      icon: Factory,
      description: "Hình thức cơ bản và quan trọng nhất, quyết định sự sinh tồn của loài người.",
      detail: "Con người bắt buộc phải ăn, mặc, ở trước khi làm chính trị, khoa học hay nghệ thuật. Hoạt động lao động, sản xuất ra của cải nuôi sống xã hội quyết định trực tiếp toàn bộ đời sống tinh thần của loài người.",
      example: "Lao động sản xuất công nghiệp, kinh doanh thương mại, trồng trọt nông nghiệp."
    },
    political: {
      title: "Hoạt động Chính trị - Xã hội",
      icon: Users,
      description: "Tác động nhằm cải tạo các quan hệ xã hội, thúc đẩy tự do và tiến bộ văn minh.",
      detail: "Hình thức thực tiễn này hướng tới biến đổi các thiết chế chính trị, giai cấp, cơ cấu xã hội thông qua pháp luật, bầu cử hoặc phong trào cộng đồng tiến bộ vì bình quyền.",
      example: "Bầu cử đại biểu quốc hội, đấu tranh giai cấp, tham gia phong trào tình nguyện."
    },
    scientific: {
      title: "Thực nghiệm Khoa học",
      icon: Beaker,
      description: "Kiểm nghiệm giả thuyết trong điều kiện nhân tạo nghiêm ngặt phục vụ nghiên cứu.",
      detail: "Hình thức đặc biệt cho phép con người chủ động cô lập các tham số, đẩy nhanh tiến trình kiểm nghiệm để rút ra tri thức đúng đắn ứng dụng ngược lại vào sản xuất vật chất.",
      example: "Thử nghiệm lâm sàng thuốc mới, mô phỏng phản ứng hóa học trong phòng lab."
    }
  };

  const rolesData = [
    {
      title: "1. Thực tiễn là cơ sở của nhận thức",
      icon: BookOpen,
      intro: "Nhận thức bắt nguồn từ hoạt động thực tiễn trực tiếp.",
      desc: "Thông qua lao động, trải nghiệm và hoạt động thực tế, con người mới va chạm với thế giới khách quan, thu thập dữ liệu thô để hình thành nên tri thức khoa học lý luận.",
      example: "Người nông dân thông qua hoạt động trồng lúa thực tế lâu năm sẽ tự đúc kết được hiểu biết sâu sắc về thổ nhưỡng, thời tiết, mùa vụ và quy luật sâu bệnh. Tri thức này có được từ thực tế lao động chứ không tự sinh ra."
    },
    {
      title: "2. Thực tiễn là động lực của nhận thức",
      icon: Flame,
      intro: "Nhu cầu thực tiễn thúc đẩy con người không ngừng tìm tòi tri thức mới.",
      desc: "Thực tiễn liên tục đặt ra những vấn đề nan giải mới buộc con người phải động não nghiên cứu lý thuyết để giải quyết. Thực tế có nhu cầu thì khoa học mới phát triển vượt bậc.",
      example: "Nhu cầu điều trị các loại bệnh dịch hiểm nghèo trong thực tế cuộc sống thúc đẩy các nhà y học tiến hành các công trình nghiên cứu sâu, chế tạo thuốc điều trị và vắc-xin mới để bảo vệ nhân loại."
    },
    {
      title: "3. Thực tiễn là mục đích của nhận thức",
      icon: Target,
      intro: "Nhận thức là để phục vụ đời sống con người và cải tạo thế giới.",
      desc: "Mục đích cuối cùng của việc học hỏi lý thuyết không phải để cất tủ kính, mà để đưa trở lại phục vụ thực tiễn. Lý thuyết xa rời thực tiễn sẽ trở nên vô giá trị.",
      example: "Con người nghiên cứu và học tập kiến thức Marketing là để áp dụng trực tiếp vào thực tế hoạt động kinh doanh, cải tiến dịch vụ, tăng doanh số và thấu hiểu nhu cầu của khách hàng."
    },
    {
      title: "4. Thực tiễn là tiêu chuẩn kiểm tra chân lý",
      icon: CheckCircle,
      intro: "Thực tiễn là thước đo khách quan duy nhất để khẳng định lý thuyết đúng hay sai.",
      desc: "Một nhận định, lý thuyết dù logic đến mấy cũng chỉ là giả thuyết cho đến khi được thực tế chứng minh hiệu quả. Thực tiễn bổ sung, sửa đổi và hoàn thiện tri thức.",
      example: "Một loại vắc-xin mới dù được nghiên cứu bài bản trên máy tính vẫn bắt buộc phải thử nghiệm lâm sàng thực tế trên cơ thể sống để kiểm chứng hiệu quả và độ an toàn trước khi chính thức sản xuất rộng rãi."
    }
  ];

  return (
    <section className="py-16 bg-[#f9f9f9] px-6 md:px-8 border-b border-[#C9B5A3]">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[#663300] font-sans font-bold text-xs tracking-widest uppercase bg-[#E8D5C4] px-3 py-1 rounded-sm">
            Chương II: Lý luận nhận thức
          </span>
          <h2 className="text-3xl font-extrabold text-[#1a1c1c] font-sans mt-3 mb-2 tracking-tight">
            Thực Tiễn — Nền Tảng Của Nhận Thức
          </h2>
          <div className="w-12 h-1 bg-[#663300] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "concept", label: "Khái niệm & Đặc điểm" },
            { id: "forms", label: "Hình thức Thực tiễn" },
            { id: "roles", label: "Vai trò đối với Nhận thức" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`font-sans text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-full border transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#663300] text-white border-[#663300] shadow-sm"
                  : "bg-white text-[#5d5f5f] border-[#C9B5A3] hover:text-[#663300] hover:border-[#663300]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content 1: Khái niệm & Đặc điểm */}
        {activeTab === "concept" && (
          <div className="animate-fade-in text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              
              {/* Concept Text */}
              <div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-8 bg-white border border-[#C9B5A3] rounded-sm shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-[#663300] font-sans mb-4 border-b border-[#C9B5A3] pb-2">
                    Khái niệm "Thực tiễn"
                  </h3>
                  <p className="font-serif text-sm md:text-base text-[#1a1c1c] leading-relaxed mb-6 bg-[#E8D5C4]/10 p-4 border-l-4 border-[#663300]">
                    “Thực tiễn là toàn bộ những hoạt động vật chất - cảm tính có mục đích, mang tính lịch sử – xã hội của con người nhằm cải tạo tự nhiên và xã hội phục vụ nhân loại tiến bộ.”
                  </p>
                  
                  <h4 className="font-sans font-bold text-xs text-[#663300] mb-2 uppercase tracking-wide">
                    Hiểu một cách đơn giản nhất:
                  </h4>
                  <p className="font-serif text-sm text-[#5d5f5f] leading-relaxed mb-6">
                    Thực tiễn là toàn bộ các hoạt động hành động thực tế có thể nhìn thấy, sờ chạm và đo lường trực quan trong đời sống xã hội hàng ngày, chứ hoàn toàn không phải những suy nghĩ hay giả thuyết nằm im trong bộ não hay trí tưởng tượng.
                  </p>
                </div>

                <div className="bg-[#fcfcfc] border border-[#C9B5A3]/60 p-4 rounded-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#663300] font-bold text-xs">
                    <HelpCircle className="w-4 h-4" />
                    <span>HƯỚNG DẪN TƯƠNG TÁC</span>
                  </div>
                  <p className="font-serif text-xs text-[#5d5f5f]">
                    Quan sát cây mai thay đổi qua 4 mùa là ví dụ trực quan sinh động về thực tiễn. Hãy click chọn từng mùa bên phải để khám phá chu kỳ phát triển vật chất thực tế (+10 điểm)!
                  </p>
                </div>
              </div>

              {/* Seasons Interactive Visual */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className={`border p-6 rounded-sm transition-all duration-500 shadow-sm bg-gradient-to-b ${seasonDetails[activeSeason].bg}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-sans font-bold text-sm text-[#663300]">{seasonDetails[activeSeason].label}</span>
                    <Flower2 className={`w-5 h-5 animate-pulse ${seasonDetails[activeSeason].treeColor}`} />
                  </div>
                  
                  {/* Visual tree SVG */}
                  <div className="h-40 bg-white/70 border border-white rounded-sm flex items-center justify-center relative overflow-hidden mb-4 shadow-inner">
                    {/* Floating dynamic weather icons */}
                    {activeSeason === "spring" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="absolute text-xl animate-bounce" style={{ left: "20%", top: "20%" }}>🌸</span>
                        <span className="absolute text-xl animate-bounce" style={{ right: "20%", bottom: "20%" }}>🌸</span>
                        <span className="absolute text-xs opacity-40">🌸</span>
                      </div>
                    )}
                    {activeSeason === "summer" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sun className="absolute w-8 h-8 text-yellow-500/30 animate-spin" style={{ left: "10%", top: "10%", animationDuration: "12s" }} />
                        <span className="absolute text-xl" style={{ right: "15%", top: "25%" }}>🌿</span>
                        <span className="absolute text-xl" style={{ left: "20%", bottom: "15%" }}>🌿</span>
                      </div>
                    )}
                    {activeSeason === "autumn" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="absolute text-lg animate-bounce" style={{ left: "20%", top: "15%", animationDuration: "3s" }}>🍂</span>
                        <span className="absolute text-lg animate-bounce" style={{ right: "25%", top: "40%", animationDuration: "2s" }}>🍁</span>
                        <span className="absolute text-lg animate-bounce" style={{ left: "40%", bottom: "15%", animationDuration: "2.5s" }}>🍂</span>
                      </div>
                    )}
                    {activeSeason === "winter" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CloudSnow className="absolute w-7 h-7 text-[#bae6fd] animate-pulse" style={{ right: "10%", top: "10%" }} />
                        <span className="absolute text-lg animate-ping" style={{ left: "25%", top: "35%" }}>❄️</span>
                        <span className="absolute text-lg animate-ping" style={{ right: "25%", bottom: "25%" }}>❄️</span>
                      </div>
                    )}

                    {/* Tree trunk SVG */}
                    <svg className={`w-24 h-28 ${seasonDetails[activeSeason].treeColor} transition-colors duration-500`} viewBox="0 0 100 100" fill="currentColor">
                      <path d="M47 90 L53 90 L51 50 L49 50 Z" />
                      <path d="M50 60 Q30 45 25 35 Q35 40 49 55" />
                      <path d="M50 55 Q70 40 75 30 Q65 35 51 50" />
                      <path d="M50 70 Q40 55 45 40" />
                      {activeSeason === "spring" && (
                        <>
                          <circle cx="25" cy="35" r="4.5" className="fill-yellow-400" />
                          <circle cx="75" cy="30" r="4.5" className="fill-yellow-400" />
                          <circle cx="45" cy="40" r="4" className="fill-yellow-400" />
                          <circle cx="50" cy="25" r="5" className="fill-yellow-400" />
                        </>
                      )}
                      {activeSeason === "summer" && (
                        <>
                          <ellipse cx="25" cy="35" rx="8" ry="4" className="fill-green-600" />
                          <ellipse cx="75" cy="30" rx="8" ry="4" className="fill-green-600" />
                          <ellipse cx="45" cy="40" rx="7" ry="4" className="fill-green-600" />
                          <ellipse cx="50" cy="22" rx="10" ry="6" className="fill-green-600" />
                        </>
                      )}
                      {activeSeason === "autumn" && (
                        <>
                          <ellipse cx="25" cy="35" rx="6" ry="3" className="fill-amber-600" />
                          <ellipse cx="75" cy="30" rx="6" ry="3" className="fill-amber-600" />
                          <ellipse cx="45" cy="40" rx="5" ry="3" className="fill-amber-500" />
                        </>
                      )}
                      {activeSeason === "winter" && (
                        <>
                          <rect x="23" y="32" width="4" height="1.5" className="fill-white" />
                          <rect x="73" y="27" width="4" height="1.5" className="fill-white" />
                        </>
                      )}
                    </svg>
                  </div>

                  <p className="font-serif text-xs text-[#1a1c1c] leading-relaxed mb-3 font-semibold">
                    {seasonDetails[activeSeason].desc}
                  </p>
                  <p className="font-sans text-[11px] text-[#5d5f5f] leading-relaxed bg-white/60 p-3 rounded-sm border border-white/50">
                    💡 <strong className="text-[#663300]">Nhận thức:</strong> {seasonDetails[activeSeason].insight}
                  </p>
                </div>

                {/* Season Buttons */}
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {(["spring", "summer", "autumn", "winter"] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSeasonClick(s)}
                      className={`text-[10px] font-sans font-bold py-2 border rounded-sm transition-all cursor-pointer ${
                        activeSeason === s
                          ? "bg-[#663300] border-[#663300] text-white"
                          : "bg-white border-[#C9B5A3] text-[#5d5f5f] hover:bg-[#E8D5C4]/20"
                      }`}
                    >
                      {s === "spring" ? "Mùa Xuân" : s === "summer" ? "Mùa Hạ" : s === "autumn" ? "Mùa Thu" : "Mùa Đông"}
                    </button>
                  ))}
                </div>

                {/* Season reward indicator */}
                <div className="mt-4 p-3 border border-dashed border-[#C9B5A3] rounded-sm text-center">
                  {seasonPointsAwarded ? (
                    <span className="text-xs font-sans font-bold text-[#663300] flex items-center justify-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      Nhận thành công +10 điểm thực tiễn mai hoa!
                    </span>
                  ) : (
                    <span className="text-[10px] font-serif text-[#5d5f5f]">
                      Tiến trình: {clickedSeasons.length}/4 mùa đã khám phá
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Characteristics of practice */}
            <div>
              <h3 className="text-xl font-bold text-[#1a1c1c] font-sans mb-6 text-center">
                Đặc điểm cốt lõi của Thực tiễn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {characteristics.map((char, index) => {
                  const Icon = char.icon;
                  return (
                    <div key={index} className="p-6 bg-white border border-[#C9B5A3] rounded-sm shadow-sm relative group hover:border-[#663300] transition-colors">
                      <div className="absolute top-0 left-0 w-full h-1 bg-[#C9B5A3] group-hover:bg-[#663300] transition-colors"></div>
                      <div className="w-10 h-10 bg-[#E8D5C4] text-[#663300] flex items-center justify-center rounded-sm mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-sans font-bold text-base text-[#1a1c1c] mb-2">
                        {char.title}
                      </h4>
                      <p className="font-serif text-xs text-[#5d5f5f] leading-relaxed mb-4 text-justify">
                        {char.desc}
                      </p>
                      <div className="text-[11px] font-sans bg-[#fbfbfb] p-3 rounded-sm border border-[#C9B5A3]/40">
                        <strong className="text-[#663300]">Ví dụ: </strong>
                        <span className="text-[#594043] font-medium">{char.example}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab content 2: Các hình thức cơ bản */}
        {activeTab === "forms" && (
          <div className="animate-fade-in text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch mb-10">
              
              {/* Left Selector Grid (Spans 6 cols) */}
              <div className="md:col-span-6 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#663300] font-sans mb-3">
                    3 Hình thức cơ bản của Thực tiễn
                  </h3>
                  <p className="font-serif text-sm text-[#5d5f5f] leading-relaxed mb-6">
                    Hoạt động thực tiễn có cấu trúc đa dạng nhưng tập trung vào ba loại hình thức cơ bản dưới đây. Chúng liên kết biện chứng, trong đó sản xuất vật chất đóng vai trò chi phối tuyệt đối.
                  </p>
                </div>

                <div className="space-y-4">
                  {(["production", "political", "scientific"] as const).map((key) => {
                    const item = formsData[key];
                    const Icon = item.icon;
                    const isActive = activeForm === key;
                    return (
                      <div
                        key={key}
                        onClick={() => setActiveForm(key)}
                        className={`flex gap-4 p-4 border rounded-sm cursor-pointer transition-all ${
                          isActive
                            ? "border-[#663300] bg-[#E8D5C4]/20 shadow-sm"
                            : "border-[#C9B5A3]/60 hover:bg-[#eeeeee]/50 bg-white"
                        }`}
                      >
                        <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-sm ${
                          isActive ? "bg-[#663300] text-white" : "bg-[#E8D5C4] text-[#663300]"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-sm text-[#1a1c1c] mb-1 flex items-center gap-2">
                            {item.title}
                            {isActive && <Check className="w-3.5 h-3.5 text-[#663300]" />}
                          </h4>
                          <p className="font-serif text-xs text-[#5d5f5f]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Detail Panel (Spans 6 cols) */}
              <div className="md:col-span-6 bg-white border border-[#C9B5A3] rounded-sm p-6 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-6 translate-y-6">
                  {React.createElement(formsData[activeForm].icon, { className: "w-64 h-64" })}
                </div>

                <div className="z-10">
                  <span className="text-[10px] font-sans font-bold text-[#663300] tracking-wider uppercase bg-[#E8D5C4] px-2 py-0.5 rounded-sm">
                    Phân tích bản chất học thuyết
                  </span>
                  <h4 className="font-sans font-bold text-lg text-[#663300] mt-4 mb-2">
                    {formsData[activeForm].title}
                  </h4>
                  <p className="font-serif text-sm text-[#5d5f5f] leading-relaxed text-justify mb-6">
                    {formsData[activeForm].detail}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#C9B5A3]/60 bg-[#fdfdfd] p-4 rounded-sm border-l-4 border-[#663300] z-10">
                  <span className="font-sans font-bold text-xs text-[#663300] block mb-1.5 uppercase tracking-wide">
                    Ví dụ cụ thể:
                  </span>
                  <p className="font-serif text-xs text-[#594043] italic leading-relaxed">
                    {formsData[activeForm].example}
                  </p>
                </div>
              </div>
            </div>

            {/* Lenin quote banner */}
            <div className="relative overflow-hidden border border-[#C9B5A3] bg-white rounded-sm p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-[#C9B5A3] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-base italic text-[#663300] leading-relaxed font-bold">
                    "Thực tiễn là tiêu chuẩn khách quan duy nhất của chân lý."
                  </p>
                  <p className="text-[10px] font-sans font-bold text-[#5d5f5f] uppercase tracking-wider mt-1">
                    — V.I. Lê-nin • Bút ký triết học
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs bg-[#E8D5C4] text-[#663300] px-3.5 py-1.5 rounded-sm font-sans font-bold tracking-wider uppercase">
                  Mác - Lênin
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab content 3: Vai trò đối với nhận thức */}
        {activeTab === "roles" && (
          <div className="animate-fade-in text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Selector List - Span 5 */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                <div className="space-y-3">
                  {rolesData.map((role, i) => {
                    const Icon = role.icon;
                    const isActive = activeRole === i;
                    const isRead = clickedRoles.includes(i);
                    return (
                      <div
                        key={i}
                        onClick={() => handleRoleClick(i)}
                        className={`p-4 border rounded-sm cursor-pointer transition-all ${
                          isActive
                            ? "border-[#663300] bg-[#E8D5C4]/20 shadow-sm"
                            : "border-[#C9B5A3]/60 bg-white hover:bg-[#eeeeee]/40"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className={`font-sans font-bold text-sm ${isActive ? "text-[#663300]" : "text-[#1a1c1c]"}`}>
                            {role.title.split(":")[0]}
                          </h4>
                          {isRead && <CheckCircle className="w-3.5 h-3.5 text-[#663300]" />}
                        </div>
                        <p className="font-serif text-xs text-[#5d5f5f] mt-1 line-clamp-1">
                          {role.intro}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Score tracker block */}
                <div className="p-4 bg-white border border-[#C9B5A3] rounded-sm text-center">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#663300] animate-pulse" />
                    <span className="font-sans font-bold text-xs text-[#663300] uppercase tracking-wider">
                      Điểm danh học tập
                    </span>
                  </div>
                  {rolePointsAwarded ? (
                    <p className="font-sans font-semibold text-xs text-green-700">
                      🎉 Hoàn thành! Nhận thành công +10 điểm lý luận vai trò.
                    </p>
                  ) : (
                    <p className="font-serif text-xs text-[#5d5f5f]">
                      Đọc hết cả 4 vai trò của thực tiễn để tích lũy điểm: {clickedRoles.length}/4
                    </p>
                  )}
                </div>
              </div>

              {/* Right Detail Panel - Span 7 */}
              <div className="lg:col-span-7 bg-white border border-[#C9B5A3] rounded-sm p-6 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="z-10">
                  <div className="flex items-center gap-3 border-b border-[#C9B5A3]/60 pb-3 mb-4">
                    <div className="w-10 h-10 bg-[#E8D5C4] text-[#663300] flex items-center justify-center rounded-sm">
                      {React.createElement(rolesData[activeRole].icon, { className: "w-5 h-5" })}
                    </div>
                    <h3 className="font-sans font-bold text-lg text-[#663300]">
                      {rolesData[activeRole].title}
                    </h3>
                  </div>

                  <p className="font-serif text-base font-bold text-[#1a1c1c] leading-relaxed mb-3">
                    {rolesData[activeRole].intro}
                  </p>
                  <p className="font-serif text-sm text-[#5d5f5f] leading-relaxed text-justify mb-6">
                    {rolesData[activeRole].desc}
                  </p>
                </div>

                <div className="bg-[#E8D5C4]/10 border border-[#C9B5A3] p-4 rounded-sm z-10">
                  <span className="font-sans font-bold text-xs text-[#663300] block mb-2 uppercase tracking-wide">
                    🔍 Ví dụ minh họa thực tế:
                  </span>
                  <p className="font-serif text-xs text-[#594043] leading-relaxed text-justify">
                    {rolesData[activeRole].example}
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
