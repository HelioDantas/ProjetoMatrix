function somarInteiros(n)
{
    function teste_number(t)
    {
        if (typeof (t) === "number")
        {
            return true

        }

    }

    if (teste_number(n))
    {
      
        var total = 0
        total=(n*(n+1))/2
        return total
      
    }

}