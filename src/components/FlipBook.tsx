import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, List, X, BookOpen } from "lucide-react";

// ─── Image helper ─────────────────────────────────────────────────────────────
const IMG = (name: string) =>
  `https://truth-and-cognition.netlify.app/assets/images/book/${name}`;

// ─── Shared sub-components ────────────────────────────────────────────────────
const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="block text-[9px] font-mono font-bold text-[#663300] tracking-widest uppercase mb-1">
    {children}
  </span>
);

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-2 border-[#663300] pl-3 py-1 bg-[#E8D5C4]/30 my-2">
    <p className="text-[11px] font-serif text-[#1a1c1c] leading-relaxed italic">{children}</p>
  </div>
);

const BookImg = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <div className="my-2">
    <img src={src} alt={alt}
      className="w-full rounded-sm object-cover max-h-36 shadow-sm"
      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
    />
    {caption && <p className="text-[9px] text-center text-[#8B7355] italic mt-1 font-serif">{caption}</p>}
  </div>
);

// ─── TOC ─────────────────────────────────────────────────────────────────────
interface TocEntry { spread: number; label: string; chapter?: string; }

const TOC: TocEntry[] = [
  { spread: 0, label: "Bìa & Mục lục" },
  { spread: 1, label: "Nhận định của Karl Marx", chapter: "Mở vấn đề" },
  { spread: 2, label: "Lý luận phải đi qua đời sống", chapter: "1" },
  { spread: 3, label: "Thực tiễn là tiêu chuẩn kiểm nghiệm", chapter: "2" },
  { spread: 4, label: "Sơ đồ nhận thức & Cảm tính", chapter: "3-4" },
  { spread: 5, label: "Nhận thức lý tính & Trở về thực tiễn", chapter: "5-6" },
  { spread: 6, label: "Quan hệ biện chứng & Rủi ro số", chapter: "7-8" },
  { spread: 7, label: "Kiểm chứng & Galileo", chapter: "9-10" },
  { spread: 8, label: "Chân lý & Quan hệ song trùng", chapter: "11-12" },
  { spread: 9, label: "Kết luận & Tài liệu", chapter: "Kết" },
];

// ─── All 20 pages (2 per spread × 10 spreads) ────────────────────────────────

