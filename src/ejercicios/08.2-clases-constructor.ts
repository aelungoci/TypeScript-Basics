/*
    ===== Código de TypeScript =====
*/

// LAS CLASES SIRVEN PARA CREAR INSTANCIAS && CREAR MÉTODOS CON CÓDIGOS, EN INTERFACES SE PONEN SIN CÓDIGO
class Heroe2 {
    //nombre: string;
    //public edad: number; // Se deben instanciar para poder llamarlos
    //static ciudad: string; // Pueden ser llamados sin ser instanciados

    // Se pueden poner atributos como en java, pero se pueden declarar en el constructor => MÁS SENCILLO
    constructor(
        public  nombre: string,
        public edad: number,
        public ciudad?: string
    ) {}
    
    //imprimirNombre() {
    //    return this.nombre+ ' ' +this.edad;
    //}

}

//Heroe.ciudad; // Puedo llamar a ciudad sin más porque ES STATIC

const hulk = new Heroe2('FRAN', 45, 'León');

console.log(ironman);