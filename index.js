const slider = document.querySelector("#slider") //contenedor principal
let sliderSection = document.querySelectorAll(".slider_section") //contenedores de imagenes

 //guardamos el ultimo contenedor de las imagenes
 let sliderSectionLast = sliderSection[sliderSection.length -1]


 const btnRigth = document.querySelector("#btn-rigth") //boton left
 const btnLeft = document.querySelector("#btn-left") //boton rigth

 slider.insertAdjacentElement("afterbegin",sliderSectionLast)