
function cambiaImagen(id) {
    let div = document.getElementById(id);
    div.classList.toggle("atras");
}



class TodoList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
    }
    connectedCallback() {
     // Create style element
     const style = document.createElement('style');
     style.textContent = `
         ul {
             color: black;
             background-color: white;
             padding: 0;
             list-style-type: none;
         }
         li {
             padding: 5px;
             border-bottom: 1px solid #ccc;
         }
         label, input, button {
             display: block;
             margin: 5px 0;
         }
     `;
        this.shadowRoot.append(style);

        // Create label element
        const label = document.createElement('label');
        label.textContent = 'Agrega un lugar turistico que conozcas: ';

        // Create input element
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Agrega un lugar turistico';

        // Create button element
        const button = document.createElement('button');
        button.textContent = 'Add';

        // Create list element
        const ul = document.createElement('ul');

        // Append elements to shadow DOM
        this.shadowRoot.append(label, input, button, ul);

        // Add event listener to button
        button.addEventListener('click', () => {
            const value = input.value.trim();
            if (value) {
                const li = document.createElement('li');
                li.textContent = value;
                ul.appendChild(li);
                input.value = '';
            }
        });
    }
}

// Define the new element
customElements.define('todo-list', TodoList);

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

