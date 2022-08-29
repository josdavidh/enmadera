import {pages} from "../controllers/index.js";

const  router = (route) => {

    let content = document.getElementById("root");
    content.innerHTML = " ";

    switch(route) {
        case "#/proyectos":
            return content.appendChild(pages.projects());
        default:
            return console.log("pagina no encontrada")
    }
}

export {router}