const P: React.ReactNode[] = [

  // ── Page 0 : Cover ──────────────────────────────────────────────────────────
  <div key="p0" className="flex flex-col items-center justify-center h-full text-center gap-3 p-4"
    style={{ background: "linear-gradient(160deg,#3d1a00 0%,#7a3a00 60%,#a05a20 100%)" }}>
    <img src={IMG("marx-printshop.jpg")} alt="Cover"
      className="w-2/3 max-w-[160px] rounded shadow-lg border-2 border-[#a07040]"
      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
    <div>
      <p className="text-[10px] font-mono text-[#E8D5C4] tracking-widest uppercase">MLN111 · Nhóm 3</p>
      <h1 className="text-xl font-black text-white leading-tight mt-1">Lý luận<br/>Nhận thức</h1>
      <p className="text-[11px] font-serif text-[#E8D5C4]/80 mt-1 italic">
        Thực tiễn là tiêu chuẩn kiểm nghiệm tri thức
      </p>
    </div>
    <p className="text-[10px] text-[#E8D5C4]/50 mt-2 animate-pulse">Nhấn › để đọc</p>
  </div>,

  // ── Page 1 : TOC ────────────────────────────────────────────────────────────
  <div key="p1" className="p-5 h-full overflow-y-auto">
    <h2 className="text-base font-black text-[#663300] font-sans border-b border-[#C9B5A3] pb-2 mb-3">Mục lục</h2>
    <ul className="space-y-1.5">
      {TOC.filter(e => e.chapter).map((e) => (
        <li key={e.spread} className="flex items-start gap-2">
          <span className="shrink-0 text-[9px] font-mono font-bold text-white bg-[#663300] px-1.5 py-0.5 rounded-sm min-w-[24px] text-center">
            {e.chapter}
          </span>
          <span className="text-[11px] font-serif text-[#1a1c1c] leading-snug">{e.label}</span>
        </li>
      ))}
    </ul>
    <p className="text-[10px] italic text-[#8B7355] text-center mt-4 font-serif">Triết học Mác - Lênin</p>
  </div>,

  // ── Page 2 : Marx quote ──────────────────────────────────────────────────────
  <div key="p2" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>Mở vấn đề</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Nhận định của Karl Marx</h2>
    <BookImg src={IMG("karl-marx-portrait.jpg")} alt="Karl Marx" />
    <blockquote className="border-l-2 border-[#663300] pl-3 bg-[#E8D5C4]/30 py-2 pr-2">
      <p className="text-[11px] font-serif italic text-[#1a1c1c] leading-relaxed">
        "Vấn đề tìm hiểu xem tư duy của con người có thể đạt tới chân lý khách quan không,
        hoàn toàn không phải là một vấn đề lý luận mà là một vấn đề <strong>thực tiễn</strong>."
      </p>
      <p className="text-[9px] text-[#8B7355] mt-1 not-italic">— C. Mác, Luận cương về Feuerbach, 1845</p>
    </blockquote>
    <p className="text-[11px] font-serif text-[#5d5f5f] leading-relaxed">
      <strong>Hiểu đơn giản:</strong> đừng chỉ tranh cãi lý thuyết — hãy mang nhận định ra thử nghiệm trong thực tế.
    </p>
    <Callout>Chân lý không thể chỉ xác định bằng suy nghĩ — phải đưa vào thực tiễn để kiểm tra.</Callout>
  </div>,

  // ── Page 3 : Lý luận → thực tiễn ───────────────────────────────────────────
  <div key="p3" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>1 · Từ lý luận đến thực tiễn</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Lý luận phải đi qua đời sống</h2>
    <BookImg src={IMG("scholar-practice.jpg")} alt="Lý luận và thực tiễn" caption="Lý luận chỉ có ý nghĩa khi kiểm nghiệm trong thực tiễn." />
    <div className="grid grid-cols-2 gap-2">
      <div className="border border-[#C9B5A3] rounded-sm p-2 bg-white">
        <p className="text-[9px] font-mono font-bold text-[#663300] uppercase mb-1">Lý luận suông</p>
        <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">Chặt chẽ về suy luận nhưng sai nếu không phù hợp hiện thực.</p>
      </div>
      <div className="border border-[#663300] bg-[#E8D5C4]/20 rounded-sm p-2">
        <p className="text-[9px] font-mono font-bold text-[#663300] uppercase mb-1">Kiểm nghiệm</p>
        <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">Đưa tri thức vào hoạt động để xem nó có cải biến được hiện thực.</p>
      </div>
    </div>
    <Callout>Lý luận đúng không chỉ để hiểu, mà để hành động đúng và cải biến hiện thực.</Callout>
  </div>,

  // ── Page 4 : Tiêu chuẩn kiểm nghiệm ─────────────────────────────────────────
  <div key="p4" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>2 · Tiêu chuẩn kiểm nghiệm</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Thực tiễn là "trọng tài" duy nhất</h2>
    <BookImg src={IMG("theory-practice-bridge.jpg")} alt="Cầu nối lý thuyết" caption="Thực tiễn là nơi lý luận được kiểm chứng." />
    <div className="space-y-1.5">
      <div className="flex gap-2 items-start bg-[#E8D5C4]/20 p-2 rounded-sm border border-[#C9B5A3]">
        <span className="text-[9px] font-mono font-bold text-white bg-[#663300] px-1 py-0.5 rounded-sm shrink-0">KD</span>
        <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">Mô hình kinh doanh chỉ xác nhận khi vận hành thật: có khách hàng, có doanh thu.</p>
      </div>
      <div className="flex gap-2 items-start bg-[#E8D5C4]/20 p-2 rounded-sm border border-[#C9B5A3]">
        <span className="text-[9px] font-mono font-bold text-white bg-[#663300] px-1 py-0.5 rounded-sm shrink-0">YH</span>
        <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">Vaccine phải qua thử nghiệm lâm sàng — niềm tin chưa đủ gọi là chân lý.</p>
      </div>
    </div>
    <Callout>Chân lý không được quyết định bởi số đông; nó phải kiểm nghiệm trong thực tiễn.</Callout>
  </div>,

  // ── Page 5 : Sơ đồ nhận thức ─────────────────────────────────────────────────
  <div key="p5" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>3 · Sơ đồ nhận thức</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Cảm tính → Lý tính → Thực tiễn</h2>
    <div className="flex gap-1 items-center justify-between my-2">
      {[{ n:"01", l:"Khách thể" }, { n:"02", l:"Cảm tính" }, { n:"03", l:"Lý tính" }, { n:"04", l:"Thực tiễn" }]
        .map((s, i, arr) => (
        <React.Fragment key={s.n}>
          <div className="text-center flex-1">
            <div className="w-7 h-7 rounded-full bg-[#663300] text-white text-[9px] font-mono font-bold flex items-center justify-center mx-auto">{s.n}</div>
            <p className="text-[9px] font-sans font-bold text-[#663300] mt-1">{s.l}</p>
          </div>
          {i < arr.length - 1 && <span className="text-[#C9B5A3] text-xs">›</span>}
        </React.Fragment>
      ))}
    </div>
    <BookImg src={IMG("thinking-cognition.jpg")} alt="Quá trình nhận thức" />
    <div className="grid grid-cols-3 gap-1 text-center text-[9px]">
      {["Cảm tính: dữ liệu", "Lý tính: bản chất", "Thực tiễn: kiểm tra"].map((t, i) => (
        <div key={i} className="bg-white border border-[#C9B5A3] p-1.5 rounded-sm font-serif text-[#5d5f5f]">{t}</div>
      ))}
    </div>
  </div>,

  // ── Page 6 : Nhận thức cảm tính ──────────────────────────────────────────────
  <div key="p6" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>4 · Giai đoạn 1</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Nhận thức cảm tính</h2>
    <BookImg src={IMG("cave-perception.jpg")} alt="Tri giác" />
    <div className="space-y-1.5">
      {[
        { r:"I", t:"Cảm giác", d:"Thuộc tính riêng lẻ: màu xanh, vị chua, bề mặt sần khi giác quan tiếp xúc trực tiếp." },
        { r:"II", t:"Tri giác", d:"Tổng hợp nhiều cảm giác để nhận ra: đây là quả chanh, đây là quả táo." },
        { r:"III", t:"Biểu tượng", d:"Hình ảnh sự vật lưu giữ trong trí nhớ khi sự vật không còn trước mắt." },
      ].map((item) => (
        <div key={item.r} className="flex gap-2 items-start">
          <span className="font-serif font-bold text-[#663300] text-sm w-6 shrink-0">{item.r}</span>
          <div>
            <p className="text-[10px] font-sans font-bold text-[#1a1c1c]">{item.t}</p>
            <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">{item.d}</p>
          </div>
        </div>
      ))}
    </div>
    <Callout>Cảm tính giúp tiếp xúc trực tiếp với hiện thực nhưng mới nắm bề ngoài.</Callout>
  </div>,

  // ── Page 7 : Nhận thức lý tính ───────────────────────────────────────────────
  <div key="p7" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>5 · Giai đoạn 2</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Nhận thức lý tính</h2>
    <p className="text-[11px] font-serif text-[#5d5f5f] leading-relaxed">
      Trình độ cao hơn: phân tích, tổng hợp, khái quát và tìm ra <strong>bản chất, quy luật</strong> bên trong sự vật.
    </p>
    <div className="grid grid-cols-1 gap-2">
      <div className="bg-white border border-[#C9B5A3] rounded-sm overflow-hidden">
        <img src={IMG("concept-drinks.png")} alt="Khái niệm" className="w-full max-h-24 object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
        <div className="p-2">
          <p className="text-[9px] font-mono font-bold text-[#663300] uppercase">Khái niệm</p>
          <p className="text-[10px] font-serif text-[#5d5f5f]">Phản ánh thuộc tính bản chất, phổ biến của sự vật.</p>
        </div>
      </div>
      <div className="bg-white border border-[#C9B5A3] rounded-sm p-2">
        <p className="text-[9px] font-mono font-bold text-[#663300] uppercase mb-1">Phán đoán & Suy luận</p>
        <p className="text-[10px] font-serif text-[#5d5f5f]">Liên kết khái niệm để rút ra tri thức mới — vẫn phải kiểm nghiệm.</p>
      </div>
    </div>
  </div>,

  // ── Page 8 : Trở về thực tiễn ────────────────────────────────────────────────
  <div key="p8" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>6 · Giai đoạn 3</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Trở về thực tiễn — kiểm nghiệm chân lý</h2>
    <div className="flex items-center justify-between text-[9px] font-sans font-bold text-[#663300] bg-[#E8D5C4]/20 border border-[#C9B5A3] rounded-sm p-2 gap-0.5 flex-wrap">
      {["Lý thuyết","Hành động","Kết quả","Kiểm chứng","Điều chỉnh"].map((s, i, arr) => (
        <React.Fragment key={s}>
          <span className="shrink-0">{s}</span>
          {i < arr.length - 1 && <span className="text-[#C9B5A3]">›</span>}
        </React.Fragment>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-1.5">
      {[
        { l:"A · Cơ sở", d:"Thực tiễn đặt ra vấn đề và cung cấp chất liệu." },
        { l:"B · Động lực", d:"Nhu cầu thực tiễn thúc đẩy phát triển tri thức." },
        { l:"C · Mục đích", d:"Nhận thức hướng tới cải biến hiện thực." },
        { l:"D · Tiêu chuẩn", d:"Thực tiễn xác nhận tri thức đúng hay sai." },
      ].map((item) => (
        <div key={item.l} className="bg-white border border-[#C9B5A3] rounded-sm p-2">
          <p className="text-[9px] font-mono font-bold text-[#663300]">{item.l}</p>
          <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug mt-0.5">{item.d}</p>
        </div>
      ))}
    </div>
    <Callout>Chỉ qua thực tiễn lặp lại, tri thức mới bộc lộ giá trị khách quan.</Callout>
  </div>,

  // ── Page 9 : Quan hệ biện chứng ───────────────────────────────────────────────
  <div key="p9" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>7 · Quan hệ biện chứng</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Cảm tính và lý tính không tách rời</h2>
    <BookImg src={IMG("percepdiagram.png")} alt="Sơ đồ quan hệ" />
    <div className="space-y-1.5">
      <div className="bg-white border border-[#C9B5A3] rounded-sm p-2">
        <p className="text-[9px] font-mono font-bold text-[#663300] uppercase mb-0.5">Cảm tính → Lý tính</p>
        <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">Cảm tính cung cấp dữ liệu thực tế để lý tính phân tích. Thiếu cảm tính, lý tính dễ suy đoán rỗng.</p>
      </div>
      <div className="bg-white border border-[#C9B5A3] rounded-sm p-2">
        <p className="text-[9px] font-mono font-bold text-[#663300] uppercase mb-0.5">Lý tính → Cảm tính</p>
        <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">Lý tính định hướng nhận thức cảm tính, tránh bị vẻ ngoài đánh lừa.</p>
      </div>
    </div>
  </div>,

  // ── Page 10 : Rủi ro nhận thức số ─────────────────────────────────────────────
  <div key="p10" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>8 · Rủi ro nhận thức</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Sai lệch nhận thức trong đời sống số</h2>
    <BookImg src={IMG("truth-door.jpg")} alt="Chân lý số" caption="Thông tin thuyết phục ≠ phản ánh đúng thực tế." />
    <div className="space-y-1">
      {[
        { i:"⚡", l:"Cảm xúc", d:"Thông tin kích động khiến ta chấp nhận nhanh hơn mức cần." },
        { i:"🔁", l:"Buồng vang", d:"Thuật toán thu hẹp thế giới quan, dễ cực đoan." },
        { i:"🤖", l:"AI & Deepfake", d:"Video, ảnh có thể dựng rất thật — cảm tính chưa đủ kết luận." },
        { i:"✂️", l:"Video cắt ghép", d:"Clip ngắn thiếu bối cảnh hoặc bị cắt ghép sai sự thật." },
      ].map((item) => (
        <div key={item.l} className="flex gap-2 items-start p-1.5 bg-white border border-[#C9B5A3] rounded-sm">
          <span className="text-xs shrink-0">{item.i}</span>
          <div>
            <p className="text-[9px] font-mono font-bold text-[#663300] uppercase">{item.l}</p>
            <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">{item.d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>,

  // ── Page 11 : Kiểm chứng ──────────────────────────────────────────────────────
  <div key="p11" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>9 · Kiểm chứng nhận thức</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Kiểm chứng nhận thức và chân lý</h2>
    <BookImg src={IMG("perception-vs-reality.jpg")} alt="Nhận thức vs thực tại" caption="Điều ta cảm nhận chưa chắc phản ánh đúng hiện thực." />
    <div className="bg-[#E8D5C4]/20 border border-[#C9B5A3] rounded-sm p-2.5 space-y-1.5">
      <p className="text-[9px] font-mono font-bold text-[#663300] uppercase">4 bước kiểm chứng</p>
      {["Xem nguồn phát thông tin là ai", "Tìm bằng chứng gốc, không chỉ ảnh chụp lại",
        "Đối chiếu với nguồn độc lập", "Quan sát kết quả thực tế trước khi kết luận"].map((step, i) => (
        <div key={i} className="flex gap-2 items-start">
          <span className="font-mono text-[9px] font-bold text-white bg-[#663300] w-4 h-4 rounded-full flex items-center justify-center shrink-0">{i+1}</span>
          <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">{step}</p>
        </div>
      ))}
    </div>
  </div>,

  // ── Page 12 : Galileo ─────────────────────────────────────────────────────────
  <div key="p12" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>10 · Ví dụ khoa học</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Galileo: thực nghiệm bác bỏ nhận thức sai</h2>
    <BookImg src={IMG("vat_roi.jpg")} alt="Galileo" caption="Thực nghiệm giúp khoa học vượt qua cảm tính ban đầu." />
    <div className="space-y-1.5">
      {[
        { step:"1", cls:"bg-red-50 border-red-200 text-red-800", t:"Quan niệm cũ", d:"Vật nặng rơi nhanh hơn vật nhẹ theo Aristotle." },
        { step:"2", cls:"bg-amber-50 border-amber-200 text-amber-800", t:"Thực nghiệm", d:"Galileo kiểm tra bằng quan sát và đo đạc trên máng nghiêng." },
        { step:"3", cls:"bg-green-50 border-green-200 text-green-800", t:"Kết quả", d:"Nhận thức sai bị bác bỏ; tri thức tiến gần hiện thực hơn." },
      ].map((item) => (
        <div key={item.step} className={`flex gap-2 items-start p-1.5 border rounded-sm ${item.cls}`}>
          <span className="font-mono text-[9px] font-bold w-4 h-4 rounded-full bg-white/60 flex items-center justify-center shrink-0">{item.step}</span>
          <div>
            <p className="text-[9px] font-sans font-bold uppercase">{item.t}</p>
            <p className="text-[10px] font-serif leading-snug">{item.d}</p>
          </div>
        </div>
      ))}
    </div>
    <Callout>Dùng thực nghiệm để bác bỏ lý thuyết sai — đó là tinh thần khoa học.</Callout>
  </div>,

  // ── Page 13 : Chân lý là gì ───────────────────────────────────────────────────
  <div key="p13" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>11 · Khái niệm cốt lõi</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Chân lý là gì?</h2>
    <div className="bg-[#663300] text-white rounded-sm p-3 text-center">
      <p className="text-[11px] font-serif leading-relaxed font-bold">
        Chân lý là tri thức phù hợp với hiện thực khách quan và được thực tiễn kiểm nghiệm.
      </p>
    </div>
    <div className="space-y-1.5">
      {[
        { n:"01", t:"Tính khách quan", d:"Phản ánh hiện thực khách quan, không phụ thuộc ý muốn chủ quan." },
        { n:"02", t:"Tuyệt đối & tương đối", d:"Có hạt nhân đúng khách quan nhưng tri thức con người có giới hạn lịch sử." },
        { n:"03", t:"Tính cụ thể", d:"Gắn với điều kiện, hoàn cảnh, thời gian và phạm vi áp dụng xác định." },
      ].map((item) => (
        <div key={item.n} className="flex gap-2 items-start bg-white border border-[#C9B5A3] rounded-sm p-2">
          <span className="font-mono text-sm font-bold text-[#E8D5C4] leading-none shrink-0 w-7 text-center">{item.n}</span>
          <div>
            <p className="text-[10px] font-sans font-bold text-[#663300]">{item.t}</p>
            <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">{item.d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>,

  // ── Page 14 : Chân lý và thực tiễn ────────────────────────────────────────────
  <div key="p14" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>12 · Quan hệ song trùng</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Chân lý và thực tiễn</h2>
    <BookImg src={IMG("marx-engels.jpg")} alt="Marx & Engels" caption="Lý luận và thực tiễn vận động trong mối quan hệ bổ sung." />
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white border border-[#C9B5A3] rounded-sm p-2">
        <p className="text-[9px] font-mono font-bold text-[#663300] uppercase mb-0.5">Thực tiễn → Vấn đề</p>
        <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">Đời sống đặt ra yêu cầu buộc nhận thức phải sâu hơn.</p>
      </div>
      <div className="bg-white border border-[#C9B5A3] rounded-sm p-2">
        <p className="text-[9px] font-mono font-bold text-[#663300] uppercase mb-0.5">Chân lý → Hành động</p>
        <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">Tri thức đúng giúp hành động hiệu quả, tránh sai lầm.</p>
      </div>
    </div>
    <blockquote className="border-l-2 border-[#663300] pl-3 italic font-serif text-[11px] text-[#5d5f5f] bg-[#E8D5C4]/20 py-2 pr-2">
      "Thực tiễn kiểm nghiệm chân lý, còn chân lý soi đường cho thực tiễn."
    </blockquote>
  </div>,

  // ── Page 15 : Kết luận ────────────────────────────────────────────────────────
  <div key="p15" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>Kết luận</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Thông điệp hành động</h2>
    <div className="space-y-2">
      {[
        { n:"1", t:"Nhận thức phải có cơ sở", d:"Bắt đầu từ hiện thực, quan sát nghiêm túc và dữ liệu đáng tin cậy." },
        { n:"2", t:"Tư duy phải vượt hiện tượng", d:"Dùng khái niệm, phán đoán, suy luận để tìm bản chất và quy luật." },
        { n:"3", t:"Chân lý phải được kiểm nghiệm", d:"Đưa tri thức trở lại thực tiễn để xác nhận, chỉnh sửa và phát triển." },
      ].map((item) => (
        <div key={item.n} className="flex gap-2 items-start bg-white border border-[#C9B5A3] rounded-sm p-2">
          <span className="font-mono text-xs font-bold text-[#663300] shrink-0 w-4 text-center">{item.n}</span>
          <div>
            <p className="text-[10px] font-sans font-bold text-[#1a1c1c]">{item.t}</p>
            <p className="text-[10px] font-serif text-[#5d5f5f] leading-snug">{item.d}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-[#663300] rounded-sm p-3 text-center">
      <p className="text-white font-serif text-sm italic font-bold">"Hiểu đúng để hành động đúng."</p>
    </div>
    <p className="text-[10px] font-serif text-[#8B7355] italic text-center">
      Đừng chỉ hỏi "nghe có hợp lý không?" — hãy hỏi "đã kiểm chứng trong thực tế chưa?"
    </p>
  </div>,

  // ── Page 16 : Tài liệu ────────────────────────────────────────────────────────
  <div key="p16" className="p-4 h-full overflow-y-auto space-y-3">
    <SectionTag>Tài liệu tham khảo</SectionTag>
    <h2 className="text-base font-black text-[#663300] font-sans leading-tight">Nguồn đã dùng biên soạn</h2>
    <div className="space-y-2">
      {[
        { n:"1", t:"Giáo trình Triết học Mác - Lênin, Bộ Giáo dục và Đào tạo." },
        { n:"2", t:"C. Mác, Luận cương về Feuerbach, 1845." },
        { n:"3", t:"Tài liệu nội dung nhóm biên soạn." },
      ].map((item) => (
        <div key={item.n} className="flex gap-3 items-start bg-white border border-[#C9B5A3] rounded-sm p-2.5">
          <span className="font-mono text-[10px] font-bold text-white bg-[#663300] w-5 h-5 rounded-full flex items-center justify-center shrink-0">{item.n}</span>
          <p className="text-[11px] font-serif text-[#1a1c1c] leading-relaxed">{item.t}</p>
        </div>
      ))}
    </div>
  </div>,

  // ── Page 17 : Back cover ──────────────────────────────────────────────────────
  <div key="p17" className="flex flex-col items-center justify-center h-full text-center gap-3 p-4"
    style={{ background: "linear-gradient(160deg,#3d1a00 0%,#7a3a00 60%,#a05a20 100%)" }}>
    <img src="https://truth-and-cognition.netlify.app/assets/images/book/thuctien_nhanthuc.jpg"
      alt="Thực tiễn và nhận thức"
      className="w-2/3 max-w-[160px] rounded shadow-md border border-[#a07040]"
      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
    <div>
      <p className="text-[10px] font-mono text-[#E8D5C4] tracking-widest uppercase">MLN111 · Triết học Mác - Lênin</p>
      <blockquote className="text-sm font-serif italic text-[#E8D5C4] font-bold mt-2">
        "Hiểu đúng để hành động đúng."
      </blockquote>
      <p className="text-[10px] text-[#E8D5C4]/60 mt-2">Cảm ơn thầy cô và các bạn đã theo dõi.</p>
    </div>
    <p className="text-[10px] text-[#E8D5C4]/40">Nhóm 3 · Nhận thức luận</p>
  </div>,
];

// Total pages must be even for pairing; pad if needed
while (P.length % 2 !== 0) {
  P.push(<div key={`pad-${P.length}`} className="bg-[#fffdf7] h-full" />);
}

const TOTAL_SPREADS = P.length / 2;

// ─── Main Component ────────────────────────────────────────────────────────────
export default function FlipBook() {
  const [spread, setSpread] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState<"next" | "prev">("next");
  const [targetSpread, setTargetSpread] = useState(1);
  const [showToc, setShowToc] = useState(false);
  // Mobile: single-page index
  const [mobilePage, setMobilePage] = useState(0);

  const canPrev = spread > 0 && !flipping;
  const canNext = spread < TOTAL_SPREADS - 1 && !flipping;

  const go = (t: number, dir: "next" | "prev") => {
    if (flipping || t < 0 || t >= TOTAL_SPREADS) return;
    setFlipDir(dir);
    setTargetSpread(t);
    setFlipping(true);
    setTimeout(() => {
      setSpread(t);
      setFlipping(false);
    }, 680);
  };

  const next = () => go(spread + 1, "next");
  const prev = () => go(spread - 1, "prev");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  // Pages for current and target spreads
  const CL = P[spread * 2];
  const CR = P[spread * 2 + 1];
  const TL = P[targetSpread * 2];
  const TR = P[targetSpread * 2 + 1];

  // What each half shows as static during flip
  const staticLeft = flipping && flipDir === "prev" ? TL : CL;
  const staticRight = flipping && flipDir === "next" ? TR : CR;

  // Outer shell — dark background like FlipHTML5
  return (
      <div className="min-h-screen flex flex-col items-center justify-start py-6 px-2"
        style={{ background: "linear-gradient(180deg,#3a3a3a 0%,#2e2e2e 100%)" }}>

        {/* Header bar */}
        <div className="flex items-center justify-between w-full max-w-4xl px-2 mb-4">
          <div>
            <p className="text-white text-sm font-bold font-sans">Lý luận Nhận thức</p>
            <p className="text-gray-400 text-[11px] font-serif">MLN111 · Triết học Mác - Lênin · Nhóm 3</p>
          </div>
          <button onClick={() => setShowToc(true)}
            className="flex items-center gap-1.5 text-gray-300 hover:text-white text-xs font-sans border border-gray-600 px-3 py-1.5 rounded-sm hover:border-gray-400 transition-colors">
            <List className="w-3.5 h-3.5" /> Mục lục
          </button>
        </div>

        {/* ── Desktop: two-page spread ─────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-5 w-full max-w-4xl">

          {/* Left nav */}
          <button onClick={prev} disabled={!canPrev}
            className="shrink-0 text-gray-500 hover:text-white disabled:text-gray-700 transition-colors p-1">
            <ChevronLeft className="w-9 h-9" />
          </button>

          {/* Book */}
          <div className="flex-1 relative rounded-sm overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
            style={{ perspective: "2000px", height: "520px" }}>

            {/* Page background (paper color) */}
            <div className="absolute inset-0 bg-[#f5f0e8]" />

            {/* Static left half */}
            <div className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: "50%", borderRight: "1px solid #d0c8bc" }}>
              <div className="h-full overflow-y-auto">{staticLeft}</div>
            </div>

            {/* Static right half */}
            <div className="absolute top-0 right-0 h-full overflow-hidden"
              style={{ width: "50%", borderLeft: "1px solid #d0c8bc" }}>
              <div className="h-full overflow-y-auto">{staticRight}</div>
            </div>

            {/* Spine shadow overlay */}
            <div className="absolute top-0 h-full pointer-events-none z-20"
              style={{
                left: "calc(50% - 6px)", width: "12px",
                background: "linear-gradient(to right, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.04) 45%, rgba(0,0,0,0.04) 55%, rgba(0,0,0,0.18) 100%)",
              }} />

            {/* Left page edge shadow */}
            <div className="absolute top-0 left-0 h-full w-6 pointer-events-none z-10"
              style={{ background: "linear-gradient(to right, rgba(0,0,0,0.12), transparent)" }} />
            <div className="absolute top-0 right-0 h-full w-6 pointer-events-none z-10"
              style={{ background: "linear-gradient(to left, rgba(0,0,0,0.12), transparent)" }} />

            {/* ── Flipping page overlay ──────────────────────────────────── */}
            {flipping && (
              <div
                className={`absolute top-0 h-full z-30 ${flipDir === "next" ? "bp-flip-next" : "bp-flip-prev"}`}
                style={{
                  transformStyle: "preserve-3d",
                  ...(flipDir === "next"
                    ? { left: "50%", width: "50%", transformOrigin: "left center" }
                    : { left: 0, width: "50%", transformOrigin: "right center" }),
                }}
              >
                {/* Front face */}
                <div className="bp-face absolute inset-0 overflow-hidden bg-[#f5f0e8]"
                  style={{ boxShadow: flipDir === "next" ? "-4px 0 16px rgba(0,0,0,0.25)" : "4px 0 16px rgba(0,0,0,0.25)" }}>
                  <div className="h-full overflow-y-auto">
                    {flipDir === "next" ? CR : CL}
                  </div>
                </div>
                {/* Back face */}
                <div className="bp-face bp-face-back absolute inset-0 overflow-hidden bg-[#f5f0e8]">
                  <div className="h-full overflow-y-auto">
                    {flipDir === "next" ? TL : TR}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right nav */}
          <button onClick={next} disabled={!canNext}
            className="shrink-0 text-gray-500 hover:text-white disabled:text-gray-700 transition-colors p-1">
            <ChevronRight className="w-9 h-9" />
          </button>
        </div>

        {/* ── Mobile: single page ──────────────────────────────────────────── */}
        <div className="md:hidden w-full max-w-sm">
          <div className="relative rounded-sm overflow-hidden shadow-xl bg-[#f5f0e8]" style={{ minHeight: "480px" }}>
            <div key={mobilePage} style={{ animation: "mobileSlideNext 0.3s ease" }}>
              {P[mobilePage]}
            </div>
          </div>
          <div className="flex items-center justify-between mt-3 px-1">
            <button onClick={() => setMobilePage(p => Math.max(0, p - 1))} disabled={mobilePage === 0}
              className="text-gray-400 hover:text-white disabled:text-gray-700 transition-colors">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <span className="text-gray-400 text-xs font-mono">{mobilePage + 1} / {P.length}</span>
            <button onClick={() => setMobilePage(p => Math.min(P.length - 1, p + 1))} disabled={mobilePage === P.length - 1}
              className="text-gray-400 hover:text-white disabled:text-gray-700 transition-colors">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Page indicator (desktop) */}
        <div className="hidden md:flex items-center gap-3 mt-4">
          <span className="text-gray-500 text-[11px] font-mono">
            Trang {spread * 2 + 1}–{Math.min(spread * 2 + 2, P.length)} / {P.length}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: TOTAL_SPREADS }).map((_, i) => {
              const dotDir: "next" | "prev" = i > spread ? "next" : "prev";
              return (
                <button key={i} onClick={() => go(i, dotDir)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === spread ? "bg-[#C9B5A3] scale-125" : "bg-gray-600 hover:bg-gray-400"}`}
                  aria-label={`Spread ${i + 1}`} />
              );
            })}
          </div>
          <span className="text-gray-600 text-[10px] font-sans">← → để lật trang</span>
        </div>

        {/* ── TOC Overlay ─────────────────────────────────────────────────────── */}
        {showToc && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-20 px-4">
            <div className="bg-white border border-[#C9B5A3] rounded-sm shadow-2xl w-full max-w-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-[#663300]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#E8D5C4]" />
                  <span className="text-sm font-sans font-bold text-white">Mục lục — Lý luận Nhận thức</span>
                </div>
                <button onClick={() => setShowToc(false)} className="text-[#E8D5C4] hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-[60vh] p-3 space-y-1">
                {TOC.map((entry) => {
                  const tocDir: "next" | "prev" = entry.spread > spread ? "next" : "prev";
                  const isActive = entry.spread === spread;
                  return (
                    <button key={entry.spread}
                      onClick={() => { go(entry.spread, tocDir); setShowToc(false); }}
                      className={`w-full text-left px-3 py-2 rounded-sm flex items-center gap-2 transition-colors ${
                        isActive ? "bg-[#E8D5C4] text-[#663300]" : "hover:bg-[#E8D5C4]/30 text-[#1a1c1c]"
                      }`}>
                      {entry.chapter && (
                        <span className="shrink-0 text-[9px] font-mono font-bold text-[#663300] bg-[#E8D5C4] px-1.5 py-0.5 rounded-sm min-w-[28px] text-center">
                          {entry.chapter}
                        </span>
                      )}
                      <span className="text-xs font-serif leading-snug">{entry.label}</span>
                      {isActive && <span className="ml-auto text-[9px] text-[#663300]">●</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
