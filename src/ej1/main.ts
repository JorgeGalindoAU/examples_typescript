/** Example 1 Hello World */

function greet(person: string) {
    return "Hello, " + person;
}

let test: string = 'Hello World!' as string;

console.log(`Mi mensaje: ${test}`);

const user: string = "Jorge Galindo";
let message: string = greet(user);

console.log(message);