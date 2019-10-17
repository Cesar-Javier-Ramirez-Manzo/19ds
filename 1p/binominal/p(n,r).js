let x=6
let r=3
let res=0

//funcion permutacion
function Perm(n,r){
   

    res= Fact(n)/(Fact((n-r)))//formula

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

console.log('El numero de permutaciones posibles es '+Perm(x,r))