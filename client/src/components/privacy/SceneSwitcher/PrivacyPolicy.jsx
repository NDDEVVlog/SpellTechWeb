// src/components/privacy/SceneSwitcher/PrivacyPolicy.jsx
import React from 'react';
import '../PrivacyPolicy.css';

const SceneSwitcherPrivacyPolicy = ({ lang }) => {
  const appName = 'Scene Switcher Tool V2';
  
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
          content: "We may collect the following types of information:\n\n• User Account Data: Email address, username, and account creation information.\n• Project Data: Project names, descriptions, scene configurations, and automation rules (stored locally or on our servers).\n• Usage Analytics: Feature usage statistics, tool performance metrics, and error reports.\n• System Information: Operating system, software version, and hardware specifications for compatibility verification."
        },
        {
          heading: "2.5 Tool-Specific Data Collection",
          content: "${appName} collects:\n\n• Scene Configurations: Scene settings, switch automation rules, and custom scripts.\n• Project Metadata: Project names, file paths, timestamps, and modification history.\n• Performance Data: Processing times, memory usage, and optimization metrics for the tool.\n• Tool Logs: Error logs, warnings, and debug information to improve tool stability."
        },
        {
          heading: "3. How We Use Your Information",
          content: "We use the information we collect for the following purposes:\n\n• To provide and maintain the tool functionality.\n• To offer technical support and troubleshooting.\n• To improve tool features and performance.\n• To detect and fix bugs and compatibility issues.\n• To provide updates and new features.\n• To analyze user workflows and preferences.\n• To ensure security and prevent unauthorized access."
        },
        {
          heading: "4. Data Sharing",
          content: "We do not sell user data. We may share your information:\n\n• With technical support providers when you request assistance.\n• With cloud storage providers if you opt for cloud backup features.\n• When required by law or legal requests.\n• With third-party developers (only aggregated, anonymized data for compatibility research)."
        },
        {
          heading: "5. Data Security",
          content: "We implement end-to-end encryption for stored projects. Local project files remain entirely on your system. Cloud backups (if enabled) are encrypted with military-grade security standards."
        },
        {
          heading: "6. Your Rights",
          content: "You may:\n\n• Access your user account data and project files.\n• Export your projects in standard formats.\n• Delete your account and all associated data.\n• Opt-out of analytics and error reporting.\n• Request information about how your data is used.\n\nContact spelltechstudio@gmail.com for these requests."
        },
        {
          heading: "7. Local Data Storage",
          content: "Most project data is stored locally on your computer. We do not access local files without explicit permission. Optional cloud backup is only enabled when you explicitly opt-in."
        },
        {
          heading: "8. Third-Party Integrations",
          content: "If ${appName} integrates with other software or services, those integrations are subject to their own privacy policies. Review their policies before connecting."
        },
        {
          heading: "9. Children's Privacy",
          content: "${appName} is professional software intended for adults. If we discover we've collected data from children under 13, we will delete it immediately."
        },
        {
          heading: "10. Privacy Policy Updates",
          content: "We may update this Privacy Policy with tool updates or when regulations change. Major updates will be communicated through release notes and email."
        },
        {
          heading: "11. Contact Us",
          content: `For privacy questions regarding ${appName}:\n\nEmail: spelltechstudio@gmail.com\nDiscord: https://discord.gg/FDgPx6rJVc\nStudio: Spell Tech - Vietnam`
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
          content: "Chúng tôi có thể thu thập các loại thông tin sau:\n\n• Dữ Liệu Tài Khoản Người Dùng: Địa chỉ email, tên người dùng và thông tin tạo tài khoản.\n• Dữ Liệu Dự Án: Tên dự án, mô tả, cấu hình cảnh và quy tắc tự động hóa.\n• Phân Tích Sử Dụng: Thống kê sử dụng tính năng, số liệu hiệu suất công cụ và báo cáo lỗi.\n• Thông tin Hệ Thống: Hệ điều hành, phiên bản phần mềm và đặc tả phần cứng.\n"
        },
        {
          heading: "2.5 Thu Thập Dữ Liệu Dành Riêng Cho Công Cụ",
          content: "${appName} thu thập:\n\n• Cấu Hình Cảnh: Cài đặt cảnh, quy tắc tự động hóa chuyển đổi và các tập lệnh tùy chỉnh.\n• Siêu Dữ Liệu Dự Án: Tên dự án, đường dẫn tệp, dấu thời gian và lịch sử sửa đổi.\n• Dữ Liệu Hiệu Suất: Thời gian xử lý, sử dụng bộ nhớ và số liệu tối ưu hóa cho công cụ.\n• Nhật Ký Công Cụ: Nhật ký lỗi, cảnh báo và thông tin gỡ lỗi để cải thiện độ ổn định của công cụ."
        },
        {
          heading: "3. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn",
          content: "Chúng tôi sử dụng thông tin mà chúng tôi thu thập cho các mục đích sau:\n\n• Để cung cấp và duy trì chức năng công cụ.\n• Để cung cấp hỗ trợ kỹ thuật và khắc phục sự cố.\n• Để cải thiện các tính năng và hiệu suất công cụ.\n• Để phát hiện và sửa các lỗi và vấn đề tương thích.\n• Để cung cấp cập nhật và các tính năng mới.\n• Để phân tích quy trình làm việc và tùy chọn của người dùng.\n• Để đảm bảo bảo mật và ngăn chặn truy cập trái phép."
        },
        {
          heading: "4. Chia Sẻ Dữ Liệu",
          content: "Chúng tôi không bán dữ liệu người dùng. Chúng tôi có thể chia sẻ thông tin của bạn:\n\n• Với các nhà cung cấp hỗ trợ kỹ thuật khi bạn yêu cầu hỗ trợ.\n• Với các nhà cung cấp lưu trữ đám mây nếu bạn chọn các tính năng sao lưu đám mây.\n• Khi được yêu cầu bởi luật pháp hoặc yêu cầu pháp lý.\n• Với các nhà phát triển bên thứ ba (chỉ dữ liệu tổng hợp và ẩn danh cho nghiên cứu tương thích)."
        },
        {
          heading: "5. Bảo Mật Dữ Liệu",
          content: "Chúng tôi triển khai mã hóa end-to-end cho các dự án được lưu trữ. Các tệp dự án cục bộ vẫn hoàn toàn trên hệ thống của bạn."
        },
        {
          heading: "6. Quyền Của Bạn",
          content: "Bạn có thể:\n\n• Truy cập dữ liệu tài khoản người dùng và tệp dự án của bạn.\n• Xuất các dự án của bạn ở các định dạng tiêu chuẩn.\n• Xóa tài khoản của bạn và tất cả dữ liệu liên quan.\n• Từ chối phân tích và báo cáo lỗi.\n• Yêu cầu thông tin về cách dữ liệu của bạn được sử dụng.\n\nLiên hệ spelltechstudio@gmail.com cho các yêu cầu này."
        },
        {
          heading: "7. Lưu Trữ Dữ Liệu Cục Bộ",
          content: "Hầu hết dữ liệu dự án được lưu trữ cục bộ trên máy tính của bạn. Chúng tôi không truy cập các tệp cục bộ mà không có sự cho phép rõ ràng."
        },
        {
          heading: "8. Tích Hợp Bên Thứ Ba",
          content: "Nếu ${appName} tích hợp với phần mềm hoặc dịch vụ khác, những tích hợp đó tuân theo các chính sách bảo mật riêng của họ."
        },
        {
          heading: "9. Bảo Vệ Quyền Riêng Tư Của Trẻ Em",
          content: "${appName} là phần mềm chuyên nghiệp dành cho người lớn. Nếu chúng tôi phát hiện chúng tôi đã thu thập dữ liệu từ trẻ em dưới 13 tuổi, chúng tôi sẽ xóa nó ngay."
        },
        {
          heading: "10. Cập Nhật Chính Sách Bảo Mật",
          content: "Chúng tôi có thể cập nhật Chính sách Bảo mật này với các cập nhật công cụ hoặc khi các quy định thay đổi."
        },
        {
          heading: "11. Liên Hệ Với Chúng Tôi",
          content: `Để biết thêm câu hỏi bảo mật liên quan đến ${appName}:\n\nEmail: spelltechstudio@gmail.com\nDiscord: https://discord.gg/FDgPx6rJVc\nStudio: Spell Tech - Việt Nam`
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

export default SceneSwitcherPrivacyPolicy;
