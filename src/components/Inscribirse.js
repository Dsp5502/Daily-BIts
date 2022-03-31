import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { urlBD } from './helpers/url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DivInsc = styled.div`
  width: 411px;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin: 0 auto;
  /* border: 1px solid red; */

  @media (min-width: 623px) {
    width: 100%;
    height: 100vh;
  }
  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

const TituloNombre = styled.h1`
  margin: 15px 0 5px;
  width: 411px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  /* border: 1px solid red; */
`;

const FormAdd = styled.form`
  width: 360px;
  height: 450px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const BtnOrden = styled.button`
  background: #2cb67d;
  /* border: 1px solid #94a1b2; */
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
    color: #2cb67d;
    border: 1px solid #2cb67d;
    box-shadow: 0px 2px 0px #2cb67d;
    background: #16161a;
  }
  &:active {
    color: #228d61;
    border: 1px solid #228d61;
    box-shadow: 0px 2px 0px #228d61;
  }
`;

const Inputslabel = styled.label`
  border: 2px solid #94a1b2;
  box-shadow: 0px 2px 0px #94a1b2;
  border-radius: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: white;
  letter-spacing: 0.005em;
  margin: 10px 10px;
  padding: 8px 20px;
`;

const InputsDatos = styled.input`
  /* border: 1px solid red; */
  box-shadow: 0px 2px 0px #94a1b2;
  border-radius: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: gray;
  letter-spacing: 0.005em;
  margin: 10px 10px;
  padding: 8px 20px;
  outline: none;
`;

const Inscribirse = () => {
  const [userNew, setUserNew] = useState({
    nombre: '',
    correo: '',
    imagen: '',
    login: true,
    horas: 0,
    contestadas: 0,
    correctas: 0,
    incorrectas: 0,
  });

  const { nombre, correo, imagen } = userNew;

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    console.log(userNew);
    toast.success('Ya estas registrado a jugar!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setUserNew({
      nombre: '',
      correo: '',
      imagen: '',
    });
  };

  const handleChange = ({ target }) => {
    setUserNew({
      ...userNew,
      [target.name]: target.value,
    });
  };

  const postData = () => {
    axios
      .post(urlBD, userNew)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };

  return (
    <DivInsc>
      <TituloNombre>
        <Link to='/registro'> Inscribirse</Link>
      </TituloNombre>
      <FormAdd onSubmit={handleSubmit}>
        <Inputslabel>Nombre</Inputslabel>
        <InputsDatos
          type='text'
          name='nombre'
          onChange={handleChange}
          value={nombre}
          placeholder='Ingrese Nombre'
        />
        <Inputslabel>Correo</Inputslabel>
        <InputsDatos
          type='text'
          name='correo'
          onChange={handleChange}
          value={correo}
          placeholder='Ingrese Correo'
        />
        <Inputslabel>Foto Perfil</Inputslabel>
        <InputsDatos
          type='text'
          name='imagen'
          onChange={handleChange}
          value={imagen}
          placeholder='Ingrese Url Foto Perfil'
        />
        <BtnOrden type='submit'>AGREGAR</BtnOrden>
        <ToastContainer />
      </FormAdd>
    </DivInsc>
  );
};

export default Inscribirse;
