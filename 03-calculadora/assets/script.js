let resultado = 0;
let numeroTemporario = '';
let operacao = '';
let podeDigitarNovoNumero = true;
let primeiraOperacao = false;

function adicionaNumero(numero) {
  if (podeDigitarNovoNumero) {
    numeroTemporario = '';
    podeDigitarNovoNumero = false;
  }

  numeroTemporario = numeroTemporario + numero;
  document.querySelector('#resultado').innerHTML = numeroTemporario;
}

function modificaOperacao(op) {
  operacao = op;

  document.querySelector('#temporario').innerHTML = `${!primeiraOperacao ? numeroTemporario : resultado} ${operacao}`;

  if (!primeiraOperacao) {
    resultado = numeroTemporario;
    primeiraOperacao = true;
  }

  podeDigitarNovoNumero = true;
}

function realizaOperacao() {
  const evalString = `${resultado} ${operacao} ${numeroTemporario}`;
  resultado = eval(evalString);

  document.querySelector('#temporario').innerHTML = `${evalString} =`;
  document.querySelector('#resultado').innerHTML = resultado;

  podeDigitarNovoNumero = true;
}