/*
    ===== Código de TypeScript =====
*/

export interface Producto { // Al poner export estamos diciendo que otra clase puede importarlo
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung A1',
    precio: 123
}
const tablet: Producto = {
    desc: 'iPad',
    precio: 600
}

export function calculaIVA(productos: Producto[]): [number, number] { // Retorna un array
    let total = 0; // let porque el valor va a cambiar
    productos.forEach((prod) => {
        total += prod.precio;
    })

    return [total, total * 0.15]; // Retorna un array (index 0 => total, index 1 => iva)
}

const articulos = [telefono, tablet];
// Coge de lo que devuelve la función, el total (index 0) y el iva (index 1)
const [total, iva] = calculaIVA(articulos); 

//console.log('Total: ', total); // [IMPORTANTE] => Comento esto ya que si importo la función en otra clase, se ejecuta esto también, porquellama a la función también para que se muestre
//console.log('IVA: ', iva);

