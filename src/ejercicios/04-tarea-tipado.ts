/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion, // PARA PONER UN OBJETO COMO ATRIBUTO => SE SACA COMO OTRA INTERFAZ
    mostrarDireccion: () => string; // FUNCIÓN QUE DEVUELVE STRING
}
// SE HACE INTERFAZ APARTE, NO SE PONEN OBJETO ANIDADOS
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion)