window.onload = function() {
    let numeroAleatorio = Math.floor(Math.random() * 24) + 1;
    let parrafo = document.getElementById("descripcion");

    switch (numeroAleatorio) {
        case 1:
            parrafo.innerHTML = 'El diseño no es solo lo que se ve y se siente. El diseño es cómo funciona. <span class="autor"><i>Steve Jobs</i></span>';
            break;
        case 2:
            parrafo.innerHTML = 'El buen diseño es obvio. El gran diseño es transparente. <span class="autor">— Joe Sparano</span>';
            break;
        case 3:
            parrafo.innerHTML = 'El éxito es caminar de fracaso en fracaso sin perder el entusiasmo. <span class="autor">— Winston Churchill</span>';
            break;
        case 4:
            parrafo.innerHTML = 'El mayor riesgo es no asumir ningún riesgo. En un mundo que cambia muy rápidamente, la única estrategia que está garantizada para fallar es no asumir riesgos. <span class="autor">— Mark Zuckerberg</span>';
            break;
        case 5:
            parrafo.innerHTML = 'La creatividad es ver lo que todos han visto y pensar lo que nadie más ha pensado. <span class="autor">— Albert Einstein</span>';
            break;
        case 6:
            parrafo.innerHTML = 'La creatividad requiere tener el valor de desprenderse de las certezas. <span class="autor">— Erich Fromm</span>';
            break;
        case 7:
            parrafo.innerHTML = 'La lógica te llevará de A a B. La imaginación te llevará a todas partes. <span class="autor">— Albert Einstein</span>';
            break;
        case 8:
            parrafo.innerHTML = 'La lógica es la anatomía del pensamiento. <span class="autor">— John Locke</span>';
            break;
        case 9:
            parrafo.innerHTML = 'El diseño es el intermediario entre la información y el entendimiento. <span class="autor">— Richard Grefé</span>';
            break;
        case 10:
            parrafo.innerHTML = 'El emprendimiento es vivir unos pocos años de tu vida como nadie lo hará, para que puedas vivir el resto de tu vida como nadie puede. <span class="autor">— Anónimo</span>';
            break;
        case 11:
            parrafo.innerHTML = 'El verdadero signo de la inteligencia no es el conocimiento sino la imaginación. <span class="autor">— Albert Einstein</span>';
            break;
        case 12:
            parrafo.innerHTML = 'La lógica es el principio de la sabiduría, no el final. <span class="autor">— Leonard Nimoy como Spock</span>';
            break;
        case 13:
            parrafo.innerHTML = 'El diseño es inteligencia hecha visible. <span class="autor">— Alina Wheeler</span>';
            break;
        case 14:
            parrafo.innerHTML = 'Diseñar es un plan para ordenar elementos de la mejor manera posible para lograr un propósito particular. <span class="autor">— Charles Eames</span>';
            break;
        case 15:
            parrafo.innerHTML = 'Los emprendedores fallan y fallan hasta que tienen éxito, porque cada error es una oportunidad para aprender y mejorar. <span class="autor">— Conrad Hilton</span>';
            break;
        case 16:
            parrafo.innerHTML = 'Emprender es saltar de un acantilado y construir un avión en el camino. <span class="autor">— Reid Hoffman</span>';
            break;
        case 17:
            parrafo.innerHTML = 'La creatividad es la capacidad de introducir el orden en el desorden. <span class="autor">— Stephen Sondheim</span>';
            break;
        case 18:
            parrafo.innerHTML = 'La esencia de la creatividad es la capacidad de ver las cosas de manera nueva y diferente. <span class="autor">— Edward de Bono</span>';
            break;
        case 19:
            parrafo.innerHTML = 'La lógica es la base de la matemática, y la matemática es la base de todo. <span class="autor">— Roger Penrose</span>';
            break;
        case 20:
            parrafo.innerHTML = 'Una mente lógica busca la verdad; una mente creativa, la belleza. <span class="autor">— Henri Poincaré</span>';
            break;
        case 21:
            parrafo.innerHTML = 'El diseño no solo debe funcionar, sino también encantar, transformar y elevar. <span class="autor">— Marty Neumeier</span>';
            break;
        case 22:
            parrafo.innerHTML = 'El éxito en el emprendimiento no se mide por lo que logras, sino por la cantidad de obstáculos que superas. <span class="autor">— Howard Schultz</span>';
            break;
        case 23:
            parrafo.innerHTML = 'La creatividad sin estrategia se llama arte. La creatividad con estrategia se llama publicidad. <span class="autor">— Jef I. Richards</span>';
            break;
        case 24:
            parrafo.innerHTML = 'La lógica es como una máquina potente; la creatividad, como la energía que la alimenta. <span class="autor">— John Cleese</span>';
            break;
        default:
            parrafo.textContent = "Error: Número fuera de rango.";
    }
}
