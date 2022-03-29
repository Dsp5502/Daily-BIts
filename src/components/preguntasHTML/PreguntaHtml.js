import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const DivContainerCategorias = styled.div`
  border: solid 1px red;
  width: 411px;
  height: 98vh;
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
const DivBar = styled.div`
  border: solid 1px red;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  width: 360px;
  height: 56px;
`;

const ProgresBar = styled.div`
  width: 234px;
  height: 12px;
  left: 56px;
  top: 22px;
  background: #fffffe;
  border-radius: 50px;
  margin: 0 15px;
`;
const SpanNumVidas = styled.div`
  margin: 0 10px;
`;

const DivImagen = styled.div`
  display: flex;
  width: 360px;
  height: 159px;
  padding: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid 1px red;
`;

const ImgMuñeco = styled.img`
  width: 75px;
  height: 159px;
  display: flex;
  align-items: start;
`;
const DivPregunta = styled.div`
  width: 237px;
  height: 160px;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  border: solid 1px red;
  margin-left: 20px;
`;

const DivOpciones = styled.div`
  width: 360px;
  height: 248px;
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 32px;
  margin-top: 50px;
`;

const DivBotonComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 360px;
  height: 82px;
  border: solid 1px red;
`;

const BtnComprobar = styled.button`
  width: 328px;
  height: 50px;
  margin: 10px auto;
  background: #d4caf3;
  border-radius: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.0125em;
  color: white;
`;

const PreguntaHtml = () => {
  return (
    <DivContainerCategorias>
      <DivBar>
        <ProgresBar></ProgresBar>
        <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
        <SpanNumVidas>4</SpanNumVidas>
      </DivBar>
      <DivImagen>
        <ImgMuñeco
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1648404167/dailyBits/images/Property_1_1_pl63sg.png'
          alt='imagenCaricatura'
        />
        <DivPregunta>
          <p>
            ¿Qué etiqueta es semánticamente correcta para el contenido
            principal?
          </p>
        </DivPregunta>
      </DivImagen>
      <DivOpciones></DivOpciones>
      <DivBotonComp>
        <BtnComprobar>Comprobar</BtnComprobar>
      </DivBotonComp>
    </DivContainerCategorias>
  );
};

export default PreguntaHtml;
