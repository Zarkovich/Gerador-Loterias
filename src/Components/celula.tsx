import styled from "styled-components";

const Container = styled.div`
  width: 50px;
  height: 50px;
`;

const Circulo = styled.span`
  text-align: center;
  display: block;
  background-color: #a8ffa8;
  width: 100%;
  height: 100%;
`;

function Celula() {
  return (
    <Container>
      <Circulo>12</Circulo>
    </Container>
  );
}

export default Celula;
