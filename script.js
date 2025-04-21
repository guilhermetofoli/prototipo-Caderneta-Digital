// Lógica de login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();  // Previne o comportamento padrão de envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica se o login está correto
    if (username === "admin" && password === "1234") {
        // Login bem-sucedido, redireciona para home.html
        window.location.href = "home.html";
    } else {
        // Se o login falhar, exibe uma mensagem de erro
        document.getElementById("error-message").textContent = "Usuário ou senha incorretos.";
    }
});

// Salvar anotações
document.getElementById("saveNoteButton")?.addEventListener("click", function() {
    const note = document.getElementById("noteInput").value;
    if (note) {
        const notesContainer = document.getElementById("notesContainer");
        const noteDiv = document.createElement("div");
        noteDiv.textContent = note;
        notesContainer.appendChild(noteDiv);
        document.getElementById("noteInput").value = '';  // Limpa o campo
    }
});

// Configurações de conta
document.getElementById("configForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Salva as alterações (aqui você poderia adicionar lógica para salvar os dados)
    alert("Configurações atualizadas com sucesso!");
    window.location.href = "home.html";  // Volta para a página de anotações
});
