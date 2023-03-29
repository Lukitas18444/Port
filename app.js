const button = document.querySelector(".imagen1")

button.addEventListener("mouseover", (e)=>{
    const text = document.querySelector(".text");
    text.textContent = "RETRATOS";
    text.style.color = "red";
    text.style.opacity = 1;
    console.log("esto funciona")
})
button.addEventListener("mouseout",(e) =>{
    const text = document.querySelector(".text");
    text.style.opacity = 0;
})