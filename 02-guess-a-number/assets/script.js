const escolhaElement = document.querySelector('#escolha');
const resultadoElement = document.querySelector('#resultado');

let numeroGerado = geraNumero();
let tentativas = 0;

document
  .querySelector('.btn')
  .addEventListener('click', () => {
    tentativas++;

    const escolha = escolhaElement.value;

    if (escolha > numeroGerado) {
      resultadoElement.innerHTML = `O numero gerado eh menor que ${escolha}`;
    } else if (escolha < numeroGerado) {
      resultadoElement.innerHTML = `O numero gerado eh maior que ${escolha}`;
    } else {
      resultadoElement.innerHTML = `Voce acertou com ${tentativas} tentativas! <br>O numero eh ${numeroGerado}!`;
    }
  })

function geraNumero() {
  return Math.floor(Math.random() * 10) + 1;
}
