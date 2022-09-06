import Projects from "./project.controller.js"
import Navbar from "./navbar.controller.js"
import Header from "./header.controller.js"
import Services from "./services.controller.js"
import About from "./about.controller.js"
import Banner from "./banner.controller.js"
import Testimonials from "./testimonials.controller.js"
import Contact from "./contact.controller.js"
import Questions from "./questions.controller.js"
import Footer from "./footer.controller.js"


const pages = {
    navbar: Navbar,
    header: Header,
    services: Services,
    about: About,
    banner: Banner,
    testimonials: Testimonials,
    contact: Contact,
    questions: Questions,
    footer: Footer,
    projects: Projects,

};

export {pages};