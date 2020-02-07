const fs = require('fs');
const colors = require('colors');


let data = '';
let listar = (base , limite = 10) =>{

    console.log(`========================================`.green);
    console.log(`======== Tabla de ${base} ========`.green);
    console.log(`========================================`.green);

    for(let i  = 1; i<=limite; i++){
        console.log( `${base} * ${i} = ${base * i}\n`);
      }     
}


let crearArchivo = (base , limite = 10) => {
    return new Promise( (resolve , reject ) => {

        if( !Number(base) ){
            reject(`El dato ingresado "${base}" no es valido, no es un numero.. `.red);
            return;
        }

        for(let i  = 1; i<=limite; i++){
            data +=  `${base} * ${i} = ${base * i}\n`;
          }
          
          fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else 
                resolve(`tabla-${base}.txt`.green);
          });
    });
}

module.exports = {
    crearArchivo,
    listar
}
