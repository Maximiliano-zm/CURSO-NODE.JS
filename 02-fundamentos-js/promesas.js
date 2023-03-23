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
    return promesa = new Promise((resolve , reject)=>{
        const empleado = empleados.find(e => e.id === id)?.nombre;

        // if (empleado) {
        //     resolve(empleado);
        // }else{
        //     reject(`no existe empleado con el id ${id}`);
        // }

        (empleado)?resolve(empleado) 
        :reject(`no existe empleado con el id ${id}`);
    });
    
}

const getSalario = (id) =>{
    return promesa = new Promise((resolve , reject)=>{
        const salario = salarios.find(s => s.id === id)?.salarios;

        // if (empleado) {
        //     resolve(empleado);
        // }else{
        //     reject(`no existe empleado con el id ${id}`);
        // }

        (salario)?resolve(salario) 
        :reject(`no existe salario con el id ${id}`);
    });
    
}

const id = 4;

    // getEmpleado(id)
    // .then(empleado => console.log(empleado))
    // .catch(err => console.log(err));

    // getSalario(id)
    // .then(salario => console.log(salario))
    // .catch(err => console.log(err));

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
        .then(salario =>{
            console.log('El empleado' , empleado , 'Tiene una salario' , salario);
        })
    })
    .catch(err => console.log(err))


