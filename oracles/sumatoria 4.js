var x=4
let k=0

for(var i=1;i<=10;i++){
    k=k+(Math.pow(i,x))//acumulador de la suma de las potencias 

   
}

console.log('El resultado de la sumatoria es '+k)

var d=(Math.pow(10,(x+1)))/(x+1)//formula, los resultaods son parecidos aunque no iguales
console.log(typeof d)
console.log('el resultado de la formula es '+d) 
