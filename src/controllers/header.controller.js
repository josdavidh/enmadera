import header from "../views/header.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = header;

    return divElement;
}