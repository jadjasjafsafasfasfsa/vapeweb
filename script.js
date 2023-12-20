// OBTENER HORA EN URUGUAY

function obtenerHoraActual() {
    const hora = new Date();
    const opciones = { timeZone: 'America/Montevideo', hour: 'numeric', minute: 'numeric' };
    return hora.toLocaleTimeString('es-ES', opciones);
}

function obtenerHoraActual2() {
    const hora = new Date();
    const opciones = { timeZone: 'America/Montevideo', hour: 'numeric' };
    return hora.toLocaleTimeString('es-ES', opciones);
}



function actualizarHora() {
    const elementoHora = document.getElementById('hora');
    elementoHora.textContent = `${obtenerHoraActual()}`

    const elementoCuadado = document.getElementById('hora-cuadrado');

    if (obtenerHoraActual2() < 5) elementoCuadado.style.backgroundColor = `#0c4a6e`
    if (obtenerHoraActual2() >= 5) elementoCuadado.style.backgroundColor = `#136c9f`
    if (obtenerHoraActual2() >= 10) elementoCuadado.style.backgroundColor = `#20aeff`
    if (obtenerHoraActual2() >= 20) elementoCuadado.style.backgroundColor = `#0c4a6e`

}



actualizarHora();
setInterval(actualizarHora, 1000);





// CALCULAR DIAS RESTANTES

function calcularDiasRestantes() {
    const fechaObjetivo = new Date('2024-06-22');
    const fechaActual = new Date();
    const diferenciaMs = fechaObjetivo - fechaActual;
    const diasRestantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

    return diasRestantes;
}

function actualizarDiasRestantes() {
    const elementoDiasRestantes = document.getElementById('diasRestantes');
    const diasRestantes = calcularDiasRestantes();
    elementoDiasRestantes.textContent = diasRestantes;
}

actualizarDiasRestantes();


// ACTUALIZAR IMAGENES

function actualizarImagenes() {
    const discord_img = document.getElementById('discord');
    discord_img.src = `https://lanyard-profile-readme.vercel.app/api/979475892969566289?animated=false&hideDiscrim=true&idleMessage=No%20activity%20recently.&timestamp=${Date.now()}`


    const spotify_img = document.getElementById('spotify');
    spotify_img.src = `https://spotify-recently-played-readme.vercel.app/api?user=316g6lm3zznouehsvsghxis5rr4m&width=830&timestamp=${Date.now()}`
}



setInterval(actualizarImagenes, 1000);
