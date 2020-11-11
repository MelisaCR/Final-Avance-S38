var foto=document.getElementById('fotoestrella');
var tierra=document.getElementById('anitierra');
var fototi=document.getElementById('fototierra');
var zoom=document.getElementById('anizoom');
var repro=document.getElementById('repro');
var flecha=document.getElementById('flecha');

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

//del cuento
var cuentop1=function() {
	repro.style.display="none";
	var anip1=document.getElementById('anip1').play();
	setTimeout(fotii,4000);
}

var fotii=function() {
	flecha.style.display="block";
	foto.style.display="block";
	anip1.style.display="none";
}


var aparecetierra=function() {
	flecha.style.display="none";
	foto.style.display="none";
	tierra.style.display="block";
	tierra.play();
	setTimeout(fototierra,5500);
}

var fototierra=function() {
	flecha.style.display="block";
	fototi.style.display="block";
	tierra.style.display="none";
}

var mundo=function() {
	flecha.style.display="none";
	fototi.style.display="none";
	zoom.style.display="block";
	zoom.play();
}

