document.getElementById("gptGenerateButton")?.addEventListener("click", function() {
    const gptInput = document.getElementById("gptInput").value;

    // Lógica para chamar a API do GPT (exemplo fictício)
    fetch('https://api.exemplo.com/gpt', {
        method: 'POST',
        body: JSON.stringify({ prompt: gptInput }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("gptResponse").textContent = data.generatedText;
    })
    .catch(error => {
        console.error('Erro ao gerar a anotação:', error);
    });
});
