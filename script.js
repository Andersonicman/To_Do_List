var dizi = [];
var i;
function ekle()
{
    var input = document.getElementById("yazilan");
    
    if(!input.value)
    {
        alert("Lütfen bir görev ekleyin!!!");
        return;
    }

    dizi.push(input.value);

    document.getElementById("alan").innerHTML = "";

    for(i = 0 ; i < dizi.length ; i++)
    {
        document.getElementById("alan").innerHTML +=  (i+1) + "." + dizi[i] + "<br>";
    }
    input.value = "";
}

function sil()
{
    var index;
    index = Number(document.getElementById("sil").value) - 1;
    dizi.splice(index , 1);
    
    
    document.getElementById("alan").innerHTML = "";

    for(i = 0 ; i < dizi.length ; i++)
    {
        document.getElementById("alan").innerHTML += (i+1) + "." + dizi[i] + "<br>";
    }
    document.getElementById("sil").value = "";

}
