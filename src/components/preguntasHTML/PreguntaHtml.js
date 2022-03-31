import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import preguntasDaily from '../../data/dbQuestion';
import '../../eventos.css';
import { urlBD } from '../helpers/url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DivContainerCategorias = styled.div`
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

const DivImagen = styled.div`
  display: flex;
  width: 360px;
  height: 159px;
  padding: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  /* border: solid 1px red; */
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
  /* border: solid 1px red; */
  margin-left: 20px;
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

const DivOpcion = styled.label`
  width: 328px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #232e35;
  border: 2px solid #fffffe;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 16px;
  &:hover {
    border: solid 2px green;
  }
`;

const LetraPregunta = styled.input`
  display: flex;
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

const PreguntaHtml = ({
  setUsuarioSeleccionado,
  usuarioSeleccionado,
  setVidasGlobal,
  vidasGlobal,
}) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [numVidas, setNumVidas] = useState(vidasGlobal);
  const [answerSelect, setAnswerSelect] = useState('');
  const [incorrectas, setIncorrectas] = useState(0);
  const [contestadas, setContestadas] = useState(0);

  console.log(usuarioSeleccionado.id);

  console.log(preguntasDaily[preguntaActual].opciones[0].a);

  const handleChange = ({ target }) => {
    console.log(target.value);
    setAnswerSelect(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hola');
    setContestadas(contestadas + 1);
    setVidasGlobal(numVidas);
    if (finalizado && vidasGlobal === 0) {
      setVidasGlobal(3);
    }
    if (preguntaActual === preguntasDaily.length - 1) {
      setFinalizado(true);
    } else {
      setPreguntaActual(preguntaActual + 1);
    }
  };

  const comprobar = () => {
    if (numVidas === 0) {
      setFinalizado(true);
    } else {
      if (answerSelect === preguntasDaily[preguntaActual].respuesta) {
        setPuntuacion(puntuacion + 1);
        setAnswerSelect('');

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
        setNumVidas(numVidas - 1);
        setIncorrectas(incorrectas + 1);
        setAnswerSelect('');
        toast.error(
          `La respuesta correcta es: ${preguntasDaily[preguntaActual].respuesta}`,
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
    }
  };

  const datosJuego = {
    ...usuarioSeleccionado,
    correctas: usuarioSeleccionado.correctas + puntuacion,
    incorrectas: usuarioSeleccionado.incorrectas + incorrectas,
    contestadas: usuarioSeleccionado.contestadas + contestadas,
  };

  const agregarJuego = () => {
    axios
      .put(urlBD + usuarioSeleccionado.id, datosJuego)
      .then((res) =>
        setUsuarioSeleccionado({
          ...usuarioSeleccionado,
          correctas: usuarioSeleccionado.correctas + puntuacion,
          incorrectas: usuarioSeleccionado.incorrectas + incorrectas,
          contestadas: usuarioSeleccionado.contestadas + contestadas,
        })
      )
      .catch((err) => console.log(err));
  };

  if (finalizado) {
    return (
      <JuegoFinalizado>
        <h1>Has finalizado el juego</h1>
        <h2>Puntuación: {puntuacion}</h2>
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
    <DivContainerCategorias>
      <DivBar>
        <ProgresBar></ProgresBar>
        <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
        <SpanNumVidas>{numVidas}</SpanNumVidas>
      </DivBar>
      <DivImagen>
        <ImgMuñeco
          src={preguntasDaily[preguntaActual].personaje}
          alt='imagenCaricatura'
        />
        <DivPregunta>
          <p>{preguntasDaily[preguntaActual].question}</p>
        </DivPregunta>
      </DivImagen>
      <FormOpciones onSubmit={handleSubmit}>
        <DivOpcion>
          {preguntasDaily[preguntaActual].opciones[0].a}
          <LetraPregunta
            type='radio'
            name='respuestas'
            id={preguntasDaily[preguntaActual].opciones[0].a}
            value={preguntasDaily[preguntaActual].opciones[0].a}
            onChange={handleChange}
          />
        </DivOpcion>
        <DivOpcion htmlFor=''>
          {preguntasDaily[preguntaActual].opciones[1].b}
          <LetraPregunta
            type='radio'
            name='respuestas'
            id={preguntasDaily[preguntaActual].opciones[1].b}
            value={preguntasDaily[preguntaActual].opciones[1].b}
            onChange={handleChange}
          />
        </DivOpcion>
        <DivOpcion htmlFor=''>
          {preguntasDaily[preguntaActual].opciones[2].c}
          <LetraPregunta
            type='radio'
            name='respuestas'
            id={preguntasDaily[preguntaActual].opciones[2].c}
            value={preguntasDaily[preguntaActual].opciones[2].c}
            onChange={handleChange}
          />
        </DivOpcion>

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
      </FormOpciones>
    </DivContainerCategorias>
  );
};

export default PreguntaHtml;
