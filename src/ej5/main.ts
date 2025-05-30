
/** Example 5 Promesas */

/*
    Pensad en las promesas como un flujo único de información.
    Consumir una API sería un buen caso de uso para las Promesas.

    Teniendo en cuenta C#, una promesa sería como un Task.
*/

function waitTillComplete(ms: number): Promise<string> {
    // return new Promise(resolve => setTimeout(() => resolve("Done!"), ms));

    return new Promise((resolve: (value: string) => void) => {
        setTimeout(() => resolve("Done!"), ms);
    });
}

async function execute() {
    console.log('Executing...');

    const resultado = await waitTillComplete(1000);

    console.log(resultado);
}

execute();