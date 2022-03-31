import React, { useState } from 'react';
import styled from 'styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import preguntasJS from '../../data/dbQuestion2';

const DivContainerCategorias = styled.div`
  /* border: solid 1px red; */
  width: 411px;
  height: 100vh;
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
  height: 160px;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  /* border: solid 1px red; */
  padding: 0 16px;
`;

const FormOpciones = styled.form`
  width: 360px;
  height: 248px;
  /* border: solid 1px red; */
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

const DivPalabrasSeleccionadas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: flex-start;
  width: 360px;
  height: 266px;
  /* border: 1px solid red; */
`;

const DivPalabraSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 160px;
  height: 40px;
  margin: 16px 0px;
  /* border: 1px solid red; */
`;

const Palabra = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 156px;
  height: 40px;
  background: #16161a;
  border: 1px solid #94a1b2;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #94a1b2;
  border-radius: 16px;
  color: #ef4565;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
`;

const DivElegirOrden = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 5px 32px;
  width: 357px;
  height: 144px;
  /* border: 1px solid red; */
`;
const BtnOrden = styled.button`
  background: #16161a;
  border: 1px solid #94a1b2;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px #94a1b2;
  border-radius: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: white;
  letter-spacing: 0.005em;
  margin: 10px 10px;
  padding: 8px;
  &:hover {
    color: #ef4565;
    border: 1px solid #ef4565;
    box-shadow: 0px 2px 0px #ef4565;
  }
  &:active {
    color: #8f293c;
    border: 1px solid #8f293c;
    box-shadow: 0px 2px 0px #8f293c;
  }
  &:disabled {
    color: #72757e;
    background: #72757e;
    border: 1px solid #72757e;
    box-shadow: 0px 2px 0px #72757e;
  }
`;

const OrdenarPregunta = ({ vidasGlobal }) => {
  const [ordenPalabras, setOrdenPalabras] = useState([]);
  const navigate = useNavigate();

  console.log(vidasGlobal);

  console.log(preguntasJS[0].a);

  const agregar = (e) => {
    console.log(e.target);
    setOrdenPalabras([...ordenPalabras, e.target.value]);
    e.target.disabled = true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      JSON.stringify(ordenPalabras) === JSON.stringify(preguntasJS[0].respuesta)
    ) {
      toast.success(`¡Buen trabajo!`, {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(
        `La respuesta correcta es: ${JSON.stringify(preguntasJS[0].respuesta)}`,
        {
          position: 'bottom-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    setTimeout(() => {
      navigate('/mevnpregunta');
    }, 3000);
  };

  console.log(ordenPalabras);
  return (
    <DivContainerCategorias>
      <DivBar>
        <ProgresBar></ProgresBar>
        <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
        <SpanNumVidas>{vidasGlobal}</SpanNumVidas>
      </DivBar>
      <DivPregunta>
        <p>Organiza la estructura de un documento HTML5</p>
      </DivPregunta>
      <DivPalabrasSeleccionadas>
        {ordenPalabras.map((palabra, index) => (
          <DivPalabraSelect key={index}>
            <Palabra>{palabra}</Palabra>
          </DivPalabraSelect>
        ))}
      </DivPalabrasSeleccionadas>

      <FormOpciones onSubmit={handleSubmit}>
        <DivElegirOrden>
          <BtnOrden
            type='button'
            value={preguntasJS[0].a}
            onClick={(e) => {
              agregar(e);
            }}
          >
            {preguntasJS[0].a}
          </BtnOrden>
          <BtnOrden
            type='button'
            value={preguntasJS[0].b}
            onClick={(e) => {
              agregar(e);
            }}
          >
            {preguntasJS[0].b}
          </BtnOrden>
          <BtnOrden
            type='button'
            value={preguntasJS[0].c}
            onClick={(e) => {
              agregar(e);
            }}
          >
            {preguntasJS[0].c}
          </BtnOrden>
          <BtnOrden
            type='button'
            value={preguntasJS[0].d}
            onClick={(e) => {
              agregar(e);
            }}
          >
            {preguntasJS[0].d}
          </BtnOrden>
          <BtnOrden
            type='button'
            value={preguntasJS[0].e}
            onClick={(e) => {
              agregar(e);
            }}
          >
            {preguntasJS[0].e}
          </BtnOrden>
        </DivElegirOrden>

        <DivBotonComp>
          <BtnComprobar type='submit'>Comprobar</BtnComprobar>
        </DivBotonComp>
      </FormOpciones>
      <ToastContainer />
    </DivContainerCategorias>
  );
};

export default OrdenarPregunta;
