let valorInicial = '';
let operador = '';
let primeiroOperador = null;

function numero(number) {
  valorInicial += number;
  updateDisplay(valorInicial);
}

function colocaOperador(op) {
  if (valorInicial === '') return;
  if (primeiroOperador === null) {
    primeiroOperador = parseFloat(valorInicial);
  } else {
    calcular();
  }
  operador = op;
  valorInicial = '';
}

function calcular() {
  if (primeiroOperador === null || valorInicial === '') return;
  const segundoOperador = parseFloat(valorInicial);
  let resultado;
  switch (operador) {
    case '+':
      resultado = primeiroOperador + segundoOperador;
      break;
    case '-':
      resultado = primeiroOperador - segundoOperador;
      break;
    case '*':
      resultado = primeiroOperador * segundoOperador;
      break;
    case '/':
      resultado = primeiroOperador / segundoOperador;
      break;
  }
  valorInicial = resultado.toString();
  primeiroOperador = resultado;
  updateDisplay(valorInicial);
}

function limpaTela() {
  valorInicial = '';
  primeiroOperador = null;
  operador = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  document.getElementById('tela').innerText = value;
}
