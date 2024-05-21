var hd, i =0, schet = 0

var hm = setInterval(deleteCat, 7000)

function deleteCat()
{
    document.getElementById("catContainer").classList.remove("square")
    document.getElementById("cat").remove()
    var div = document.createElement("div")
    div.className = "gDota"
    div.textContent = "Го в доту"
    div.id = "chmo"
    document.getElementById("catContainer").append(div)
    clearInterval(hm)
    hd = setInterval(draws, 2000)
}

function draws()
{
    var zaebal = document.getElementById("chmo")
    if(i == 0)
    {
        reset(zaebal)
        zaebal.textContent = "Романыч"
    } else if(i == 1)
    {
        reset(zaebal)
        zaebal.textContent = "Раньше тут было"
    } else if (i == 2)
    {
        reset(zaebal)
        zaebal.textContent = "ЧМО"
    } else if (i == 3)
    {
        reset(zaebal)
        zaebal.textContent = "ХМ"
    } else if (i == 4)
    {
        clearInterval(hd)
    }
    i++
}

function reset(Element)
{
    Element.classList.remove('gDota')
    Element.classList.remove('gDotaS')
    Element.offsetWidth
    if(schet >= 1)
    {
        Element.classList.add('gDota')
        schet--
    } else{
        Element.classList.add('gDotaS')
        schet++
    }
}