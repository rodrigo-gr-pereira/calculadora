function somar(n1, n2){
  return n1 + n2;
}

function subtrair(n1, n2){
  return n1 - n2;
}

function multiplicar(n1, n2){
  return n1 * n2;
}

function dividir(n1, n2){
  if(n2 == 0){
    return "Não é possível dividir por zero";
  } else {
    return n1 / n2;
  }
}

function calcular(num1, num2, idOperacao){
  let n1 = parseFloat(document.getElementById(num1).value);
  let n2 = parseFloat(document.getElementById(num2).value);
  let operacao = parseInt(document.getElementById(idOperacao).value);

  let resultado;

  switch(operacao){
    case 1:
      resultado = somar(n1, n2);
      break;
    case 2:
      resultado = subtrair(n1, n2);
      break;
    case 3:
      resultado = multiplicar(n1, n2);
      break;
    case 4:
      resultado = dividir(n1, n2);
      break;
    default:
      resultado = "Operação inválida";
  }

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}