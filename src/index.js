// EXERCÍCIO 01
export function anoBissexto(ano) {
    if ((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)) {
        return "TRUE"
    } else if (ano < 0) {
        return "INVALID"
    } else {
        return "FALSE"
    }
}


// EXERCÍCIO 02
export function pedraPapelTesoura() {
    const pedraPapelTesoura = ["PEDRA", "PAPEL", "TESOURA"];
    const jogo = pedraPapelTesoura[Math.floor((Math.random() * 3))]
    return jogo

}
console.log(pedraPapelTesoura)

// EXERCÍCIO 03
export function checkNumeroPrimo(numero){
    if(numero <= 1){
        return "INVALID"
    }
    for (let i = 2; i < numero; i++){
        if(numero % i === 0){
            return "FALSE"
        }else{
            return "TRUE"
        }
    }
}