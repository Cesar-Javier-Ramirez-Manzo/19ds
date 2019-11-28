(function uob(){
    class Node{
        constructor(d){
            this.data=d
            this.sonR=null
            this.sonL=null
        }
     
    }
    class TreeUob{
        constructor(r){
        this.root=r
    
        }
    
        insert(n){
            let x=this.root
            function ins(root,n){
                if(n.data<root.data){
                    if(root.sonL===null){
                        root.sonL=n
                    }else{
                        ins(root.sonL,n)
                    }
                }else{
                    if(root.sonR===null){
                        root.sonR=n
                    }else{
                        ins(root.sonR,n)
                    }
                }
            }
            
          ins(x,n)
            
        }
        remove(n) { //satnd by
            var del=n
            function reco(n){
                
                if(n.sonL!=null){
                    if (del==n.sonL.data) {
                        n.sonL=null
                        return 
                    } else {
                        reco(n.sonL)
                    }
                }
               if(n.sonR!=null){
                if (del==n.sonR.data) {
                    n.sonR=null
                    return 
                } else {
                    reco(n.sonR)
                }
               }
                
            }
            reco(this.root)
    
        }
        recorrer(n) { //Yours:postOrder
            let a= []
            function pos(n){
                if (n.sonL == null) {
                    
                } else {
                    pos(n.sonL)
                }
                if (n.sonR == null) {
                } else {
                    pos(n.sonR)
                }
                a.push(n.data)
        
                return
            }
            pos(n)
            return a
        }
        
        bft(){
            let arr=[]//lista de resultado final
            let aux=[this.root]//Lista de los nodos a visitar
            var l=aux.length
            var cont=0//variable para el ciclo
            var si=false//variables auxiliares
            while(aux.length>0){
                cont=0
                l=aux.length//variable para el ciclo
                for(var i=0;i<l;i++){
                    
    
                    arr.push(aux[i-cont].data)//cada variable I se le aplica un corrector con el contador
                    if(aux[i-cont].sonL!= null){
                        
                        aux.push(aux[i-cont].sonL)//se adjuntan los nods hijos en caso de haberlos
                        ++cont
                        si=true
                        
    
                        
                        
                    }
                    if(si==true){//en caso de haber entrado antes se acomoda para poder entrar en el segundo
                        --cont
                    }
                    if(aux[i-cont].sonR!=null){
                       
                        aux.push(aux[i-cont].sonR)
                        ++cont
                        
                        
                    }else{
                        ++cont// se reacomoda si entro
                        
                    }
                    si=false
                    
                    aux.shift()//eliminacion del nodo recien visiatdo
    
    
                }
    
            }
            return arr
           
            
    
        }
    }
    var n1=new Node(1)//creacion de nodos
    var n2=new Node(2)
    var n3=new Node(3)
    var n4=new Node(4)
    var n5=new Node(5)
    var t1=new TreeUob(n3)
    
    
    t1.insert(n1)
    
    t1.insert(n2)
    t1.insert(n5)
    t1.insert(n4)
//        3         Arbol en este punto
//       / \
//      1    5
//     /\    /
//       2   4
    console.log(t1.bft())
    
    console.log(t1.recorrer(n3))
    
    t1.remove(5)
//        3         Arbol en este punto
//       / \
//      1    
//     /\    
//       2   
    console.log(t1.bft())
    console.log(t1.recorrer(n3))
})()
