const slider = document.querySelector("#slider") //contenedor principal
let sliderSection = document.querySelectorAll(".slider_section") //contenedores de imagenes

 //guardamos el ultimo contenedor de las imagenes
 let sliderSectionLast = sliderSection[sliderSection.length -1]


 const btnRigth = document.querySelector("#btn-rigth") //boton left
 const btnLeft = document.querySelector("#btn-left") //boton rigth

 slider.insertAdjacentElement("afterbegin",sliderSectionLast)

 function next(){
    let sliderSectionfirst = document.querySelectorAll(".slider_section")[0]
    slider.style.marginLeft = "-200%"
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement("beforeend",sliderSectionfirst)
        slider.style.marginLeft = "-100%"
    },500)

 }


 function before(){
    let sliderSectionfirst = document.querySelectorAll(".slider_section")[0]
    slider.style.marginLeft = "0"
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement("beforeend" ,sliderSectionfirst)
        slider.style.marginLeft = "-100%"
    },500)

 }


 btnRigth.addEventListener("click",function(){
    next()
 })
 btnLeft.addEventListener("click",function(){
    before()
 })