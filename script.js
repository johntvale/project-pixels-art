// função criar PIXEL-BOARD
function criarDivs() {
  const tablePrincipal = document.querySelector('#pixel-board');
  for (let index1 = 0; index1 < 5; index1 += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const linha = document.createElement('div');
      linha.className = 'pixel';
      tablePrincipal.appendChild(linha);
    }
  }
}

criarDivs();

// Definir Array de Pixels da Paleta, e Array de cores, e Strings para atribuições de classes

const arrayPixelsCoresPaleta = [];
arrayPixelsCoresPaleta[0] = document.getElementsByTagName('div')[1];
arrayPixelsCoresPaleta[1] = document.getElementsByTagName('div')[2];
arrayPixelsCoresPaleta[2] = document.getElementsByTagName('div')[3];
arrayPixelsCoresPaleta[3] = document.getElementsByTagName('div')[4];

const classesColorSelected = 'color selected';
const classeColor = 'color';
const arrayCoresPaleta = ['black', 'blue', 'red', 'green'];

// Definir cores do array na paleta, e definir classe COLOR como padrão
function definirClasseColorECorInicial() {
  for (let index3 = 0; index3 < arrayPixelsCoresPaleta.length; index3 += 1) {
    arrayPixelsCoresPaleta[index3].className = classeColor;
    arrayPixelsCoresPaleta[index3].style.backgroundColor = arrayCoresPaleta[index3];
  }
}
definirClasseColorECorInicial();

// Definir a classe SELECTED inicialmente na cor preta
arrayPixelsCoresPaleta[0].className = classesColorSelected;

// Redefinir classe COLOR a todas das divs da paleta e definir classe SELECTED somente na div Clicada.
function definirSelected(evento) {
  const atual = evento.target;
  arrayPixelsCoresPaleta[0].className = classesColorSelected;
  for (let index4 = 0; index4 < arrayPixelsCoresPaleta.length; index4 += 1) {
    arrayPixelsCoresPaleta[index4].className = classeColor;
  }
  atual.className += ' selected';
}

arrayPixelsCoresPaleta[0].addEventListener('click', definirSelected);
arrayPixelsCoresPaleta[1].addEventListener('click', definirSelected);
arrayPixelsCoresPaleta[2].addEventListener('click', definirSelected);
arrayPixelsCoresPaleta[3].addEventListener('click', definirSelected);

// Aplicar o background da classe SELECTED a cada PIXEL que for clicado no PIXEL-BOARD
function colorirPixel(clicado) {
  const pixelAtual = clicado.target;
  const corSelected = document.querySelector('.selected');
  pixelAtual.style.backgroundColor = corSelected.style.backgroundColor;
}
const recebeClick = document.querySelectorAll('.pixel');
for (let index5 = 0; index5 < recebeClick.length; index5 += 1) {
  recebeClick[index5].addEventListener('click', colorirPixel);
}
