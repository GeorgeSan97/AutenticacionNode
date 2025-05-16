import { Server } from './presentation/server';

(() => {
    main();
}) ()

function main() {
    //todo: await base de datos
    

    //todo: inicio de nuestro server
    new Server({
         
    })
        .start();
}