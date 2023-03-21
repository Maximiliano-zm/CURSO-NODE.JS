const empleados = [
    {
        id : 1,
        nombre : 'max'
    },
    {
        id : 2,
        nombre : 'max2'
    },
    {
        id : 3,
        nombre : 'max3'
    }
];

const salarios = [
    {
        id : 1,
        salarios : 1000
    },
    {
        id : 2,
        salarios : 3000
    },
    {
        id : 3,
        salarios : 400
    }
]

const getEmpleado = (id) =>{
    const promesa = new Promise((resolve , reject)=>{
        const empleado = empleados.find((e) => e.id === id)?.nombre

        if (empleado) {
            resolve(empleado);
        }else{
            reject(`no existe empleado con el id ${id}`);
        }

    });
    return promesa;
}
const id = 1;
getEmpleado(id).then(empleado => console.log(empleado));
