export default () => {
    const body = document.querySelector("body");
    const navHamburgerBtn = document.querySelector(".nav__hamburguer");
    const navCloseBtn = document.querySelector(".nav__close");
    const navLinks = document.querySelectorAll(".nav__links");

    const nav = document.querySelector(".nav")


    navHamburgerBtn.addEventListener("click", () => {
        nav.classList.toggle("show")
        body.style.overflowY = "hidden";
    })

    navCloseBtn.addEventListener("click", () => {
        nav.classList.toggle("show")
        body.style.overflowY = "auto";
    })

    navLinks.forEach( element => {
        element.addEventListener("click", ()=>{
            body.style.overflowY = "auto";
        })
    })
}