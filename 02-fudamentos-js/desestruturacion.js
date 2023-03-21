const deadpool = {
    nombre : 'wade',
    apellido : 'winston',
    poder : 'regeneracion',
    getNombre (){
        return `${nombre},${apellido},${poder}`
    }
}

// const {nombre,apellido,poder,edad = 10} = deadpool;

function printHero({nombre,apellido,poder,edad = 10}) {
    // const {nombre,apellido,poder,edad = 10} = Hero;
    console.log(nombre, apellido,poder,edad);
    
}

// printHero(deadpool);

const Heroes = ['deadpool','superman','batman'];

const [, ,h3] = Heroes;

console.log(h3);