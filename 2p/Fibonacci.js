(function fib() {
    class Fibo {
        constructor(x) {
            this.x = x
        }

        getValue(x = this.x) {
            if (x < 2) {

                return x
            } else {

                return this.getValue(x - 2) + this.getValue(x - 1)//recursividad
            }

        }
        getCost() {
            let z = 0//almacena cada valor aqui

            function cost(x) {//subfuncion
                z++//aumenta con cada llamada
                if (x < 2) {

                    return x
                } else {

                    return cost(x - 2) + cost(x - 1)

                }
            }
            cost(this.x)//invoca subfuncion

            return z
        }

        getSuce() {
            let a = []

            for (var i = 0; i <= this.x; i++) {//recorre de uno a uno hasta el valor del objeto
                function suce(x) {//subfuncion de value
                    if (x < 2) {

                        return x
                    } else {

                        return suce(x - 2) + suce(x - 1)
                    }
                }
                a.push(suce(i))//invoca subfuncion
            }
            return a

        }
        getTable() {
            let c = this.x//almacena valor en variable temporal
            let a = []
            for (var i = 0; i <= c; i++) {//invoca ambos metodos en cada uno de los valores
                this.x = i//se asigna valor cambiante al objeto
                a.push('[ valor ' + this.getValue())

                a.push(' costo ' + this.getCost() + ']')


            }
            this.x = c//regresa valor original
            return a
        }
    }


    let one = new Fibo(6)
    console.log(one.getValue())
    console.log(one.getSuce())
    console.log(one.getCost())
    console.log(one.getTable())
})()