/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}
interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 126,
    cancion: 'Feel Good',
    detalles: {
        anio: 2016,
        autor: 'Illenium'
    }
}

// DESESTRUCTURED OBJECT
const {volumen, segundo, cancion, detalles} = reproductor; // COGE DEL OBJETO REPRODUCTOR LAS PROPIEDADES QUE YO TE DIGA
const {autor} = detalles;

console.log('Volumen actual: ', volumen);
console.log('Segundo actual: ', segundo);
console.log('Canción actual: ', cancion);
console.log('Autor: ', autor);


// DESESTRUCTURED ARRAY => INDEX
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz; // INDEX, EN ORDEN

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3); // Se puede coger solo el último elemento
