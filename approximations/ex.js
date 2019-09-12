var x=10
var sum=1
let z=0
for(var i =1;i<=Math.pow(x,2);i++){

    z=(Math.pow(x,i)/Fact(i))//formula
    sum=sum+z

}

console.log('este es el resultado con el algoritmo '+sum)

//funcion factorial
function Fact(z){
    var acum=1
    

    for(var c=1;c<=z;c++){

        acum=+(acum*c)
    }
   
    return acum
}

console.log('Este es el resultado con la funcion Math '+Math.pow(Math.E,x))