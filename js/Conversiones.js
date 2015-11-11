
if(window.addEventListener){
	window.addEventListener("load", comprobarSesion = function (){
		if(localStorage.length == 0){
			alert("No ha Iniciado Sesión");
			window.location = "../index.html";
		}
		else{
			iniciar();
		}
	}, true);
}

function iniciar(){
	var Convertir = document.getElementById("btnConvertidor");
	if(Convertir.addEventListener){
		Convertir.addEventListener("click", conversiones, true);
	}
}

function conversiones(){
    var v1;
    v1 = document.formulario.Vconversion.options[document.formulario.Vconversion.selectedIndex].value;
    var v2;
    v2 = document.formulario.Aconvertir.options[document.formulario.Aconvertir.selectedIndex].value;

    var n;
    
    switch(v1)
    {
        case '0':
            n = new Array(10);
            
            n[0] = 1;
            n[1] = 0.913346272;
            n[2] = 0.648565212;
            n[3] = 16.3757246;
            n[4] = 533.049041;
            n[5] = 121.334;
            n[6] = 6.3465;
            n[7] = 1.00722;
            n[8] = 6.3;
            n[9] = 13577;
            break;
        case '1':
            n = new Array(10);
            
            n[0] = 1.094875;
            n[1] = 1;
            n[2] = 0.710097836;
            n[3] = 17.9293715;
            n[4] = 583.622068;
            n[5] = 132.808709;
            n[6] = 6.94668;
            n[7] = 1.08543712;
            n[8] = 6.9520287;
            n[9] = 14861;
            break;
        case '2':
            n = new Array(10);
            
            n[0] = 1.541865;
            n[1] = 1.40825665;
            n[2] = 1;
            n[3] = 25.2491567;
            n[4] = 821.889659;
            n[5] = 187.032;
            n[6] = 9.7829;
            n[7] = 1.53041;
            n[8] = 9.7112;
            n[9] = 20934.3;
            break;
        case '3':
            n = new Array(10);
            
            n[0] = 0.061066;
            n[1] = 0.0557744035;
            n[2] = 0.0396052832;
            n[3] = 1;
            n[4] = 32.5511727;
            n[5] = 7.40732654;
            n[6] = 0.387165084;
            n[7] = 0.060451;
            n[8] = 0.387745254;
            n[9] = 826.67;
            break;
        case '4':
            n = new Array(10);
            
            n[0] = 0.001876;
            n[1] = 0.00171343761;
            n[2] = 0.00121670834;
            n[3] = 0.0307208594;
            n[4] = 1
            n[5] = 0.228845;
            n[6] = 0.0119904;
            n[7] = 0.002;
            n[8] = 4.029;
            n[9] = 25.4977;
            break;
        case '5':
            n = new Array(10);
            
            n[0] = 0.0082417;
            n[1] = 0.00752962667;
            n[2] = 0.0053452;
            n[3] = 0.135001474;
            n[4] = 4.394;
            n[5] = 1;
            n[6] = 0.0522678569;
            n[7] = 0.0081826;
            n[8] = 0.0523461807;
            n[9] = 112.003;
            break;
        case '6':
            n = new Array(10);
            
            n[0] = 0.157567;
            n[1] = 0.144058454;
            n[2] = 0.102191;
            n[3] = 2.58287754;
            n[4] = 84.3157;
            n[5] = 19.1322174;
            n[6] = 1;
            n[7] = 0.156438;
            n[8] = 1.00149851;
            n[9] = 2139.29699;
            break;
        case '7':
            n = new Array(10);
            
            n[0] = 1.00722;
            n[1] = 0.920911;
            n[2] = 0.65323;
            n[3] = 16.5422;
            n[4] = 537.024;
            n[5] = 122.210;
            n[6] = 6.3923;
            n[7] = 1;
            n[8] = 6.3455;
            n[9] = 13675.0;
            break;
        case '8':
            n = new Array(10);
            
            n[0] = 0.158730;
            n[1] = 0.143842904;
            n[2] = 0.102945;
            n[3] = 2.57901287;
            n[4] = 84.9633;
            n[5] = 19.1035905;
            n[6] = 0.998503734;
            n[7] = 0.157592;
            n[8] = 1;
            n[9] = 2155.08;
            break;
        case '9':
            n = new Array(10);
            
            n[0] = 0.000073654;
            n[1] = 0.000067290;
            n[2] = 0.000047775;
            n[3] = 0.00120597;
            n[4] = 0.039445629;
            n[5] = 0.0089367;
            n[6] = 0.00046744;
            n[7] = 0.000073126;
            n[8] = 0.00046402;
            n[9] = 1;
            break;
        default:
            break;
            
    }
    
    var veces = document.getElementById('cantidad1').value;
    var resultado;
    resultado = veces * n[v2];
    document.getElementById('cantidad2').value = resultado.toFixed(2);
    guardarenregistro(v1, document.getElementById('cantidad1').value, 
    v2, document.getElementById('cantidad2').value);
}

