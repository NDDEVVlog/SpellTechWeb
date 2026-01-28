/**
 * 1. KHAI BÁO THƯ VIỆN (IMPORTS)
 */
const express = require('express'); // Framework chính
const dotenv = require('dotenv');   // Đọc file cấu hình .env
const cors = require('cors');       // Cho phép trình duyệt khác truy cập
const morgan = require('morgan');   // Ghi log request để dễ debug
const path = require('path');       // Xử lý đường dẫn thư mục

/**
 * 2. CẤU HÌNH (CONFIGURATION)
 */
// Kích hoạt biến môi trường
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * 3. MIDDLEWARES (Lớp trung gian)
 */
app.use(cors());                  // Mở chặn CORS
app.use(morgan('dev'));           // Log request ra terminal
app.use(express.json());          // Đọc dữ liệu JSON gửi lên
app.use(express.urlencoded({ extended: true })); // Đọc dữ liệu từ Form HTML

// QUAN TRỌNG: Cấu hình thư mục chứa file tĩnh (HTML, CSS, JS, Ảnh)
// Tạo một thư mục tên là 'public' cùng cấp với file này để chứa giao diện web
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 4. ROUTES (Định tuyến API)
 */

// Route API ví dụ: Lấy danh sách thành viên team (Dữ liệu cứng, không cần DB)
app.get('/api/members', (req, res) => {
    const teamMembers = [
        { id: 1, name: 'Nguyễn Văn A', role: 'Leader' },
        { id: 2, name: 'Trần Thị B', role: 'Developer' },
        { id: 3, name: 'Lê Văn C', role: 'Designer' }
    ];
    res.json({
        success: true,
        data: teamMembers
    });
});

// Route mặc định: Nếu người dùng vào đường dẫn không tồn tại
// Server sẽ trả về file index.html (nếu bạn làm Single Page App) 
// hoặc thông báo lỗi.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/**
 * 5. KHỞI ĐỘNG SERVER
 */
app.listen(PORT, () => {
    console.log(`✨ Server team đang chạy tại: http://localhost:${PORT}`);
});