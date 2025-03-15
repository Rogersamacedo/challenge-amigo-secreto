let listaDeAmigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    listaDeAmigos.push(nome);

    const itemLista = document.createElement("li");
    itemLista.textContent = nome;
    listaAmigos.appendChild(itemLista);

    nomeInput.value = ""; // Limpa o campo de entrada
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores

    const amigosEmbaralhados = [...listaDeAmigos]; // Cria uma cópia para não alterar o original
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]]; // Embaralha
    }

    // Cria os pares de amigos secretos
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigoAtual = amigosEmbaralhados[i];
        const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; // Garante que o último pegue o primeiro

        const itemResultado = document.createElement("li");
        itemResultado.textContent = `${amigoAtual} -> ${amigoSecreto}`;
        resultado.appendChild(itemResultado);
    }
}