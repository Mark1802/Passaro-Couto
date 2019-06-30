let BotaoEl = document.querySelector('#setinha');
let BodyEl = document.querySelector('body');
let FotoCoutoEl = document.querySelector('#O_Couto');
let MenuEl = document.querySelector('#menuzao');
let Auxiliar = 0, Auxiliar2 = 0;
let BotaoCoutoEl = document.querySelector('#coutinho')
let TabelaEl = document.querySelector('table')

function alterna(e)
{
  if(Auxiliar == 0)
  {
    MenuEl.style.left = '0px';
    BotaoEl.style.left = '220px';
    BotaoEl.innerHTML = 'ᐊ';
    MenuEl.style.boxShadow = '-3px -3px 1px 1px rgba(34, 167, 240, 1)';
    Auxiliar = 1;
  }
  else
  {
    MenuEl.style.left = '-220px';
    BotaoEl.style.left = '0px';
    BotaoEl.innerHTML = 'ᐅ';
    MenuEl.style.boxShadow = '3px 3px 1px 1px rgba(34, 167, 240, 1)';
    Auxiliar = 0;
  }
}


BotaoEl.addEventListener('click',alterna);

let janela = window.innerHeight;
let link = {
    x: 0,
    y: 0,
    gifEl: document.querySelector('#link')
};
  function atualizandolink() {
    link.x +=1;
    link.y += Math.sin(link.x/2)*0;

    link.gifEl.style.left = link.x + 'px';
    link.gifEl.style.bottom = link.y + 'px';
}
window.setInterval(atualizandolink, 50);
