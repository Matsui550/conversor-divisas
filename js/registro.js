function guardarenregistro(moneda1, dato1, moneda2, resultado){
	var cajita1;
	var longitud = localStorage.length;
	longitud++;
	switch(moneda1){
		case '0':
			cajita1 = "USD - Dólar";
		break;

		case '1':
			cajita1 = "EUR - Euro";
		break;
		
		case '2':
			cajita1 = "Esterlina RU - Libra";
		break;
		
		case '3':
			cajita1 = "Mexico - Peso";
		break;
		
		case '4':
			cajita1 = "Costa Rica - Colón";
		break;
		
		case '5':
			cajita1 = "Japón - Yen";
		break;

		case '6':
			cajita1 = "China - Renmimbi Yuan";
		break;

		case '7':
			cajita1 = "Suiza - Franco";
		break;

		case '8':
			cajita1 = "Venezuela - Bolívar";
		break;

		case '9':
			cajita1 = "Indonesia - Rupia";
		break;
	}

	switch(moneda2){
		case '0':
			cajita2 = "USD - Dólar";
		break;

		case '1':
			cajita2 = "EUR - Euro";
		break;
		
		case '2':
			cajita2 = "Esterlina RU - Libra";
		break;
		
		case '3':
			cajita2 = "Mexico - Peso";
		break;
		
		case '4':
			cajita2 = "Costa Rica - Colón";
		break;
		
		case '5':
			cajita2 = "Japón - Yen";
		break;

		case '6':
			cajita2 = "China - Renmimbi Yuan";
		break;

		case '7':
			cajita2 = "Suiza - Franco";
		break;

		case '8':
			cajita2 = "Venezuela - Bolívar";
		break;

		case '9':
			cajita2 = "Indonesia - Rupia";
		break;
	}
	localStorage.setItem("Registro"+longitud, cajita1+"_"+dato1+"_"+cajita2+"_"+resultado);
}