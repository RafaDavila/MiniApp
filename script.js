let DepartureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let departureDate = moment(DepartureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partina: \n 1-Segundos \n 2-Minutos \n 3-Horas \n 4-Dias")

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: "+ secondsOfDeparture + "segundos")
}else if (chosenOption == "2"){
    let minutesofDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: " + minutesofDeparture + "minutos")
}else if (chosenOption == "3"){
    let hoursofDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: " + hoursofDeparture + "horas")
}else if(chosenOption == "4"){
    let daysofDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysofDeparture + "dias")
}else{
    alert("Opção inválida!")
}