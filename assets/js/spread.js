const AEREAS_NACIONAL = [
    'Latam',
    'Gol',
    'Azul'
]
// Atribuição por desestrturação de arrays
const [LATAM, GOL, AZUL] = AEREAS_NACIONAL;

const AIR_COMPANIES = [...AEREAS_NACIONAL, 'Delta', 'United AirLines', 'Emirate'
];

console.log(AIR_COMPANIES);

const USER = {
    name: 'Viih Neris',
    email: 'aaaa@aaa.com',
    password: "OIDS*%¨9090"
}

const [LATAM1, GOL2, AZUL3, ...INTERNACIONAIS] = AIR_COMPANIES;


// USER sem password e armazenando em DATA
const {password, ...DATA} = USER;

console.log("Oh my gosh!", DATA)