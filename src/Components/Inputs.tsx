import { SelectContext } from "../Contexts/Selections.context";
import { useContext } from "react";
import styled from "styled-components";

// ! Style:
const Display = styled.div`
  margin: auto;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  row-gap: 15px;

  width: 300px;
`;

const Jogos = styled.input`
  background-color: transparent;

  outline: none;
  border: 1px solid black;

  text-align: center;

  width: 50px;
`;

const Quantidade = styled.input`
  background-color: transparent;

  outline: none;
  border: 1px solid black;

  text-align: center;

  width: 50px;
`;

const TipoJogo = styled.select`
  background-color: transparent;

  border: 1px solid black;
  border-radius: 6px;
  outline: none;

  padding: 10px;
`;

const Submit = styled.button`
  background-color: #b8ffb8;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.2);

  border-radius: 6px;
  border: 1px solid black;
  outline: none;

  font-weight: bold;

  padding: 10px;

  &:hover {
    background-color: #c4c4c4;
    color: black;
  }
`;

// * Component:

function Inputs() {
  const contexto = useContext(SelectContext);

  const handleJogosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit = 2;
    contexto.setJogo(parseInt(e.target.value.slice(0, limit)));
  };

  const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const limit = 2;
    contexto.setQuantidade(parseInt(e.target.value.slice(0, limit)));
  };

  function handleValueSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    contexto.setJogoTipo(e.target.value);
    if (contexto.jogoTipo === "mega") contexto.setJogo(15);
    else contexto.setJogo(6);
  }

  const handleSubmit = () => {
    contexto.setShowResults(true);
  };

  return (
    <Display>
      <label htmlFor='Jogos'>
        Quantidade de numeros:{" "}
        <Jogos
          type='number'
          value={contexto.jogo}
          onChange={handleJogosChange}
        />
      </label>
      <label htmlFor='Quantidade'>
        Quantidade de Jogos:{" "}
        <Quantidade
          type='number'
          value={contexto.quantidade}
          onChange={handleQuantidadeChange}
        />
      </label>
      <TipoJogo onChange={handleValueSelect}>
        <option value='mega'>Mega-Sena</option>
        <option value='loto'>Loto-Fácil</option>
      </TipoJogo>
      <Submit onClick={handleSubmit}>Gerar!</Submit>
    </Display>
  );
}

export default Inputs;
