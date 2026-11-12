const retirarDinero = (monto)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const saldo = 500
                if(monto <= saldo){
                    let restante = saldo - monto
                    resolve("Retiro exitoso de $"+monto+". Su saldo restante es de $ "+restante)
                }else{
                    reject("Fondos insuficientes. Solicitud de $" +monto+ " rechazada. Limite de retiro de $"+saldo)
                }
            }, 1500)
        })
    
}


retirarDinero(200).then((resultado)=>{
    console.log("Felicidades. "+resultado)
}).catch((error)=>{
    console.log("Lo sentimos. "+error)
})



retirarDinero(600).then((resultado)=>{
    console.log("Felicidades. "+resultado)
}).catch((error)=>{
    console.log("Lo sentimos. "+error)
})