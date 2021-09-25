// logica

/*

Logica com javascript

 
1 - Colocar a primeira letra da palavra em maiuscula
Ex. curitiba -> Curitiba
CURITIBA -> Curitiba
CuRITiba -> Curitiba

2 - Você trabalha num posto de combustivel porém a bomba está quebrada e não mostra o total a ser pago. Crie uma função que informe o total a pagar com o valor por litro e quantidade informadas pelo frentista.

3 - Faça uma pesquisa em um texto e informe se foi encontrado ou não

*/

function letraMaiuscula()
{
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");

    // Retorna a primeira letra em maiucula
    var letra = texto.charAt(0).toUpperCase();

    // coloca o resto em minuscula
    var resto = texto.substr(1).toLowerCase();

    resultado.innerText = letra + resto;

}

function valorPagar()
{
    var resultado = document.getElementById("resultado");
    
    var valor = document.getElementById("valor").value;
    var quant = document.getElementById("quant").value;

    var total = parseFloat(valor) * parseFloat(quant);

    resultado.innerText = total;

    console.log(resultado, valor, quant)

}

function pesquisar() 
{
    var resultado = document.getElementById("resultado");
    var palavra = document.getElementById("palavra");
    var texto = document.getElementById("conteudo");

    var existe = texto.value.includes(palavra.value);

    if (existe == true) 
    {
        resultado.innerHTML = "Valor Encontrado";
    } else {
        resultado.innerHTML = "Valor não Encontrado";
    }

    console.log(resultado, palavra, texto)
}