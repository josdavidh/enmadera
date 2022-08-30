import banner from "../views/banner.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = banner;

    return divElement;
}