// Carne - 400gr/pessoa / + de 6 horas - 650
// Cerveja - 1200ml/pessoa / +6 horas - 2000ml
// Refrigerante/agua - 1000ml/pessoa / +6 horas - 1500ml
// crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;


    let qtdTotalCarne = (400 * adultos) + (400/2 * criancas); 
}