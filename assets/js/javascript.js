let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

let tresPontos = document.getElementById("tres-pontos");
let descCompleta = document.getElementById("descricao-completa");
let btnContinuarLendo = document.getElementById("btn-continuar-lendo");
let btnLerMenos = document.getElementById("ler-menos");

function MostrarDescricao() {
  descCompleta.style.display = "block";
  btnLerMenos.style.display = "block";
  tresPontos.style.display = "none";
  btnContinuarLendo.style.display = "none";
}
function EsconderDescricao() {
  descCompleta.style.display = "none";
  btnLerMenos.style.display = "none";
  tresPontos.style.display = "block";
  btnContinuarLendo.style.display = "block";
}
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".menu");
  var logo = document.querySelector(".logo");
  menu.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.toggle("sumir", window.scrollY > 0);
});

ScrollReveal().reveal("#btn-curriculo", { delay: 400, reset: true });
ScrollReveal().reveal(".meu-nome", { delay: 400, reset: true });
ScrollReveal().reveal(".meu-cargo", { delay: 600, reset: true });
ScrollReveal().reveal(".minha-desc", { delay: 800, reset: true });
ScrollReveal().reveal("#minha-foto", { delay: 400, reset: true });
ScrollReveal().reveal(".parte-texto", { delay: 400, reset: true });
ScrollReveal().reveal(".texto-skills,.projetos", { delay: 400, reset: true });
ScrollReveal().reveal(".skiils-linguagem,.todos_projetos,.btn_ver_projetos", {
  delay: 800,
  reset: true,
});
