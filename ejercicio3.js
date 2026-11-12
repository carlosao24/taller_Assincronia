const consultarClima = (ciudad)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Temperatura actual en la ciudad de 24°C, condicion: medianamente soleado")
        },1500)
    })
}

async function mostrarClima(ciudad){
    try{
        console.log("Clima actual")
        const clima = await consultarClima(ciudad)
        console.log("Reporte del clima. "+clima)
    }catch(error){
        console.log("Alerta meteorologica")
    }
}

mostrarClima("Milagro")