/**
 * @author David E Luna M <davidlunamontilla@gmail.com>
 * @version 1.0.0
 * @license MIT
 */

class Numeros {
    constructor(selector) {
        this.main = document.querySelector(selector);

        this.container = document.createElement("div");
        this.container.classList.add("numeros");
        this.container.setAttribute("id", "numeros");

        /**
         * 
         * @param {number} numero 
         * @returns 
         */
        this.agregarCeros = (numero) => {
            if (typeof numero !== "number") return 0;
            return numero < 10 ? `00${numero}` : numero >= 10 && numero < 100 ? `0${numero}` : numero;
        }
    }

    /**
     * 
     * @param {number} cantidad 
     * @returns 
     */
    generar(cantidad) {
        if (!this.main || cantidad > 200) return;

        // Generar números | Esto es provisional
        for (let i = 1; i <= cantidad; i++) {
            const numero = this.agregarCeros(i);
            const item = `<button class="numeros__item" data-numero="${numero}">${numero}</button>`;
            this.container.insertAdjacentHTML('beforeend', item);
        }

        this.main.appendChild(this.container);

        const numeros = [];
        this.container.childNodes.forEach(numero => {
            numero.classList.add("button");
            numeros.push(numero);
        });

        let pos = -1;

        const intervalo = setInterval(() => {
            pos++;
            const numero = numeros[pos];

            if (numero) {
                numero.classList.add("fadeIn");
            }

            if (pos >= numeros.length) {
                clearInterval(intervalo);
            }
        }, 5);
    }

    // Obtener un número ganador:
    obtenerGanador() {
        // Esta función obtendrá al ganador de forma aleatorea
    }
}


export default Numeros;