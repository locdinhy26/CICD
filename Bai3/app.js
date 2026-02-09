// --- CẤU HÌNH ---
const ID_TBODY = "studentTbody";

// --- DỮ LIỆU GIẢ (Dùng cho Task 02) ---
let students = [
  { id: "SV001", name: "Nguyen Van A", className: "CNTT1", score: 8.5 },
  { id: "SV002", name: "Tran Thi B", className: "CNTT2", score: 7.0 },
  { id: "SV003", name: "Le Van C", className: "DTVT1", score: 9.2 },
];

// --- HÀM RENDER ---
function renderStudents() {
  const tbody = document.getElementById(ID_TBODY);
  
  // Xóa nội dung cũ
  tbody.innerHTML = "";

  // Duyệt mảng và tạo HTML
  students.forEach((student) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.className}</td>
      <td>${student.score}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Chạy hàm render ngay khi tải trang
renderStudents();