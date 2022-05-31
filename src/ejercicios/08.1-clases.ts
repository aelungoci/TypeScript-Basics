/*
    ===== Código de TypeScript =====
*/

// LAS CLASES SIRVEN PARA CREAR INSTANCIAS && CREAR MÉTODOS CON CÓDIGOS, EN INTERFACES SE PONEN SIN CÓDIGO
class Heroe1 {
    private nombre: string;
    public edad: number; // Se deben instanciar para poder llamarlos
    static ciudad: string; // Pueden ser llamados sin ser instanciados

    imprimirNombre() {
        return this.nombre+ ' ' +this.edad;
    }
}

//Heroe.ciudad; // Puedo llamar a ciudad sin más porque ES STATIC

const spider = new Heroe1();