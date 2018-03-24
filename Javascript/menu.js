(function(){
	window.onload = function(){

		var acordeon = document.getElementsByClassName("acordeon");
		//var hora = document.querySelector(".hora");
		//var now = new Date();

		for(i=0; i<acordeon.length; i++){
			acordeon[i].addEventListener("click",function(e){

				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				var icon = this.childNodes[0];
				if(icon.classList == "icon-minus"){
					icon.classList.remove("icon-minus");
					icon.classList.add("icon-plus");
				}else{
					icon.classList.remove("icon-plus");
					icon.classList.add("icon-minus");
				}
				panel.classList.toggle("desplegable");
			});
		}

		//hora.textContent = now.getDate() + " / " + now.getFullYear() ;

		var menu = document.querySelector("button.menu-toggle");
		console.log(menu);
		menu.addEventListener("click",function(e){
			var panel = document.querySelector("nav.pane");
			this.classList.toggle("activo");
			panel.classList.toggle("plegable");

		});

		
	}
})();
