const studentForm = document.getElementById("studentForm");
const studentTbody = document.getElementById("studentTbody");
const searchInput = document.getElementById("searchInput");

// Thêm sinh viên vào bảng
studentForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("studentId").value;
  const name = document.getElementById("studentName").value;
  const cls = document.getElementById("studentClass").value;
  const score = document.getElementById("studentScore").value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${cls}</td>
    <td>${score}</td>
  `;
  studentTbody.appendChild(row);

  studentForm.reset();
});

// Tìm kiếm sinh viên
searchInput.addEventListener("keyup", function() {
  const keyword = searchInput.value.toLowerCase();
  const rows = studentTbody.getElementsByTagName("tr");

  for (let row of rows) {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(keyword) ? "" : "none";
  }
});