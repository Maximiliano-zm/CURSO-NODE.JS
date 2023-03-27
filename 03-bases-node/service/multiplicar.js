const fs = require('fs');

salida = '';
const base = 5;
const createFile = (base = 5) => {

    for(let i = 1; i <= 10; i++){
       salida +=  `${base} x ${i} = ${base * i}\n`
    }

    fs.writeFileSync(`tabla-${base}.txt , salida`);
    console.log('tabla-5.txt creada con exito');
}
