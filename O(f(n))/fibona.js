    let cu=4
    let x=1
    let y=0
    let z=0
    let res=0
    for(var i=0;i<=(cu-2);i++){
        
        z=x+y//se establece la sumatoria
        x=y//se recorre el valor de y a x
        y=z//y adopta el acumulativo
        
        res=y//si es el ultimo se regresa el resultado
    }


    console.log('El '+cu+' numero es '+res)

    