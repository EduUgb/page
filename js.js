document.addEventListener("DOMContentLoaded", function () {
    let btn2 = document.getElementById("btn2");
    let cuadroTexto2 = document.getElementById("cuadroTexto2");

    btn2.addEventListener("click", function () {
        this.style.display = "none"; // Oculta el botón
        cuadroTexto2.style.display = "block"; // Muestra el cuadro de texto
    });

    cuadroTexto2.addEventListener("click", function () {
        this.style.display = "none"; // Oculta el cuadro de texto
        btn2.style.display = "block"; // Muestra el botón de nuevo
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let btn3 = document.getElementById("btn3");
    let cuadroTexto3 = document.getElementById("cuadroTexto3");

    btn3.addEventListener("click", function () {
        this.style.display = "none"; // Oculta el botón
        cuadroTexto3.style.display = "block"; // Muestra el cuadro de texto
    });

    cuadroTexto3.addEventListener("click", function () {
        this.style.display = "none"; // Oculta el cuadro de texto
        btn3.style.display = "block"; // Muestra el botón de nuevo
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let btn4 = document.getElementById("btn4");
    let cuadroTexto4 = document.getElementById("cuadroTexto4");

    btn4.addEventListener("click", function () {
        this.style.display = "none"; // Oculta el botón
        cuadroTexto4.style.display = "block"; // Muestra el cuadro de texto
    });

    cuadroTexto4.addEventListener("click", function () {
        this.style.display = "none"; // Oculta el cuadro de texto
        btn4.style.display = "block"; // Muestra el botón de nuevo
    });
});
