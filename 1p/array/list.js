    let x=[]//array original
    let how=[]//array de los numeros que se repiten
    let si=0
    let prev=0

    x=[2,1,6,2,3,8,2,5,8,2]
    //x=[1,2,3,4,6,5]
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

    //compara los valores en el mismo array ya ordenado
    for(var i=0;i<x.length;i++){

        var acum =1
        let w=0

        for(var c=i+1;c<x.length;c++){
        

            //compara si son iguales y los mete en el array de resultado si e sun candidto a repetidos
            if(x[i]==x[c]&&si!=x[i]){
                
                si=x[i]
                w=(x[i])
                break
            }
        }
        
        for(var c=i+1;c<x.length;c++){
        

            //compara cuantas veces se repiten
            if(x[i]==x[c]&&si!=x[i]!=si){
                
                acum++

                
                
            }
            
        }
        //incluye el numero de veces que se repite si no es igual al numero previo
        if(acum>1&&x[i]!=prev){
          
            prev=x[i]
            how.push(w+' <--està '+acum+' veces    ')
        }
        
    }




    console.log('Nummeros que se repiten: '+how.slice())
