window.sr = ScrollReveal();
    sr.reveal('.container', {
        duration:1000,
        origin:'top',
        distance: '-100px',
        reset:true
    });
    sr.reveal('.trabajos', {
        duration:2000,
        origin:'bottom',
        distance: '-50px',
        reset:true
    });


const imagenRetrato = document.querySelector(".imagen-retrato")
const imagenProducto = document.querySelector(".imagen-producto")
const imagenEventos = document.querySelector(".imagen-eventos")
const retrato = document.getElementById("Retratos")
const productos = document.getElementById("Productos")
const eventos = document.getElementById("Eventos")

imagenRetrato.addEventListener("mouseover", (e)=>{
    retrato.textContent = "RETRATO";
    retrato.classList.add("retratosBoton");
    retrato.classList.add("shake-vertical")
    console.log("Esto funciona");
})
imagenRetrato.addEventListener("mouseout", (e)=>{
    retrato.textContent = "";
    retrato.classList.remove("shake-vertical")
})
imagenProducto.addEventListener("mouseover", (e)=>{
    productos.textContent = "FOTOPRODUCTO";
    productos.classList.add("retratosBoton");
    productos.classList.add("shake-vertical")
    console.log("Esto funciona");
})
imagenProducto.addEventListener("mouseout", (e)=>{
    productos.textContent = "";
    productos.classList.remove("shake-vertical")
})

imagenEventos.addEventListener("mouseover", (e)=>{
    eventos.textContent = "EVENTOS";
    eventos.classList.add("retratosBoton");
    eventos.classList.add("shake-vertical")
    console.log("Esto funciona");
})
imagenEventos.addEventListener("mouseout", (e)=>{
    eventos.textContent = "";
    eventos.classList.remove("shake-vertical")
})


