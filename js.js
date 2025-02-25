
document.addEventListener("DOMContentLoaded", function () {
    let btn2 = document.getElementById("btn2");
    let cuadroTexto = document.getElementById("cuadroTexto");

    btn2.addEventListener("click", function () {
        this.style.display = "none"; // Oculta el botón
        cuadroTexto.style.display = "block"; // Muestra el cuadro de texto
    });

    cuadroTexto.addEventListener("click", function () {
        this.style.display = "none"; // Oculta el cuadro de texto
        btn2.style.display = "block"; // Muestra el botón de nuevo
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");

    // Cambio de color en btn3
    btn3.addEventListener("click", function () {
        this.style.backgroundColor = this.style.backgroundColor === "red" ? "#4dcfff" : "red";
    });

    // Alerta en btn4
    btn4.addEventListener("click", function () {
        alert("¡Bienvenido a Surf City! 🌊");
    });
});