window.onload = function() {
    setTimeout(function() {
        document.getElementById('intro-animation').style.opacity = '0';
        setTimeout(function() {
            // Redirige después de la animación (ej: a "game.html")
            window.location.href = "https://damrona.github.io/catalogo"; // Cambia este enlace
        }, 500); // Espera medio segundo antes de redirigir
    }, 5000); // Duración total de la animación (3 segundos)
};
