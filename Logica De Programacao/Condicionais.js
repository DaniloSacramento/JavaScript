let velocity = 90

if (velocity < 100) {
    console.log("estamos muito devagar")
} else if (velocity <= 100) {
    console.log("Cuidado! Quase na velocidade de risco")
} else {
    console.log("Ja estamos em velocidade de risco!")
}

(velocity > 100) ? console.log("Velocidade maior que 100"): console.log("Velocidade menor que 100")