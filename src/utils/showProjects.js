import Swiper from 'swiper';
import 'swiper/css';

export default () => {
    const projectsElements = document.querySelectorAll(".projects__element");

    projectsElements.forEach( element => {
        element.addEventListener("click", () => {
            openModal();
        })
    })

    const modal = document.querySelector(".projects__modal");
    const closeBtn = document.querySelector(".modal__close");

    closeBtn.addEventListener("click", () =>{
        closeModal();
    })
    modal.addEventListener("click", () =>{
        closeModal();
    })

    const closeModal = () => {
        modal.classList.remove("show");
        modal.classList.add("hide");
    }

    const openModal = () => {
        modal.classList.remove("hide");
        modal.classList.add("show");
    }




    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


}
