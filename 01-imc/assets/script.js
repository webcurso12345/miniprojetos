const pesoElement = document.querySelector('#peso');
const alturaElement = document.querySelector('#altura');
const resultadoElement = document.querySelector('#resultado');

document
  .querySelector('.calculateBtn')
  .addEventListener('click', () => {
    const peso = pesoElement.value;
    const altura = alturaElement.value;

    const imc = calculaIMC(peso, altura);

    resultadoElement.innerHTML = `Seu IMC eh de ${imc.numero}.<br>Sua indicacao eh ${imc.indicacao}`;
  })

function calculaIMC(peso, altura) {
  const imc = {numero: 0, indicacao: 0};
  
  imc.numero = peso / (altura*altura);

  if (imc < 18.5) {
    imc.indicacao = 'magreza';
  } else if (imc >= 18.5 && imc <= 24.9) {
    imc.indicacao = 'normal';
  } else if (imc >= 25 && imc <= 29.9) {
    imc.indicacao = 'sobrepeso 1';
  } else if (imc >= 30 && imc <= 39.9) {
    imc.indicacao = 'obesidade 2';
  } else {
    imc.indicacao = 'obesidade grave';
  }

  return imc;
}