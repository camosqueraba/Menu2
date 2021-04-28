function clickMenu() {
    if (document.getElementById("contenedor_opciones_menu").style.visibility == "visible"){
      document.getElementById("contenedor_opciones_menu").style.visibility = "hidden";
    }
    else{
      document.getElementById("contenedor_opciones_menu").style.visibility = "visible";
    }
}

const slider = document.getElementById("#contenido-carousel");   

function cargarSliders(){

	fetch('assets/database/carousel.json')
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
}

cargarSliders();