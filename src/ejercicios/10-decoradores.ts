/*
    ===== Código de TypeScript =====
*/

// DECORADOR => FUNCIÓN QUE EXPANDE SU CLASE AÑADIÉNDOLE FUNCIONALIDADES ESPECIALES
function classDecorator<T extends{ new (...args:any[]): {} }>(
    constructor: T
    ){
        return class extends constructor {
            newProperty = "new property";
            hello="override";
        };
    }
   
// @classDecorator
// class MiSuperClase { // Sale error porque hay que configurar el ts.config.json => FUCK IT
//     public miPropiedad: string = 'AAAA';

//     imprimir() {
//         console.log('Hola bro');
//     }
// }
