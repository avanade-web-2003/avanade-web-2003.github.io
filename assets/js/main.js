/* Existem 7 tipos de erros em JavaScript
* ------------------------
* SyntaxError - Escreveu alguma coisa errado.
* ReferenceError - Chamou alguém que não existe.
* TypeError - Erro de tipo é uma violação do JavaScript
* EvalError - Evite o uso do comando eval, mas se ele for inválido
* RangeError - Erro de intervalo, loop infinito, ou chamadas inúmeras de recursividade
* URIError - Erro referente a chamadas externas. Uniform Resource Identifier. httpswww.
* InternalError - Erro interno do JavaScript, falta de memória, processador...
*/

function changeTitle(newTitle) {
    document.querySelector('h1').textContent = newTitle;
}

changeTitle(`Hello Vitoria\n!`)

// function expression
//Uma função anonima precisa de um contexto 
const changeTitle2 = function (target, newTitle) {
    document.querySelector(target).innerHTML = newTitle;
}

changeTitle2("h2", "Trocando o título...")

const clock = () => {
    const DATE = new Date();
    changeTitle2('h2', DATE.toLocaleTimeString());
}

setInterval(clock, 1000);

const FRASE = ["Um banco para 20 milhões de pessoas", "C6 Bank o seu banco", "Cartão de Crédito sem anuidade"];

let i = 0;
const changePhrase = (target, sentence, seconds) => {
    setInterval(() => {
        document.querySelector(target).innerText = FRASE[i >= FRASE.length - 1 ? (i = 0) : (i += 1)];
    }, seconds * 1000)
}
console.log(FRASE.length)
setInterval(changePhrase("h1", FRASE, 4));