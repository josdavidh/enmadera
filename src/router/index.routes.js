import { pages } from "../controllers/index.js";
import { utils } from "../utils/index.js";

const router = (route) => {
  let body = document.getElementById("body");
  let main = document.createElement("main");

  body.innerHTML = " ";
  main.id = "main";
  body.appendChild(pages.navbar());
  utils.navToggle();

  body.appendChild(main);


  switch (route) {
    case "#nosotros":
        main.appendChild(pages.about());
        main.appendChild(pages.footer());
        break;
    case "#proyectos":
        main.appendChild(pages.projects());
        utils.showProjects();
        main.appendChild(pages.banner());
        main.appendChild(pages.footer());
        break;
    case "#contacto":
        main.appendChild(pages.contact());
        utils.form();
        main.appendChild(pages.banner());
        main.appendChild(pages.footer());
        break;
    default:
        main.appendChild(pages.header());
        utils.showHeaders();
        main.appendChild(pages.services());
        main.appendChild(pages.about());
        main.appendChild(pages.banner());
        main.appendChild(pages.testimonials());
        main.appendChild(pages.questions());
        utils.showQuestions();
        main.appendChild(pages.footer());
        break;
  }



  // main.appendChild(pages.header());
  // main.appendChild(pages.projects());






  // main.appendChild(pages.questions());
};

export { router };
