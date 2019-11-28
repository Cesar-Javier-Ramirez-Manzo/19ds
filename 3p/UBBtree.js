   (function ubb(){
    class Node {
        constructor(d) {//Clase de los nodos 
            this.data = d
            this.sonR = null
            this.sonL = null
        }

    }
    class TreeUbb {
        constructor(r) {
            this.root = r//raiz del arbol

        }

        insert( n) {

            let x= this.root
            function ins(root,n){
                if (root.sonL == null) {

                    root.sonL = n
                } else if (root.sonR == null) {
    
    
                    root.sonR = n
    
    
                } else if (root.sonL.sonR != null) {
                    ins(root.sonR, n)
                } else {
                    ins(root.sonL, n)
    
                }
            }
            
            ins(x,n)
            return

        }
        remove(n) { //satnd by
            var del = n

            function reco(n) {

                if (n.sonL != null) {
                    if (del == n.sonL.data) {
                        n.sonL = null
                        return 
                    } else {
                        reco(n.sonL)
                    }
                }
                if (n.sonR != null) {
                    if (del == n.sonR.data) {
                        n.sonR = null
                        return 
                    } else {
                        reco(n.sonR)
                    }
                }

                
            }
            reco(this.root)
            return
        }
        recorrer(n) { //Yours: postOrder
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
        bft() {
            let arr = []//lista donde se almacenan los datos resultantes del recorrido
            let aux = [this.root]//lista de nodos consecuentes
            var l = aux.length
            var cont = 0//variable auxiliar para los ciclos
            var si = false
            while (aux.length > 0) {
                cont = 0
                l = aux.length
                for (var i = 0; i < l; i++) {
            


                    arr.push(aux[i - cont].data)//las variables I se acomodan con frome se eliminan datos de la fila auxiliar
                    if (aux[i - cont].sonL != null) {//compara valores a la izquierda para agreagar

                        aux.push(aux[i - cont].sonL)
                            ++cont//el contador aumenta cada que se agrega un valor para que no se desacrrile
                        si = true




                    }
                    if (si == true) {
                        --cont
                    }
                    if (aux[i - cont].sonR != null) {//compara si hay mas avlores a la derecha los cuales agregar

                        aux.push(aux[i - cont].sonR)
                            ++cont

                    } else {
                        ++cont

                    }
                    si = false

                    aux.shift()//elimina valor de la fila auxiliar


                }

            }
            return arr//regresa array resultante



        }

    }
    var n1 = new Node(1) //creacion de nodos
    var n2 = new Node(2)
    var n3 = new Node(3)
    var n4 = new Node(4)
    var n5 = new Node(5)
    var t1 = new TreeUbb(n1)//creacion del arbol


    t1.insert( n2)
    t1.insert( n3)
    t1.insert(n4)
    t1.insert( n5)
//        1          Arbol en este punto
//       / \
//      2    3
//     /\
//    4   5
    console.log(t1.bft())//recorrido mostrado en fromato Array siendo el de la izquierda el nivel mas arriba es de ccir el nodo y de ahi baja de nivel

    console.log(t1.recorrer(n1))//recorrido mostrado un valor en cada nivel

    t1.remove(2)//removemos el nodo 3
    console.log(t1.recorrer(n1))
    console.log(t1.bft())

//        1       Forma del arbol ene este punto
//       / \
//          3
    


   })()
   