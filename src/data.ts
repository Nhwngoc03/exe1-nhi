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
    question: "Theo định nghĩa của Lênin, thuộc tính chung nhất của mọi dạng vật chất là gì?",
    options: [
      "Có khối lượng và kích thước hữu hạn",
      "Tồn tại khách quan, độc lập với ý thức con người",
      "Có thể nhìn thấy và sờ chạm trực tiếp được",
      "Được cấu tạo từ nguyên tử và phân tử sinh học"
    ],
    correctAnswerIndex: 1,
    explanation: "Định nghĩa vật chất của Lênin chỉ rõ thuộc tính chung nhất và quan trọng nhất của mọi vật chất là 'thực tại khách quan độc lập với cảm giác/ý thức của con người'.",
    points: 10
  },
  {
    id: "q-2",
    question: "Nguồn gốc trực tiếp và quan trọng nhất của Thực tiễn đối với Nhận thức là gì?",
    options: [
      "Thực tiễn là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn kiểm tra chân lý",
      "Thực tiễn chỉ là nơi thí nghiệm sau khi con người suy ngẫm hoàn toàn trong tưởng tượng",
      "Thực tiễn là một hoạt động tinh thần thuần túy siêu việt",
      "Thực tiễn ko có mối quan hệ quyết định nào với việc tích lũy tri thức"
    ],
    correctAnswerIndex: 0,
    explanation: "Thực tiễn giữ vai trò quyết định đối với nhận thức: là cơ sở cung cấp tài liệu cho nhận thức, là động lực thúc đẩy khám phá khoa học, là cái đích cuối cùng, và là thước đo khách quan duy nhất để phân định chân lý hay sai lầm.",
    points: 10
  },
  {
    id: "q-3",
    question: "Hành trình biện chứng của sự phát triển nhận thức diễn ra như thế nào?",
    options: [
      "Từ tư duy lý luận thuần túy đi thẳng đến niềm tin tôn giáo tâm linh",
      "Từ phản xạ sinh học đơn giản đến nhận thức cảm tính thô sơ rồi dừng lại",
      "Từ trực quan sinh động (cảm tính) đến tư duy trừu tượng (lý tính), rồi từ tư duy trừu tượng trở về thực tiễn",
      "Nhận thức là ngẫu nhiên, ko theo bất kỳ quy luật logic nào"
    ],
    correctAnswerIndex: 2,
    explanation: "Đây là quy luật nhận thức biện chứng do V.I.Lênin đúc kết: 'Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn - đó là con đường biện chứng của sự nhận thức chân lý'.",
    points: 10
  },
  {
    id: "q-4",
    question: "Chân lý có mấy tính chất cơ bản?",
    options: [
      "Chỉ có tính chủ quan phụ thuộc vào cảm xúc",
      "Tính khách quan, tính cụ thể, và tính tương đối & tuyệt đối",
      "Tính trừu tượng, tính tâm linh hữu hình, tính vĩnh hằng cứng nhắc",
      "Tính ngẫu nhiên độc lập không có quy luật"
    ],
    correctAnswerIndex: 1,
    explanation: "Chân lý luôn mang tính khách quan (nội dung chân lý không lệ thuộc vào ý muốn con người), tính cụ thể (gắn liền với điều kiện lịch sử nhất định) và sự thống nhất biện chứng giữa tính tương đối và tuyệt đối.",
    points: 10
  },
  {
    id: "q-5",
    question: "Sản xuất vật chất giữ vai trò gì đối với sự tồn tại và phát triển của xã hội?",
    options: [
      "Là hoạt động thứ yếu chỉ dành cho người nghèo",
      "Là nền tảng vật chất quyết định sự tồn tại và phát triển của xã hội loài người",
      "Là sản phẩm của ý chí chủ quan từ các vĩ nhân lịch sử",
      "Sản xuất vật chất không ảnh hưởng đến cấu trúc giai cấp của xã hội"
    ],
    correctAnswerIndex: 1,
    explanation: "Sản xuất vật chất là cơ sở quyết định trực tiếp sự tồn tại và phát triển của xã hội, hình thành nên các quan hệ sản xuất thực tế, từ đó quyết định kiến trúc thượng tầng xã hội.",
    points: 10
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
