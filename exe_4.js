

function multiplicarInteiros(n)
{
    function teste_number(t)
    {
        if (typeof (t) === "number")
        {
            return true

        }

    }
    function operando(total, n, exp)
    {
        switch (exp)
        {
            case '*':
                return total * n

            case '+':
                return total + n

            case '-':
                return total - n

            case '/':
                return total / n

            default:

        }

    }

    function loop(n, sinal_acumulador, sinal_iterador, anulador, passo, inicio)
    {
        var total = anulador
        if (teste_number(n))
        {
            var termo = 1
            var i = inicio

            while (termo <= n)
            {
                total = operando(total, i, sinal_acumulador)
                i = operando(passo, i, sinal_iterador)
                termo++
            }
            return total
        }


    }
    var total=1
    total = loop(n,"*", "+", 1, 1, 1)
    return total
    
  
}