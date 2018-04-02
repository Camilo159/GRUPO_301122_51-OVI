(function(){
	$(document).ready(function(){

		function cargarContenido(id,contenido){
			$(id).click(function(){
				$("#contenido").load(contenido);
			});
		}
		$("#contenido").load("contenido_principal.html");

		/* Para agregar Contenido llamar a la función cargarContenido() 

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
		cargarContenido("#Articulo1-HTML5","Principal_HTML5.html");
		/* Agregar contenido de CSS */
	});
})();