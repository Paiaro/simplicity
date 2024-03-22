const menuBtn = document.getElementById("menu-btn");
const menuItems = document.getElementById("menu-items");

menuBtn.addEventListener("click", () => {
  menuItems.classList.toggle("show");
  menuBtn.classList.toggle("close");
});