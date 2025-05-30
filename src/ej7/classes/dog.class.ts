import { Animal } from "./animal.class";

export class Dog extends Animal {
    speak(): void {
        console.log('Guau Guau!');
    }
}