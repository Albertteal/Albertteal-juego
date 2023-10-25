let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('reiniciar')
    sectionSeleccionarAtaque.style.display = 'none'
    
    let sectionBotonReiniciar = document.getElementById('Ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonClaseJugador = document.getElementById('boton-selec-clase')
    botonClaseJugador.addEventListener('click', SeleccionarClaseJugador)

    let botonFuego = document.getElementById('boton-ataque-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-ataque-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonAire = document.getElementById('boton-ataque-aire')
    botonAire.addEventListener('click', ataqueAire)
    let botontierra = document.getElementById('boton-ataque-tierra')
    botontierra.addEventListener('click', ataquetierra)

    let BotonReinicio = document.getElementById('boton-reiniciar-juego')
    BotonReinicio.addEventListener('click', reinicioJuego)

}



function SeleccionarClaseJugador(){

    let sectionSeleccionarClase = document.getElementById('Clase')
    sectionSeleccionarClase.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('Ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHerbolestero = document.getElementById('Herbolestero')
    let inputMonje = document.getElementById('Monje')
    let inputCataclismo = document.getElementById('Cataclismo')
    let inputNagas = document.getElementById('Nagas')
    let inputTauren = document.getElementById('Tauren')
    let inputHydros = document.getElementById('Hydros')
    let inputPaladin = document.getElementById('Paladin')

    let spanclaseJugador = document.getElementById('claseJugador')

    if (inputHerbolestero.checked){   
        spanclaseJugador.innerHTML = "Herbolestero"   //Hacemos que el nombre cambie conforme a la mascota para la parte de vidas
        alert("Seleccionate Herbolestero")
    } else if (inputMonje.checked){
        spanclaseJugador.innerHTML = "Monje"
        alert("Seleccionate Monje")
    } else if (inputCataclismo.checked){
        spanclaseJugador.innerHTML = "Cataclismo"
        alert("Seleccionate Cataclismo")
    } else if (inputNagas.checked){
        spanclaseJugador.innerHTML = "Nagas"
        alert("Seleccionate Nagas")
    } else if (inputTauren.checked){
        spanclaseJugador.innerHTML = "Tauren"
        alert("Seleccionate Tauren")
    } else if (inputHydros.checked){
        spanclaseJugador.innerHTML = "Hydros"
        alert("Seleccionate Hydros")
    } else if (inputPaladin.checked){
        spanclaseJugador.innerHTML = "Paladin"
        alert("Seleccionate Paladin")
    } else{
        alert("Selecciona una clase")
    }

    SeleccionarClaseEnemigo()
}

function SeleccionarClaseEnemigo(){
    let claseAleatorio = aleatorio(1,7)
    let spanClaseEnemigo = document.getElementById('clase-enemigo')

    if (claseAleatorio == 1){
        spanClaseEnemigo .innerHTML = 'Herbolestero'
    } else if (claseAleatorio == 2){
        spanClaseEnemigo .innerHTML = 'Monje'
    } else if (claseAleatorio == 3){
        spanClaseEnemigo .innerHTML = 'Cataclismo'
    } else if (claseAleatorio == 4){
        spanClaseEnemigo .innerHTML = 'Nagas'
    } else if (claseAleatorio == 5){
        spanClaseEnemigo .innerHTML = 'Tauren'     
    } else if (claseAleatorio == 6){
        spanClaseEnemigo .innerHTML = 'Hydros'   
    } else if (claseAleatorio == 7){
        spanClaseEnemigo .innerHTML = 'Paladin' 
    }
    SeleccionarClaseEnemigo()
}



function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    SeleccionarAtaqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    SeleccionarAtaqueEnemigo()
}

function ataqueAire(){
    ataqueJugador = 'AIRE'
    SeleccionarAtaqueEnemigo()
}

function ataquetierra(){
    ataqueJugador = 'TIERRA'
    SeleccionarAtaqueEnemigo()
}


function SeleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,4)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'AIRE'
    } else if(ataqueAleatorio == 4){
        ataqueEnemigo = 'TIERRA'
    }  
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById ('vidasJugador')
    let spanVidasEnemigo = document.getElementById ('vidasEnemigo')

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'AIRE'  || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' ){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AGUA' || ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AIRE'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } 

    else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AIRE'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } 
 
    else if (ataqueJugador == 'AIRE' && ataqueEnemigo == 'AGUA'  ){
        crearMensaje("GANASTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador    
    } else if (ataqueJugador == 'AIRE' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'AIRE' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } 
    revisarVidas()
    
}

function revisarVidas(){
    if (vidasEnemigo == 0 ){
        crearMensajeFinal("Ganaste") 
    }
    else if (vidasJugador == 0){
        crearMensajeFinal("Perdiste")   
    }
}

function reinicioJuego(){
    location.reload()
}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')  //creamos un nuevo parrafo
    parrafo.innerHTML = 'Atacaste con ' + ataqueJugador + ',el enemigo atacó con ' + ataqueEnemigo + ' ' + resultado
    sectionMensajes.appendChild(parrafo)  //nos permite crear el parrafo en la ubi que queremos
}
function crearMensajeFinal(resultadoFinal){
    let sectionSeleccionarAtaque = document.getElementById('reiniciar')
    sectionSeleccionarAtaque.style.display = 'block'

    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')  //creamos un nuevo parrafo
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)  //nos permite crear el parrafo en la ubi que queremos

    let botonFuego = document.getElementById('boton-ataque-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-ataque-agua')
    botonAgua.disabled = true
    let botonAire = document.getElementById('boton-ataque-aire')
    botonAire.disabled = true
    let botontierra = document.getElementById('boton-ataque-tierra')
    botontierra.disabled = true
}
window.addEventListener('load', iniciarJuego) //Nos sirve oara avisar que inicie todo cuando ya se haya cargado
                                                //Todo el HTML y ahora sí pasamos al JS