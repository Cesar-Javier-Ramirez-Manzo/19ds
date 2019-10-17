let arr=[1,2,3,4,5,6,7,8,9]
let arr2=[2,5,1,5,7,9,2,1,9]

//funcion de calcular si unn numero esta ordenado si el siguiente numero es mayor
function Sort(x){
    let ord=true
    for(var i=0;i<x.length;i++){
        if(x[i+1]<x[i]){
            //si entra es que automaticamente un numero al menos no lo esta ordenado
            ord=false
            break
            

        }
    }

    return ord
}

console.log(arr+'\n ordenado: '+Sort(arr))
console.log(arr2+'\n ordenado: '+Sort(arr2))