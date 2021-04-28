//recuperar o hamburguer
const meuHamburguer = document.querySelector('.hamburguer');

//recuperar elemento que sofrerá ação
const meuMenuLink = document.querySelector ('.menu_link');

//evento do usuário - escutando os eventos e quando for o evento clique, aplique ou retire a classe open
meuHamburguer.addEventListener ('click', () =>{
    meuMenuLink.classList.toggle('open');

});