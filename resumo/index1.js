
//eventos - dentro do evento utilizamos a arrow function =>
window.addEventListener('focus', event => { //window é a minha janela
    console.log("focus");
});

document.addEventListener('click', event => { //document é a pagina/site
    console.log('click');
}); 


/*-------------------------------------------------------------------------*/

//data em javascript - classe Date

let agora = Date.now(); //data sem formatação timestamp desde de 01/01/1970
    console.log(agora);

let today = new Date(); //data formatada
    console.log(today.getDate());//getFullYear() - getMounth() - neste caso ele começa em 0 

let agorinha = new Date();
    console.log(agorinha.toLocaleDateString("pt-BR")); //22/10/2020 - formatado no padrao brasileiro


/*-------------------------------------------------------------------------------------*/

//classes 
//classe engloba assuntos em comum
//variavel = atributo (informação) funcao = metodo (ações que devem acontecer)

//atributos sao chamados onde eu quiser dentro da classe
//metodo é basicamente o mesmo que uma funcao dentro da classe

//this comando interno de referencia 

//new cria uma instancia da classe  - --- - guarda a classe dentro de um objeto

let ccelular = function(){

    this.cor = "prata - metodo antigo";//referencia a algum objeto
    this.ligar = function(){
        console.log("uma ligacao - metodo antigo");
        return "ligando - metodo antigo";
    }
}

let obj = new ccelular(); //criando uma instancia da minha classe

console.log(obj.ligar());//invocando o metodo dentro da classe

//classe com o novo ECMASCRIPT

class celular{
    
    constructor(){//metodo construtor - comando executado automaticamente quando chamado na palavra new -- ex. new celular() - o metodo contrutor sao esses parenteses do lado do nome da instancia

        this.cor = "prata - ECMA";
    }

    ligar(){

        console.log("uma ligacao - ECMA");
        return "ligando - ECMA"
    }

}

let objeto = new celular();

console.log(objeto.ligar());