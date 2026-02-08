// ==========================================================================
// 1. KHỞI TẠO DỮ LIỆU & DOM
// ==========================================================================
const $ = (id) => document.getElementById(id);

// Data mẫu
let students = [
  { id: "SV01", name: "Nguyễn Văn A", className: "CNTT1", score: 8.5 },
  { id: "SV02", name: "Trần Thị B", className: "MKT2", score: 9.0 },
  { id: "SV03", name: "Lê Văn C", className: "DTVT1", score: 7.2 },
];

// Các element thường dùng
const elements = {
  body: document.documentElement,
  themeBtn: $("themeToggle"),
  themeIcon: $("themeIcon"),
  form: $("studentForm"),
  errorMsg: $("formError"),
  tbody: $("studentTbody"),
  table: $("studentTable"),
  emptyState: $("emptyState"),
  searchInp: $("searchInput"),
  clearBtn: $("clearSearch"),
};

// ==========================================================================
// 2. XỬ LÝ THEME (SÁNG / TỐI)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
}

function setTheme(theme) {
  // Lưu vào localStorage
  localStorage.setItem("theme", theme);
  
  // Set attribute cho HTML
  if (theme === "light") {
    elements.body.setAttribute("data-theme", "light");
    elements.themeIcon.className = "ri-moon-line"; // Icon trăng cho giao diện sáng
  } else {
    elements.body.removeAttribute("data-theme");
    elements.themeIcon.className = "ri-sun-line"; // Icon mặt trời cho giao diện tối
  }
}

elements.themeBtn.addEventListener("click", () => {
  const currentTheme = elements.body.getAttribute("data-theme") === "light" ? "light" : "dark";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
});

// ==========================================================================
// 3. RENDER DỮ LIỆU RA BẢNG
// ==========================================================================
function render(list = students) {
  // Reset tbody
  elements.tbody.innerHTML = "";

  // Kiểm tra nếu không có dữ liệu
  if (list.length === 0) {
    elements.table.style.display = "none";
    elements.emptyState.style.display = "block";
    return;
  }

  // Nếu có dữ liệu
  elements.table.style.display = "table";
  elements.emptyState.style.display = "none";

  list.forEach((st) => {
    const tr = document.createElement("tr");
    // Format điểm số: 1 số lẻ thập phân
    const scoreFormatted = parseFloat(st.score).toFixed(1);
    
    // Logic tô màu điểm (Optional: Xanh nếu >= 5, Đỏ nếu < 5)
    const scoreColor = st.score >= 5 ? "var(--text)" : "#ef4444";

    tr.innerHTML = `
      <td style="font-weight: 600; color: var(--primary)">${st.id}</td>
      <td>${st.name}</td>
      <td>
        <span style="background: var(--surface-hover); padding: 4px 8px; border-radius: 6px; font-size: 0.85em;">
          ${st.className}
        </span>
      </td>
      <td style="font-weight: bold; color: ${scoreColor}">${scoreFormatted}</td>
    `;
    elements.tbody.appendChild(tr);
  });
}

// ==========================================================================
// 4. THÊM SINH VIÊN
// ==========================================================================
elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  elements.errorMsg.textContent = ""; // Xóa lỗi cũ

  const id = $("studentId").value.trim();
  const name = $("studentName").value.trim();
  const className = $("studentClass").value.trim();
  const score = parseFloat($("studentScore").value);

  // Validate trùng ID
  const isDuplicate = students.some((st) => st.id.toLowerCase() === id.toLowerCase());
  if (isDuplicate) {
    elements.errorMsg.textContent = `Lỗi: Mã sinh viên "${id}" đã tồn tại!`;
    return;
  }

  // Validate điểm
  if (score < 0 || score > 10) {
    elements.errorMsg.textContent = "Lỗi: Điểm phải nằm trong khoảng 0 - 10";
    return;
  }

  // Thêm mới
  const newStudent = { id, name, className, score };
  students.push(newStudent); // Thêm vào mảng gốc
  
  render(students); // Render lại bảng
  elements.form.reset(); // Xóa form
  $("studentId").focus(); // Focus lại ô đầu tiên
  
  // Nếu đang tìm kiếm dở thì reset tìm kiếm luôn để thấy sv mới
  elements.searchInp.value = "";
});

// ==========================================================================
// 5. TÌM KIẾM & CLEAR
// ==========================================================================

// Hàm xử lý tìm kiếm
const handleSearch = () => {
  const keyword = elements.searchInp.value.toLowerCase().trim();
  
  const filtered = students.filter(st => 
    st.id.toLowerCase().includes(keyword) ||
    st.name.toLowerCase().includes(keyword) ||
    st.className.toLowerCase().includes(keyword)
  );

  render(filtered);
};

// Sự kiện khi gõ phím
elements.searchInp.addEventListener("input", handleSearch);

// Sự kiện nút Clear
elements.clearBtn.addEventListener("click", () => {
  elements.searchInp.value = "";
  elements.searchInp.focus();
  render(students); // Render lại toàn bộ danh sách gốc
});

// ==========================================================================
// 6. CHẠY LẦN ĐẦU
// ==========================================================================
initTheme();
render();