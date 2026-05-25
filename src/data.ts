import { LibraryTerm, QuizQuestion, Badge, Scenario } from "./types";

export const libraryTerms: LibraryTerm[] = [
  {
    id: "term-1",
    term: "Vật chất",
    vietnameseTerm: "Vật chất (Matter)",
    definition: "Là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh, và tồn tại không lệ thuộc vào cảm giác.",
    category: "Duy vật biện chứng",
    example: "Cây cối, nhà cửa, các quy luật kinh tế vật chất tồn tại độc lập với mong muốn chủ quan của con người."
  },
  {
    id: "term-2",
    term: "Ý thức",
    vietnameseTerm: "Ý thức (Consciousness)",
    definition: "Sự phản ánh sinh động, năng động, sáng tạo hiện thực khách quan vào bộ óc người, là hình ảnh chủ quan của thế giới khách quan.",
    category: "Duy vật biện chứng",
    example: "Các ý tưởng sáng tạo khoa học, tác phẩm nghệ thuật, lý thuyết xã hội phản ánh hoạt động thực tiễn của con người."
  },
  {
    id: "term-3",
    term: "Thực tiễn",
    vietnameseTerm: "Thực tiễn (Practice/Praxis)",
    definition: "Toàn bộ hoạt động vật chất cảm tính có mục đích, mang tính lịch sử - xã hội của con người nhằm cải tạo tự nhiên và xã hội.",
    category: "Lý luận nhận thức",
    example: "Hoạt động trồng lúa của nông dân, chế tạo robot của công thức sư, cải cách thể chế đất nước."
  },
  {
    id: "term-4",
    term: "Nhận thức",
    vietnameseTerm: "Nhận thức (Cognition)",
    definition: "Quá trình phản ánh biện chứng, năng động, sáng tạo hiện thực khách quan vào bộ óc con người, trên cơ sở thực tiễn hoạt động sống, nhằm đạt tới chân lý.",
    category: "Lý luận nhận thức",
    example: "Con người từ quan sát lửa nóng (cảm tính) đến tìm ra công thức vật lý nhiệt động lực học (lý tính)."
  },
  {
    id: "term-5",
    term: "Chân lý",
    vietnameseTerm: "Chân lý (Truth)",
    definition: "Những tri thức phù hợp với hiện thực khách quan và đã được thực tiễn kiểm nghiệm, chứng minh là đúng đắn.",
    category: "Chân lý",
    example: "Lý thuyết Trái đất quay quanh Mặt trời thay thế hoàn toàn cho thuyết địa tâm sau khi được chứng minh bằng thiên văn thực nghiệm."
  },
  {
    id: "term-6",
    term: "Mâu thuẫn biện chứng",
    vietnameseTerm: "Mâu thuẫn biện chứng (Dialectical Contradiction)",
    definition: "Sự liên hệ, tác động lẫn nhau, vừa thống nhất biện chứng vừa đấu tranh, bài trừ, phủ định lẫn nhau giữa các mặt đối lập bên trong cùng một sự vật, hiện tượng.",
    category: "Duy vật biện chứng",
    example: "Sự tương tác giữa lực hút và lực đẩy trong vật lý, hay mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất trong kinh tế."
  },
  {
    id: "term-7",
    term: "Quy luật lượng chất",
    vietnameseTerm: "Quy luật Lượng - Chất",
    definition: "Chỉ ra cách thức vận động, phát triển của sự vật: những thay đổi dần dần về lượng khi vượt quá giới hạn độ sẽ dẫn đến sự thay đổi nhảy vọt về chất, tạo ra chất mới, chất mới lại quy định một lượng mới tương ứng.",
    category: "Duy vật biện chứng",
    example: "Đun nước từ 0 độ C đến 100 độ C (tăng lượng nhiệt), tại điểm nút 100 độ C nước chuyển từ dạng lỏng sang dạng hơi (thay đổi chất)."
  },
  {
    id: "term-8",
    term: "Duy vật lịch sử",
    vietnameseTerm: "Duy vật lịch sử (Historical Materialism)",
    definition: "Hệ thống quan điểm duy vật biện chứng về đời sống xã hội và lịch sử loài người, chỉ ra rằng tồn tại xã hội quyết định ý thức xã hội, lực lượng sản xuất quyết định quan hệ sản xuất.",
    category: "Duy vật lịch sử",
    example: "Sự xuất hiện của công cụ bằng sắt dẫn đến sự thay đổi sâu sắc từ chế độ thị tộc nguyên thủy sang xã hội có giai cấp."
  }
];

