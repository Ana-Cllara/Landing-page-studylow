const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();

    if (nomeValor === "" || emailValor === "") {
        mensagem.textContent = "Preencha o nome e o e-mail.";
        mensagem.style.color = "#b91c1c";
        return;
    }

    if (!emailValor.includes("@") || !emailValor.includes(".")) {
        mensagem.textContent = "Digite um e-mail válido.";
        mensagem.style.color = "#b91c1c";
        return;
    }

    mensagem.textContent = "Inscrição realizada com sucesso!";
    mensagem.style.color = "#15803d";
    formulario.reset();
});
