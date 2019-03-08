var mapa = document.getElementById("map");
		var OpcijeMapa = {
			center: new google.maps.LatLng(48.17685, 11.55910), zoom: 15
	}
		var map = new google.maps.Map(mapa, OpcijeMapa); //Objekat je stvoren sa mapa-a i OpcijamaMape kao parametre