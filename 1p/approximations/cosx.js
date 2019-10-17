var x=35
var sum=0
var int=-1

for(var i=0;i<=(3*x);i++){//entre mas aumenta x el resultado puede fallar si no se aumenta el numero de ciclos

    int=int*-1//intercala entre positivo y negativo
sum=sum+((Math.pow(x,i))/Fact(i))*(int)//realiza la formula


i++
}

console.log('Este es el resultado del algoritmo '+ sum)


//funcion factorial
function Fact(z){
    var acum=1
    

    for(var c=1;c<=z;c++){

        acum=+(acum*c)
    }
   
    return acum
}

console.log('Este es el resultado de la funcion Math '+Math.cos(x))