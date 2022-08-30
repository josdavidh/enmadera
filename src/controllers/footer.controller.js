import footer from "../views/footer.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = footer;

    return divElement;
}