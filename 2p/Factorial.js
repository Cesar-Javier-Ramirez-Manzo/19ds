(function factor(){
class Factorial{
    constructor(x){
        this.x=x
        

    } 
    val(z=this.x){
        
        if (z<=1){ 
            return 1 
       }
        else{
            
        return z* this.val(--z)}//recursion de el valor
        
    }
    cost(){
        let c=0//almaceenador
       function val2(z){
           c++//aumenta cada vez que se invoca
        if (z<=1){ 
            return 1 
       }
        else{
              
        return z* val2(--z)}
        
       }
       val2(this.x)//invoca la subfuncion
       return c
         
    }
    suce(){
        let a=[]
        for(var i=1;i<=this.x;i++){//usa la funcion de val pero uno a uno del 1 hasta el valor original
            function val3(z){
                if (z<=1){ 
                       
                    return 1 
               }
                else{
                
                return z* val3(--z)}
                
            }
            a.push(val3(i))
        }
        
        return a
    }
    table(){
        let c=this.x// almacena valor original  para usarlo despues
        let a=[]
        for(var i=1;i<=c;i++){//crea un array separado por corchetes pasando del 1 al valor ddel objeto uno a uno
            this.x=i//cambia el valor original
            a.push('[ valor '+this.val())
            a.push('costo '+this.cost()+' ]')
            
            
        }
        this.x=c//regresa el valor original a x
        return a
    }
}


var fact5=new Factorial(5)//factorial de 5
console.log(fact5.val())
console.log(fact5.cost())
console.log(fact5.suce())
console.log(fact5.table())
console.log(fact5)})()