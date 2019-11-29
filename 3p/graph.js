(function grafo(){
    class Graph {//Grafo implementado con listas ligadas
        constructor() {
            this.g = []//Lista de los vertices con sus repectivas listas de adyacencia
            this.acum = []//variable para el metodo de iscomplete
    
        }
        addvertex(o) {
            this.g.push(o)//se agrega el nuevo vertice a  la lista de adyacecncia
            this.acum.push(o.d)//se crea un registro de los vertices que se añadan
            this.acum.sort()//se ordenan los registros
        }
        addEdge(v1, v2) {
           
            v1.l.push(v2.d)//se agregan ambos registros
            v2.l.push(v1.d)
        }
        printG() {
            function each(l) {//se recorren todos lso elementos del grafo
                var a = []
                for (var c = 0; c < l.length; c++) {
    
                    a.push(l[c])
                }
    
                return a
            }
            for (var i = 0; i < this.g.length; i++) {// se imprimen las listas del grafo
                console.log(this.g[i].d + ' -- ' + each(this.g[i].l))
            }
    
        }
        isComplete() {
            let isc = true
            let aux = 0
            let arr = []
    
            for (var i = 0; i < this.g.length; i++) {
                arr = []
                aux = this.g[i].l
    
                arr = [...this.g[i].l]
    
                arr.push(this.g[i].d)
                for (var b = 0; b < arr.length; b++) {
    
                    arr.sort()//ordenamos el array auxiliar
                    if (arr[b] != this.acum[b]) {//se compara si el total de las listas de adyacencia es igual al de el numero de vertices insertado en acum 
                        isc = false//se niega en caso de que alguno ya no entre en la condicion
    
                    }
                }
                this.g[i].l = aux
    
            }
            return isc
        }
        isMultigraph() {
            let ismul = false
            let comp = 0
            for (var i = 0; i < this.g.length; i++) {
                comp = this.g[i].d
                for (var b = 0; b < this.g[i].l.length; b++) {
                    if (this.g[i].l[b] == comp||repeated(this.g[i].l)==true) {//se obtienen las condiciones para saber si es multigrafo
    
                        ismul = true
                    }
                }
            }
    
            function repeated(arr){//subfuncion para saber si se repite algun numero
                let isr=false
                let x= new Set(arr)//se eliminan repetidos
                if(x.size !=arr.length){//se compara si el tamaño original es igual al que cuando se le quitan los repetidos
                    isr=true
                }
                return isr
            }
            return ismul
        }
        isSub(s) {
            let isub = true
            let arr = []
            for (var i = 0; i < s.g.length; i++) {
                arr = this.g[i].l
                arr.sort()
                s.g[i].l.sort()//se ordena la lista de los vertices del 2 grafo
                for (var b = 0; b < s.g[i].l.length; b++) {//tomando base el segundo se busca si lo del segundo esta en el primero y si es asi es un subgrafo
    
                    if (arr[b] != s.g[i].l[b]) {//ssiempre y cunnado se cumpal entodos los valores analizados
                        isub = false
                    }
                }
            }
            return isub
    
        }
        isDigraph(){
            let isD=true
            for(var i=0;i<this.g.length;i++){
                for(var b=0;b<this.g[i].l.length;b++){
                    each(this.g,this.g[i].l[b],this.g[i].d)
                }
            }
            function each(graph,data,value){
                for(var c=0;c<graph.length;c++){
                    if(data==graph[c].d){

                        for(var de=0;de<graph[c].l.length;de++){

                            if(graph[c].l[de]==value){
                                isD=false
                                
                            }

                        }
                    }
                }
                return
            }
            return isD

        }
     
    }
    
    class Node {//creacion de nodos
        constructor(d) {
            this.l = []//lista de adyacencia
            this.d = d//valor del nodo
        }
    
    }
    
    let n1 = new Node(1, [])
    let n2 = new Node(2, [])
    let n3 = new Node(3, [])
    let n4 = new Node(4, [])
    
    let Sn1 = new Node(1, [])
    let Sn2 = new Node(2, [])
    let Sn3= new Node (3,[])
    
    let g1 = new Graph
    
    g1.addvertex(n1)
    g1.addvertex(n2)
    g1.addvertex(n3)
    g1.addEdge(n1, n2)
    g1.addEdge(n1, n3)
    g1.addEdge(n2, n3)
    g1.printG()
    let g2 = new Graph()
    g2.addvertex(Sn1)
    g2.addvertex(Sn2)
    g2.addvertex(Sn3)
    g2.addEdge(Sn1, Sn2)
    console.log(g1.isSub(g2))
    
    g2.addEdge(Sn1,Sn3)
    g2.addEdge(Sn3,Sn3)
    
    console.log(g1.isSub(g2))
    console.log(g1.isComplete())
    console.log(g2.isComplete())
    
    console.log(g1.isMultigraph())
    console.log(g2.isMultigraph())
    g2.printG()

    console.log(g1.isDigraph())
})()
