function tikla()
{
    document.getElementById('metin').style.fontStyle = "italic";
    document.getElementById('metin').style.color = "blue";
}
function degerlerial()
{
        var ad = document.getElementById("form1").childNodes[1].value; 
        var soyad = document.getElementById("form1").childNodes[4].value;
        window.alert(ad+" "+soyad);
}
function ozelliklerial()
{
    console.log("Type= "+document.getElementById("baglanti").type+" Hreflang= "+document.getElementById("baglanti").hreflang+" Target= "+document.getElementById("baglanti").target+" Href= "+document.getElementById("baglanti").href)
}
function kelimebul()
{
    var metin=document.getElementById("paragraf").textContent;
    var kelimeler = new Array();

        kelimeler = metin.split(" ");
    document.getElementById("cevap").textContent="Kelime Sayısı= "+kelimeler.length;
}
function renklendir()
{
    var metin=document.getElementById("paragraf").textContent;
    var kelimeler = new Array();
    var indexleri = new Array();
    var a;
        kelimeler = metin.split(" ");
   for (var i = 0; i < kelimeler.length; i++) {
     if( (kelimeler[i].length)==5)
     {
         a++;
         indexleri[a]=i;
         var str = document.getElementById("paragraf").innerHTML; 
         var res = str.replace(kelimeler[indexleri[a]],"<span style='color: red;'>"+kelimeler[indexleri[a]]+"</span>");
         document.getElementById("paragraf").innerHTML =res; ;
     }
    }
}