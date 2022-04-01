

/*let precio = 500

function comprarEntradas (precio){
    let entrada = parseInt(prompt("Ingrese cantidad de entradas")) 
    let total = precio * entrada

    if (entrada != ''){
        alert (`Ha comprado ${entrada} entradas. El total es $ ${total}`)
    }
    else{
        alert("Ingrese una cantidad valida")
    }
}

comprarEntradas(precio)*/


let valorCampo = 500
let valorPalco = 600
let valorVip =  1000

let entradas = parseInt(prompt("Ingrese cantidad de entradas"))
let sector = prompt ("Ingrese Sector: Campo / Palco / Vip")

function ubicacionEspectaculo(entradas,sector){
    switch(sector){
        case "Campo":
             return (valorEntrada = entradas * valorCampo)
             break;
        case "Palco":
            return  (valorEntrada = entradas * valorPalco)
            break;
        case "Vip":
            return (valorEntrada = entradas * valorVip)
            break;
        default:
            return 0 
            break;
    }
}

let respuesta = ubicacionEspectaculo (entradas,sector)
alert(`Ustes compro ${entradas} entradas para el sector ${sector}. El total es: ${respuesta}`);