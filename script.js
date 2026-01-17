var dizi = [];
var i;
function ekle()
{
    var input = document.getElementById("yazilan");
    
    // boş mu kontrolü
    if(!input.value)
    {
        alert("Lütfen bir görev ekleyin!!!");
        return;
    }

    // hafızaya kaydetme kısmı
    dizi.push(input.value);

    // ekrana yazdırma kısmı
    document.getElementById("alan").innerHTML = "";

    for(i = 0 ; i < dizi.length ; i++)
    {
        document.getElementById("alan").innerHTML +=  (i+1) + "." + dizi[i] + "<br>";
    }
    input.value = "";
}

function sil()
{
    // silme kısmı
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