// --- CẤU HÌNH & KHỞI TẠO ---
const STORAGE_KEY = "students_data";
const ID_TBODY = "studentTbody";
const ID_FORM = "studentForm";
const ID_ERROR = "formError";

// Lấy danh sách từ LocalStorage, nếu không có thì trả về mảng rỗng
let students = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// --- CÁC HÀM XỬ LÝ (LOGIC) ---

// 1. Hàm lưu vào LocalStorage
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

// 2. Hàm render (Hiển thị)
function renderStudents() {
  const tbody = document.getElementById(ID_TBODY);
  const emptyState = document.getElementById("emptyState"); // (Optional) Nếu bạn muốn ẩn hiện cái thùng rỗng
  
  tbody.innerHTML = "";

  // Xử lý hiển thị empty state (nếu có trong HTML)
  if (students.length === 0 && emptyState) {
    emptyState.style.display = "block";
  } else if (emptyState) {
    emptyState.style.display = "none";
  }

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

// 3. Hàm Validate dữ liệu
function validateInput(id, name, className, score) {
  if (!id || !name || !className || !score) {
    return "Vui lòng nhập đầy đủ thông tin!";
  }
  
  if (score < 0 || score > 10) {
    return "Điểm phải nằm trong khoảng từ 0 đến 10!";
  }

  // Kiểm tra trùng Mã SV
  const isDuplicate = students.some(s => s.id === id);
  if (isDuplicate) {
    return "Mã sinh viên này đã tồn tại!";
  }

  return ""; // Không có lỗi
}

// 4. Xử lý sự kiện Submit Form
function setupForm() {
  const form = document.getElementById(ID_FORM);
  const errorEl = document.getElementById(ID_ERROR);

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Chặn load lại trang

    // Lấy giá trị từ các ô input
    const idInput = document.getElementById("studentId").value.trim().toUpperCase();
    const nameInput = document.getElementById("studentName").value.trim();
    const classInput = document.getElementById("studentClass").value.trim();
    const scoreInput = parseFloat(document.getElementById("studentScore").value);

    // Validate
    const errorMessage = validateInput(idInput, nameInput, classInput, scoreInput);
    
    if (errorMessage) {
      errorEl.textContent = errorMessage;
      return; // Dừng lại nếu có lỗi
    }

    // Nếu không lỗi -> Tạo object sinh viên mới
    const newStudent = {
      id: idInput,
      name: nameInput,
      className: classInput,
      score: scoreInput
    };

    // Thêm vào mảng -> Lưu -> Render lại
    students.push(newStudent);
    saveToStorage();
    renderStudents();

    // Reset form và xóa thông báo lỗi
    form.reset();
    errorEl.textContent = "";
    alert("Thêm sinh viên thành công!");
  });
}
// Searh Sinh viên
(function fixSearchStudent() {
  const searchInput = document.getElementById("searchInput");
  const tbody = document.getElementById(ID_TBODY);
  if (!searchInput || !tbody) return;

  function removeAccents(str) {
    return str.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .toLowerCase()
      .trim();
  }

  function renderSearchResult(data) {
    tbody.innerHTML = "";
    data.forEach(s => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.className}</td>
        <td>${s.score}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  searchInput.addEventListener("input", function () {
    const keyword = removeAccents(this.value);

    if (!keyword) {
      renderStudents(); // quay về render gốc
      return;
    }

    const filtered = students.filter(s =>
      removeAccents(s.id).includes(keyword) ||
      removeAccents(s.name).includes(keyword) ||
      removeAccents(s.className).includes(keyword)
    );

    renderSearchResult(filtered);
  });

  const clearBtn = document.getElementById("clearSearch");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      renderStudents();
    });
  }
})();


// --- CHẠY ỨNG DỤNG ---
setupForm();
renderStudents();