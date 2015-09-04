// funciones como
// primera clase
var funcionSaludar = function(nombre){
	console.log("hola %s",nombre);
	};
	
	var functionDespide = function(nombre){
		console.log("adios %s". nombre);
			};
			
			// manejadores - handler (manejador) - elegados
			var mensaje = function(nombre, handler){
				handler(nombre);
			};
			
			// usando la funcion mensaje
			mensaje("Aldo",funcionSaludar);