// Obtén el elemento canvas y el contexto 2D
var canvas = document.getElementById('garabatosCanvas');
var context = canvas.getContext('2d');

// Establece las configuraciones de estilo para los garabatos
context.lineWidth = 3;
context.strokeStyle = '#000';

// Función para generar un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Función para dibujar un garabato en una posición aleatoria
function drawGarabato() {
    // Genera una posición aleatoria dentro del canvas
    var x = getRandomNumber(0, canvas.width);
    var y = getRandomNumber(0, canvas.height);

    // Inicia un nuevo trazo
    context.beginPath();

    // Mueve el lápiz a la posición inicial del garabato
    context.moveTo(x, y);

    // Genera una serie de líneas aleatorias para formar el garabato
    drawNextLine(x, y, 0);
}

// Función recursiva para dibujar la siguiente línea del garabato
function drawNextLine(x, y, count) {
    if (count >= 10) {
        // Si se han dibujado todas las líneas, finaliza el trazo
        context.closePath();
        context.stroke();
    } else {
        // Dibuja una línea más del garabato después de un retraso
        setTimeout(function() {
            var newX = x + getRandomNumber(-20, 20);
            var newY = y + getRandomNumber(-20, 20);
            context.lineTo(newX, newY);
            context.stroke();
            drawNextLine(newX, newY, count + 1);
        }, 100); // Ajusta el retraso aquí (en milisegundos)
    }
}

// Función para animar los garabatos
function animateGarabatos() {
    // Limpia el canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja varios garabatos en posiciones aleatorias
    for (var i = 0; i < 3; i++) {
        setTimeout(drawGarabato, i * 500); // Ajusta el retraso aquí (en milisegundos)
    }
}

// Inicia la animación después de que se haya cargado el contenido de la página
window.addEventListener('load', function() {
    animateGarabatos();
});
