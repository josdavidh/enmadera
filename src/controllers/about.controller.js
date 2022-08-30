import about from "../views/about.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = about;

    return divElement;
}