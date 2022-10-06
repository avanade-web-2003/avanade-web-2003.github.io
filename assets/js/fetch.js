const CEP = document.querySelector('#cep');

const SHOW_DATA = (result) => {
    for (const CAMPO in result) {
        if (document.querySelector("#" + CAMPO)){
            document.querySelector('#' + CAMPO).value = result[CAMPO];
        }
    }
};

//O evento blue significa que clicamos na caixa de texto e saímos dela.
CEP.addEventListener('blur', async (e) => {
    let search = CEP.value.replace('-', '');

    if (search.length < 8 || isNaN(search)) { 
        alert("CEP INVÁLIDO!"); 
        CEP.value = "";
        // CEP.focus();
        return 
    }

    const OPTIONS = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    //fetch vai gerar uma promise. Promise é uma promessa de que algo vai acontecer.
    // Se der certo, retorna-se o resultado. Se der errado, retorna-se um erro.
    // Se der certo nós resolvemos a promise. Se der errado, nós rejeitamos a promise.

    // https://viacep.com.br/ws/01001000/json/

    const RESULTADO = await fetch(`https://viacep.com.br/ws/${search}/json/`, OPTIONS)
    // .then(response =>{
    //     response.json()
    //     .then(result => console.log(result))
    // })

    // .catch((e) => console.log(e.message));

    const JSON = await RESULTADO.json();
    console.log(JSON);

    SHOW_DATA(JSON);
});

// async/await (primos um do outro, isto é, onde um está o outro também deve estar. Onde o await está, o async tem que estar)

//ATENÇÃO: Then e catch comentados são a forma verbosa que foi minimizada pelo uso do "await"
// Se eu uso fetch está implícito que eu sempre vou usar async e await
