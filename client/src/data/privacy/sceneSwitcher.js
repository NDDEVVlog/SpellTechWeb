// Privacy Policy for Scene Switcher Tool V2
import { getPrivacyPolicy } from './default';

export const sceneSwitcherPolicy = getPrivacyPolicy('Scene Switcher Tool V2');

// Add tool-specific section
sceneSwitcherPolicy.en.sections.splice(2, 0, {
  heading: "2.5 Project Data",
  content: "Scene Switcher Tool V2 collects:\n\n• Project Files: Scene configurations, switch settings, and automation rules.\n• Usage Analytics: Tool feature usage, performance data, and error logs for improvements.\n• File Metadata: Project names, timestamps, and system compatibility information."
});

sceneSwitcherPolicy.vi.sections.splice(2, 0, {
  heading: "2.5 Dữ Liệu Dự Án",
  content: "Scene Switcher Tool V2 thu thập:\n\n• Tệp Dự Án: Cấu hình cảnh, cài đặt chuyển đổi và các quy tắc tự động.\n• Phân Tích Sử Dụng: Sử dụng tính năng công cụ, dữ liệu hiệu suất và nhật ký lỗi để cải tiến.\n• Siêu Dữ Liệu Tệp: Tên dự án, dấu thời gian và thông tin tương thích hệ thống."
});

export default sceneSwitcherPolicy;
