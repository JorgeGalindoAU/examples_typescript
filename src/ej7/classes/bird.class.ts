import { Animal } from "./animal.class";

export class Bird extends Animal {
    speak(): void {
        console.log('Pio pio!');
    }

}