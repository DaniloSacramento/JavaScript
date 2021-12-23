let velocidade = 80

switch (velocidade * 2) {
    case 100:
        console.log("Sua velocidade é 100km/s")
        break
    case 160:
        console.log("Sua velocidade é 160km/s")
        break
    default:
        console.log("Velocidade nao identificada")
}

let spaceship = "Elemental"

switch (spaceship) {
    case "Golias":
        console.log("Nave mais resistente")
        break
    case "Raptor":
        console.log("Nave mais rapida")
        break
    case "Entreterimento":
        console.log("Nave mais devagar")
        break
    default:
        console.log("Nave Comum")
}

let velocidadeDOIS = 90
switch (velocidadeDOIS) {
    case 80:
    case 90:
    case 100:
        console.log("Velocidade aceitavel")
        break
    case 110:
    case 120:
    case 130:
        console.log("Velocidade muito alta")
        break
    default:
        console.log("Velocidade não identificada")
}