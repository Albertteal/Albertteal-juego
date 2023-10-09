let ataqueJugador
let ataqueEnemigo


function iniciarJuego(){

    let botonClaseJugador = document.getElementById('boton-selec-clase')
    botonClaseJugador.addEventListener('click', SeleccionarClaseJugador)

    let botonFuego = document.getElementById('boton-ataque-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-ataque-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonAire = document.getElementById('boton-ataque-aire')
    botonAire.addEventListener('click', ataqueAire)
    let botonPlanta = document.getElementById('boton-ataque-planta')
    botonPlanta.addEventListener('click', ataquePlanta)
    let botonSagrado = document.getElementById('boton-ataque-sagrado')
    botonSagrado.addEventListener('click', ataqueSagrado)
}

function SeleccionarClaseJugador(){
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

function ataquePlanta(){
    ataqueJugador = 'PLANTA'
    SeleccionarAtaqueEnemigo()
}

function ataqueSagrado(){
    ataqueJugador = 'SAGRADO'
    SeleccionarAtaqueEnemigo()
}

function SeleccionarAtaqueEnemigo(){
    let ataqueAleatorio = aleatorio(1,5)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'AIRE'
    } else if(ataqueAleatorio == 4){
        ataqueEnemigo = 'PLANTA'
    }  else if(ataqueAleatorio == 5){
        ataqueEnemigo = 'SAGRADO'
    } 
    crearMensaje()
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')  //creamos un nuevo parrafo
    parrafo.innerHTML = 'Atacaste con ' + ataqueJugador + ',el enemigo atacó con' + ataqueEnemigo + '- PENDIENTE'
    sectionMensajes.appendChild(parrafo)  //nos permite crear el parrafo en la ubi que queremos
}
window.addEventListener('load', iniciarJuego) //Nos sirve oara avisar que inicie todo cuando ya se haya cargado
                                                //Todo el HTML y ahora sí pasamos al JS
