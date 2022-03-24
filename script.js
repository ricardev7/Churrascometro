
let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("crianças")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value
    let crianças = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarnes = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * crianças)
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas= bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * crianças);

    resultado.innerHTML = `<p>${qtdTotalCarnes / 1000} Kg de carnes</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} garrafas (2 Litros) de refrigerantes/suco</p>`
}

function carnePP(duracao) {
    if (duracao >= 6 ){
        return 650
       } 
        else{
            return 400
        }
    
}

function cervejaPP(duracao) {
    if (duracao >= 6 ){
        return 2000
       } 
        else{
            return 1200
        }
    
}

function bebidasPP(duracao) {
    if (duracao >= 6){
        return 1500
    }
        else{
            return 1000
        }
}


