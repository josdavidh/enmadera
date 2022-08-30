import navbar from "../views/navbar.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = navbar;

    return divElement;
}