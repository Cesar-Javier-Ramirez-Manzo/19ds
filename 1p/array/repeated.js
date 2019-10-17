let x=[]
let y=[]


x=[1,2,3,4,4,5,6,7]
y=[1,2,3,4,5,6,7]
function Rep(x){
    let rep=false
    for(var i=0;i<7;i++){
        for(var c=i+1;c<6;c++){
           
    
            if(x[i]==x[c]){
                rep=true
            }
        }
    }
    return rep
}


console.log(x+' Hay repetidos: '+Rep(x))
console.log(y+' Hay repetidos: '+Rep(y))