
function somarImpares(n)
{
    function teste_number(t)
    {
        if (typeof (t) === "number")
        {
            return true

        }

    }

    var total=0
    var cont=1
    if(teste_number(n))
    {
      
        for(var i=1;cont<=n;i+=2)
        {
            total+=i
            cont++
      
        }
        return total
    }
  
}