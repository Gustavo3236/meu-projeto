let botaoMenu = document.querySelector(".botao__menu");

let menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
    botaoMenu = menu.classList.toggle("menu--ativo");
})