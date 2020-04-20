document.write('<ul id="ticker">');
var x=xmlDoc.getElementsByTagName("item");
for (i=0;i<x.length;i++){
document.write('<li>'+ x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +'</li>');
}
document.write('</ul>');;
