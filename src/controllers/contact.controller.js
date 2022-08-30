import contact from "../views/contact.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = contact;

    return divElement;
}