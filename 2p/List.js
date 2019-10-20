(function list(){
class Node{
    constructor(d){
        this.data=d
        this.next=null
    }
 
}
var n1=new Node(1)//creacion de nodos
var n2=new Node(2)
var n3=new Node(3)
var n4=new Node(4)
class List{
    constructor(a,d){
        this.h=a//primer nodo
        this.t=d//nodo final
        this.h.next=this.t//referecniamos primer nodo
        this.size=2//tamaño de la lista
    }
    insertH(a){
        a.next=this.h
        this.h=a//referenciamos nodo sigunete
       this.size++
    }
    insertT(a){
        this.t.next=a
        this.t=a//insertamos nodo al finañ
        this.size++
    }
    siz(){
        return this.size//regresa tamaño
    }
    deleteH(){
        let variable=0
        variable=this.h.next//se referncia el nuevo nodo cabeza 
        this.h.next=null
        this.h=variable//se establece nuevo nodo cabeza
        this.size--

    }
    deleteT(){
        let nex=this.h
        for (var i=0;i<(this.size-2);i++){
            nex=nex.next
            
        }
        this.t=nex
        this.t.next=null
        this.size--
    }
    toString(){//imprim los data
        let a=[]
        let th=this.h
        for(var i=0;i<this.size;i++){
            a.push(th.data)
            th=th.next
        }
        return a
    }
}
let l1=new List(n1,n2)
l1.insertH(n4)
console.log(l1.toString())
l1.insertT(n3)
console.log(l1.toString())
l1.deleteH()
console.log(l1.toString())
console.log(l1.siz())})()