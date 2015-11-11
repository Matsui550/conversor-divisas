if(window.addEventListener){
	window.addEventListener("load", mostrarregistros, true);
}

else if(window.attachEvent){
	window.attachEvent("onload", mostrarregistros);
}

function mostrarregistros(){
	var fila;
	var BuscarLlave;
	var ObtenerValor
	var celdas;
	var longitud = localStorage.length;
	fila = "<tr id='header'>";
			fila += "<td>";
			fila += "Moneda a ver conversion";
			fila += "</td>";
			fila += "<td>";
			fila += "Cantidad a convertir";
			fila += "</td>";
			fila += "<td>";
			fila += "Moneda a convertir";
			fila += "</td>";
			fila += "<td>";
			fila += "Resultado";
			fila += "</td>";
			fila += "</tr>";
	for(var i=0 ; i < longitud; i++){
		BuscarLlave = localStorage.key(i).toString();
		if(BuscarLlave.charAt(0) == "R"){
			ObtenerValor = localStorage.getItem(BuscarLlave);
			celdas = ObtenerValor.split('_');
			fila += "<tr>";
			fila += "<td>";
			fila += celdas[0];
			fila += "</td>";
			fila += "<td>";
			fila += celdas[1];
			fila += "</td>";
			fila += "<td>";
			fila += celdas[2];
			fila += "</td>";
			fila += "<td>";
			fila += celdas[3];
			fila += "</td>";
			fila += "</tr>";
		}
	}
	document.getElementById("tablaregistro").innerHTML = fila;
}