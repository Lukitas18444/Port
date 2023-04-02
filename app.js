const imagenRetrato = document.querySelector(".imagen-retrato")
const imagenProducto = document.querySelector(".imagen-producto")
const imagenEventos = document.querySelector(".imagen-eventos")

imagenRetrato.addEventListener("mouseover", (e)=>{
    const buttonRetrato = document.getElementById("button-retrato");
    buttonRetrato.style.opacity = 1;
    console.log("esto funciona")
})
imagenRetrato.addEventListener("mouseout",(e) =>{
    const buttonRetrato = document.getElementById("button-retrato");
    buttonRetrato.style.opacity = 0;
})
imagenProducto.addEventListener("mouseover", (e)=>{
    const buttonProducto = document.getElementById("button-producto");
    buttonProducto.style.opacity = 1;
    console.log("esto funciona")
})
imagenProducto.addEventListener("mouseout",(e) =>{
    const buttonProducto = document.getElementById("button-producto");
    buttonProducto.style.opacity = 0;
})
imagenEventos.addEventListener("mouseover", (e)=>{
    const buttonEventos = document.getElementById("button-eventos");
    buttonEventos.style.opacity = 1;
    console.log("esto funciona")
})
imagenEventos.addEventListener("mouseout",(e) =>{
    const buttonEventos = document.getElementById("button-eventos");
    buttonEventos.style.opacity = 0;
})