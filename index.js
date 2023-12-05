const headerMenuMobile = document.querySelector(".header__menu-mobile");
const headerMenu = document.querySelector(".header__menu");

headerMenuMobile.addEventListener("click", function () {
    headerMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    headerMenu.classList.remove("active");
} ));