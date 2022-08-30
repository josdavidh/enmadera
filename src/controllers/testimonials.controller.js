import testimonials from "../views/testimonials.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = testimonials;

    return divElement;
}