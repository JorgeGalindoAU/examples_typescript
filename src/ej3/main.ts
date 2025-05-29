/** Example 3 Arrays */

const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [6, 7, 8, 9];
const array3: number[][] = [[1, 2], [7, 8]];

let predicate: (n: number) => boolean = (n: number) => n < 2;

/*** métodos que no modifican el array original ***/

// transforma cada elemento según el predicate
const mappedArray: number[] = array1.map((n: number) => n * 2);

// filtra el array según el predicate
const filteredArray: number[] = array1.filter((n: number) => n < 3);

// corta el array entre startIndex y endIndex
const slicedArray: number[] = array1.slice(0, 3);

// concatena arrays
const concatenatedArray: number[] = array1.concat(array2);

// aplana matrices en un array
const flattedArray: number[] = array3.flat();

// aplica el predicate para todos los elementos y los reduce en uno
const reducedArray: number = array1.reduce((previous: number, current: number) => previous + current, 0);

// busca un elemento en el array según el predicate
const foundArray: number | undefined = array1.find((n: number) => n == -1);

// devuelve un booleano si algún elemento cumple el predicate
const someArray: boolean = array1.some((n: number) => n % 2);

// devuelve un booleano si todos los elementos cumplen el predicate
const everyArray: boolean = array1.every((n: number) => n % 2);

// devuelve un booleano si el array incluye el elemento
const includedArray: boolean = array1.includes(0);

console.log(`--> array: ${array1}`);

console.log(`.map: ${mappedArray}`);
console.log(`.filter: ${filteredArray}`);

console.log(`.slice: ${slicedArray}`);
console.log(`.concat: ${concatenatedArray}`);
console.log(`.flat: ${flattedArray}`);
console.log(`.reduce: ${reducedArray}`);
console.log(`.find: ${foundArray}`);
console.log(`.some: ${someArray}`);
console.log(`.every: ${everyArray}`);
console.log(`.includes: ${includedArray}`);

console.log(`--> array: ${array1}`);

/*** métodos que sí modifican el array original ***/

// añade un elemento al array, devuelve longitud
const pushLength: number = array1.push(1);
console.log(`.push: ${pushLength}`);
console.log(`--> array: ${array1}`);

// elimina un elemento al array por el final, devuelve el elemento eliminado
const poppedElement: number | undefined = array1.pop();
console.log(`.pop: ${poppedElement}`);
console.log(`--> array: ${array1}`);

// elimina el primer elemento del array, devuelve el elemento eliminado
const shiftedElement: number | undefined = array1.shift();
console.log(`.shift: ${shiftedElement}`);
console.log(`--> array: ${array1}`);

// añade un elemento al array por el principio, devuelve longitud
const unshiftedLength: number | undefined = array1.unshift(1);
console.log(`.unshift: ${unshiftedLength}`);
console.log(`--> array: ${array1}`);

// elimina N elementos al array según start
// y devuelve un nuevo array con los eliminados
const splicedArray: number[] = array1.splice(1, 1);
console.log(`.splice: ${splicedArray}`);
console.log(`--> array: ${array1}`);

// da la vuelta al array
const reversedArray: number[] = array1.reverse();
console.log(`.reverse: ${reversedArray}`);
console.log(`--> array: ${array1}`);

// ordena el array según el predicate
const sortedArray: number[] = array1.sort((a: number, b: number) => a >= b ? 1 : -1);
console.log(`.sort: ${sortedArray}`);
console.log(`--> array: ${array1}`);

// rellena el array con un valor
const filledArray: number[] = array1.fill(1);
console.log(`.fill: ${filledArray}`);
console.log(`--> array: ${array1}`);



