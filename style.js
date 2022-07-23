function calculadora() {
  const operacao = Number(
    prompt(
      'Escolha uma opção:\n 1- soma (+)\n 2- subtração (-)\n 3- mutiplicação (*)\n 4- divisão real (/)\n 5- divisão inteira (%)\n 6- potenciação (**)'
    )
  );

  if (!operacao || operacao >= 7) {
    alert('erro- operação inválida');
    calculadora();
  } else {
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2) {
      alert('erro- parâmetros inválidos');
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;

        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = n1 - n2;

        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }

      function mutiplicacao() {
        resultado = n1 * n2;

        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisao() {
        resultado = n1 / n2;

        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }

      function divisaoInteira() {
        resultado = n1 % n2;

        alert(`O resto da divisão entre ${n1} e ${n2}  é igual a ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = n1 ** n2;

        alert(`${n1} elevado á ${n2} a pontência é ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1- Sim\n 2- Não');

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais!');
        } else {
          alert('Digite uma opção válida!');
          novaOperacao();
        }
      }
    }
  }

  if (operacao == 1) {
    soma();
  } else if (operacao == 2) {
    subtracao();
  } else if (operacao == 3) {
    mutiplicacao();
  } else if (operacao == 4) {
    divisao();
  } else if (operacao == 5) {
    divisaoInteira();
  } else if (operacao == 6) {
    potenciacao();
  }
}

calculadora();
