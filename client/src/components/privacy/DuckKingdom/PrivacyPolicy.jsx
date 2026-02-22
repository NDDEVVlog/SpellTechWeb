// src/components/privacy/DuckKingdom/PrivacyPolicy.jsx
import React from 'react';
import '../PrivacyPolicy.css';

const DuckKingdomPrivacyPolicy = ({ lang }) => {
  const appName = 'Duck Kingdom';
  
  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: February 2026",
      sections: [
        {
          heading: "1. Introduction",
          content: `Welcome to ${appName}. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process your personal information, and what rights and options you have with respect to that information.`
        },
        {
          heading: "2. Information We Collect",
          content: "We may collect the following types of information:\n\n• Account Information: Player name, email address, and account creation date.\n• Game Progress: Level completion, character progression, resource collection data, and gameplay history.\n• Multiplayer Data: Leaderboard positions, friend lists, clan/guild membership, and player interactions.\n• Device Information: Device type, OS version, and device identifiers for compatibility."
        },
        {
          heading: "2.5 Game-Specific Data Collection",
          content: "${appName} collects:\n\n• Level Data: Levels completed, difficulty settings chosen, and completion times.\n• Character Data: Character customization choices, collected items, and upgrades purchased.\n• Social Data: Screenshots shared through our platform, multiplayer match history, and chat logs (if applicable).\n• In-Game Economy: Virtual currency balances, marketplace transactions, and item ownership."
        },
        {
          heading: "3. How We Use Your Information",
          content: "We use the information we collect for the following purposes:\n\n• To maintain your game account and save progress.\n• To populate and update leaderboards and rankings.\n• To facilitate multiplayer and social features.\n• To provide in-game events and seasonal content.\n• To improve game balance and level design.\n• To prevent cheating and exploitation.\n• To send game updates and announcements."
        },
        {
          heading: "4. Data Sharing",
          content: "We do not sell personal information. We may share your information:\n\n• With other players (only publicly chosen display names and leaderboard positions).\n• With service providers who host our game servers.\n• When legally required or to protect users and our services.\n• Public leaderboard data may be shared with statistics tracking websites."
        },
        {
          heading: "5. Data Security",
          content: "We use encryption and secure server infrastructure to protect your account and game data. Your password is securely hashed and never stored in plain text."
        },
        {
          heading: "6. Your Rights",
          content: "You may:\n\n• Request access to your personal account and game progress data.\n• Change or delete your account.\n• Request your game data in a portable format.\n• Request removal from leaderboards.\n\nContact spelltechstudio@gmail.com for these requests."
        },
        {
          heading: "7. Cookies and Local Storage",
          content: "We use cookies and local storage to save game preferences, login sessions, and gameplay settings. You can manage these through your device settings."
        },
        {
          heading: "8. Links to External Sites",
          content: "If ${appName} links to external websites, we are not responsible for their privacy practices. Please review their policies separately."
        },
        {
          heading: "9. Children's Privacy",
          content: "${appName} is suitable for all ages. If we become aware we've collected data from a child under 13 without parental consent, we'll delete it immediately."
        },
        {
          heading: "10. Policy Changes",
          content: "We may update this Privacy Policy when necessary. Significant changes will be communicated through in-game notifications or email."
        },
        {
          heading: "11. Contact Us",
          content: `For privacy questions about ${appName}:\n\nEmail: spelltechstudio@gmail.com\nDiscord: https://discord.gg/FDgPx6rJVc\nStudio: Spell Tech - Made in Vietnam`
        }
      ]
    },
    vi: {
      title: "Chính Sách Bảo Mật",
      lastUpdated: "Cập nhật lần cuối: Tháng 2, 2026",
      sections: [
        {
          heading: "1. Giới Thiệu",
          content: `Chào mừng bạn đến với ${appName}. Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, công khai và xử lý thông tin cá nhân của bạn.`
        },
        {
          heading: "2. Thông Tin Chúng Tôi Thu Thập",
          content: "Chúng tôi có thể thu thập các loại thông tin sau:\n\n• Thông tin Tài khoản: Tên người chơi, địa chỉ email và ngày tạo tài khoản.\n• Tiến Độ Trò Chơi: Hoàn thành cấp độ, tiến bộ nhân vật, dữ liệu thu thập tài nguyên và lịch sử gameplay.\n• Dữ Liệu Nhiều Người Chơi: Vị trí xếp hạng, danh sách bạn bè, tư cách thành viên nhóm/bang hội và tương tác giữa người chơi.\n• Thông tin Thiết bị: Loại thiết bị, phiên bản HĐH và định danh thiết bị để tương thích."
        },
        {
          heading: "2.5 Thu Thập Dữ Liệu Dành Riêng Cho Trò Chơi",
          content: "${appName} thu thập:\n\n• Dữ Liệu Cấp Độ: Các cấp độ hoàn thành, cài đặt độ khó được chọn và thời gian hoàn thành.\n• Dữ Liệu Nhân Vật: Lựa chọn tùy chỉnh nhân vật, mục thu thập và nâng cấp được mua.\n• Dữ Liệu Xã Hội: Ảnh chụp màn hình chia sẻ qua nền tảng của chúng tôi, lịch sử trận đấu nhiều người chơi và nhật ký trò chuyện.\n• Nền Kinh Tế Trong Trò Chơi: Số dư tiền tệ ảo, giao dịch thị trường và quyền sở hữu mục."
        },
        {
          heading: "3. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn",
          content: "Chúng tôi sử dụng thông tin mà chúng tôi thu thập cho các mục đích sau:\n\n• Để duy trì tài khoản trò chơi của bạn và lưu tiến độ.\n• Để dân sự hoá và cập nhật bảng xếp hạng.\n• Để tạo điều kiện cho các tính năng nhiều người chơi và xã hội.\n• Để cung cấp các sự kiện trong trò chơi và nội dung theo mùa.\n• Để cải thiện sự cân bằng trò chơi và thiết kế cấp độ.\n• Để ngăn chặn gian lận và khai thác.\n• Để gửi các cập nhật trò chơi và thông báo."
        },
        {
          heading: "4. Chia Sẻ Dữ Liệu",
          content: "Chúng tôi không bán thông tin cá nhân. Chúng tôi có thể chia sẻ thông tin của bạn:\n\n• Với những người chơi khác (chỉ tên hiển thị được chọn công khai và vị trí xếp hạng).\n• Với các nhà cung cấp dịch vụ lưu trữ máy chủ trò chơi của chúng tôi.\n• Khi được yêu cầu bởi luật pháp hoặc để bảo vệ người dùng và dịch vụ của chúng tôi.\n• Dữ liệu bảng xếp hạng công khai có thể được chia sẻ với các trang web theo dõi thống kê."
        },
        {
          heading: "5. Bảo Mật Dữ Liệu",
          content: "Chúng tôi sử dụng mã hóa và cơ sở hạ tầng máy chủ an toàn để bảo vệ tài khoản và dữ liệu trò chơi của bạn."
        },
        {
          heading: "6. Quyền Của Bạn",
          content: "Bạn có thể:\n\n• Yêu cầu truy cập dữ liệu tài khoản cá nhân và tiến độ trò chơi của bạn.\n• Thay đổi hoặc xóa tài khoản của bạn.\n• Yêu cầu dữ liệu trò chơi của bạn ở định dạng có thể mang theo.\n• Yêu cầu loại bỏ khỏi bảng xếp hạng.\n\nLiên hệ spelltechstudio@gmail.com cho các yêu cầu này."
        },
        {
          heading: "7. Cookie và Bộ Nhớ Cục Bộ",
          content: "Chúng tôi sử dụng cookie và bộ nhớ cục bộ để lưu tùy chọn trò chơi, phiên đăng nhập và cài đặt gameplay của bạn."
        },
        {
          heading: "8. Các Liên Kết Đến Các Trang Web Bên Ngoài",
          content: "Nếu ${appName} liên kết đến các trang web bên ngoài, chúng tôi không chịu trách nhiệm về các thực hành bảo mật của họ."
        },
        {
          heading: "9. Bảo Vệ Quyền Riêng Tư Của Trẻ Em",
          content: "${appName} phù hợp cho mọi lứa tuổi. Nếu chúng tôi phát hiện chúng tôi đã thu thập dữ liệu từ trẻ em dưới 13 tuổi mà không có sự đồng ý của cha mẹ, chúng tôi sẽ xóa nó ngay."
        },
        {
          heading: "10. Thay Đổi Chính Sách",
          content: "Chúng tôi có thể cập nhật Chính sách Bảo mật này khi cần thiết. Các thay đổi đáng kể sẽ được thông báo qua các thông báo trong trò chơi hoặc email."
        },
        {
          heading: "11. Liên Hệ Với Chúng Tôi",
          content: `Để biết thêm câu hỏi bảo mật về ${appName}:\n\nEmail: spelltechstudio@gmail.com\nDiscord: https://discord.gg/FDgPx6rJVc\nStudio: Spell Tech - Sản xuất tại Việt Nam`
        }
      ]
    }
  };

  const currentContent = content[lang] || content['en'];

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h1>{currentContent.title}</h1>
        <p className="app-name">{appName}</p>
        <p className="last-updated">{currentContent.lastUpdated}</p>
      </div>

      <div className="privacy-policy-content">
        {currentContent.sections.map((section, index) => (
          <div key={index} className="policy-section">
            <h2>{section.heading}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="privacy-policy-footer">
        <p>© 2025 Spell Tech. All rights reserved.</p>
      </div>
    </div>
  );
};

export default DuckKingdomPrivacyPolicy;
