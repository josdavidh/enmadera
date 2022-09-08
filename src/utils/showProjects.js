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

  const modalContent = document.querySelector(".modal__content");

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  const closeModal = () => {
    modalContent.innerHTML = "";
    slideIndex = 1;
    modal.classList.remove("show");
    modal.classList.add("hide");
  };

  const openModal = (category) => {
    innerSlides (category);
    modal.classList.remove("hide");
    modal.classList.add("show");
  };


  const findImages = (category) => {
    return projectsImg.find(element => element.category === category);
  }


  const modalNavigation = `
    <div class="modal__navigation">
      <a class="modal__prev" onclick="plusSlides(-1)"><i class="fas fa-chevron-left"></i></a>
      <a class="modal__next" onclick="plusSlides(1)"><i class="fas fa-chevron-right"></i></a>
    </div>
  `;

  const plusSlides = (n) => {
    showSlides(slideIndex +=n)
  }

  let slideIndex = 1;

  const innerSlides = (category) => {

    let images = findImages(category);

    let length = images["images"].length;

    images["images"].forEach( imageUrl => {

      let current = 1 + images["images"].findIndex(element => element === imageUrl);

      const slide = document.createElement("div");
      const modalIndicators = document.createElement("div");
      const modalNavigation = document.createElement("div");
      const arrowLeft = document.createElement("a");
      const arrowRight = document.createElement("a");
      const img = document.createElement("img");

      arrowLeft.innerHTML = `<i class="fas fa-chevron-left"></i>`;
      arrowRight.innerHTML = `<i class="fas fa-chevron-right"></i>`;
      arrowLeft.addEventListener("click", () => plusSlides(-1));
      arrowRight.addEventListener("click", () => plusSlides(1));

      img.setAttribute("loading", "lazy")
      img.setAttribute("src", imageUrl);

      slide.className = "modal__slides";
      modalIndicators.className = "modal__indicators";
      modalNavigation.className = "modal__navigation"
      arrowLeft.className = "modal__prev";
      arrowRight.className = "modal__next";
      img.className = "modal__img";

      modalNavigation.appendChild(arrowLeft);
      modalNavigation.appendChild(arrowRight);
      modalIndicators.textContent = current+" / "+length;

      slide.appendChild(modalIndicators);
      slide.appendChild(modalNavigation);
      slide.appendChild(img);

      modalContent.appendChild(slide);

    })

    showSlides(1);
  }

  const showSlides = (n) => {
    var i;

    const slides = document.querySelectorAll(".modal__slides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for(i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }


    slides[slideIndex - 1].style.display = "block";

  }

};
