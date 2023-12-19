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

