/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}
const pasajero2: Pasajero =  {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Lola']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0; // Si el pasajero tiene hijos (?), entonces dime cuantos, en caso contrario muestra 0
    // o me sacas la longitud o me sacas 0
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1); // Si intento acceder a los hijos del pasajero1 me salta NullPointer, ya que no tiene, por eso hay que hacer => pasajero.hijos?.length || 0