let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

const send = document
    .getElementById("sendMail")
    .addEventListener("click", sendMail);
const nomeCompleto = document.getElementById("fullName");
const mail = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const mensagem = document.getElementById("mensagem");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

function sendMail(e) {
    e.preventDefault();

    if (nomeCompleto && mail && mensagem) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "lucas.silveira0516@gmail.com",
            Password: "6F17BD0A8FEA772B1AC3E770CD67AABB9F24",
            To: "lucas.silveira0516@gmail.com",
            From: "lucas.silveira0516@gmail.com",
            Subject: `${subject.value}`,
            Body: `${mail.value}<br>Telefone: ${number.value}<br>${mensagem.value}`,
        }).then(() => {
            alert("Mensagem enviada");

            location.reload();
        });
    } else {
        alert("Preencha todos os campos");
    }
}
