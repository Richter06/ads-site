// ===== SIDEBAR =====
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("fechada"); // esconde ou mostra a sidebar
}

// ===== CHAT FUNCIONAL =====
function enviar() {
    const msgInput = document.getElementById("mensagem");
    const msg = msgInput.value.trim();
    if (!msg) return;

    fetch("/enviar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensagem: msg })
    }).then(() => {
        msgInput.value = "";
        carregarMensagens();
    });
}

function carregarMensagens() {
    fetch("/mensagens")
        .then(res => res.json())
        .then(data => {
            const chatBox = document.getElementById("chat-box");
            chatBox.innerHTML = "";
            data.forEach(m => {
                const div = document.createElement("div");
                div.className = "mensagem";
                div.innerHTML = "<p>" + m + "</p>";
                chatBox.appendChild(div);
            });
            chatBox.scrollTop = chatBox.scrollHeight;
        });
}

// Atualiza o chat automaticamente a cada 2 segundos
setInterval(() => {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) carregarMensagens();
}, 2000);

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
    const sidebarToggle = document.getElementById("toggle-btn");
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", toggleSidebar);
    }

    const chatBox = document.getElementById("chat-box");
    if (chatBox) carregarMensagens();
});