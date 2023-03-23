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
        (empleado)?resolve(empleado) 
        :reject(`no existe empleado con el id ${id}`);
    });
    
}

const getSalario = (id) =>{
    return promesa = new Promise((resolve , reject)=>{
        const salario = salarios.find(s => s.id === id)?.salarios;
        (salario)?resolve(salario) 
        :reject(`no existe salario con el id ${id}`);
    });
    
}

const getInfoUsuario = async(id) =>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${ empleado } es : ${salario}`;
    } catch (error) {
        throw error;
    }
}

const id = 4;

getInfoUsuario(id)
.then(msg => {
    console.log('TODO BIEN')
    console.log(msg);
})
.catch(err => {
    console.log('TODO MAL')
    console.log(err);
});
