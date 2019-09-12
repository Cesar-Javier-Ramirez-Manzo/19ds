let x=10
//funcion de factorial
function Fact(z){
    var acum=1

    for(var c=1;c<=z;c++){

        acum=+(acum*c)//realiza multiplicaciones ssucesivas y los guarda en un acumulador
    }
   
    return acum//regresa el acumulador
}

console.log('Factorial de '+x+' es '+Fact(x))