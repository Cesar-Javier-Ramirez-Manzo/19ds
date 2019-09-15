//O(n)
let a=50
let b=90
let res=0
let arr1=[]
let arr2=[]


//se obtienen todos los divisores del primer valor 
for(var i=0;i<=a;i++){
    if((a%i)==0){
        arr1.push(i)
    }
}
//se obtienen todos los divisores del segundo valor 
for(var i=0;i<=b;i++){
    if((b%i)==0){
        arr2.push(i)
    }
}
//se comparan todos los divisores de los valores y se obtieene el comun mas alto
for(var i=0;i<(arr1.length);i++){
    for(var c=0;c<arr2.length;c++){
        if(arr1[i]==arr2[c]&&arr1[i]>res){
            //si los divisores son iguales en ambos lados y es mayor que algun valor anterior se guarda como el mayor
            res=arr1[i]
        }
    }
}
console.log(arr1)
console.log(arr2)
console.log('El maximo comun divisor es: '+res)




