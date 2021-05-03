function clickMenu() {
    if (document.getElementById("contenedor_opciones_menu").style.visibility == "visible"){
      document.getElementById("contenedor_opciones_menu").style.visibility = "hidden";
    }
    else{
      document.getElementById("contenedor_opciones_menu").style.visibility = "visible";
    }
}


document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM is ready.')
   


	function llenarCarousel(contenido_json){

		const contenido_carousel = document.getElementById("contenido-carousel");  
		const sliders = contenido_json['sliders-carousel'];
		console.log('contenido carousel');
		console.log(contenido_carousel);
		
		//sliders.forEach(function crearSlider(informacion_slider){
		sliders.forEach(cadaelemento => {

			const slider = document.createElement('div');
			slider.classList='carousel-item';
			//console.log(cadaelemento.foto);
			if(cadaelemento.foto == null && cadaelemento.video != null){

				slider.innerHTML += `<a class="scroll-link"  href="${cadaelemento.id}">
							 	<img src="assets/img/slides/${cadaelemento.foto}" class="d-block w-100" alt="${cadaelemento.titulo}">
							   </a>
		       								<div class="carousel-caption">
												<a class="scroll-link" href="${cadaelemento.id}">
													<h3 class="carousel-titulo">${cadaelemento.titulo}</h3>
													<div class="carousel-caption-description">
														<p>${cadaelemento.descripcion}</p>
													</div>
												</a>
											</div>`;

			}
			/*
			slider.innerHTML += `<a class="scroll-link"  href="${cadaelemento.id}">
							 	<img src="assets/img/slides/${cadaelemento.foto}" class="d-block w-100" alt="${cadaelemento.titulo}">
							   </a>
		       								<div class="carousel-caption">
												<a class="scroll-link" href="${cadaelemento.id}">
													<h3 class="carousel-titulo">${cadaelemento.titulo}</h3>
													<div class="carousel-caption-description">
														<p>${cadaelemento.descripcion}</p>
													</div>
												</a>
											</div>`;*/
			//console.log('cadaelemento');
			//console.log(cadaelemento);
			contenido_carousel.appendChild(slider);
		});

	}

	function cargarSliders(){

		console.log("cargarSliders");
		/*
		fetch('http://localhost/Menu2/assets/database/carousel.json')
		.then(respuesta => respuesta.json())
		.then(sliders => {
			sliders.results.forEach(slider => {

				const contenido_slider = document.createElement('div');
				contenido_slider.classList='carousel-item';
				/*
				contenido_slider.innerHTML('<a class="scroll-link" ' + 'href="'+${contenido_slider.id} +'">'+
											 '<img src="assets/img/slides/'+${usuario.id}+' " class="d-block w-100" alt="'+ ${usuario.id}+'">
		       							   </a>'+
		       								'<div class="carousel-caption">'+
												'<a class="scroll-link" href="#anuncio2">'+
													'<h3 class="carousel-titulo">Feliz Dia Profesionales de Enfermeria</h3>'+
													'<div class="carousel-caption-description">'+
														'<p>Feliz dia a todos los profesionales de enfermeria.</p>'+
													'</div>'+
												'</a>'+
											'</div>');
				*/
				
				/*
				contenido_slider.innerHTML(`<a class="scroll-link"  href="${contenido_slider.id}">
											 <img src="assets/img/slides/${usuario.id}" class="d-block w-100" alt="${contenido_slider.titulo}">
		       							   </a>
		       								<div class="carousel-caption">
												<a class="scroll-link" href="${contenido_slider.id}">
													<h3 class="carousel-titulo">${contenido_slider.titulo}</h3>
													<div class="carousel-caption-description">
														<p>${contenido_slider.descripcion}</p>
													</div>
												</a>
											</div>`);
				sliders.appendChild(contenido_slider);
			});
		})

		*/
		const requestURL= 'http://localhost/Menu2/assets/database/carousel.json';
		const request = new XMLHttpRequest();
		request.open('GET', requestURL);
		request.responseType = 'json';
		request.send();
		
		request.onload = function() {
		  	const contenido_json = request.response;
		  	//console.log(contenido_json['sliders-carousel'][0]);
		  	llenarCarousel(contenido_json);
		  	//showHeroes(contenido_json);
		}
	}

	cargarSliders();



});


 

const requestUrl= 'http://localhost/Menu2/assets/database/carousel.json';
//const requestUrl= 'http://192.168.1.52:8686/Menu2/assets/database/carousel.json';




