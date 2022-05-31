/*
    ===== Código de TypeScript =====
*/

// LAS CLASES SIRVEN PARA CREAR INSTANCIAS && CREAR MÉTODOS CON CÓDIGOS, EN INTERFACES SE PONEN SIN CÓDIGO
class Muggle {

    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends Muggle {

    constructor(
        public  nombre: string,
        public edad: number,
        public ciudad?: string
    ) {
        super(nombre, 'USA'); // Llama al constructor de Muggle, le pasamos nombre (que va a ser el que Heroe tenga) y una dirección deseada
    }
    
}

const ironman = new Heroe('FRAN', 45, 'León');

console.log(ironman);