const verificarEdad = (edad)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const edadAprobada = 18;
            if(edad >= edadAprobada){
                resolve("Acceso concedido. Bienvenido a la plataforma")
            }else{
                reject("Acceso denegado. Registro permitido solo para mayores de edad")
            }
        }, 1000)
    })
}

verificarEdad().then((resultado)=>{
    console.log("Felicidades. "+resultado)
}).catch((error)=>{
    console.log("Lo sentimos. "+error)
})

