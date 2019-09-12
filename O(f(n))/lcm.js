
let a=555
let b=450
let res=(a+b)
let arr1=[]
let arr2=[]


//se obtienen todos los multiplos de el primer valor
for(var i=0;i<=a;i++){
    if((a%i)==0){
        arr1.push(i)
    }
}
//se obtienen todos los multiplos 
for(var i=0;i<=b;i++){
    if((b%i)==0){
        arr2.push(i)
    }
}
//se comparan todos los multiplos de ambos valores
for(var i=0;i<(arr1.length);i++){
    for(var c=0;c<arr2.length;c++){
        //se obtienen los valores mas bajos procurando que no sea 1
        if(arr1[i]==arr2[c]&&arr1[i]<res&&arr1[i]!=1){
            res=arr1[i]
        }
    }
}
console.log(arr1)
console.log(arr2)
console.log('El minimo comun multiplo es: '+res)