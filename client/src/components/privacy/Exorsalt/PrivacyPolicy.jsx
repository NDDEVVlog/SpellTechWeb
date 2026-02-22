// src/components/privacy/CyberOdyssey/PrivacyPolicy.jsx
import React from 'react';
import '../PrivacyPolicy.css';

const ExorsaltPrivacyPolicy = ({ lang }) => {
  const appName = 'Exorsalt';
  const providerName = 'SpellTech';
  
  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: February 22, 2026",
      intro: `This privacy policy applies to the ${appName} app (hereby referred to as "Application") for mobile devices that was created by ${providerName} (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".`,
      sections: [
        {
          heading: "1. Information Collection and Use",
          content: `The Application collects information when you download and use it. This information may include information such as:

• Your device's Internet Protocol address (e.g. IP address)
• The pages of the Application that you visit, the time and date of your visit, the time spent on those pages
• The time spent on the Application
• The operating system you use on your mobile device

The Application does not gather precise information about the location of your mobile device.

The Application does not use Artificial Intelligence (AI) technologies to process your data or provide features.

The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.`
        },
        {
          heading: "2. Personal Information",
          content: "For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to spelltechstudio@gmail.com. The information that the Service Provider request will be retained by them and used as described in this privacy policy."
        },
        {
          heading: "3. Third Party Access",
          content: `Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.

Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:

• AdMob
• Unity

The Service Provider may disclose User Provided and Automatically Collected Information:
• As required by law, such as to comply with a subpoena, or similar legal process;
• When they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
• With their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.`
        },
        {
          heading: "4. Opt-Out Rights",
          content: "You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network."
        },
        {
          heading: "5. Data Retention Policy",
          content: "The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at spelltechstudio@gmail.com and they will respond in a reasonable time."
        },
        {
          heading: "6. Children",
          content: `The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.

The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (spelltechstudio@gmail.com) so that they will be able to take the necessary actions.`
        },
        {
          heading: "7. Security",
          content: "The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains."
        },
        {
          heading: "8. Changes",
          content: "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes."
        },
        {
          heading: "9. Your Consent",
          content: "By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us."
        },
        {
          heading: "10. Contact Us",
          content: "If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at spelltechstudio@gmail.com."
        }
      ]
    },
    vi: {
      title: "Chính Sách Bảo Mật",
      lastUpdated: "Cập nhật lần cuối: 22 Tháng 2, 2026",
      intro: `Chính sách bảo mật này áp dụng cho ứng dụng ${appName} (sau đây gọi là "Ứng dụng") dành cho thiết bị di động được tạo bởi ${providerName} (sau đây gọi là "Nhà cung cấp dịch vụ") dưới dạng dịch vụ Miễn phí. Dịch vụ này được cung cấp "NGUYÊN TRẠNG".`,
      sections: [
        {
          heading: "1. Thu Thập và Sử Dụng Thông Tin",
          content: `Ứng dụng thu thập thông tin khi bạn tải xuống và sử dụng. Thông tin này có thể bao gồm:

• Địa chỉ Giao thức Internet của thiết bị (ví dụ: địa chỉ IP)
• Các trang của Ứng dụng mà bạn truy cập, thời gian và ngày truy cập, thời gian dành cho các trang đó
• Thời gian sử dụng Ứng dụng
• Hệ điều hành bạn sử dụng trên thiết bị di động

Ứng dụng không thu thập thông tin chính xác về vị trí thiết bị di động của bạn.

Ứng dụng không sử dụng công nghệ Trí tuệ Nhân tạo (AI) để xử lý dữ liệu của bạn hoặc cung cấp các tính năng.

Nhà cung cấp dịch vụ có thể sử dụng thông tin bạn cung cấp để liên hệ với bạn theo thời gian nhằm cung cấp thông tin quan trọng, các thông báo bắt buộc và các chương trình khuyến mãi tiếp thị.`
        },
        {
          heading: "2. Thông Tin Cá Nhân",
          content: "Để có trải nghiệm tốt hơn khi sử dụng Ứng dụng, Nhà cung cấp dịch vụ có thể yêu cầu bạn cung cấp một số thông tin nhận dạng cá nhân nhất định, bao gồm nhưng không giới hạn ở spelltechstudio@gmail.com. Thông tin mà Nhà cung cấp dịch vụ yêu cầu sẽ được họ lưu giữ và sử dụng như được mô tả trong chính sách bảo mật này."
        },
        {
          heading: "3. Truy Cập Của Bên Thứ Ba",
          content: `Chỉ dữ liệu tổng hợp, ẩn danh mới được truyền định kỳ đến các dịch vụ bên ngoài để hỗ trợ Nhà cung cấp dịch vụ cải thiện Ứng dụng và dịch vụ của họ. Nhà cung cấp dịch vụ có thể chia sẻ thông tin của bạn với các bên thứ ba theo các cách được mô tả trong tuyên bố bảo mật này.

Xin lưu ý rằng Ứng dụng sử dụng các dịch vụ của bên thứ ba có Chính sách bảo mật riêng về xử lý dữ liệu. Dưới đây là liên kết đến Chính sách bảo mật của các nhà cung cấp dịch vụ bên thứ ba được Ứng dụng sử dụng:

• AdMob
• Unity

Nhà cung cấp dịch vụ có thể tiết lộ Thông tin do Người dùng cung cấp và Thông tin được Thu thập Tự động:
• Theo yêu cầu của pháp luật, chẳng hạn như để tuân thủ trát đòi hầu tòa hoặc quy trình pháp lý tương tự;
• Khi họ tin tưởng một cách thiện chí rằng việc tiết lộ là cần thiết để bảo vệ quyền của họ, bảo vệ sự an toàn của bạn hoặc sự an toàn của người khác, điều tra gian lận hoặc phản hồi yêu cầu của chính phủ;
• Với các nhà cung cấp dịch vụ tin cậy làm việc thay mặt họ, không có quyền sử dụng độc lập thông tin chúng tôi tiết lộ cho họ và đã đồng ý tuân thủ các quy tắc được nêu trong tuyên bố bảo mật này.`
        },
        {
          heading: "4. Quyền Từ Chối (Opt-Out)",
          content: "Bạn có thể dừng tất cả việc thu thập thông tin của Ứng dụng một cách dễ dàng bằng cách gỡ cài đặt nó. Bạn có thể sử dụng các quy trình gỡ cài đặt tiêu chuẩn có sẵn như một phần của thiết bị di động của bạn hoặc qua chợ ứng dụng di động hoặc mạng."
        },
        {
          heading: "5. Chính Sách Lưu Trữ Dữ Liệu",
          content: "Nhà cung cấp dịch vụ sẽ lưu giữ dữ liệu do Người dùng cung cấp miễn là bạn sử dụng Ứng dụng và trong một khoảng thời gian hợp lý sau đó. Nếu bạn muốn họ xóa Dữ liệu do Người dùng cung cấp mà bạn đã cung cấp qua Ứng dụng, vui lòng liên hệ với họ tại spelltechstudio@gmail.com và họ sẽ phản hồi trong thời gian hợp lý."
        },
        {
          heading: "6. Trẻ Em",
          content: `Nhà cung cấp dịch vụ không sử dụng Ứng dụng để cố ý thu thập dữ liệu hoặc tiếp thị cho trẻ em dưới 13 tuổi.

Ứng dụng không hướng đến bất kỳ ai dưới 13 tuổi. Nhà cung cấp dịch vụ không cố ý thu thập thông tin nhận dạng cá nhân từ trẻ em dưới 13 tuổi. Trong trường hợp Nhà cung cấp dịch vụ phát hiện ra rằng một đứa trẻ dưới 13 tuổi đã cung cấp thông tin cá nhân, Nhà cung cấp dịch vụ sẽ xóa ngay thông tin này khỏi máy chủ của họ. Nếu bạn là cha mẹ hoặc người giám hộ và bạn biết rằng con bạn đã cung cấp cho chúng tôi thông tin cá nhân, vui lòng liên hệ với Nhà cung cấp dịch vụ (spelltechstudio@gmail.com) để họ có thể thực hiện các hành động cần thiết.`
        },
        {
          heading: "7. Bảo Mật",
          content: "Nhà cung cấp dịch vụ quan tâm đến việc bảo vệ tính bảo mật thông tin của bạn. Nhà cung cấp dịch vụ cung cấp các biện pháp bảo vệ vật lý, điện tử và quy trình để bảo vệ thông tin mà Nhà cung cấp dịch vụ xử lý và duy trì."
        },
        {
          heading: "8. Thay Đổi",
          content: "Chính sách bảo mật này có thể được cập nhật theo thời gian vì bất kỳ lý do gì. Nhà cung cấp dịch vụ sẽ thông báo cho bạn về bất kỳ thay đổi nào đối với Chính sách bảo mật bằng cách cập nhật trang này với Chính sách bảo mật mới. Bạn nên tham khảo Chính sách bảo mật này thường xuyên để biết bất kỳ thay đổi nào, vì việc tiếp tục sử dụng được coi là chấp thuận tất cả các thay đổi."
        },
        {
          heading: "9. Sự Đồng Ý Của Bạn",
          content: "Bằng cách sử dụng Ứng dụng, bạn đồng ý với việc xử lý thông tin của bạn như được quy định trong Chính sách bảo mật này ngay bây giờ và khi được chúng tôi sửa đổi."
        },
        {
          heading: "10. Liên Hệ Với Chúng Tôi",
          content: "Nếu bạn có bất kỳ câu hỏi nào liên quan đến quyền riêng tư khi sử dụng Ứng dụng, hoặc có câu hỏi về các thực tiễn, vui lòng liên hệ với Nhà cung cấp dịch vụ qua email tại spelltechstudio@gmail.com."
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
        <p className="policy-intro" style={{marginTop: '20px', whiteSpace: 'pre-line'}}>
          {currentContent.intro}
        </p>
      </div>

      <div className="privacy-policy-content">
        {currentContent.sections.map((section, index) => (
          <div key={index} className="policy-section">
            <h2>{section.heading}</h2>
            <p style={{whiteSpace: 'pre-line'}}>{section.content}</p>
          </div>
        ))}
      </div>

      <div className="privacy-policy-footer">
        <p>© 2026 {providerName}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ExorsaltPrivacyPolicy;