let Nome = prompt("Qual seu nome Piloto?")

let VelocidadeNave = 0

let NovaVelocidade = prompt("Qual a velocidade que gostaria de acelerar a nave?")

let Confirmar = confirm("Estamos acelerando para " + NovaVelocidade + " km/s")

if (Confirmar) {
    VelocidadeNave = NovaVelocidade
}

if (VelocidadeNave <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (VelocidadeNave < 40) {
    alert("Você está indo muito devagar")
} else if (VelocidadeNave < 80) {
    alert("É uma boa velocidade para manter")
} else if (VelocidadeNave < 100) {
    alert("Velocidade alta, considere diminuir")
} else {
    alert("Velocidade MUITO alta!!!!!")
}
console.log("O piloto " + Nome + " esta pilotando a nave com uma velocidade de " + NovaVelocidade + "km/s")