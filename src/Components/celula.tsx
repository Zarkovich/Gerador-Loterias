import styled from "styled-components";

// !Styled
const Container = styled.div`
  width: 50px;
  height: 50px;
`;

interface Circulo {
  background?: string;
}

const Circulo = styled.span<Circulo>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.background === "mega" ? "green" : "blueviolet"};
  color: white;

  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

// * Componente
function Celula({ numero, jogo }: { numero: number; jogo?: string }) {
  return (
    <Container>
      <Circulo background={jogo}>{numero}</Circulo>
    </Container>
  );
}

export default Celula;
