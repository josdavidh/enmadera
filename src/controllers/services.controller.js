import services from "../views/services.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = services;

    return divElement;
}