# Trả lời câu hỏi ôn tập Bài Tập 7

### Câu 1: CI khác CD chỗ nào?
**Trả lời:** 
- **CI (Continuous Integration)** tập trung vào việc tự động build và test mỗi khi có thay đổi code để phát hiện lỗi sớm.
- **CD (Continuous Deployment)** mở rộng CI bằng cách tự động triển khai (deploy) phiên bản đã vượt qua các bài kiểm tra CI lên môi trường thực tế.

### Câu 2: Runner là gì? Ai cung cấp runner?
**Trả lời:** 
- Runner là server, máy ảo hoặc container thực thi các công việc (jobs) trong pipeline.
- GitLab.com cung cấp các **shared runners** miễn phí cho người dùng, hoặc người dùng có thể tự cài đặt runner riêng (self-managed).

### Câu 3: Artifacts dùng để làm gì?
**Trả lời:** 
- Artifacts là các tệp tin hoặc thư mục được tạo ra sau khi một job hoàn thành (ví dụ: file log, kết quả build, bản vẽ thiết kế).
- Chúng được sử dụng để lưu trữ kết quả đầu ra và có thể được chia sẻ, chuyển tiếp giữa các stage khác nhau trong pipeline.

### Câu 4: Pipeline fail ở stage test, stage deploy có chạy không?
**Trả lời:** 
- **Không.** Pipeline chạy theo thứ tự tuần tự của các stage. Nếu một stage bị lỗi (fail), pipeline sẽ dừng lại ngay lập tức và các stage tiếp theo (như deploy) sẽ không được thực thi để đảm bảo code lỗi không được triển khai.

### Câu 5: Làm sao để pipeline chỉ chạy trên branch `main`?
**Trả lời:** 
Dùng thuộc tính `rules` hoặc `only` trong cấu hình job của `.gitlab-ci.yml`.
Ví dụ:
```yaml
rules:
  - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

### Câu 6: Muốn chạy pipeline trên mọi branch?
**Trả lời:** 
Để pipeline chạy trên mọi branch, ta có thể loại bỏ phần điều kiện `rules` hoặc sử dụng điều kiện kiểm tra sự tồn tại của branch:
```yaml
rules:
  - if: $CI_COMMIT_BRANCH
```
