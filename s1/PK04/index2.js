// haciendo un closure
function retornaFuncionSaludo(){
	var mensaje = "Hola Aldo";
	return function(){
		console.log(mensaje);
	}
}
var saludar = retornaFuncionSaludo();
saludar();