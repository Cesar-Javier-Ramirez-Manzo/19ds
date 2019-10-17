var x=35
let z=0
var sum=0
var int=-1

for(var i=1;i<=Math.pow(x,2);i++){//Entre mas aumenta x mas ciclos ocupa para evitar fallos

    int=int*-1//intercalador de positivo a negativo
z=sum+((Math.pow(x,i))/Fact(i))*(int)//formula

if((z%z)!=0){//funcion para evitar que de fallo de NaN
    break
}
sum=z



i++
}


console.log('Este es el resultado del algoritmo '+sum)
//Funcion de factorial
function Fact(z){
    var acum=1

    for(var c=1;c<=z;c++){

        acum=+(acum*c)
    }
   
    return acum
}

console.log('Este es el resultado de la funcion Math '+ Math.sin(x))