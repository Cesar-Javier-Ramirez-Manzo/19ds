let res=0
let x=5

function Cata(n){
    res=Fact(2*n)/(Fact(n+1)*(Fact(n)))//calcula el numero catalan usando n

    return res
}

//funcion factorial
function Fact(z){
    var acum=1

    for(var c=1;c<=z;c++){

        acum=+(acum*c)
    }
   
    return acum
}

console.log('El catalan numero '+x+' es '+Cata(x))