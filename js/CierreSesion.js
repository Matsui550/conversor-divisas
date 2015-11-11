if(window.addEventListener){
	window.addEventListener("load", cerrarsesion, true);
}
if(window.attachEvent){
	window.attachEvent("load", cerrarsesion, true);
}

function cerrarsesion(){ 
	var cajita = document.getElementById("cajita");
	cajita.style.display = "block";
	cajita.style.position = "absolute";
	cajita.style.right = "0";
	cajita.style.top = "0";
	cajita.style.background = "rgba(20,0,60,1)";
	cajita.style.padding = 0;
	cajita.style.margin = 0;
	var boton = document.createElement("input");
	boton.setAttribute("type", "submit");
	boton.setAttribute("id", "cerrar");
	boton.setAttribute("name", "cerrar");
	boton.setAttribute("value", "Cerrar Sesion");
	boton.style.background = "rgba(20,0,60,1)";
	boton.style.border = "solid 1px white";
	boton.style.color = "white";	
	cajita.appendChild(boton);
	if(boton.addEventListener){
		boton.addEventListener("click", cerrar = function (){
			localStorage.clear();
			window.location = "../Login.html";
		}, true);
	}
}