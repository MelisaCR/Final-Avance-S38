var playy=function() {
	var b=document.getElementById('play');
	b.style.display="none";
	var aninicio=document.getElementById('aninicio').play();
	setTimeout(botoncuento,5000);
}

var botoncuento=function() {
	var boton=document.getElementById('cuentoboton');
	boton.style.display="block";
}

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

