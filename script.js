function pagCarregada() {
  alert('Carregada.');
}
window.onload = pagCarregada;

function criarDivs() {
  let tablePrincipal = document.querySelector('#quadroDePixels');
  for (let index1 = 0; index1 < 5; index1 +=1) {
    for (let index2 = 0; index2 < 5; index2 +=1) {
      let linha = document.createElement('div');
      linha.className = 'pixels';
      tablePrincipal.appendChild(linha);
    }
  }
}

criarDivs();