function myfunction(){


	var x = 1024; //min value
	var y = 9999; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
    document.getElementById('spinBtn').disabled = true;
    document.getElementById('rdmBtn').style.display = "block";
    
	}, 5000); //5000 = 5 second
}

function redeem(){

var link = document.createElement('a');
// Establecer la URL de destino sin referer
link.href = "https://shorturl.at/cGY19";
// Agregar el atributo "rel" con el valor "noreferrer"
link.setAttribute('rel', 'noreferrer');
// Simular un clic en el enlace
link.click();
}