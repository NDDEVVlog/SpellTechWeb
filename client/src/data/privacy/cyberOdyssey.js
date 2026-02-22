// Privacy Policy for CyberOdyssey (Game)
import { getPrivacyPolicy } from './default';

export const cyberOdysseyPolicy = getPrivacyPolicy('CyberOdyssey');

// Add game-specific section
cyberOdysseyPolicy.en.sections.splice(2, 0, {
  heading: "2.5 Game Data",
  content: "CyberOdyssey collects:\n\n• Game Progress: Save files, in-game achievements, and gameplay statistics.\n• Performance Metrics: Frame rates, graphics settings, and system information for optimization.\n• Player Preferences: Control settings, audio preferences, and visual customizations."
});

cyberOdysseyPolicy.vi.sections.splice(2, 0, {
  heading: "2.5 Dữ Liệu Trò Chơi",
  content: "CyberOdyssey thu thập:\n\n• Tiến Độ Trò Chơi: Tệp lưu, thành tích trong trò chơi và thống kê gameplay.\n• Số Liệu Hiệu Suất: Tỷ lệ khung hình, cài đặt đồ họa và thông tin hệ thống để tối ưu hóa.\n• Tùy Chọn Người Chơi: Cài đặt điều khiển, tùy chọn âm thanh và tùy chỉnh hình ảnh."
});

export default cyberOdysseyPolicy;
