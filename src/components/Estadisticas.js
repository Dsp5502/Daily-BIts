import styled from 'styled-components';
import NavBar from './NavBar';

const DivContainerEstadisticas = styled.div`
  /* border: solid 1px red; */
  width: 411px;
  height: 95vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin: 0 auto;

  @media (min-width: 623px) {
    width: 100%;
    height: 95vh;
  }
  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

const DivTitulo = styled.div`
  width: 360px;
  height: 62px;
`;

const TituloEstadisticas = styled.p`
  /* border: solid 1px red; */
  width: 328px;
  height: 30px;
  text-align: start;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
`;

const Select1 = styled.select`
  width: 178px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 16px;
  background-color: black;
  color: white;
  border: none;
`;
const DivEstadistica = styled.div`
  /* border: solid 1px red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  width: 360px;
  height: 372px;
  margin-top: 65px;
`;
const ContainerResultado = styled.div`
  width: 328px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #94a1b2;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 20px;
`;

const SpanDatos = styled.span`
  width: 10px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  letter-spacing: 0.005em;
`;

const Estadisticas = ({ usuarioSeleccionado }) => {
  console.log(usuarioSeleccionado);
  const { horas, contestadas, correctas, incorrectas } = usuarioSeleccionado;

  return (
    <DivContainerEstadisticas>
      <DivTitulo>
        <TituloEstadisticas>Estadisticas</TituloEstadisticas>
        <Select1>
          <option value=''>Los últimos 7 dias</option>
        </Select1>
      </DivTitulo>
      <DivEstadistica>
        <ContainerResultado>
          <div>Tiempo de estudio(horas)</div>
          <SpanDatos>{horas}</SpanDatos>
        </ContainerResultado>
        <ContainerResultado>
          Respuestas contestadas <SpanDatos>{contestadas}</SpanDatos>
        </ContainerResultado>
        <ContainerResultado>
          Respuestas correctas{' '}
          <SpanDatos style={{ color: 'green' }}>{correctas}</SpanDatos>
        </ContainerResultado>
        <ContainerResultado>
          Respuestas incorrectas{' '}
          <SpanDatos style={{ color: 'red' }}>{incorrectas}</SpanDatos>
        </ContainerResultado>
      </DivEstadistica>
      <NavBar />
    </DivContainerEstadisticas>
  );
};

export default Estadisticas;
