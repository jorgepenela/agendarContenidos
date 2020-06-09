
	//	OCULTAR O MOSTRAR CONTENIDOS A PARTIR DE DETERMINADA FECHA Y HORA
  
  /*
  * 1- Levantar todos los contenidos con la clase hidden (en CSS display NONE)
  * 2- Asignar un id cada objeto que queremos mantener oculto hasta la fecha de publicacion.
  * 3- Llamar a la funcion mostrar() pasando fecha, hora e ID del objetivo.
  * 4- Si queremos revisar como se ven los contenidos agreamos ?revisar al final de la URL
  */


	
	var hoy = new Date();
	console.log(hoy);
	//var fecha = new Date(2020,4,3,13);

	function mostrar (a, m, d, h, min, id){

		var fecha = new Date(a,m,d,h,min);

	    if (hoy>fecha) {
	        var objeto = document.querySelector(id);
	        objeto.classList.remove('hidden');
	        console.log("mostrar "+id);

	    } else {
	        console.log(id+" permanece oculto")
	    }
	}


  // MODO REVISION
  var revisar = window.location["search"];
  if (revisar === '?revisar') {
      var ocultos = document.querySelectorAll(".hidden");
      console.log('modo revision');
      for(o of ocultos){
          o.classList.remove('hidden');
      }
  }

  // INICIAR AGENDA!
  // Los meses arrancan de 0: Enero 0, Febero 1, marzo 2, etc..
  //mostrar(2020, 5, 9, 17, 0, '#miContenido');
