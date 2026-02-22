// src/components/privacy/Default/PrivacyPolicy.jsx
import React from 'react';
import '../PrivacyPolicy.css';

const DefaultPrivacyPolicy = ({ lang, appName = 'Spell Tech' }) => {
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
          content: "We may collect the following types of information:\n\n• Contact Information: Name, email address, and other contact details you provide when reaching out to us.\n• Usage Data: Information about how you interact with our website, products, and services, including IP address, browser type, and pages visited.\n• Device Information: Device identifiers, operating system, and device type.\n• Cookies: We use cookies and similar tracking technologies to enhance your experience."
        },
        {
          heading: "3. How We Use Your Information",
          content: "We use the information we collect for the following purposes:\n\n• To respond to your inquiries and provide customer support.\n• To improve our website, products, and services.\n• To send you promotional communications (with your consent).\n• To analyze usage patterns and trends.\n• To comply with legal obligations.\n• To protect against fraud and security threats."
        },
        {
          heading: "4. Data Sharing",
          content: "We do not sell, trade, or rent your personal information to third parties. We may share your information:\n\n• With service providers who assist us in operating our website and conducting business.\n• When required by law or in response to legal requests.\n• To protect our rights, privacy, safety, or property.\n• In the event of a merger, acquisition, or dissolution."
        },
        {
          heading: "5. Data Security",
          content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security."
        },
        {
          heading: "6. Your Rights",
          content: "Depending on your location, you may have the following rights:\n\n• The right to access your personal information.\n• The right to correct inaccurate or incomplete information.\n• The right to delete your information.\n• The right to opt-out of marketing communications.\n• The right to data portability.\n\nTo exercise any of these rights, please contact us at spelltechstudio@gmail.com."
        },
        {
          heading: "7. Cookies and Tracking",
          content: "Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Please note that disabling cookies may affect the functionality of our website."
        },
        {
          heading: "8. Third-Party Links",
          content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites before providing your information."
        },
        {
          heading: "9. Children's Privacy",
          content: "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with their information, we will promptly delete it."
        },
        {
          heading: "10. Changes to This Policy",
          content: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website and updating the 'Last Updated' date."
        },
        {
          heading: "11. Contact Us",
          content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices for ${appName}, please contact us at:\n\nEmail: spelltechstudio@gmail.com\nDiscord: https://discord.gg/FDgPx6rJVc`
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
          content: "Chúng tôi có thể thu thập các loại thông tin sau:\n\n• Thông tin Liên hệ: Tên, địa chỉ email và các chi tiết liên hệ khác mà bạn cung cấp khi liên hệ với chúng tôi.\n• Dữ liệu Sử dụng: Thông tin về cách bạn tương tác với trang web, sản phẩm và dịch vụ của chúng tôi.\n• Thông tin Thiết bị: Các định danh thiết bị, hệ điều hành và loại thiết bị.\n• Cookie: Chúng tôi sử dụng cookie và các công nghệ theo dõi tương tự để cải thiện trải nghiệm của bạn."
        },
        {
          heading: "3. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn",
          content: "Chúng tôi sử dụng thông tin mà chúng tôi thu thập cho các mục đích sau:\n\n• Để trả lời các câu hỏi của bạn và cung cấp hỗ trợ khách hàng.\n• Để cải thiện trang web, sản phẩm và dịch vụ của chúng tôi.\n• Để gửi cho bạn các thông báo quảng cáo (với sự đồng ý của bạn).\n• Để phân tích các mô hình và xu hướng sử dụng.\n• Để tuân thủ các nghĩa vụ pháp lý.\n• Để bảo vệ chống lại gian lận và mối đe dọa bảo mật."
        },
        {
          heading: "4. Chia Sẻ Dữ Liệu",
          content: "Chúng tôi không bán, buôn bán hoặc cho thuê thông tin cá nhân của bạn cho các bên thứ ba. Chúng tôi có thể chia sẻ thông tin của bạn:\n\n• Với các nhà cung cấp dịch vụ giúp chúng tôi vận hành trang web và tiến hành kinh doanh.\n• Khi được yêu cầu bởi luật pháp hoặc phản ứng với các yêu cầu pháp lý.\n• Để bảo vệ quyền, quyền riêng tư, sự an toàn hoặc tài sản của chúng tôi.\n• Trong trường hợp sáp nhập, mua lại hoặc giải thể."
        },
        {
          heading: "5. Bảo Mật Dữ Liệu",
          content: "Chúng tôi triển khai các biện pháp kỹ thuật và tổ chức phù hợp để bảo vệ thông tin cá nhân của bạn khỏi truy cập, thay đổi, công khai hoặc hủy hoại trái phép. Tuy nhiên, không có phương thức truyền qua Internet nào hoàn toàn an toàn."
        },
        {
          heading: "6. Quyền Của Bạn",
          content: "Tùy thuộc vào vị trí của bạn, bạn có thể có các quyền sau:\n\n• Quyền truy cập thông tin cá nhân của bạn.\n• Quyền sửa chữa thông tin không chính xác hoặc không đầy đủ.\n• Quyền xóa thông tin của bạn.\n• Quyền từ chối các thông báo tiếp thị.\n• Quyền di chuyển dữ liệu.\n\nĐể thực hiện bất kỳ quyền nào trong số này, vui lòng liên hệ với chúng tôi tại spelltechstudio@gmail.com."
        },
        {
          heading: "7. Cookie và Theo Dõi",
          content: "Trang web của chúng tôi sử dụng cookie và công nghệ theo dõi tương tự để cải thiện trải nghiệm của bạn. Bạn có thể kiểm soát cài đặt cookie thông qua trình duyệt của mình. Lưu ý rằng vô hiệu hóa cookie có thể ảnh hưởng đến chức năng của trang web của chúng tôi."
        },
        {
          heading: "8. Liên Kết Của Bên Thứ Ba",
          content: "Trang web của chúng tôi có thể chứa các liên kết đến các trang web của bên thứ ba. Chúng tôi không chịu trách nhiệm về các thực hành bảo mật của các trang web bên ngoài này. Chúng tôi khuyến khích bạn xem lại các chính sách bảo mật của bất kỳ trang web của bên thứ ba nào."
        },
        {
          heading: "9. Bảo Vệ Quyền Riêng Tư Của Trẻ Em",
          content: "Dịch vụ của chúng tôi không được dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em. Nếu chúng tôi phát hiện ra rằng một đứa trẻ đã cung cấp cho chúng tôi thông tin của mình, chúng tôi sẽ xóa nó ngay."
        },
        {
          heading: "10. Thay Đổi Chính Sách Này",
          content: "Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi lớn nào bằng cách đăng chính sách được cập nhật trên trang web của chúng tôi."
        },
        {
          heading: "11. Liên Hệ Với Chúng Tôi",
          content: `Nếu bạn có bất kỳ câu hỏi, mối quan tâm hoặc yêu cầu nào liên quan đến Chính sách Bảo mật này hoặc các thực hành bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi tại:\n\nEmail: spelltechstudio@gmail.com\nDiscord: https://discord.gg/FDgPx6rJVc`
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

export default DefaultPrivacyPolicy;
