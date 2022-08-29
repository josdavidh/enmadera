import projects from "../views/projects.html";

export default () => {
    const divElement = document.createElement("div");
    divElement.innerHTML = projects;

    return divElement;
}