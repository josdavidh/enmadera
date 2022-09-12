import hero1 from "../assets/img/hero1.jpg";
import hero2 from "../assets/img/hero2.jpg";
import hero3 from "../assets/img/hero3.jpg";
import hero4 from "../assets/img/hero4.jpg";
import hero5 from "../assets/img/hero5.jpg";


export default () => {
    const headerImage = document.querySelector(".header__image")
    const headerBtns = document.querySelectorAll(".header__button")

    headerBtns.forEach( element => {
        element.addEventListener("click", ()=> {
            changeHeaderImage(element.id);
        })
    })

    const changeHeaderImage = (category) => {
        switch(category){
            case "sillas":
                headerImage.style.backgroundImage = `url(${hero3})`;
                break;
            case "muebles":
                headerImage.style.backgroundImage = `url(${hero2})`;
                break;
            case "separadores":
                headerImage.style.backgroundImage = `url(${hero1})`;
                break;
            case "stands":
                headerImage.style.backgroundImage = `url(${hero5})`;
                break;
            default:
                headerImage.style.backgroundImage = `url(${hero4})`;
        }
    }


}
