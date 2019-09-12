let x=[]
let how=0
let sim=0

x=[1,2,3,5,3,4,3,6,7,4,4,4,5]

    //primero se ordena el array ya que no funcionara el list si no esta ordenado 
    for(var m=0;m<x.length;m++){
        for(var o=0;o<x.length-1;o++){
         if(x[o]>x[o+1]){
     
            i=x[o]
            x[o]=x[o+1]
            x[o+1]=i
         }
     
        }
      
         
     }

//Este ciclo comarar el array con si mismo para ver si hay valores iguales 
for(var i=0;i<x.length;i++){
    for(var c=i+1;c<x.length;c++){
        

        //aumenta el numero de de valores repetidos
        if(x[i]==x[c]&&sim!=x[i]){
            how++
            sim=x[i]//comparador si el siguiente numero es igual al que se encontraba antes, para que no de mas valores iguales
            
        }
    }
}

console.log('Se repiten: '+how+' numeros')