import {pages} from "../controllers/index.js";
import {utils} from "../utils/index.js";

const  router = (route) => {

    let body = document.getElementById("body");
    let main = document.createElement("main");

    body.innerHTML = " ";
    body.appendChild(pages.navbar());


    body.appendChild(main);
    // main.appendChild(pages.header());
    main.appendChild(pages.projects());
    utils.showProjects();
    // main.appendChild(pages.services());
    // main.appendChild(pages.about());
    // main.appendChild(pages.banner());
    // main.appendChild(pages.testimonials());
    // main.appendChild(pages.contact());
    // main.appendChild(pages.footer());


    // switch(route) {
    //     case "#/proyectos":
    //         return content.appendChild(pages.projects());
    //     default:
    //         return console.log("pagina no encontrada")
    // }
}

export {router}