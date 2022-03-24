//USANDO IF
let entradas = 100
let entradasUsuario = (prompt("Ingrese la cantidad de entradas"))
let precioEntrada = 1500 * entradasUsuario



   
if(entradasUsuario != ""){
        if (parseInt(entradasUsuario)   < entradas){
            alert(`Usted debe abonar ${precioEntrada}`)

        }
    }
    else{
        alert("Ingrese un valor")

}

    
//USANDO FOR 

 for (nroEntrada = 1;nroEntrada<100;nroEntrada++){
        let usuario = prompt("Ingrese su usuario ")
     alert(` ${usuario} Su numero de entrada es: ${nroEntrada}`)
    
     }  


//USANDO WHILE
  
let entradasCliente = (prompt("Ingrese la cantidad de entradas"))

  while (entradasCliente > 100){ 
       alert(`No quedan entradas`)
       let entradasCliente = (prompt("Ingrese la cantidad de entradas"))
      
      
  }
 
 


