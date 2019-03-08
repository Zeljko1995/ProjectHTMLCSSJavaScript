var Index = 0;
		slike();

		function slike() {
			var i;
			var x = document.getElementsByClassName("slajd"); 
			for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
    }
		Index++;
		if (Index > x.length) {Index = 1}    
		x[Index-1].style.display = "block";  
		setTimeout(slike, 2000); // vreme za koje ce se slike menjati u ovom slucaju to je 2s
	}