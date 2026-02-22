// Privacy Policy for Duck Kingdom (Game)
import { getPrivacyPolicy } from './default';

export const duckKingdomPolicy = getPrivacyPolicy('Duck Kingdom');

// Add game-specific section
duckKingdomPolicy.en.sections.splice(2, 0, {
  heading: "2.5 Game Data",
  content: "Duck Kingdom collects:\n\n• Game Progress: Level completion, character progression, and resource management data.\n• Multiplayer Data: Leaderboards, multiplayer sessions, and player interactions.\n• Media Files: Screenshots and recordings if shared through our platform."
});

duckKingdomPolicy.vi.sections.splice(2, 0, {
  heading: "2.5 Dữ Liệu Trò Chơi",
  content: "Duck Kingdom thu thập:\n\n• Tiến Độ Trò Chơi: Hoàn thành cấp độ, tiến bộ nhân vật và dữ liệu quản lý tài nguyên.\n• Dữ Liệu Nhiều Người Chơi: Bảng xếp hạng, phiên chơi nhiều người chơi và tương tác người chơi.\n• Tệp Phương Tiện: Ảnh chụp màn hình và ghi âm nếu được chia sẻ qua nền tảng của chúng tôi."
});

export default duckKingdomPolicy;
