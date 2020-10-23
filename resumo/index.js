//funcoes em javascript
console.log('funcao padrao com eval')
function calc(x1, x2, operador){

    return eval(`${x1} ${operador} ${x2}`);

}

let calculo = calc(1, 2, "*")//chamando a funcao (invocar)

console.log(calculo);
console.log('');

///evaluate - eval(): Computa um codigo Javascript representando como uma string
//funcao nativa do javascript

/* ------------------------------------------------------------------------------- */

//funcao anonima
//geralmente nao esta acessivel apos a sua criacao 


/* -------------------------------------------------------------------------------- */

//arrow function
console.log('arrow function')
let arrow = (x1, x2, operador) => { //a funcao passa a ser uma variavel

    return eval(`${x1} ${operador} ${x2}`);

}

let resultado = arrow(1 , 2 , "+");

console.log(resultado);
console.log('')

/*------------------------------------------------------------------------*/

//Arrays
console.log('array carros')
let carros = ["palio 98", "Toro", "Uno"];
console.log(carros);//mostra os itens dentro
console.log(carros.length); //tamanho do array (conta do 0)
console.log(carros[0]); //procurar pelo indice
console.log('')

//arrays continuacao

console.log('array carros1');
let carros1 = ["palio", "toro", "uno", 10, true, new Date(), function(){}];

carros1.forEach(function(value, index){
    console.log(index, value);

});
console.log('');

//

let ti = ["Rafael", "Joao", "Henrique", "Everton", "Leonardo"];

    ti.forEach(function(value, index){
        console.log(index, value);

    });

    
