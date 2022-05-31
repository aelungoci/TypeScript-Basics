/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1,2,4,5,6,7,8,9,10]);

let soyExplicito = queTipoSoy<string>('Adiós');