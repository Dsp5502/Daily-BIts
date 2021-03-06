import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import preguntasJS from '../../data/dbQuestion2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { urlBD } from '../helpers/url';

const DivMevnPregunta = styled.div`
  /* border: solid 1px red; */
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
  /* border: solid 1px red; */
  padding: 0 16px;
`;

const DivOpciones = styled.div`
  /* border: solid 1px red; */
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

const JuegoFinalizado = styled.div`
  /* border: solid 1px red; */
  width: 411px;
  height: 98vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0 auto;
`;

const JugarDeNuevo = styled.button`
  background-color: rgb(44, 182, 125);
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background-color: #eb163e;
  }
`;

const MevnPregunta = ({
  vidasGlobal,
  setPunto,
  punto,
  setVidasGlobal,
  setfinal,
  final,
  contestadas,
  correctas,
  incorrectas,
  setContestadas,
  setCorrectas,
  setIncorrectas,
  setUsuarioSeleccionado,
  usuarioSeleccionado,
}) => {
  const [preguntaSelect, setPreguntaSelect] = React.useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setfinal(true);
    setContestadas(contestadas + 1);

    if (vidasGlobal === 0) {
      setfinal(true);
    }
    if (preguntaSelect === preguntasJS[1].respuesta) {
      setPunto(punto + 1);
      setCorrectas(correctas + 1);
      toast.success(`??Buen trabajo!`, {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setVidasGlobal(vidasGlobal - 1);
      setIncorrectas(incorrectas + 1);
      toast.error(`La respuesta correcta es: ${preguntasJS[1].respuesta}`, {
        position: 'bottom-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = (target) => {
    
    setPreguntaSelect(target.id);
  };

  const datosJuego = {
    ...usuarioSeleccionado,
    correctas: usuarioSeleccionado.correctas + correctas,
    incorrectas: usuarioSeleccionado.incorrectas + incorrectas,
    contestadas: usuarioSeleccionado.contestadas + contestadas,
  };

  const agregarJuego = () => {
    axios
      .put(urlBD + usuarioSeleccionado.id, datosJuego)
      .then((res) =>
        setUsuarioSeleccionado({
          ...usuarioSeleccionado,
          correctas: usuarioSeleccionado.correctas + correctas,
          incorrectas: usuarioSeleccionado.incorrectas + incorrectas,
          contestadas: usuarioSeleccionado.contestadas + contestadas,
        })
      )
      .catch((err) => console.log(err));

    setfinal(false);
    setContestadas(0);
    setCorrectas(0);
    setIncorrectas(0);
  };

  if (final) {
    return (
      <JuegoFinalizado>
        <h1>Has finalizado el juego</h1>
        <h2>Puntuaci??n: {correctas}</h2>
        <h2>Incorrectas: {incorrectas}</h2>
        <h2>Contestadas: {contestadas}</h2>
        <Link to='/categorias'>
          <JugarDeNuevo
            type='button'
            onClick={() => {
              agregarJuego();
            }}
          >
            Volver a jugar
          </JugarDeNuevo>
        </Link>
      </JuegoFinalizado>
    );
  }

  return (
    <DivMevnPregunta>
      <DivBar>
        <ProgresBar></ProgresBar>
        <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
        <SpanNumVidas>{vidasGlobal}</SpanNumVidas>
      </DivBar>
      <DivPregunta>
        <p>??Qu?? tecnolog??as pertenece al MEVN Stack?</p>
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
          <BtnComprobar type='submit'>Comprobar</BtnComprobar>
          <ToastContainer />
        </DivBotonComp>
      </Form1>
    </DivMevnPregunta>
  );
};

export default MevnPregunta;
