import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projectsImg } from "./projectsImg.js";

export default () => {
  const projectsElements = document.querySelectorAll(".projects__element");

  projectsElements.forEach((element) => {
    element.addEventListener("click", () => {
      openModal(element.id);
    });
  });

  const modal = document.querySelector(".projects__modal");
  const closeBtn = document.querySelector(".modal__close");

  const slidesContainer = document.querySelector(".swiper-wrapper");

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  const closeModal = () => {
    modal.classList.remove("show");
    modal.classList.add("hide");
  };

  const openModal = (category) => {
    slidesContainer.innerHTML = "";
    setSwiper(category);
    modal.classList.remove("hide");
    modal.classList.add("show");
  };


  const setSwiper = (category) => {

    let images = findImages(category);

    images["images"].forEach(element => {
      const slide = document.createElement("div");
      const img = document.createElement("img");

      img.setAttribute("loading", "lazy")
      img.setAttribute("src", element)
      slide.className = "swiper-slide";
      img.className = "swiper__img";

      slide.appendChild(img)

      slidesContainer.appendChild(slide);
    })
  }

  const findImages = (category) => {
    return projectsImg.find(element => element.category === category);
  }


  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],

    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};
