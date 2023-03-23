// setTimeout(()=>{
 
//    console.log('hola mundo');
    
// },3000);

const getUserID = (id , callback) =>{
    const user = {
        id,
        nombre : 'max'
    }

    setTimeout(()=>{
        callback(user);
    },3000)

}

getUserID(10 ,(user) => {
    console.log(user.id);
    console.log(user.nombre.toUpperCase());
});