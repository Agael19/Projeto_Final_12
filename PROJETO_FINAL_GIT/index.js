// Selecionar o elemento de navegação
const navbar = document.querySelector("#navBarC");

// Função para mudar a cor do menu ao dar scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


const navLinks = document.querySelector(`.linkContainer`);
window.addEventListener(`scroll`, () => {
  if (window.scrollY > 100) {
    navLinks.classList.add(`scrolledLinks`);
  } else {
    navLinks.classList.remove(`scrolledLinks`);
  }
});
