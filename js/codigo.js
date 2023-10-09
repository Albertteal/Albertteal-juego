let max = 0
        let min = 0
        
        function aleatorio(min,max){
            return Math.floor(Math.random()* (max - min + 1)+ min)
        }
        function eleccion(jugada){
            let resultado = ""

            if(jugada==1){
                resultado = "Piedra 🥌"
            } else if(jugada==2){
                resultado = "papel 🧻"
            } else if (jugada==3){
                resultado = "tijeras ✂ "
            } else{
                resultado = "Mala eleccion" 
            }
         return resultado 
        }
        //1 = piedra, 2 = papel y 3 es tijeras
        let jugador = 0
        let pc = 0  
        let triunfos = 0
        let derrotas = 0

        while (triunfos < 3 && derrotas < 3) {
            pc = aleatorio(1,3)
            jugador = prompt("Elige: 1 para piedra, 2 para papel o 3 para tijeras ")
            //alert("Elegiste " + jugador)

            alert("Tu eliges: " + eleccion(jugador))
            alert("PC Elige: " + eleccion(pc))
          

            //combate
            if (pc ==jugador){
                alert("Es un empate")
            } else if(jugador == 1 && pc == 3){
                alert("GANASTE")
                triunfos = triunfos +1
            } else if (jugador == 2 && pc == 1){
                alert("GANASTE")
                triunfos = triunfos +1
            } else if(jugador == 3 && pc == 2){
                alert("GANASTE")
                triunfos = triunfos +1
            }
            else {
                alert("PIERDES")
                derrotas = derrotas +1
            } 
            alert(triunfos )
           
        }
       alert("Ganaste" + triunfos + " veces. Perdiste " + derrotas + "veces ")
