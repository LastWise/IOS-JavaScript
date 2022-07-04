//  Método forEach()
const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);

function minhaFuncao(item, index) {
    console.log(`Índice: ${index} `);
    console.log(`Elemento: ${item}`);
}

// Método forEach() com Arrow Function
console.clear();
const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {
    console.log(`índice: ${index}`);
    console.log(`Elemnto: ${item}`);
});

// forEach() com array de objetos
console.clear();
const tarefas = [     
    {   id: 1,    
        texto: 'Levar o lixo para fora', 
        isCompleted: true,  
    }, 
    {   id: 2,         
        texto: 'Encontrar com o chefe',         
        isCompleted: true,     
    },     
    {   id: 3,   
        texto: 'Consulta no dentista',  
        isCompleted: false, 
    }, 
]; 

tarefas.forEach((teste) => console.log(teste.texto))

// Método map()
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.clear();
console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

// Outro exemplo do map 
console.clear();
const maptext = tarefas.map((valor) => {
    return valor.texto;
});

// Immprime o novo array
console.log(maptext);

// Método filter
console.clear();
const idade = [32, 33, 16, 40];

let filtroIdade  = idade.filter((idade) => {
    return idade >= 18;
});
console.log(filtroIdade);

// Outro exemplo do filter
console.clear();
const filtroCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});

console.log(filtroCompletas);

// Método Find
console.clear();
const meuArray = [
    {nome: 'apple', quantidade: 2},
    {nome: 'bananas', quantidade: 0},
    {nome: 'cerejas', quantidade: 5},
];

console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);