let x=9
let newArr=[]

if(x==1){
  console.log('El primer numero primo es el 2')//si el numero es 1 entra a una excepcion ya que si no no funcionara
}else{//si es cualquier numero excepto el 1 entra a el algoritmo
  for(var i=2;i<(Math.pow(x,2));i++){//se obtienen todos los primos del valor que queeremos buscar al cuadrado para asegurar que se obtendran suficientes 
    let sem=0
  
    for(var c=1;c<i;c++){
      if((i%c)==0&&c!=1&&c!=i){//si se llega a diividir por algun numero que no sea 1 o el mismo ya no es candidato a primo
        sem++//verificador de primos
      
      }
  
    }
    if(sem==0){
      newArr.push(i)//formacion del array de primos para buscar el valor
    }
  }
  //console.log(newArr)
  console.log('El '+x+' numero primo es: '+newArr[x-1])

}




