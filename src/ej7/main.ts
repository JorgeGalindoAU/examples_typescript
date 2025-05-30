import { Add } from './classes/add.class';
import { Animal } from './classes/animal.class';
import { Bird } from './classes/bird.class';
import { Dog } from './classes/dog.class';
import { Substract } from './classes/substract.class';

/** Example 8 POO */


// Example 1
const add: Add = new Add();
const sub: Substract = new Substract();

let x = add.calculate(1, 2);
let y = sub.calculate(1, 2);

console.log(x);
console.log(y);

// Example 2
const dog: Animal = new Dog('Firulais', 'Perro', 'Marrón');
const bird: Animal = new Bird('Calimero', 'Pájaro', 'Amarillo');

dog.showDescription();
dog.speak();

bird.showDescription();
bird.speak();

