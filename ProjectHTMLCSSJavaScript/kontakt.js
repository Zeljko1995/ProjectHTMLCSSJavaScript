function Mail(a){
                var mail = a.value;
                var manki = mail.search("@");
                var com = mail.search(".com");
                
                if(manki == -1 || com == -1)
                    a.style.border = "2px solid red";
                else
                    a.style.border = "none";
            }	
		function Provera(){
			if(document.forms['frm'].ime.value == "" || document.forms['frm'].prezime.value == "" || document.forms['frm'].email.value == "")
		{
				alert("Niste ispunili sva polja, polja oznacena sa ' * ' su obavezna");
				return false;
		}
			alert("Uspesno ste poslali poruku ");
			return true;
		}