/*
function convertir(){
	var opcion1;
	opcion1 = document.formulario.Vconversion.options[document.formulario.Vconversion.selectedIndex].value;
    var opcion2;
    opcion2 = document.formulario.Aconvertir.options[document.formulario.Aconvertir.selectedIndex].value;

//------------------------------Todos los Euros-----------------------------------
    if((opcion1 == "Euro") && (opcion2 == "Euro")) {
        euro = document.getElementById("cantidad1").value;
        dollar = parseFloat(1);
        resultado = euro * parseFloat(dollar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if((opcion1 == "Euro") && (opcion2 == "Dolar")) {
        euro = document.getElementById("cantidad1").value;
        dollar = parseFloat(1.09488);
        resultado = euro * parseFloat(dollar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
	else if((opcion1 == "Euro") && (opcion2 == "Libra")) {
        euro = document.getElementById("cantidad1").value;
        libra = parseFloat(0.710931);
        resultado = euro * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if((opcion1 == "Euro") && (opcion2 == "Peso")) {
        euro = document.getElementById("cantidad1").value;
        peso = parseFloat(17.9717); //Un peso en auro es equivalente a 17.9717 igaul con los anteriores
        resultado = euro * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
	else if((opcion1 == "Euro") && (opcion2 == "Colon")) {
        euro = document.getElementById("cantidad1").value;
        colon = parseFloat(9.59465); 
        resultado = euro * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if((opcion1 == "Euro") && (opcion2 == "Yen")) {
        euro = document.getElementById("cantidad1").value;
        yen = parseFloat(132.770); 
        resultado = euro * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if((opcion1 == "Euro") && (opcion2 == "RY")) {
        euro = document.getElementById("cantidad1").value;
        ry = parseFloat(6.94296); 
        resultado = euro * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    else if((opcion1 == "Euro") && (opcion2 == "Franco")) {
        euro = document.getElementById("cantidad1").value;
        franco = parseFloat(1.08632); 
        resultado = euro * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if((opcion1 == "Euro") && (opcion2 == "Bolivar")) {
        euro = document.getElementById("cantidad1").value;
        bolivar = parseFloat(6.91405); 
        resultado = euro * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if((opcion1 == "Euro") && (opcion2 == "Chelin")) {
        euro = document.getElementById("cantidad1").value;
        chelin = parseFloat(111.817); 
        resultado = euro * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if((opcion1 == "Euro") && (opcion2 == "Rupia")) {
        euro = document.getElementById("cantidad1").value;
        rupia = parseFloat(71.8158); 
        resultado = euro * parseFloat(rupia);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

//-----------------------Todos los Dolares------------------------------------
    else if(opcion1 == "Dolar" && opcion2 == "Dolar"){
        dolar = document.getElementById("cantidad1").value;
        euro = parseFloat(1);
        resultado = dolar * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Euro"){
    	dolar = document.getElementById("cantidad1").value;
    	euro = parseFloat(0.912359);
    	resultado = dolar * parseFloat(euro);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Libra"){
    	dolar = document.getElementById("cantidad1").value;
    	libra = parseFloat(0.648653);
    	resultado = dolar * parseFloat(libra);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Peso"){
    	dolar = document.getElementById("cantidad1").value;
    	peso = parseFloat(16.3965);
    	resultado = dolar * parseFloat(peso);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Colon"){
    	dolar = document.getElementById("cantidad1").value;
    	colon = parseFloat(8.75000);
    	resultado = dolar * parseFloat(colon);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Yen"){
    	dolar = document.getElementById("cantidad1").value;
    	yen = parseFloat(121.217);
    	resultado = dolar * parseFloat(yen);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "RY"){
    	dolar = document.getElementById("cantidad1").value;
    	ry = parseFloat(6.34016);
    	resultado = dolar * parseFloat(ry);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Franco"){
    	dolar = document.getElementById("cantidad1").value;
    	franco = parseFloat(0.991688);
    	resultado = dolar * parseFloat(franco);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Bolivar"){
    	dolar = document.getElementById("cantidad1").value;
    	bolivar = parseFloat(6.28420);
    	resultado = dolar * parseFloat(bolivar);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Chelin"){
    	dolar = document.getElementById("cantidad1").value;
    	chelin = parseFloat(101.900);
    	resultado = dolar * parseFloat(chelin);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if(opcion1 == "Dolar" && opcion2 == "Rupia"){
    	dolar = document.getElementById("cantidad1").value;
    	rupia = parseFloat(65.5815);
    	resultado = dolar * parseFloat(rupia);
    	document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

        //Todas las de Libra
    else if ((opcion1 == "Libra") && (opcion2 == "Libra")) {
        libra = document.getElementById("cantidad1").value;
        dollar = parseFloat(1);
        resultado = libra * parseFloat(dollar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "Dolar")) {
        libra = document.getElementById("cantidad1").value;
        dollar = parseFloat(1.54);
        resultado = libra * parseFloat(dollar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "Euro")) {
        libra = document.getElementById("cantidad1").value;
        euro = parseFloat(1.41);
        resultado = libra * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "peso")) {
        libra = document.getElementById("cantidad1").value;
        peso = parseFloat(25.30);
        resultado = libra * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "Colon")) {
        libra = document.getElementById("cantidad1").value;
        colon = parseFloat(13.473);
        resultado = libra * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "Yen")) {
        libra = document.getElementById("cantidad1").value;
        yen = parseFloat(186.87);
        resultado = libra * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "RY")) {
        libra = document.getElementById("cantidad1").value;
        ry = parseFloat(9.77);
        resultado = libra * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "Franco")) {
        libra = document.getElementById("cantidad1").value;
        franco = parseFloat(1.53);
        resultado = libra * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "Bolivar")) {
        libra = document.getElementById("cantidad1").value;
        bolivar = parseFloat(9.72);
        resultado = libra * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "Chelin")) {
        libra = document.getElementById("cantidad1").value;
        chelin = parseFloat(157.16);
        resultado = libra * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Libra") && (opcion2 == "Rupia")) {
        libra = document.getElementById("cantidad1").value;
        rupia = parseFloat(101.09);
        resultado = libra * parseFloat(rupia);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    //Todas las de Peso
    else if ((opcion1 == "Peso") && (opcion2 == "Peso")) {
        peso = document.getElementById("cantidad1").value;
        euro = parseFloat(1);
        resultado = peso * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Euro")) {
        peso = document.getElementById("cantidad1").value;
        euro = parseFloat(0.06);
        resultado = peso * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Dolar")) {
        peso = document.getElementById("cantidad1").value;
        euro = parseFloat(0.06);
        resultado = peso * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Libra")) {
        peso = document.getElementById("cantidad1").value;
        libra = parseFloat(0.04);
        resultado = peso * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Colon")) {
        peso = document.getElementById("cantidad1").value;
        colon = parseFloat(0.53216);
        resultado = peso * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Yen")) {
        peso = document.getElementById("cantidad1").value;
        yen = parseFloat(7.39);
        resultado = peso * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "RY")) {
        peso = document.getElementById("cantidad1").value;
        ry = parseFloat(0.39);
        resultado = peso * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Franco")) {
        peso = document.getElementById("cantidad1").value;
        franco = parseFloat(0.06);
        resultado = peso * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Bolivar")) {
        peso = document.getElementById("cantidad1").value;
        bolivar = parseFloat(0.38);
        resultado = peso * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Chelin")) {
        peso = document.getElementById("cantidad1").value;
        chelin = parseFloat(6.21);
        resultado = peso * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Peso") && (opcion2 == "Rupia")) {
        peso = document.getElementById("cantidad1").value;
        rupia = parseFloat(4.00);
        resultado = peso * parseFloat(rupia);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    //Todas las de Colon
    else if ((opcion1 == "Colon") && (opcion2 == "Colon")) {
        colon = document.getElementById("cantidad1").value;
        dollar = parseFloat(0.11);
        resultado = colon * parseFloat(dollar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Dolar")) {
        colon = document.getElementById("cantidad1").value;
        dollar = parseFloat(0.11);
        resultado = colon * parseFloat(dollar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Euro")) {
        colon = document.getElementById("cantidad1").value;
        euro = parseFloat(0.104521);
        resultado = colon * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Libra")) {
        colon = document.getElementById("cantidad1").value;
        libra = parseFloat(0.07);
        resultado = colon * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Peso")) {
        colon = document.getElementById("cantidad1").value;
        peso = parseFloat(1.8791);
        resultado = colon * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Yen")) {
        colon = document.getElementById("cantidad1").value;
        yen = parseFloat(12.40);
        resultado = colon * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "RY")) {
        colon = document.getElementById("cantidad1").value;
        ry = parseFloat(0.73);
        resultado = colon * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Franco")) {
        colon = document.getElementById("cantidad1").value;
        franco = parseFloat(0.11);
        resultado = colon * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Bolivar")) {
        colon = document.getElementById("cantidad1").value;
        bolivar = parseFloat(0.723);
        resultado = colon * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Chelin")) {
        colon = document.getElementById("cantidad1").value;
        chelin = parseFloat(248.551);
        resultado = colon * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Colon") && (opcion2 == "Rupia")) {
        colon = document.getElementById("cantidad1").value;
        rupia = parseFloat(6.97);
        resultado = colon * parseFloat(rupia);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    //Todas las de Yen
    else if ((opcion1 == "Yen") && (opcion2 == "Yen")) {
        yen = document.getElementById("cantidad1").value;
        dollar = parseFloat(1);
        resultado = yen * parseFloat(dollar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Dolar")) {
        yen = document.getElementById("cantidad1").value;
        dollar = parseFloat(0.01);
        resultado = yen * parseFloat(dollar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Euro")) {
        yen = document.getElementById("cantidad1").value;
        euro = parseFloat(0.0075);
        resultado = yen * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Libra")) {
        yen = document.getElementById("cantidad1").value;
        libra = parseFloat(0.01);
        resultado = yen * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Peso")) {
        yen = document.getElementById("cantidad1").value;
        peso = parseFloat(0.14);
        resultado = yen * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Colon")) {
        yen = document.getElementById("cantidad1").value;
        colon = parseFloat(0.07);
        resultado = yen * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "RY")) {
        yen = document.getElementById("cantidad1").value;
        ry = parseFloat(0.05226);
        resultado = yen * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Franco")) {
        yen = document.getElementById("cantidad1").value;
        franco = parseFloat(0.01);
        resultado = yen * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Bolivar")) {
        yen = document.getElementById("cantidad1").value;
        bolivar = parseFloat(0.05);
        resultado = yen * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Chelin")) {
        yen = document.getElementById("cantidad1").value;
        chelin = parseFloat(0.842);
        resultado = yen * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Yen") && (opcion2 == "Rupia")) {
        yen = document.getElementById("cantidad1").value;
        rupia = parseFloat(111.90);
        resultado = yen * parseFloat(rupia);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    //Todas las de Renminbi
    else if ((opcion1 == "RY") && (opcion2 == "RY")) {
        ry = document.getElementById("cantidad1").value;
        dolar = parseFloat(1);
        resultado = ry * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Dolar")) {
        ry = document.getElementById("cantidad1").value;
        dolar = parseFloat(0.15802);
        resultado = ry * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Euro")) {
        ry = document.getElementById("cantidad1").value;
        euro = parseFloat(0.14351);
        resultado = ry * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Libra")) {
        ry = document.getElementById("cantidad1").value;
        libra = parseFloat(0.10);
        resultado = ry * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Peso")) {
        ry = document.getElementById("cantidad1").value;
        peso = parseFloat(2.61123);
        resultado = ry * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Colon")) {
        ry = document.getElementById("cantidad1").value;
        colon = parseFloat(1.41061);
        resultado = ry * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Yen")) {
        ry = document.getElementById("cantidad1").value;
        yen = parseFloat(19.05913);
        resultado = ry * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Franco")) {
        ry = document.getElementById("cantidad1").value;
        franco = parseFloat(0.15621);
        resultado = ry * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Bolivar")) {
        ry = document.getElementById("cantidad1").value;
        bolivar = parseFloat(0.99);
        resultado = ry * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Chelin")) {
        ry = document.getElementById("cantidad1").value;
        chelin = parseFloat(16.62008);
        resultado = ry * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "RY") && (opcion2 == "Rupia")) {
        ry = document.getElementById("cantidad1").value;
        dolar = parseFloat(10.35429);
        resultado = ry * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    //Todos los de Franco
    else if ((opcion1 == "Franco") && (opcion2 == "Franco")) {
        franco = document.getElementById("cantidad1").value;
        dolar = parseFloat(1);
        resultado = franco * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Dolar")) {
        franco = document.getElementById("cantidad1").value;
        dolar = parseFloat(1.01158);
        resultado = franco * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Euro")) {
        franco = document.getElementById("cantidad1").value;
        euro = parseFloat(0.91870);
        resultado = franco * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Libra")) {
        franco = document.getElementById("cantidad1").value;
        libra = parseFloat(0.10);
        resultado = franco * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Peso")) {
        franco = document.getElementById("cantidad1").value;
        peso = parseFloat(16.71568);
        resultado = franco * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Colon")) {
        franco = document.getElementById("cantidad1").value;
        colon = parseFloat(9.02995);
        resultado = franco * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Yen")) {
        franco = document.getElementById("cantidad1").value;
        yen = parseFloat(122.00643);
        resultado = franco * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "RY")) {
        franco = document.getElementById("cantidad1").value;
        ry = parseFloat(6.39);
        resultado = franco * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Bolivar")) {
        franco = document.getElementById("cantidad1").value;
        bolivar = parseFloat(6.35);
        resultado = franco * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Chelin")) {
        franco = document.getElementById("cantidad1").value;
        chelin = parseFloat(102.78);
        resultado = franco * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Franco") && (opcion2 == "Rupia")) {
        franco = document.getElementById("cantidad1").value;
        rupia = parseFloat(66.12);
        resultado = franco * parseFloat(rupia);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    //Todas las de Bolivar
    else if ((opcion1 == "Bolivar") && (opcion2 == "Bolivar")) {
        bolivar = document.getElementById("cantidad1").value;
        dolar = parseFloat(1);
        resultado = bolivar * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Dolar")) {
        bolivar = document.getElementById("cantidad1").value;
        dolar = parseFloat(0.16);
        resultado = bolivar * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Euro")) {
        bolivar = document.getElementById("cantidad1").value;
        euro = parseFloat(0.143842);
        resultado = bolivar * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Libra")) {
        bolivar = document.getElementById("cantidad1").value;
        libra = parseFloat(0.10);
        resultado = bolivar * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Peso")) {
        bolivar = document.getElementById("cantidad1").value;
        peso = parseFloat(2.5790);
        resultado = bolivar * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Colon")) {
        bolivar = document.getElementById("cantidad1").value;
        colon = parseFloat(0.004);
        resultado = bolivar * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Yen")) {
        bolivar = document.getElementById("cantidad1").value;
        yen = parseFloat(19.1035905);
        resultado = bolivar * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "RY")) {
        bolivar = document.getElementById("cantidad1").value;
        ry = parseFloat(0.9985);
        resultado = bolivar * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Franco")) {
        bolivar = document.getElementById("cantidad1").value;
        franco = parseFloat(0.16);
        resultado = bolivar * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Chelin")) {
        bolivar = document.getElementById("cantidad1").value;
        chelin = parseFloat(0.048);
        resultado = bolivar * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Bolivar") && (opcion2 == "Rupia")) {
        bolivar = document.getElementById("cantidad1").value;
        rupia = parseFloat(10.42);
        resultado = bolivar * parseFloat(rupia);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    //Todas las de Chelin
    else if ((opcion1 == "Chelin") && (opcion2 == "Chelin")) {
        chelin = document.getElementById("cantidad1").value;
        dolar = parseFloat(1);
        resultado = chelin * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Dolar")) {
        chelin = document.getElementById("cantidad1").value;
        dolar = parseFloat(0.01);
        resultado = chelin * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Euro")) {
        chelin = document.getElementById("cantidad1").value;
        euro = parseFloat(0.01);
        resultado = chelin * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Libra")) {
        chelin = document.getElementById("cantidad1").value;
        libra= parseFloat(0.01);
        resultado = chelin * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Peso")) {
        chelin = document.getElementById("cantidad1").value;
        peso = parseFloat(0.16);
        resultado = chelin * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Colon")) {
        chelin = document.getElementById("cantidad1").value;
        colon = parseFloat(0.086);
        resultado = chelin * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Yen")) {
        chelin = document.getElementById("cantidad1").value;
        yen = parseFloat(1.19);
        resultado = chelin * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "RY")) {
        chelin = document.getElementById("cantidad1").value;
        ry = parseFloat(0.06);
        resultado = chelin * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Franco")) {
        chelin = document.getElementById("cantidad1").value;
        franco = parseFloat(0.01);
        resultado = chelin * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Bolivar")) {
        chelin = document.getElementById("cantidad1").value;
       bolivar = parseFloat(0.06);
        resultado = chelin * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Chelin") && (opcion2 == "Rupia")) {
        chelin = document.getElementById("cantidad1").value;
        rupia = parseFloat(0.64265);
        resultado = chelin * parseFloat(rupia);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }

    //Todas las de Rupia
    else if ((opcion1 == "Rupia") && (opcion2 == "Rupia")) {
        rupia = document.getElementById("cantidad1").value;
        dolar = parseFloat(1);
        resultado = rupia * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Dolar")) {
        rupia = document.getElementById("cantidad1").value;
        dolar = parseFloat(0.02);
        resultado = rupia * parseFloat(dolar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Euro")) {
        rupia = document.getElementById("cantidad1").value;
        euro = parseFloat(0.01);
        resultado = rupia * parseFloat(euro);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Libra")) {
        rupia = document.getElementById("cantidad1").value;
        libra = parseFloat(0.01);
        resultado = rupia * parseFloat(libra);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Peso")) {
        rupia = document.getElementById("cantidad1").value;
        peso = parseFloat(0.25);
        resultado = rupia * parseFloat(peso);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Colon")) {
        rupia = document.getElementById("cantidad1").value;
        colon = parseFloat(0.133);
        resultado = rupia * parseFloat(colon);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Yen")) {
        rupia = document.getElementById("cantidad1").value;
        yen = parseFloat(1.84);
        resultado = rupia * parseFloat(yen);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "RY")) {
        rupia = document.getElementById("cantidad1").value;
        ry = parseFloat(0.10);
        resultado = rupia * parseFloat(ry);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Franco")) {
        rupia = document.getElementById("cantidad1").value;
        franco = parseFloat(0.02);
        resultado = rupia * parseFloat(franco);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Bolivar")) {
        rupia = document.getElementById("cantidad1").value;
        bolivar = parseFloat(0.10);
        resultado = rupia * parseFloat(bolivar);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
    else if ((opcion1 == "Rupia") && (opcion2 == "Chelin")) {
        rupia = document.getElementById("cantidad1").value;
        chelin = parseFloat(1.55582);
        resultado = rupia * parseFloat(chelin);
        document.getElementById("cantidad2").value = resultado.toFixed(3);
    }
}
*/
