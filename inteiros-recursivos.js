function somarInteiros(n) {
    function teste_number(t) {
        if (typeof (t) === "number") {
            return true

        }
    }

    function somarInteiross(n) {
        if (n == 1)
            return 1
        else
            return n + somarInteiross(n - 1)

    }

    if (teste_number(n)) {
        return somarInteiross(n)
    }
}




function somarImpares(n) {
    function teste_number(t) {
        if (typeof (t) === "number") {
            return true

        }
    }

    function somarImparess(n, i) {
        if (n == 1)
            return i
        else
            return i + somarImparess(n - 1, i + 2)
    }

    if (teste_number(n)) {

        return somarImparess(n, 1)
    }

}

function multiplicarInteiros(n) {
    function teste_number(t) {
        if (typeof (t) === "number") {
            return true

        }
    }

    function multiplicarInteiross(n) {
        if (n == 1)
            return 1
        else
            return n * multiplicarInteiross(n - 1)

    }
    if (teste_number(n)) {
        return multiplicarInteiross(n)

    }
}