// Um arqueólogo pediu pra você fazer uma função que converta numeros Romanos para arabicos
// Ex: MCV -> 1105

// MMXXI -> 2021
// XCV -> 95

var romanos = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}

/*
function verifyValue(number) {
 var letters = number.split("");
 var total = 0;
 
 for (var i = 0; i < letters.length; i++){
 
 var current = letters[i];
 var next = letters[i+1];
 
 if (next == null || romanos[current] >= romanos[next]){
 total = total + romanos[current];
 } else {
 total = total + (romanos[next] - romanos[current]);
 i++;
 }
 }
 console.log(total);
}
*/

function converteRomanos(numero)
{
    
    var fim = numero.length - 1;

    var arabico = 0;
    
    for (var ini = 0; ini <= fim; ini = ini + 1) 
    {
        var atual = numero.charAt(ini);
        var proximo = numero.charAt(ini + 1);
        var valor = romanos[atual];

        console.log(atual, proximo, valor)

        if (proximo == null) 
        {
            arabico = arabico + valor; 

        } else if (romanos[atual] >= romanos[proximo]) 
        {
            arabico = arabico + valor;    
        } else 
        {
            arabico = arabico + valor - romanos[proximo];   
            ini++;
        }
        
        anterior = valor;
        
    }

    return arabico;
}

var valor = converteRomanos("MMXXI");
console.log(valor);

var valor = converteRomanos("XCV");
console.log(valor);