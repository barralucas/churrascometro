// Carne - 400gr/pessoa / + de 6 horas - 650
// Cerveja - 1200ml/pessoa / +6 horas - 2000ml
// Refrigerante/agua - 1000ml/pessoa / +6 horas - 1500ml
// crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = (carnePorPessoa(duracao) * adultos) + (carnePorPessoa(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebidas = (bebidasPorPessoa(duracao) * adultos) + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/1000)}L de água, refrigerante e suco</p>`
}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}