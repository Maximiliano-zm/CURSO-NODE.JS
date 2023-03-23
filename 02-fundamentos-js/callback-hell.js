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
];


const getSalario = (id) =>{
    const salario = salarios.find((e) => e.id === id)
    
    if (salario) {
        return salario
    } else {
        return `salario con id ${id} no existe`;
    }
}


const getEmpleado = (id) =>{
    const empleado = empleados.find((s) => s.id === id)
    
    if (empleado) {
        return empleado
    } else {
        return `empleado con id ${id} no existe`;
    }
}


console.log(getEmpleado(10));
console.log(getSalario(3));