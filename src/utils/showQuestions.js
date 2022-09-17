export default () => {
    const items = document.querySelectorAll(".questions__button");

    const toggleAcordion = (element) => {

        // for (let i = 0; i < items.length; i++) {
        //     items[i].setAttribute("aria-expanded", "false");
        // }

        element.setAttribute("aria-expanded", "true")
    }

    items.forEach(element => {
        element.addEventListener("click", ()=> {
            toggleAcordion(element)
        })
    });
}
