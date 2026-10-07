const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    const perfil = document.getElementById("perfil").value;
    const termos = document.getElementById("termos").checked;

    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    mensagemErro.innerText = "";
    mensagemSucesso.innerText = "";

    if (nome === "") {
        mensagemErro.innerText = "Por favor, informe seu nome.";
        return;
    }

    if (email === "") {
        mensagemErro.innerText = "Por favor, informe seu e-mail.";
        return;
    }

    if (senha.length < 6) {
        mensagemErro.innerText = "A senha deve possuir pelo menos 6 caracteres.";
        return;
    }

    if (senha !== confirmaSenha) {
        mensagemErro.innerText = "As senhas não conferem.";
        return;
    }

    if (perfil === "") {
        mensagemErro.innerText = "Selecione um perfil técnico.";
        return;
    }

    if (!termos) {
        mensagemErro.innerText = "Você precisa aceitar os termos de uso.";
        return;
    }

    document.getElementById("saidaNome").innerText = nome;
    document.getElementById("saidaEmail").innerText = email;
    document.getElementById("saidaPerfil").innerText = perfil;

    mensagemSucesso.innerText = "Cadastro realizado com sucesso!";

    form.reset();
});
