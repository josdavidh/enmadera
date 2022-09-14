import emailjs from '@emailjs/browser';

export default () => {

    const form = document.getElementById("contact__form");
    const submit = document.getElementById("form__btn");
    const inputs = document.querySelectorAll(".form__input");
    const textArea = document.querySelector(".form__textarea");

    const expressions = {
        user: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/, //solo para numeros
        content: /^[a-zA-ZÀ-ÿ\s\W\d]{1,300}$/,
    }

    const fields = {
        user: false,
        email: false,
        phone: false,
        content: false,
    }


    const formValidation = (e) => {

        switch(e.target.name) {
            case "user" :
                checkField(expressions.user, e.target, "user");
            break;
            case "service" :
                console.log("no pasa nada");
            break;
            case "email" :
                checkField(expressions.email, e.target, "email");
            break;
            case "phone" :
                checkField(expressions.phone, e.target, "phone");
            break;
            case "content" :
                checkField(expressions.content, e.target, "content");
            break;
        }
    }

    textArea.addEventListener("keyup", formValidation);
    textArea.addEventListener("blur", formValidation);
    
    inputs.forEach((input) => {
        input.addEventListener("keyup", formValidation);
        input.addEventListener("blur", formValidation);
    });


    const checkField = (expresion, input, field) => {
        if(expresion.test(input.value)) {
            document.getElementById(`${field}`).classList.add("correct");
            document.getElementById(`${field}`).classList.remove("incorrect");
            document.querySelector(`#${field} ~ .form__state-validation`).classList.add("fa-check");
            document.querySelector(`#${field} ~ .form__state-validation`).classList.remove("fa-times");
            document.querySelector(`#${field} ~ .form__error`).style.display = "none";
            fields[field] = true;
        } else {
            document.getElementById(`${field}`).classList.add("incorrect");
            document.getElementById(`${field}`).classList.remove("correct");
            document.querySelector(`#${field} ~ .form__state-validation`).classList.add("fa-times");
            document.querySelector(`#${field} ~ .form__state-validation`).classList.remove("fa-check");
            document.querySelector(`#${field} ~ .form__error`).style.display = "block";
            fields[field] = false;
        }
    }

    const resetfields = () => {
        fields.content = false;
        fields.email = false;
        fields.phone = false;
        fields.user = false;

        inputs.forEach((input)=> {
            input.classList.remove("correct");
        })

        textArea.classList.remove("correct");
    }

    submit.addEventListener("click", ()=> {
        

        if(fields.user && fields.email && fields.phone && fields.content) {

            emailjs.sendForm("service_jxes4ok", "template_gbratue", form, "qKWMwSDxwzwyZrXsb")
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });

            form.reset();
            resetfields();
            document.querySelector(".form__message").textContent = "Correo enviado";
            document.getElementById("form__validation").style.display = "block";
            document.getElementById("form__btn").disabled = true;

            setTimeout(() => {
                document.getElementById("form__validation").style.display = "none";
                document.getElementById("form__btn").disabled = false;
            }, 3000);


        } else {
            document.querySelector(".form__message").textContent = "Asegurese de llenar todos los campos correctamente";

            document.getElementById("form__validation").style.display = "block";
            document.getElementById("form__btn").disabled = true;

            setTimeout(() => {
                document.getElementById("form__validation").style.display = "none";
                document.getElementById("form__btn").disabled = false;
            }, 3000);
        }
    })

}