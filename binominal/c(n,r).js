let x=6
let r=3
let res=0

//funcion de permutacion
function Perm(n,r){
   

    res= Fact(n)/(Fact((n-r)))

    return res

}

//funcion de combinacion
function Comb(n,r){


    res=Perm(n,r)/(Fact(r))//formula de permutacion entre el factorial usando la funcion
    return res//resultado final
}

//funcion factorial
function Fact(z){
    var acum=1

    for(var c=1;c<=z;c++){

        acum=+(acum*c)
    }
   
    return acum
}

console.log('El numero de combinaciones posibles es '+Comb(x,r))