export const scenarios: Scenario[] = [
  {
    id: "scenario-1",
    topic: "Nhận diện Bias & Fake News",
    title: "Sự kiện: Tin đồn lan truyền trên Mạng xã hội",
    description: "Một tài khoản TikTok ẩn danh đăng tin: 'Chất tạo ngọt phổ biến trong nước ngọt có ga gây lão hóa não ngay lập tức. Hãy chia sẻ ngay vì sức khỏe gia đình!'. Bài đăng thu hút 10.000 lượt chia sẻ trong 2 giờ do đánh trúng tâm lý lo âu của người dân.",
    options: [
      {
        text: "Tin tưởng ngay và chia sẻ lên trang cá nhân vì 'phòng bệnh hơn chữa bệnh', ưu tiên cảm xúc lo lắng cá nhân.",
        isCorrect: false,
        biasSelected: "Bẫy cảm xúc (Emotional Bias)",
        explanation: "Sai lầm. Bạn đã mắc bẫy cảm xúc dồn nén. Bạn vội vã đưa ra quyết định mà chưa hề kiểm chứng thực tiễn hay truy tìm nguồn dữ liệu khách quan khoa học."
      },
      {
        text: "Tuyên bố rằng tin tức bậy bạ vì không có báo chính thống nào nói, nhưng nhất quyết không tự mình tìm hiểu thêm hoặc học hỏi thêm do tin vào trực giác cá nhân duy nhất.",
        isCorrect: false,
        biasSelected: "Bẫy bảo thủ (Dogmatism)",
        explanation: "Chưa tối ưu. Việc phủ nhận mù quáng mà không dựa trên lập luận khoa học đại biểu cho thái độ lười biếng tư duy, từ chối cập nhật nhận thức bằng lý tính."
      },
      {
        text: "Giữ tinh thần hoài nghi khoa học, tìm kiếm báo cáo nghiên cứu thực nghiệm từ Tổ chức Y tế Thế giới (WHO) hoặc trường đại học uy tín để kiểm chứng tính thực tế của thông tin trước khi hành động.",
        isCorrect: true,
        explanation: "Chính xác! Bạn đang thực hành phương pháp luận khoa học biện chứng của Lý luận nhận thức: Nhận thức cảm tính (lo sợ) phải được kiểm nghiệm bằng nhận thức lý tính sâu sắc và đối chiếu thực tiễn một cách khách quan."
      }
    ]
  },
  {
    id: "scenario-2",
    topic: "Tính bảo thủ và Phát triển",
    title: "Sự sụp đổ của một Tập đoàn Công nghệ danh tiếng",
    description: "Một tập đoàn điện thoại di động khổng lồ từng chiếm 60% thị phần thế kỷ trước quyết định từ chối phát triển hệ điều hành màn hình cảm ứng, với tuyên bố: 'Người tiêu dùng muôn đời chỉ yêu thích bàn phím bấm cơ học vật lý truyền thống của chúng tôi thôi'.",
    options: [
      {
        text: "Họ đúng, vì thói quen người dùng là cố định và tri thức cũ đã được thực tế kiểm chứng hàng chục năm qua.",
        isCorrect: false,
        biasSelected: "Ý thức bảo thủ & Siêu hình (Dogmatism)",
        explanation: "Sai lầm. Thế giới quan siêu hình nhìn sự vật trong trạng thái tĩnh lặng, bất biến. Họ coi thực tế lịch sử là một hòm thư đóng kín mà không chịu hiểu sự vận động mâu thuẫn bên trong thị trường liên tục thay đổi."
      },
      {
        text: "Nhận định rằng thực tiễn là sự vận động ko ngừng nghỉ. Tri thức, phương pháp quản lý phải luôn linh hoạt phát triển cùng với sự thay đổi của thực tế khách quan.",
        isCorrect: true,
        explanation: "Hóa giải hoàn hảo! Triết học chỉ rõ 'Phát triển là khuynh hướng chung của sự vận động'. Chân lý luôn có tính cụ thể và lịch sử. Cái đúng của hôm qua chưa chắc phản ánh đúng nhu cầu thực tế của ngày hôm nay."
      }
    ]
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q-1",
    question: "Theo Karl Marx, điều gì quyết định một nhận thức có đúng hay không?",
    options: [
      "Số người tin vào nó",
      "Cảm xúc cá nhân",
      "Thực tiễn kiểm nghiệm",
      "Ý kiến của chuyên gia"
    ],
    correctAnswerIndex: 2,
    explanation: "Marx cho rằng chân lý phải được kiểm chứng bằng thực tiễn chứ không chỉ nằm ở lý thuyết.",
    points: 3
  },
  {
    id: "q-2",
    question: "\"Thực tiễn\" trong triết học Mác là gì?",
    options: [
      "Suy nghĩ trừu tượng",
      "Hoạt động vật chất có mục đích của con người",
      "Tranh luận học thuật",
      "Niềm tin tôn giáo"
    ],
    correctAnswerIndex: 1,
    explanation: "Thực tiễn là toàn bộ hoạt động vật chất cảm tính có mục đích, mang tính lịch sử - xã hội của con người.",
    points: 3
  },
  {
    id: "q-3",
    question: "Vì sao thực tiễn được xem là cơ sở của nhận thức?",
    options: [
      "Vì con người thích trải nghiệm",
      "Vì mọi hiểu biết đều bắt nguồn từ hoạt động thực tế",
      "Vì sách vở không quan trọng",
      "Vì công nghệ phát triển"
    ],
    correctAnswerIndex: 1,
    explanation: "Mọi hiểu biết của con người đều bắt nguồn từ hoạt động thực tế - nhận thức cảm tính bắt đầu từ thực tiễn.",
    points: 3
  },
  {
    id: "q-4",
    question: "Một sinh viên chỉ học lái xe qua video nhưng chưa từng thực hành. Điều này chứng minh:",
    options: [
      "Lý thuyết là đủ",
      "Nhận thức không cần trải nghiệm",
      "Thực tiễn giúp kiểm chứng và hoàn thiện nhận thức",
      "Video không hữu ích"
    ],
    correctAnswerIndex: 2,
    explanation: "Thực tiễn giúp kiểm chứng lý thuyết - lái xe thực tế sẽ phát hiện thiếu sót và hoàn thiện kỹ năng.",
    points: 3
  },
  {
    id: "q-5",
    question: "Vai trò QUAN TRỌNG NHẤT của thực tiễn đối với nhận thức là:",
    options: [
      "Làm con người nổi tiếng",
      "Kiểm tra tính đúng sai của nhận thức",
      "Giúp tiết kiệm thời gian",
      "Tạo ra cảm xúc"
    ],
    correctAnswerIndex: 1,
    explanation: "Thực tiễn là tiêu chuẩn kiểm tra chân lý - nó xác nhận điều đúng và bác bỏ điều sai.",
    points: 3
  },
  {
    id: "q-6",
    question: "Trong đại dịch COVID-19, vaccine được công nhận hiệu quả sau khi:",
    options: [
      "Được quảng cáo mạnh",
      "Có nhiều lượt xem trên mạng",
      "Được kiểm nghiệm thực tế và thử nghiệm lâm sàng",
      "Có giá cao"
    ],
    correctAnswerIndex: 2,
    explanation: "Đây là ví dụ thực tiễn chứng minh chân lý khoa học - vaccine được công nhận khi qua các thử nghiệm khoa học chặt chẽ.",
    points: 3
  },
  {
    id: "q-7",
    question: "Theo lý luận nhận thức của chủ nghĩa Mác, quá trình nhận thức diễn ra theo con đường nào?",
    options: [
      "Từ niềm tin → thực tiễn → chân lý",
      "Từ trực quan sinh động → tư duy trừu tượng → thực tiễn",
      "Từ tưởng tượng → cảm xúc → hành động",
      "Từ tranh luận → đồng thuận → kết luận"
    ],
    correctAnswerIndex: 1,
    explanation: "Quá trình nhận thức biện chứng: từ trực quan sinh động (cảm tính) → tư duy trừu tượng (lý tính) → trở về thực tiễn.",
    points: 3
  },
  {
    id: "q-8",
    question: "\"Học đi đôi với hành\" phản ánh nội dung nào?",
    options: [
      "Vai trò của giáo dục",
      "Vai trò của thực tiễn đối với nhận thức",
      "Tầm quan trọng của cảm xúc",
      "Vai trò của mạng xã hội"
    ],
    correctAnswerIndex: 1,
    explanation: "Câu nói này phản ánh rằng học tập phải gắn liền với thực hành - thực tiễn là đòi hỏi không thể thiếu.",
    points: 3
  },
  {
    id: "q-9",
    question: "Một TikToker lan truyền mẹo chữa bệnh không có kiểm chứng khoa học. Theo quan điểm Marx, vấn đề ở đây là:",
    options: [
      "Nội dung chưa viral",
      "Thiếu thực tiễn kiểm chứng",
      "Thiếu sáng tạo",
      "Không có âm nhạc hấp dẫn"
    ],
    correctAnswerIndex: 1,
    explanation: "Mẹo chữa bệnh chỉ trở thành chân lý khi được kiểm chứng bằng thực tiễn lâm sàng, chứ không phải lan truyền trên mạng.",
    points: 3
  },
  {
    id: "q-10",
    question: "Thực tiễn KHÔNG bao gồm hoạt động nào sau đây?",
    options: [
      "Lao động sản xuất",
      "Thực nghiệm khoa học",
      "Hoạt động chính trị - xã hội",
      "Suy nghĩ tưởng tượng thuần túy"
    ],
    correctAnswerIndex: 3,
    explanation: "Thực tiễn là hoạt động vật chất có mục đích, còn suy nghĩ tưởng tượng thuần túy là hoạt động tinh thần không liên quan đến thực tế.",
    points: 3
  },
  {
    id: "q-11",
    question: "Điều gì xảy ra nếu nhận thức tách rời thực tiễn?",
    options: [
      "Nhận thức trở nên chính xác hơn",
      "Con người dễ rơi vào chủ quan, sai lầm",
      "Khoa học phát triển nhanh hơn",
      "Không ảnh hưởng gì"
    ],
    correctAnswerIndex: 1,
    explanation: "Khi nhận thức tách rời thực tiễn, con người sẽ mắc phải những sai lầm chủ quan như tin đồn, fake news, hoặc những ảo tưởng.",
    points: 3
  },
  {
    id: "q-12",
    question: "Một công ty tạo AI nhưng không thử nghiệm với người dùng thực tế. Điều này dễ dẫn đến:",
    options: [
      "Thành công tuyệt đối",
      "Sản phẩm thiếu hiệu quả thực tế",
      "Nhiều giải thưởng hơn",
      "Không có vấn đề gì"
    ],
    correctAnswerIndex: 1,
    explanation: "AI phải được kiểm chứng qua thực tiễn sử dụng thực tế - nếu không, sản phẩm sẽ gặp vấn đề không lường trước được.",
    points: 3
  },
  {
    id: "q-13",
    question: "Theo Marx, chân lý là:",
    options: [
      "Điều đa số tin tưởng",
      "Điều giáo viên nói",
      "Tri thức phù hợp với hiện thực khách quan",
      "Điều xuất hiện trên internet"
    ],
    correctAnswerIndex: 2,
    explanation: "Chân lý là tri thức phản ánh đúng hiện thực khách quan và đã được thực tiễn kiểm nghiệm.",
    points: 3
  },
  {
    id: "q-14",
    question: "Ví dụ nào thể hiện \"thực tiễn là động lực của nhận thức\"?",
    options: [
      "Khoa học phát triển do nhu cầu chữa bệnh và sản xuất",
      "Con người thích đọc sách",
      "Nghệ sĩ sáng tác nhạc",
      "Học sinh ngủ trong lớp"
    ],
    correctAnswerIndex: 0,
    explanation: "Thực tiễn là động lực thúc đẩy sự phát triển của nhận thức - nhu cầu thực tế của xã hội đẩy khoa học phát triển.",
    points: 3
  },
  {
    id: "q-15",
    question: "Câu nói nào phù hợp nhất với tư tưởng của Marx?",
    options: [
      "\"Nghe người khác là đủ.\"",
      "\"Lý thuyết màu xám, cây đời mãi xanh.\"",
      "\"Không cần trải nghiệm vẫn hiểu mọi thứ.\"",
      "\"Chân lý nằm ở cảm xúc.\""
    ],
    correctAnswerIndex: 1,
    explanation: "Câu nói này của Goethe phù hợp với quan điểm Marx - lý thuyết phải được kiểm chứng bằng thực tiễn sống động.",
    points: 3
  }
];

