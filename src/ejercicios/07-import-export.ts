/*
    ===== Código de TypeScript =====
*/

import { calculaIVA, Producto } from "./06-desestructuracion-funcion"; // autogenerado corrección rápida


const carritoCompra: Producto[] = [
    {
        desc: 'Teléfono 1',
        precio: 100
    },
    {
        desc: 'Teléfono 2',
        precio: 400
    }
];

const [total, iva] = calculaIVA(carritoCompra);

console.log('Total: ', total);
console.log('IVA: ', iva);