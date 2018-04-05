$(document).ready(function(){

	//Paginación Dinamica
	var items = $('.slider li').length;
	var imgPos = 1;

	for(i = 1; i <= items; i++){
		$(".pagination").append('<li><span class="icon-radio-checked2"></span></li>');
	}
	//-----------------------------

	//solo aparezca la primera imagen
	$(".slider li").hide();
	$(".slider li:first").show();
	$(".pagination li:first").css({"color" : "#F4AF00"});
	//------------------------------

	//Ejecutando Funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

	/*
	//Aplicando Intervalo automatico
	setInterval(function(){
		nextSlider();
	},3000);
	*/

	//FUNCIONES -----------------------------------

	function pagination(){
		//posición del elemento
		var paginationPosition = $(this).index() + 1;

		$(".slider li").hide();
		$(".slider li:nth-child("+ paginationPosition +")").fadeIn();

		$(".pagination li").css({"color": "#125893"});
		$(this).css({"color" : "#F4AF00"});

		imgPos = paginationPosition;
	}

	function nextSlider(){

		if(imgPos >= items){
			imgPos = 1;
		}else{
			imgPos++;	
		}
		
		$(".slider li").hide();
		$(".slider li:nth-child("+ imgPos +")").fadeIn();

		$(".pagination li").css({"color": "#125893"});
		$(".pagination li:nth-child("+imgPos+")").css({"color" : "#F4AF00"})
	}

	function prevSlider(){

		if(imgPos <= 1){
			imgPos = items;
		}else{
			imgPos--;	
		}
		
		$(".slider li").hide();
		$(".slider li:nth-child("+ imgPos +")").fadeIn();

		$(".pagination li").css({"color": "#125893"});
		$(".pagination li:nth-child("+imgPos+")").css({"color" : "#F4AF00"})
	}
});