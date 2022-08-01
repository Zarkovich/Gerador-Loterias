const MegaSena = (quantidade = 6) => {
  let numeros: number[] = [],
    numero;

  while (numeros.length < quantidade) {
    numero = Math.floor(Math.random() * 60) + 1;

    if (numeros.includes(numero)) numero = Math.floor(Math.random() * 60) + 1;
    else numeros.push(numero);
  }

  return numeros.sort((a, b) => a - b);
};

const LotoFacil = (quantidade = 15) => {
  let numeros: number[] = [],
    numero;

  while (numeros.length < quantidade) {
    numero = Math.floor(Math.random() * 25) + 1;

    if (numeros.includes(numero)) numero = Math.floor(Math.random() * 25) + 1;
    else numeros.push(numero);
  }

  return numeros.sort((a, b) => a - b);
};

const QuantidadeJogos = (
  jogoTipo: string,
  quantidade: number,
  quantidadeJogos: number
) => {
  const resultado = [];

  if (jogoTipo === "mega") {
    for (let i = 0; i < quantidadeJogos; i++) {
      resultado.push(MegaSena(quantidade));
    }
  } else {
    for (let i = 0; i < quantidadeJogos; i++) {
      resultado.push(LotoFacil(quantidade));
    }
  }

  return resultado;
};

export default QuantidadeJogos;
