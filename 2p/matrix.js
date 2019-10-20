(function mat() {
    class Matrix {
        constructor(x, y) {
            this.x = new Array(x)
            for (var i = 0; i < x; i++) {
                this.x[i] = new Array(y)
                for (var c = 0; c < x; c++) {
                    this.x[i][c] = 0
                }
            }
            this.l = x
            this.y = y//longitudes
        }
        InitR() {
            for (var i = 0; i < this.l; i++) {
                this.x[i] = []
                for (var c = 0; c < this.y; c++) {
                    this.x[i][c] = Math.random()//introduce un valor random a cada entrada
                }
            }


        }
        getRow(r) {

            return this.x[r - 1]
        }
        getCow(c) {
            let a = []
            for (var i = 0; i < this.l; i++) {//se mantiene fija en una fila
                a.push(this.x[i][c - 1])
            }
            return a

        }
        isSquared() {
            if (this.l == this.y) {//compara las longitudes analizadas al inicio
                return true
            } else {
                return false
            }

        }
        isSymetr() {
            let b = true//ES simetrica hasta demostrar lo contrario
            if (this.isSquared() == true) {
                for (var i = 0; i < this.l; i++) {

                    for (var c = 0; c < this.y; c++) {
                        if (this.x[i][c] != this.x[c][i]) {//si en algun momento no coinciden ya noes simetrica


                            b = false
                            i = this.l
                            break
                        }

                    }
                }
                return b
            } else {
                return 'NO es cuadrada'
            }
        }
        isIdentity() {
            let b = true
            if (this.isSquared() == true) {
                for (var i = 0; i < this.l; i++) {

                    for (var c = 0; c < this.y; c++) {//recorremos toda la matriz
                        if (i == c) {//cuando sea centro
                            if (this.x[i][c] != 1) {//si no son todos uno ya no es centro
                                b = false
                            } 
                        }else {//cualquier otro que no es centro
                                if (this.x[i][c] != 0) {// si no es 0 ya no es identidad
                                    b = false
                                }
                            }

                    }
                }
                return b
            } else {
                return 'NO es cuadrada'
            }
        }
        getData() {
            return this.x
        }
    }
    var x = new Matrix(3, 3)//dimensiones de la matriz
    console.log(x.InitR())
    console.log(x.getCow(1))//regresa una columna empezando de 1
    console.log(x.getRow(2))//regresa una fila iniciando de 1
    console.log(x.isSquared())
    console.log(x.isSymetr())
    console.log(x.getData())
    console.log(x.isIdentity())
})()