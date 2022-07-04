// classes
class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}

// Intaciando objetos à classe
let meuCarro1 = new Carro('Ford', 2014);
let meuCarro2 = new Carro('Audi', 2019);

// Imprimindo valores
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2.nome);
console.log(meuCarro2.ano);

// Declarar nova classe com métodos 
console.clear(); 
class NovoCarro {     
    constructor(nome, ano){  
     this.nome = nome;         
     this.ano = ano;     
    }     
    idadeCarro(ano) {         
        return ano - this.ano;     
    } 
} 
 
//Buscando o ano atual automaticamente 
let dataHoje = new Date(); 
let ano = dataHoje.getFullYear(); 

// console.log(dataHoje); 
 
// Intanciando o objeto à classe 
let meuNovoCarro = new NovoCarro('Ford', 2014); 
 
console.log(meuNovoCarro.idadeCarro(ano))

// Mais um exemplo de classe 
console.clear();
class ClassPessoa {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    } 
}

// Instantiate object 
const pessoa1 = new ClassPessoa('John', 'Doe', '1980-04-03'); 
const pessoa2 = new ClassPessoa('Marry', 'Smith', '1970-06-13'); 
 
console.log(pessoa1); 
 
console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear()); 
 
console.log(pessoa1.getFullName());

// Lexical this em um função 
console.clear();
// Contructor de função - lexical this
function PessoaFunc(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return `${this.firstName} ${this.lastName}`;
    };
} 

// Instanciando os objetos
const pessoa3 = new PessoaFunc('Jonh', 'Doe', '1980-04-03');
const pessoa4 = new PessoaFunc('Marry', 'Smith', '1970-06-13');

console.log(pessoa3);
console.log(pessoa4.dob.getFullYear());

// Adicionando prototipos
PessoaFunc.prototype.getBirthDayMonth = function () {
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
};

PessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
};

console.clear();
console.log(pessoa3.getBirthDayMonth());
console.log(pessoa4.getFirstName());