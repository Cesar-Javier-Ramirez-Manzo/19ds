(function cal() {
    class Calendar {
        constructor() {


        }
        dayPlus(d, n) {
            return (d + n) % 7//aplicamos modulo 7 para el total de dias
        }
        leapYear(y) {
            let b = true
            if ((y % 4) == 0 && (y % 100) != 0) {//condiciones para ser bisiesto
                b = true
            } else {
                b = false
            }
            return b
        }
        firstDayY(y) {
            let x = (y + Math.floor((y - 1) / 4) - Math.floor((y - 1 / 100)) + Math.floor((y - 1 / 400))) % 7//fromula para saber el primer dia del año

            switch (x) {//regresa que dia es el primero de cada añoo en formato string
                case 1:
                    return 'Domingo'

                case 2:
                    return 'Lunes'
                case 3:
                    return 'Martes'

                case 4:
                    return 'Miercoles'
                case 5:
                    return 'Jueves'

                case 6:
                    return 'Viernes'

                case 7:
                    return 'Sabado'
            }

        }
        getCal(m, y) {
            let how = 0//cuantos dias despues debera empezar el mes
            let sum = 1//sumador de dias 
            let comp = 0//variable para saber cuando salir
            switch (m) {//identifica cuantos dias hay en cada mes y cuando inciara cada uno para uso posterior
                case 1:
                    comp = 31
                    how = dayPlus2(y, 0)
                    break
                case 2: {
                    if (this.leapYear(y) == true) {
                        comp = 29
                        how = dayPlus2(y, 3)
                        console.log(comp)
                    } else {
                        comp = 28
                        how = dayPlus2(y, 3)
                    }
                }

                break


            case 3: {
                comp = 31
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 4)
                } else {
                    how = dayPlus2(y, 3)
                }
            }



            break
            case 4: {
                comp = 30
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 7)
                } else {
                    how = dayPlus2(y, 6)
                }
            }
            break
            case 5: {
                comp = 31
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 9)
                } else {
                    how = dayPlus2(y, 8)
                }
            }
            break
            case 6: {
                comp = 30
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 12)
                } else {
                    how = dayPlus2(y, 11)
                }
            }
            break
            case 7: {
                comp = 31
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 14)
                } else {
                    how = dayPlus2(y, 13)
                }
            }
            break
            case 8: {
                comp = 31
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 17)
                } else {
                    how = dayPlus2(y, 16)
                }
            }
            break
            case 9: {
                comp = 30
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 20)
                } else {
                    how = dayPlus2(y, 19)
                }
            }
            break
            case 10: {
                comp = 31
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 22)
                } else {
                    how = dayPlus2(y, 21)
                }
            }
            break
            case 11: {
                comp = 30
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 25)
                } else {
                    how = dayPlus2(y, 24)
                }
            }
            break
            case 12: {
                comp = 31
                if (this.leapYear(y) == true) {
                    how = dayPlus2(y, 27)
                } else {
                    how = dayPlus2(y, 26)
                }
            }
            break
            }

            function dayPlus2(y1, n) {//subfuncion para saber cunatos dias debera empezar el mes, combinacion de primer dia del año y today plus
                let x = (y1 + Math.floor((y1 - 1) / 4) - Math.floor((y1 - 1 / 100)) + Math.floor((y1 - 1 / 400))) % 7


                return (x + n) % 7
            }
            let sum1 = 0//comparador de cuando debera empezar a contar
            
            let b = new Array(5)//matriz calendario
            for (var i = 0; i < 6; i++) {
                b[i] = []
                for (var c = 0; c < 7; c++) {
                    if (sum1 >= how) {//indicador de cunado contar dias
                        b[i][c] = sum//suma cada uno de lso dias a la matriz

                        if (sum == comp) {//cunado salir del ciclo
                            b.unshift(['S', 'D', 'L', 'M', 'X', 'J', 'V'])//incluye al inicio del array
                            b.unshift(['Mes ' + m, ' del año ' + y])
                            return b
                        }
                        sum++
                    } else {
                        b[i][c] = 0//hasta que empiece el mes ingresara 0
                    }
                    sum1++//comparador para saber cuando empezar

                }
            }


        }

    }


    let cal1 = new Calendar()
    console.log(cal1.leapYear(2019))
    console.log(cal1.firstDayY(2020))
    console.log(cal1.getCal(10, 2019))//imprime calendario del mes segun sea el año
    console.log(cal1.dayPlus(1, 8))//regresa el dia en tipo numero 
})()