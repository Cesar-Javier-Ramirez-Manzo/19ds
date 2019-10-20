(function card() {
    class Card {
        constructor() {

        }
        printCard(n) {
            let a = []
            if (n >= 0 && n <= 13) {
                a.push('Trebol')
            } else if (n >= 14 && n <= 26) {
                a.push('Diamantes')
            } else if (n >= 27 && n <= 39) {
                a.push('Corazones')
            } else if (n >= 40) {
                a.push('Picas')
            }//se establece que tipo de carta es con su svalores de acumulacion 
            switch (n % 13) {//se obtiene el numero de carta con un modulo para cada conjunto segun el resto
                case 0:
                    a.push(13)
                    break
                case 1:
                    a.push('as')
                    break

                case 2:
                    a.push(2)
                    break
                case 3:
                    a.push(3)
                    break
                case 4:
                    a.push(4)
                    break
                case 5:
                    a.push(5)
                    break
                case 6:
                    a.push(6)
                    break
                case 7:
                    a.push(7)
                    break
                case 8:
                    a.push(8)
                    break
                case 9:
                    a.push(9)
                    break
                case 10:
                    a.push(10)
                    break
                case 11:
                    a.push(11)
                    break
                case 12:
                    a.push(12)
                    break

                default:
                    throw new Error
            }
            return a
        }
        printNumber(k, n) {
            let sum = 0
            switch (k) {//se obtiene el tipo de carta y se le asigna un rango de valores anteriores
                case 'Trebol':
                    sum = 0
                    break
                case 'Diamantes':
                    sum = 13
                    break
                case 'Corazones':
                    sum = 26
                    break
                case 'Picas':
                    sum = 39
                    break
                default:
                    throw new Error

            }
            return sum + n//se suma el numero de la carta al acumulado
        }
        threeOfAKind() {
            return ((54912) / (fact(52) / (fact(47) * fact(5)))) * 100 + '%'

            function fact(z) {
                if (z <= 1) {
                    return 1
                } else {

                    return z * fact(--z)
                }
            }
        }
    }
    let c1 = new Card()//objeto caalendario
    console.log(c1.printCard(24))
    console.log(c1.printNumber('Diamantes', 11))
    console.log(c1.threeOfAKind())
})()