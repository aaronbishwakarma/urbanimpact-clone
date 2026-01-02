// function toggleMenu() {
//   const menu = document.querySelector(".menu-items");
//   menu.classList.toggle("active");
// }
const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-items");
btn.addEventListener("click", ()=>{
  menu.classList.toggle("active");
});