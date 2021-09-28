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

function converteRomanos(numero)
{
    
    var fim = numero.length - 1;

    var arabico = 0;

    for (var ini = 0; ini < fim; ini = ini + 1) 
    {
        var char = numero.charAt(ini);
        arabico = arabico + romanos[char];
        
    }

    return arabico;
}

var valor = converteRomanos("MMXXI");
console.log(valor);

var valor = converteRomanos("XCV");
console.log(valor);