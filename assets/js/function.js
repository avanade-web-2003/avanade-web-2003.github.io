const RESULT = document.querySelector('#resultado');

let myFunc = {
    showArguments() {
        RESULT.innerHTML = arguments;
        console.log(arguments)
    }
}

myFunc.showArguments("BMW", "AUDI", "MERCEDES", "BENTLEY", "FERRARI", "LAMBORGHINI");

// arrow Function não acessa 'arguments'.
let myFunc2 = {
    showArguments2: () => {
        RESULT.innerHTML = arguments;
        console.log(arguments)
    }
}

// myFunc2.showArguments2('CORSA', 'ESCORT', 'UNO', 'SANTANA', 'GOL', 'FUSCA', 'KOMBI');

let user = {
    name: 'Viih Neris',
    usingArrow: () => {
        // O THIS NÃO EXISTE NA ARROW FUNCTION
        console.log(`Meu nome é ${this.name}, com Arrow Function.`);
    },
    usingNominal() {
        console.log(`Meu nome é ${this.name}, com Nominal Function.`);
    }
};

user.usingArrow();
user.usingNominal();

let sum = (a,b) => {
    console.log(a+b);
}
let sum2 = function(a,b){
    console.log(a+b)
}

// ARROW FUNCTION NÃO ACEITA NEW
// new sum(50, 20);
new sum2(50, 20);