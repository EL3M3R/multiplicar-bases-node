const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo , listar} = require('./multiplicar/multiplicar');

let comando = argv._[0];

    switch(comando){
        case 'listar':
            listar(argv.base , argv.limite);
                        
        break;
        
        case 'crear':
            crearArchivo(argv.base ,argv.limite )
                .then(archivo => console.log(`Archivo creado : ${archivo}`.green ) )
                .catch(e => console.log(e));
        break;

        default :
        console.log("El comando no se reconoce ");
    }

//let argv1 = process.argv;
//console.log(argv.base );
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
//console.log(process);


