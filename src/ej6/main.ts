/** Example 6 Observables */
import { Observable, interval, of, Subscription } from 'rxjs';
import { finalize, map, take, timeInterval } from 'rxjs/operators';

/*
    Pensad en los observables con un flujo de valores a lo largo del tiempo.
    Manejar las validaciones en un formulario a medida que el usuario introduce una contraseña,
    sería un buen caso de uso para las Observables.

    Como la formación es de Angular y este es un framework reactivo,
    usaremos siempre Observables en vez de Promesas.

    Pero esto ha cambiado justo en Angular 19, donde se ha introducido las señales.
*/

let myStringObservable: Observable<string> = of('Hello');
let myStringSubscription: Subscription = myStringObservable
    .pipe(map(s => s + 'User'))
    .subscribe(console.log);

myStringSubscription.unsubscribe();

let myNumbersObservable: Observable<number> = of(1, 2, 3);

let myNumbersSubscription: Subscription = myNumbersObservable
    .pipe(map(x => x * 2))
    .subscribe({
        next: (response) => {
            console.log(response);
        },
        error: (e) => {
            console.error(e);
        },
        complete: () => {
            console.log('Finished myNumbersSubscription!');
        }
    });

myNumbersSubscription.unsubscribe();

// Ejercicio: Crear un observable que emita valores cada segundo y se detenga después de 5 emisiones.
// https://rxjs.dev/guide/operators

// mi valor
const message: string = 'X';

// nuevo observable que emite valores cada segundo
const myInterval: Observable<number> = interval(1000);

// la subscripción (ejecución del observable a lo largo del tiempo)
let emitter: Subscription = myInterval          // manejamos el observable 
    .pipe(                                      // antes de subscribirnos al observable, aplicamos una 'tubería'
        take(5),                                // cinco emisiones
        timeInterval(),                         // controladas por tiempo
        finalize(() => emitter.unsubscribe()),  // al finalizar, cerramos la 'escucha'
    )
    .subscribe(x => {
        // en cada emisión, ejecutamos un console.log
        console.log(`Se emite ${message} en la emisión #${x.value} (${x.interval}ms)`);
    });                                         
