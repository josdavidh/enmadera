import "./css/styles.css"
import {router} from "./router/index.routes.js"

window.addEventListener("load", router(window.location.hash));

window.addEventListener("hashchange", () => {
    router(window.location.hash)
})

