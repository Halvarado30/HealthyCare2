// function relojSimple(){     
//     momentoActual = new Date()     
//     horas = momentoActual.getHours()     
//     minutos = momentoActual.getMinutes()     
//     segundos = momentoActual.getSeconds() 
//     horaActual = horas + " : " + minutos + " : " + segundos 
//     document.reloj_simple.reloj.value = horaActual
//     setTimeout("relojSimple()",1000) 
// }
function Reloj()
{
var reloj=new Date();
var horas=reloj.getHours();
var minutos=reloj.getMinutes();
var segundos=reloj.getSeconds();
meridium=(horas>12)?"PM":"AM";
horas =horas%12
if(horas==0){horas=12}

minutos=revisarTiempo(minutos);
segundos=revisarTiempo(segundos);
document.getElementById('estilo-inicio').innerHTML=horas+":"+minutos+":"+segundos+" "+ meridium;
if (document.getElementById('estilo-footer') == null){
    var temporal=0;
}else{
    document.getElementById('estilo-footer').innerHTML=horas+":"+minutos+":"+segundos+" "+ meridium;
}
tiempo=setTimeout(function(){Reloj()},500);

}

function revisarTiempo(i)
{
if (i<10)
 {
 i="0" + i;
 }
return i;
}