

console.log('Hola Mundo!!!!!!!!!!!');

/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string | number)[] = ['Fuerza', 'Poder', 'Fierismo', 100];
habilidades.push(1, true, 'hola'); // AÑADIR ELEMENTO A ARRAY

// INTERFAZ => para declarar tipos de los atributos. Interfaz = obliga al objeto a implementar lo que le digamos
interface Personaje { // Las interfaces no aparecen en la consola del navegador (Chrome)
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // ATRIBUTO OPCIONAL
}

const personaje: Personaje = {
    nombre: 'Villa',
    hp: 100,
    habilidades: ['Fuerza', 'Poder', 'Fierismo']
}

personaje.puebloNatal = 'Pueblo Paleta'; // COMO ES OPCIONAL SE LO AÑADIMOS DESPÚES SI QUEREMOS


console.table(personaje); // MUESTRA LA INFORMACIÓN EN FORMATO TABLA