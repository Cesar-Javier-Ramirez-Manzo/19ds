(function vec(){
class Vector{
    constructor(v){
        this.v=v
    }
    validate(a){//comprobacion de que son de la misma longitud
        let y1=this.v
       
        if(y1.length!=a.v.length){
            throw new Error
        }
        return a.v.length
    }
    vectSum(a){
        this.validate(a)
        let d=a.v.length
        let n=[]

        for(var i=0;i<d;i++){
            
            n.push(a.v[i]+this.v[i])//inserta los valores del resultado de la suma
        }
        return n
    }
    vectSubt(a){
                this.validate(a)

        let d=a.v.length
        let n=[]

        for(var i=0;i<d;i++){
            
            n.push(a.v[i]-this.v[i])//inserta en el array los resultados de la resta
        }
        return n
    }
    vectMul(a){
                this.validate(a)

        let d=a.v.length
        let n=[]

        for(var i=0;i<d;i++){
            
            n.push(a.v[i]*this.v[i])//inserta los resultados de la multiplicacion
        }
        return n
    }
    getVector(){
        return this.v//regresa vector
    }
}

let x=new Vector([1,2,3,4,5])//vector principal
let z=new Vector([6,7,8,9,10])

console.log(x.vectSum(z))
console.log(x.vectSubt(z))
console.log(x.vectMul(z))
console.log(x.getVector())})()