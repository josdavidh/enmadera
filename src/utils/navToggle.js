export default () => {
    const navHamburgerBtn = document.querySelector(".nav__hamburguer");
    const navCloseBtn = document.querySelector(".nav__close");

    const nav = document.querySelector(".nav")

    console.log(nav)

    navHamburgerBtn.addEventListener("click", () => {
        nav.classList.toggle("show")
    })

    navCloseBtn.addEventListener("click", () => {
        nav.classList.toggle("show")
    })
}