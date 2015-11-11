//------ VARIABLES GLOBALES ------------
var datos = {
	"nombre" : "",
	"correo" : "",
	"pais" : ""
};


if(window.addEventListener){
	window.addEventListener("load", Ocultar = function (){
		localStorage.clear();
		var error1 = document.getElementById("error1");
		var error2 = document.getElementById("error2");

		error1.style.display = "none";	
		error2.style.display = "none";

		validaciones();		
	}, true);
}

//--------------- VALIDACIONES DEL FORMULARIO ---------------

function validaciones(){
	var OK = document.getElementById("btnOK");
	if(OK.addEventListener){
		OK.addEventListener("click", validar, true);
	}
	else if(OK.attachEvent){
		OK.attachEvent("onclick", validar);
	}
}

function validar(){
	var validarN = /^([a-z ñáéíóú]{2,60})$/i;
	var validarC = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
	var nombre = document.getElementById("txtUsuario").value;
	var correo = document.getElementById("txtEmail").value;
	var pais = document.formulario.Pais.options[document.formulario.Pais.selectedIndex].value;
	var bool1 = false;
	var bool2 = false;
	var error;

	if(validarN.test(nombre)){
		bool1 = true;
		error = document.getElementById("error1");
		error.style.display = "none";
	}
	else{
		error = document.getElementById("error1");
		error.style.display = "block";
	}

	if(validarC.test(correo)){
		bool2 = true;
		error = document.getElementById("error2");
		error.style.display = "none";
	}
	else{
		error = document.getElementById("error2");
		error.style.display = "block";
	}

	if(bool1 == true && bool2 == true){
		//comenzando el localstorage
		datos.nombre = nombre;
		datos.correo = correo;
		datos.pais = pais; 
		guardandoDatos();
	}
}

//--------------- GUARDAR DATOS PARA REGISTRO ---------------

function guardandoDatos(){  
    localStorage.setItem("Nombre", JSON.stringify(datos.nombre));
    localStorage.setItem("Correo", JSON.stringify(datos.correo));
    localStorage.setItem("Pais", JSON.stringify(datos.pais));
    redireccionar();
}

function redireccionar(){
	window.location = "Paginas Secundarias/index.html";
}
