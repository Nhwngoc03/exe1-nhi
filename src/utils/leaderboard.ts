export interface LeaderboardEntry {
  id?: string;
  name: string;
  score: number;
  timestamp: string;
}

/**
 * Lấy URL Firebase Database từ biến môi trường hoặc localStorage
 */
export function getFirebaseUrl(): string | null {
  const envUrl = (import.meta as any).env?.VITE_FIREBASE_DB_URL;
  if (envUrl && envUrl.trim() !== "") {
    return envUrl.trim();
  }
  return localStorage.getItem("dialectica_firebase_url");
}

/**
 * Lưu URL Firebase Database vào localStorage
 */
export function saveFirebaseUrl(url: string): void {
  let cleanedUrl = url.trim();
  if (cleanedUrl && !cleanedUrl.startsWith("http://") && !cleanedUrl.startsWith("https://")) {
    cleanedUrl = "https://" + cleanedUrl;
  }
  // Loại bỏ dấu gạch chéo cuối cùng nếu có
  if (cleanedUrl.endsWith("/")) {
    cleanedUrl = cleanedUrl.slice(0, -1);
  }
  localStorage.setItem("dialectica_firebase_url", cleanedUrl);
}

/**
 * Lấy danh sách điểm từ Firebase
 */
export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  const baseUrl = getFirebaseUrl();
  if (!baseUrl) {
    throw new Error("Chưa cấu hình URL Firebase");
  }

  const response = await fetch(`${baseUrl}/leaderboard.json`);
  if (!response.ok) {
    throw new Error("Không thể kết nối đến cơ sở dữ liệu");
  }

  const data = await response.json();
  if (!data) return [];

  // Firebase RTDB trả về một Object với các key là ID ngẫu nhiên
  const list: LeaderboardEntry[] = Object.entries(data).map(([id, val]: [string, any]) => ({
    id,
    name: val.name || "Ẩn danh",
    score: typeof val.score === "number" ? val.score : 0,
    timestamp: val.timestamp || new Date().toISOString(),
  }));

  // Sắp xếp theo điểm giảm dần, nếu bằng điểm thì ai nộp trước xếp trước (timestamp cũ hơn)
  return list.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
  });
}

/**
 * Gửi điểm số mới lên Firebase
 */
export async function submitScore(name: string, score: number): Promise<boolean> {
  const baseUrl = getFirebaseUrl();
  if (!baseUrl) {
    return false;
  }

  const entry: Omit<LeaderboardEntry, "id"> = {
    name: name.trim() || "Người dùng ẩn danh",
    score,
    timestamp: new Date().toISOString(),
  };

  const response = await fetch(`${baseUrl}/leaderboard.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  });

  return response.ok;
}

/**
 * Danh sách người chơi mẫu để chạy thử (Chế độ Demo)
 */
export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { name: "Trần Minh Đức - Tổ 1", score: 45, timestamp: new Date(Date.now() - 3600000 * 2).toISOString() },
  { name: "Phạm Thùy Linh - Tổ 3", score: 45, timestamp: new Date(Date.now() - 3600000 * 5).toISOString() },
  { name: "Nguyễn Hoàng Nam - Tổ 2", score: 40, timestamp: new Date(Date.now() - 3600000 * 10).toISOString() },
  { name: "Lê Minh Triết - Tổ 1", score: 35, timestamp: new Date(Date.now() - 3600000 * 12).toISOString() },
  { name: "Đỗ Hải Yến - Tổ 4", score: 30, timestamp: new Date(Date.now() - 3600000 * 24).toISOString() },
];