export const badges: Badge[] = [
  {
    id: "badge-1",
    name: "Nhà Duy Vật Biện Chứng",
    description: "Hoàn thành bài trắc nghiệm học thuật với số điểm tuyệt đối 50/50.",
    iconName: "BrainCircuit",
    requirement: "Đạt điểm tối đa trong bài kiểm tra trắc nghiệm lý thuyết."
  },
  {
    id: "badge-2",
    name: "Kẻ Thách Thức Giáo Điều",
    description: "Thực hiện thí nghiệm thả hai khối lượng khác nhau từ tháp nghiêng Pisa để chứng minh thực tiễn.",
    iconName: "ShieldAlert",
    requirement: "Nhấn nút kích hoạt thí nghiệm Galileo trong Case Study."
  },
  {
    id: "badge-3",
    name: "Người Đi Tìm Chân Lý",
    description: "Tìm tòi lý thuyết triết học bằng cách tích lũy được tối thiểu 30 điểm học thuật từ các hoạt động.",
    iconName: "Compass",
    requirement: "Tích lũy được tổng cộng trên 30 điểm qua trả lời trắc nghiệm & tình huống."
  },
  {
    id: "badge-4",
    name: "Người Khách Quan Biện Chứng",
    description: "Sử dụng trí tuệ nhân tạo Gemini để phân tích một mâu thuẫn nhận thức hoặc bài báo kỷ nguyên số.",
    iconName: "Cpu",
    requirement: "Thực hiện thành công phân tích bài viết trong mục Phân tích Fake News."
  },
  {
    id: "badge-5",
    name: "Học Giả Thư Viện",
    description: "Nghiên cứu sâu mọi mặt của kiến thức cơ bản bằng cách xem chi tiết ít nhất 4 khái niệm trong Thư viện.",
    iconName: "BookOpen",
    requirement: "Mở xem chi tiết định nghĩa của 4 thuật ngữ triết học trong mục Thư viện."
  }
];
