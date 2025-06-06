/* type ObjectCustom = { item: string };

function changeStuff(a: number, b: ObjectCustom, c: ObjectCustom) {
    a = a * 10;
    b.item = "changed";
    c = { item: "changed" };
}

let num: number = 10;
let obj1: ObjectCustom = { item: "unchanged" };
let obj2: ObjectCustom = { item: "unchanged" };

changeStuff(num, obj1, obj2);

console.log(num);         // 10
console.log(obj1.item);   // "changed"
console.log(obj2.item);   // "unchanged"

['A', 'B', 'C', 'D'].forEach(x => {
    console.log(x);
    console.log(`${x} - ${x}`);
}
); */

import { interval, map, Observable, of, take, timeInterval } from "rxjs";

let myFirstObservable: Observable<string> = of('Hello');
let mySecondObservable: Observable<string> = of('Hello World!');
let myThirdObservable: Observable<number> = of(1);
let myFourthObservable: Observable<number[]> = of([1, 2, 3]);

myFirstObservable.subscribe(value => console.log(`Valor recibido: ${value}`));

myFirstObservable
    .subscribe(value => {
        if (value) {
            console.log(`Valor recibido: ${value}`)
        } else {
            console.error('Error detectado!');
        }
    });

// deprecated
mySecondObservable.subscribe({
    next(value) {
        console.log(value);
    },
    error(err) {
        console.error(err);
    },
    complete() {
        console.log('Finalizado!');
    },
});

myThirdObservable
    .pipe(
        map(x => `${x}`) // 1. String
    )
    .pipe(
        map(x => Number.parseInt(x)) // 1. Vuelta a numero
    )
    .pipe(
        map(x => `Valor final ${x}`) // 3. String
    )
    .subscribe(value => console.log(value));

myFourthObservable.subscribe(value => {
    let newValue = value;
    console.log(newValue);
});

const myInterval: Observable<number> = interval(500);

myInterval
    .pipe(
        take(5),
        timeInterval(),
    )
    .subscribe(x => console.log(x.value));