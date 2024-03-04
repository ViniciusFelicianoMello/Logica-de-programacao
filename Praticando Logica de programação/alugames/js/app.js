let nomePessoa = prompt("Qual é o seu nome?");
    alert(`Olá ${nomePessoa}`)

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    // let imagem = jogo.querySelector(".dashboard__items__item");
    let imagem = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");
    let nomeJogo = jogo.querySelector(".dashboard__item__name");

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
    }
}