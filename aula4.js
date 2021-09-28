// Aula 4
// POO
// Estrutura de dados

var nome = "edir";
var idade = 34;

// array -> coleção de dados

var pessoas = ["Edir", "Ana", "maria"];

// JSON -> notação
var aluno = {
    nome: "Ana",
    idade: 15,
    cidade: ["Colombo"],
    escrever: function() {

    }
};


// encapsulamento

// classe -> ES5
var Caneta = function()
{
    // atributos
    this.cor = "Azul";
    this.quantidadeTinta = 100;

    //metodos
    function escrever()
    {

    }
    
}

// classe -> ES6+
class Caneta2 extends Caneta
{
    click()
    {

    }
    
}

// instanciando objeto 
var bic1 = new Caneta();
var bic2 = new Caneta2();
var bic3 = new Caneta();


bic1.cor = 123;
bic1.escrever();
