**BÁO CÁO BÀI TẬP 6 - HỆ THỐNG BÁN VÉ TÀU ĐIỆN METRO.**

Nhóm LLT:

Đinh Xuân Lộc 2280610666

Nguyễn Hữu Thọ 2280603122

Phạm Đỗ Quang Long 2280601785

| **Mã** | **Chức năng**             | **Mô tả ngắn**                                    | **Ưu tiên** |
| ------ | ------------------------- | ------------------------------------------------- | ----------- |
| F01    | Đăng ký tài khoản         | Khách tạo tài khoản bằng email/số điện thoại      | Must        |
| F02    | Đăng nhập/Đăng xuất       | Xác thực người dùng và quản lý phiên đăng nhập    | Must        |
| F03    | Quản lý hồ sơ cá nhân     | Cập nhật tên, số điện thoại, mật khẩu             | Should      |
| F04    | Xem danh sách tuyến tàu   | Hiển thị các tuyến, ga đi/ga đến                  | Must        |
| F05    | Tra cứu lịch chạy tàu     | Xem giờ khởi hành theo ngày và tuyến              | Must        |
| F06    | Tìm chuyến theo điều kiện | Lọc theo ga, thời gian, loại vé                   | Must        |
| F07    | Xem chi tiết chuyến       | Thời gian đi, thời gian đến, số ghế còn lại, giá  | Must        |
| F08    | Chọn ghế theo sơ đồ toa   | Hiển thị ghế trống/đã đặt và cho chọn ghế         | Must        |
| F09    | Tạm giữ ghế               | Giữ ghế 5-10 phút để tránh tranh chấp             | Must        |
| F10    | Tính tiền tự động         | Tính tổng tiền theo số lượng vé, loại vé, ưu đãi  | Must        |
| F11    | Áp mã giảm giá            | Nhập voucher hợp lệ để giảm giá                   | Should      |
| F12    | Thanh toán online         | Hỗ trợ ví điện tử/thẻ ngân hàng (mô phỏng)        | Must        |
| F13    | Tạo vé điện tử QR         | Sinh mã QR duy nhất sau khi thanh toán thành công | Must        |
| F14    | Gửi vé qua email          | Gửi thông tin vé cho khách sau khi mua            | Should      |
| F15    | Xem lịch sử đặt vé        | Danh sách vé đã mua, trạng thái từng vé           | Must        |
| F16    | Hủy vé theo chính sách    | Cho phép hủy trước giờ tàu chạy theo quy định     | Should      |
| F17    | Quét QR kiểm tra vé       | Nhân viên soát vé xác nhận vé hợp lệ/hết hạn      | Must        |
| F18    | Quản lý tuyến/chuyến tàu  | Admin CRUD tuyến, ga, lịch chạy, toa tàu          | Must        |
| F19    | Quản lý giá & khuyến mãi  | Admin Cấu hình giá theo tuyến/giờ và mã giảm giá  | Must        |
| F20    | Báo cáo doanh thu         | Admin Thống kê vé bán, doanh thu theo ngày/tuyến  | Could       |

2\. Jira : [BT6GLCC board - Backlog - Jira](https://nguyenhuutho13082004.atlassian.net/jira/software/c/projects/BT6GLCC/boards/35/backlog)

3\. KỊCH BẢN TEST (TEST CASES)

| **ID** | **Chức năng** | **Kịch bản kiểm thử (Test Scenario)**         | **Kết quả mong đợi (Expected Result)**             |
| ------ | ------------- | --------------------------------------------- | -------------------------------------------------- |
| TC01   | Tìm chuyến    | Tìm chuyến với ga đi và ga đến hợp lệ.        | Hiển thị danh sách chuyến phù hợp.                 |
| TC02   | Tìm chuyến    | Tìm chuyến với ga đi và ga đến TRÙNG NHAU.    | Báo lỗi: "Ga đi và Ga đến không được trùng".       |
| TC03   | Chọn ghế      | Click chọn 1 ghế đang ở trạng thái Trống.     | Ghế đổi sang màu vàng (Đã chọn), hiện tổng tiền.   |
| TC04   | Chọn ghế      | Chọn vượt quá 4 ghế trong một lần đặt.        | Báo lỗi: "Chỉ được chọn tối đa 4 ghế".             |
| TC05   | Giữ ghế       | Bấm nút "Tiếp tục" sang màn thanh toán.       | Đồng hồ 10 phút xuất hiện và bắt đầu đếm ngược.    |
| TC06   | Giữ ghế       | Hết 10 phút mà khách chưa thanh toán xong.    | Báo hết hạn, nhả ghế thành màu trắng (Trống).      |
| TC07   | Thanh toán    | Nhập thẻ ngân hàng giả lập và bấm Thanh toán. | Báo "Thanh toán thành công", tạo ra mã vé QR.      |
| TC08   | Soát vé       | Quét mã QR vừa mua thành công ở trên.         | Báo màu Xanh "Vé Hợp Lệ". Vé chuyển thành Đã dùng. |
| TC09   | Soát vé       | Quét lại mã QR đó lần thứ 2.                  | Báo màu Đỏ "Vé Đã Sử Dụng".                        |
| TC10   | Đăng nhập     | Đăng nhập sai mật khẩu 3 lần liên tiếp.       | Báo lỗi "Tài khoản tạm khóa".                      |