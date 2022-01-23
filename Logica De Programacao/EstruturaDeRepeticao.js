let velocidade = 50
let aceleracao = 5

while (velocidade <= 100) {
    console.log("Acelerando: Estamos a " + velocidade + "km/s")
    velocidade = velocidade + aceleracao

}

let constelacao = "Andromeda"
let pos = 0
let constelacaoLength = constelacao.length

while (pos < constelacaoLength) {
    if (constelacaoLength[pos] == "a" || constelacaoLength[pos] == "A") {
        console.log(pos)
    }
    pos += 1

}









