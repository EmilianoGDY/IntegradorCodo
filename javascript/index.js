const burguer = document.querySelector(".burguer");
const navMenu = document.querySelector(".nav-menu");


burguer.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});
