var x=3;

//funcion sumatoria
function S5(a){
    var sum=0
    for(var i=0;i<=10;i++){

        sum=sum+(Math.pow(a,i))//sumatoria
    
    }
    return sum
}


console.log('El resultado de la sumatoria es '+S5(x))

var z=((Math.pow(x,11)-1)/(x-1))//formula
console.log('El resultado de la formula es '+z)
//Cuando a es 2
console.log('Cuando a es igual a 2 el resultado es: '+S5(2))
var y=((Math.pow(2,11)-1)/(2-1))
console.log('Cuando a es 2 usando formula el resultado es '+y)






