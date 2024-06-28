//Selecciones para barra de navegación burger
const burger = document.querySelector("#burger-menu"); 
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav"); 

burger.addEventListener("click", () => { 
    ul.classList.toggle("show");
});

//Cerrar el menu de burger
const navlink = document.querySelectorAll(".nav-link");

navlink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

//Selección de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up"); // Selecciona el botón de desplazar hacia arriba

//Funcionalidad de desplazar hacia arriba

scrollUp.addEventListener("click", () => { //Agrega un evento de clic al botón
    window.scrollTo({ // Desplaza hacia arriba a la posición 0,0
        top: 0,
        left: 0,
        behavior: "smooth" // Desplaza hacia arriba de manera suave
    });
});