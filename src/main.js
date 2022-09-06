import "./css/styles.css"
import  AOS from "aos";
import "aos/dist/aos.css";
import {router} from "./router/index.routes.js"


AOS.init();



window.addEventListener("load", router(window.location.hash));

window.addEventListener("hashchange", () => {
    router(window.location.hash)
})

