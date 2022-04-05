const classColor = 'color';
const PIXEL_BOARD = 'pixel-board';
const classPixel = 'pixel';

// gera cores aleatoriamente
function randomBackGroundColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Cria a paleta de seleção de cores
function createColorPalette() {
  const colorPalette = document.getElementById('color-palette');

  for (let index = 0; index < 4; index += 1) {
    const colorPixel = document.createElement('div');
    colorPixel.className = classColor;
    colorPixel.style.backgroundColor = randomBackGroundColor();
    if (index === 0) {
      colorPixel.classList.add('selected');
      colorPixel.style.backgroundColor = 'black';
    }
    colorPalette.appendChild(colorPixel);
  }
}

// Ajusta as larguras máximas do "pixelBoard" e "mainBoard"
function boardSizeAdjustments(boardLength) {
  const boardPixelLineSize = `${boardLength * 45}px`;
  const mainBoardSize = `${(boardLength * 50)}px`;

  const pixelBoard = document.getElementById(PIXEL_BOARD);
  pixelBoard.style.minWidth = boardPixelLineSize;

  const mainBoard = document.getElementById('main');
  mainBoard.style.minWidth = mainBoardSize;
}

// Cria pixels do "pixelBoard"
function createPixelBoard(boardLength = 5) {
  boardSizeAdjustments(boardLength);

  const pixelBoard = document.getElementById(PIXEL_BOARD);

  for (let lines = 0; lines < boardLength; lines += 1) {
    const pixelsLine = document.createElement('div');
    pixelBoard.appendChild(pixelsLine);

    for (let pixel = 0; pixel < boardLength; pixel += 1) {
      const pixels = document.createElement('div');
      pixels.className = classPixel;
      pixelsLine.appendChild(pixels);
    }
  }
}

// adiciona classe "selected" ao evento clicado e remove dos demais
function changeSelectedColor(event) {
  const colorSelection = document.getElementsByClassName('color');
  for (let index = 0; index < colorSelection.length; index += 1) {
    colorSelection[index].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

// adiciona evento "receber click" na paleta de cores
function addEventChangeSelectedColor() {
  const colorSelection = document.getElementsByClassName('color');
  for (let index = 0; index < colorSelection.length; index += 1) {
    colorSelection[index].addEventListener('click', changeSelectedColor);
  }
}

function changeColor(event) {
  const color = document.getElementsByClassName('selected');
  const pixel = event.target;
  pixel.style.backgroundColor = color[0].style.backgroundColor;
}

// adiciona evento "mudança de cor" ao pixel em "pixelBoard" quando for clicado
function addEventChangeColor() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', changeColor);
  }
}

// limpa o "pixelBoard" quando o botão "limpar" for clicado
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

// adiciona função "limpar quadro" ao botão "limpar"
function addEventClearBoard() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', clearBoard);
}

function minValue(value) {
  if (value > 0 && value < 5) return true;
  return false;
}

function maxValue(value) {
  if (value > 50) return true;
  return false;
}

// altera o tamanho do "pixelBoard" com o botão "VQV"
function changePixelBoardSize() {
  const previousPixelBoard = document.getElementById(PIXEL_BOARD);
  const receivedInput = document.getElementById('board-size');
  if (minValue(receivedInput.value)) {
    previousPixelBoard.textContent = '';
    receivedInput.value = 5;
    createPixelBoard(5);
    addEventChangeColor();
  } else if (maxValue(receivedInput.value)) {
    previousPixelBoard.textContent = '';
    receivedInput.value = 50;
    createPixelBoard(50);
    addEventChangeColor();
  } else if (receivedInput.value >= 5 && receivedInput.value <= 50) {
    previousPixelBoard.textContent = '';
    createPixelBoard(receivedInput.value);
    addEventChangeColor();
  } else alert('Board inválido!');
}

function addEventChangePixelBoardSize() {
  const vqv = document.getElementById('generate-board');
  vqv.addEventListener('click', changePixelBoardSize);
}

window.onload = () => {
  createColorPalette();
  createPixelBoard();
  addEventChangeSelectedColor();
  addEventChangeColor();
  addEventClearBoard();
  addEventChangePixelBoardSize();
};
