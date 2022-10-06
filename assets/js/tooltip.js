const TOOLTIP = document.querySelector("#tooltip");
const BODY = document.querySelector("body");
const HEADER = document.querySelector(".top-site")
// Quem é o target?
// Quem.addEventListener('evento', () => {})

TOOLTIP.addEventListener('mouseover', (e) => {

    // console.log(e);
    // console.log("ALTURA DA PÁGINA: ", BODY.clientHeight);
    // console.log("LARGURA DA PÁGINA: ", BODY.clientWidth);
    // console.log("")
    // console.log("ALTURA DO TOOLTIP: ", TOOLTIP.clientHeight);
    // console.log("LARGURA DO TOOLTIP: ", TOOLTIP.clientWidth);
    // console.log("")
    // console.log("ALTURA DO MOUSE: ", e.clientY);
    // console.log("LARGURA DO MOUSE: ", e.clientX);

    if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }

    const NEW_DIV = document.createElement("div");

    NEW_DIV.classList.add("tooltip");
    NEW_DIV.innerHTML = "Muitas dicas inseridas aqui. Tire o cursor de cima para que eu suma!"

    NEW_DIV.style.position = "absolute";
    NEW_DIV.style.top = e.clientY + "px";
    NEW_DIV.style.left = (e.clientX + 220 > BODY.clientWidth ? e.clientX - 219 : e.clientX + 200) + "px";
    NEW_DIV.style.transition = .2;
    HEADER.appendChild(NEW_DIV)
})

TOOLTIP.addEventListener('mouseout', () => {
    if (document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove();
    }
})