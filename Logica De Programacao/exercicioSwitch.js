let Distancia = prompt("Qual a distancia em anos luz?")

let Opcoes = prompt("Opcao 1: Parsec(pc) \n Opcao 2: Unidade astrononima(AU) \n Opcao 3: Quilometos(km)")

let escolha

let conversao

switch (Opcoes) {
    case "1":
        escolha = "Parsec"
        conversao = Distancia * 0.306601
        break
    case "2":
        escolha = "Unidade astrononima"
        conversao = Distancia * 63241.1
        break
    case "3":
        escolha = "Quilometos"
        conversao = Distancia * 9.5 * Math.pow(10, 12)
        break

    default:
        escolha = "Unidade nao identificada"
        conversao = "Conversao fora do escopo"
        break
}
alert("Distancia em anos luz: " + Distancia + "\n" + escolha + ": " +
    conversao)