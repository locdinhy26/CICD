// ==========================================================================
// 1. CẤU HÌNH & KHỞI TẠO
// ==========================================================================
const STORAGE_KEY = "students_data";
const ID_TBODY = "studentTbody";
const ID_FORM = "studentForm";
const ID_ERROR = "formError";

// Lấy danh sách từ LocalStorage
let students = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// ==========================================================================
// 2. LOGIC GIAO DIỆN (THEME & UI)
// ==========================================================================
function initTheme() {
  const themeBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const body = document.documentElement;

  function setTheme(theme) {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      body.setAttribute("data-theme", "light");
      themeIcon.className = "ri-moon-line";
    } else {
      body.removeAttribute("data-theme");
      themeIcon.className = "ri-sun-line";
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = localStorage.getItem("theme") === "light" ? "light" : "dark";
      setTheme(current === "light" ? "dark" : "light");
    });
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
}

// ==========================================================================
// 3. LOGIC NGHIỆP VỤ (CORE)
// ==========================================================================

// Lưu Storage
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

// Cập nhật số lượng
function updateStudentCount(data) {
  const countEl = document.getElementById("studentCount");
  if (countEl) {
    const list = data || students;
    countEl.textContent = `Tổng: ${list.length}`;
  }
}

// Render dữ liệu
function renderStudents(dataToRender = students) {
  const tbody = document.getElementById(ID_TBODY);
  const emptyState = document.getElementById("emptyState");
  
  if (!tbody) return;
  tbody.innerHTML = "";

  // Logic hiển thị Empty State
  if (dataToRender.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    updateStudentCount(dataToRender);
    return;
  }
  
  if (emptyState) emptyState.style.display = "none";

  // Logic render từng dòng
  dataToRender.forEach((st) => {
    const tr = document.createElement("tr");
    
    const scoreVal = parseFloat(st.score);
    const scoreColor = scoreVal >= 5 ? "var(--text)" : "#ef4444"; 
    const scoreFormatted = isNaN(scoreVal) ? st.score : scoreVal.toFixed(1);

    tr.innerHTML = `
      <td style="font-weight: 600; color: var(--primary)">${st.id}</td>
      <td>${st.name}</td>
      <td>
        <span style="background: var(--surface-hover); padding: 4px 8px; border-radius: 6px; font-size: 0.9em;">
          ${st.className}
        </span>
      </td>
      <td style="font-weight: bold; color: ${scoreColor}">${scoreFormatted}</td>
    `;
    tbody.appendChild(tr);
  });

  updateStudentCount(dataToRender);
}

// Validate
function validateInput(id, name, className, score) {
  if (!id || !name || !className || isNaN(score)) {
    return "Vui lòng nhập đầy đủ thông tin hợp lệ!";
  }
  if (score < 0 || score > 10) {
    return "Điểm phải nằm trong khoảng từ 0 đến 10!";
  }
  
  const isDuplicate = students.some(s => s.id === id);
  if (isDuplicate) {
    return `Mã sinh viên "${id}" đã tồn tại!`;
  }
  return "";
}

// Helper: Xóa dấu tiếng Việt (Dùng cho search)
function removeAccents(str) {
  return str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "d")
    .toLowerCase().trim();
}

// ==========================================================================
// 4. XỬ LÝ SỰ KIỆN
// ==========================================================================

function setupForm() {
  const form = document.getElementById(ID_FORM);
  const errorEl = document.getElementById(ID_ERROR);

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorEl.textContent = "";

    const idInput = document.getElementById("studentId").value.trim().toUpperCase();
    const nameInput = document.getElementById("studentName").value.trim();
    const classInput = document.getElementById("studentClass").value.trim();
    const scoreInput = parseFloat(document.getElementById("studentScore").value);

    const errorMsg = validateInput(idInput, nameInput, classInput, scoreInput);
    if (errorMsg) {
      errorEl.textContent = errorMsg;
      return;
    }

    const newStudent = {
      id: idInput,
      name: nameInput,
      className: classInput,
      score: scoreInput
    };

    students.push(newStudent);
    saveToStorage();
    
    // Clear search & Reset UI
    const searchInput = document.getElementById("searchInput");
    if(searchInput) searchInput.value = "";
    
    renderStudents();
    form.reset();
    document.getElementById("studentId").focus();
    alert("Thêm sinh viên thành công!");
  });
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");

  if (!searchInput) return;

  // Sự kiện input (Logic từ nhánh feature/Search được tối ưu)
  searchInput.addEventListener("input", function () {
    const keyword = removeAccents(this.value);

    if (!keyword) {
      renderStudents(students);
      return;
    }

    const filtered = students.filter(s =>
      removeAccents(s.id).includes(keyword) ||
      removeAccents(s.name).includes(keyword) ||
      removeAccents(s.className).includes(keyword)
    );

    renderStudents(filtered);
  });

  // Nút xóa tìm kiếm
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchInput.focus();
      renderStudents(students);
    });
  }
}

// ==========================================================================
// 5. CHẠY ỨNG DỤNG
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupForm();
  setupSearch();
  renderStudents();
});
