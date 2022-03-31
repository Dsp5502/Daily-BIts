import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { urlBD } from './helpers/url';

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
  border: 1px solid red;

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
  border: 1px solid red;
`;

const FormAdd = styled.form`
  width: 360px;
  height: 300px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin: 15px;
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
    setUserNew({
      nombre: '',
      correo: '',
      imagen: '',
    });
  };

  const handleChange = ({ target }) => {
    console.log(target.value);
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
      <TituloNombre>Inscribirse</TituloNombre>
      <FormAdd onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type='text'
          name='nombre'
          onChange={handleChange}
          value={nombre}
        />
        <label>Correo</label>
        <input
          type='text'
          name='correo'
          onChange={handleChange}
          value={correo}
        />
        <label>Foto Perfil</label>
        <input
          type='text'
          name='imagen'
          onChange={handleChange}
          value={imagen}
        />
        <button type='submit'>AGREGAR</button>
      </FormAdd>
    </DivInsc>
  );
};

export default Inscribirse;
