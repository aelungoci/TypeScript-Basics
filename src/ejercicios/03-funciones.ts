/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number { // Le decimos que tipo de resultado va a retornar
    return a + b
}
const resultadoSuma = sumar(12, 13);
console.log(resultadoSuma);

// LO MISMO PERO CON FLECHA
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}
// VAR ENTRADA PUEDE SER OPCIONAL, PERO SE SUELEN PONER AL FINAL
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number { // En caso de que solo se pongan dos números, el valor de base será 2
    return numero * base;
 }

const resultadoMult = multiplicar(5, 10);
console.log(resultadoMult);


interface PersonajeVilla {
    nombre: string;
    pv: number;
    mostrarHp: () => void; // LA INTERFAZ POSEE UNA FUNCIÓN VOID
}
// CUANDO UNA FUNCIÓN NO REGRESA NADA, SE PONE VOID, COMO EN DIAGRAMAS UML
function curar(personaje: PersonajeVilla, ptosVida: number): void {
    personaje.pv += ptosVida;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeVilla = {
    nombre: 'Villa',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida; ', this.pv); // AQUÍ SE ESPECIFICA EL CUERPO DE LA FUNCIÓN
    }
}
curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();

