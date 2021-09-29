let icon = document.getElementById("icon");

icon.onclick = function() {

    document.body.classList.toggle("dark-theme");
    
    document.querySelector("main").style.transition = "1s"
    document.querySelector("header").style.transition = "1s"

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "img/sol.svg";
    } else {
        icon.src = "img/luna.svg";      
    }
}

let opciones = document.querySelectorAll("nav ul li a");

opciones.forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active")
        element.classList.add("active")

    })    
});

const ham = document.getElementById("ham");
const menu = document.querySelector(".menu")

ham.addEventListener("click", () => {
    menu.classList.toggle("activo")
    ham.classList.toggle("fa-times")
    
})
