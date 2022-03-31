import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import preguntasJS from '../../data/dbQuestion2';

const DivMevnPregunta = styled.div`
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
  /* border: solid 1px red; */
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
const DivPregunta = styled.div`
  width: 330px;
  height: 100px;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  border: solid 1px red;
  padding: 0 16px;
`;

const DivOpciones = styled.div`
  border: solid 1px red;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 360px;
  height: 458px;
`;
const DivSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 144px;
  height: 200px;
  background: rgb(22, 22);
  border: 2px solid #94a1b2;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #94a1b2;
  border-radius: 8px;
  margin: 8px 8px;
  cursor: pointer;
  &:hover {
    border: 2px solid #2cb67d;
    box-shadow: 0px 2px 0px #2cb67d;
  }
  &:active {
    border: 2px solid #228d61;
    box-shadow: 0px 2px 0px #228d61;
  }
`;

const LetraOpcion = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.005em;
  color: #fffffe;
  margin: 32px 0px;
`;

const DivBotonComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 360px;
  height: 82px;
  /* border: solid 1px red; */
  cursor: pointer;
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
  cursor: pointer;
  &:hover {
    background: #7f7991;
  }
`;

const Form1 = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MevnPregunta = ({ vidasGlobal }) => {
  const [preguntaSelect, setPreguntaSelect] = React.useState('');

  console.log(preguntasJS[1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    if (preguntaSelect === preguntasJS[1].respuesta) {
      console.log('correcto');
    } else {
      console.log('incorrecto');
    }
  };

  const handleChange = (target) => {
    console.log(target.id);
    setPreguntaSelect(target.id);
  };

  const comprobar = () => {
    console.log(preguntaSelect);
  };

  return (
    <DivMevnPregunta>
      <DivBar>
        <ProgresBar></ProgresBar>
        <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
        <SpanNumVidas>{vidasGlobal}</SpanNumVidas>
      </DivBar>
      <DivPregunta>
        <p>¿Qué tecnologías pertenece al MEVN Stack?</p>
      </DivPregunta>
      <Form1 onSubmit={handleSubmit}>
        <DivOpciones>
          <DivSelection
            id={preguntasJS[1].a}
            onClick={({ target }) => {
              handleChange(target);
            }}
          >
            <img
              src='https://res.cloudinary.com/djjgtili7/image/upload/v1648404167/dailyBits/images/Property_1_Angular_asw1hz.png'
              alt={preguntasJS[1].a}
            />
            <LetraOpcion>Angular</LetraOpcion>
          </DivSelection>
          <DivSelection
            id={preguntasJS[1].b}
            onClick={({ target }) => {
              handleChange(target);
            }}
          >
            <img
              src='https://res.cloudinary.com/djjgtili7/image/upload/v1648404168/dailyBits/images/Property_1_Vue.js_ntboai.png'
              alt={preguntasJS[1].b}
            />
            <LetraOpcion>{preguntasJS[1].b}</LetraOpcion>
          </DivSelection>
          <DivSelection
            id={preguntasJS[1].c}
            onClick={({ target }) => {
              handleChange(target);
            }}
          >
            <img
              src='https://res.cloudinary.com/djjgtili7/image/upload/v1648404168/dailyBits/images/Property_1_Windows_f1hoh7.png'
              alt={preguntasJS[1].c}
            />
            <LetraOpcion>{preguntasJS[1].c}</LetraOpcion>
          </DivSelection>
          <DivSelection
            id={preguntasJS[1].d}
            onClick={({ target }) => {
              handleChange(target);
            }}
          >
            <img
              src='https://res.cloudinary.com/djjgtili7/image/upload/v1648404168/dailyBits/images/Property_1_Kotlin_sbp3dc.png'
              alt={preguntasJS[1].d}
            />
            <LetraOpcion>{preguntasJS[1].d}</LetraOpcion>
          </DivSelection>
        </DivOpciones>
        <DivBotonComp>
          <BtnComprobar
            type='submit'
            onClick={() => {
              comprobar();
            }}
          >
            Comprobar
          </BtnComprobar>
          <ToastContainer />
        </DivBotonComp>
      </Form1>
    </DivMevnPregunta>
  );
};

export default MevnPregunta;
