var flecha=document.getElementById('flechavolt');
var flecha12=document.getElementById('flecha12');
var flecha1=document.getElementById('flechax');
var paisaje=document.getElementById('paisaje');
var anientra1=document.getElementById('anientra1');
var quieto1=document.getElementById('quieto1');
var quietos=document.getElementById('quietos');
var habla1=document.getElementById('habla1');
var habla2=document.getElementById('habla2');
var stop=document.getElementById('stop');
var pasamet=document.getElementById('pasam');

var clicrueda=function() {
	var ajustes=document.getElementById('ajustes');
	ajustes.style.display="block";
}
var subir=function() {
	var botonsubir=document.getElementById('subirv');
	botonsubir.style.display="block";
}
var bajar=function() {
	var botonbajar=document.getElementById('bajarv');
	botonbajar.style.display="block";
}

var cerrar=function() {
	var ajustes=document.getElementById('ajustes');
	ajustes.style.display="none";
}

var entra1=function(){
	flecha.style.display="none";
	paisaje.style.display="none";
	anientra1.style.display="block";
	anientra1.play();
	setTimeout(fotoquieto,5000);
}

var fotoquieto=function(){
	quieto1.style.display="block";
	flecha1.style.display="block";
}

var entra2=function(){
	flecha1.style.display="none";
	quieto1.style.display="none";
	anientra2.style.display="block";
	anientra2.play();
	setTimeout(fotoquieto2,5000);
}

var fotoquieto2=function(){
	quietos.style.display="block";
	flecha12.style.display="block";
}

var hablar1=function(){
	flecha12.style.display="none";
	quietos.style.display="none";
	habla1.style.display="block";
	habla1.play();
	setTimeout(fotoquieto3,5000);
}

var fotoquieto3=function(){
	stop.style.display="block";
	flecha13.style.display="block";
}

var hablar2=function(){
	flecha13.style.display="none";
	stop.style.display="none";
	habla2.style.display="block";
	habla2.play();
	setTimeout(meteoro,5000);
}

var meteoro=function(){
	habla2.style.display="none";
	pasamet.style.display="block";
	pasamet.play();
}
