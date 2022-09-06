import questions from "../views/questions.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = questions;

    return divElement;
}