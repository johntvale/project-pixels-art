// função criar pixel-board
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

// Criar variáveis contendo as divs da cores principais, atribuir classes de cores
const cor1 = document.getElementsByTagName('div')[1];
const colorSelected = 'color selected';
const color = 'color';
cor1.className = colorSelected;
cor1.style.backgroundColor = 'black';

const cor2 = document.getElementsByTagName('div')[2];
cor2.className = 'color';
cor2.style.backgroundColor = 'blue';

const cor3 = document.getElementsByTagName('div')[3];
cor3.className = 'color';
cor3.style.backgroundColor = 'red';

const cor4 = document.getElementsByTagName('div')[4];
cor4.className = 'color';
cor4.style.backgroundColor = 'green';

// Verifica qual variável tem a class Selected e atribui caso não seja a Selected
function selecionaCor1() {
  if (cor1.className !== colorSelected) {
    cor1.className = colorSelected;
    cor2.className = color;
    cor3.className = color;
    cor4.className = color;
  } else {
    console.log('cor1 selecionada');
  }
}

function selecionacor2() {
  if (cor2.className !== colorSelected) {
    cor1.className = color;
    cor2.className = colorSelected;
    cor3.className = color;
    cor4.className = color;
  } else {
    console.log('cor2 selecionada');
  }
}

function selecionacor3() {
  if (cor3.className !== colorSelected) {
    cor1.className = color;
    cor2.className = color;
    cor3.className = colorSelected;
    cor4.className = color;
  } else {
    console.log('cor3 selecionada');
  }
}

function selecionacor4() {
  if (cor4.className !== colorSelected) {
    cor1.className = color;
    cor2.className = color;
    cor3.className = color;
    cor4.className = colorSelected;
  } else {
    console.log('cor4 selecionada');
  }
}

cor1.addEventListener('click', selecionaCor1);
cor2.addEventListener('click', selecionacor2);
cor3.addEventListener('click', selecionacor3);
cor4.addEventListener('click', selecionacor4);

// Aplicar a classe selecionada a cada célula que for clicada no pixel board
