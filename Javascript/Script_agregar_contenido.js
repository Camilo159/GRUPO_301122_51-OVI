(function(){
	$(document).ready(function(){

		function cargarContenido(class,contenido){
			$(id).click(function(){
				$("#contenido").load(contenido);
			});
		}
		$("#contenido").load("contenido_principal.html");


			parametro 1: el Id del elemento que actua como boton
			parametro 2: pagina.html del contenido
		*/

		//contenido del index.html
		cargarContenido("#index","contenido_principal.html");
		//contenido autores.html
		cargarContenido("#autores","autores.html");

		/* Agregar copntenido de Github */
		cargarContenido("#github-video","videoGithub.html");
		/* Agregar contenido de HTML */

		/* Agregar contenido de CSS */
	});
})();