import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { urlBD } from './helpers/url';

const DivContainerRegistro = styled.div`
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
    height: 100vh;
  }
  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

const DivImgPrincipal = styled.div`
  margin: 25px auto;
  width: 70px;
  height: 70px;
  @media (min-width: 623px) {
    width: 140px;
    height: 140px;
  }
`;

const DivLogin = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  padding: 10px;
  @media (min-width: 623px) {
    width: 600px;
  }
`;

const Titulo = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
`;

const BtnGoogle = styled.button`
  background-color: #ef4565;
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
const BtnAcceso = styled.button`
  background-color: #2cb67d;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background-color: #228d61;
  }
`;
const FormCorreo = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #94a1b2;
  margin: 10px 0;
`;
const LabelForm = styled.label`
  margin: 8px 0 -2px 0;
  padding: 0 0 16px;
`;
const InputForm = styled.input`
  height: 48px;
  border: none;
  border-radius: 4px;
  font-weight: 400;
  color: #72757e;
  padding: 0 8px;
`;
const SpanOlvido = styled.span`
  color: black;
  text-decoration: underline;
  text-align: center;
  margin: 32px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    color: #228d61;
  }
`;
const PInscribirse = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 48px 0;
`;

const SpanInscribirse = styled.span`
  color: #2cb67d;
  text-decoration: none;
  text-align: center;
  margin: 32px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    color: #228d61;
  }
`;

const Registro = ({ setUsuarioSeleccionado, setusuariosAdmin }) => {
  const [userBD, setUserBD] = useState();
  const [usuario, setUsuario] = useState({
    correo: '',
    isAdd: false,
  });

  setusuariosAdmin(userBD);

  

  const getData = () => {
    axios
      .get(urlBD)
      .then((resp) => {
        setUserBD(resp.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const { isAdd, correo } = usuario;

  const handleSubmit = (e) => {
    e.preventDefault();
    usuarioExiste(usuario.correo.toString());
    
  };

  const usuarioExiste = (correoIngresado) => {
    const resultadoBusqueda = userBD.find((el) =>
      el.correo.toString().toLowerCase().includes(correoIngresado.toLowerCase())
    );
    if (resultadoBusqueda.correo === usuario.correo.toString()) {
      
      setUsuario({
        isAdd: true,
      });
    }
    
    setUsuarioSeleccionado(resultadoBusqueda);
  };

  const handleChange = ({ target }) => {
    setUsuario({
      ...usuario,
      [target.name]: [target.value],
    });
   
  };

  return (
    <DivContainerRegistro>
      <DivImgPrincipal>
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1648404167/dailyBits/images/Color_Purple_Container_Yes_yr4trz.png'
          alt='imgtop'
        />
      </DivImgPrincipal>
      <DivLogin>
        <Titulo>Iniciar sesi??n</Titulo>
        <BtnGoogle>Continuar con Google</BtnGoogle>
        <FormCorreo onSubmit={handleSubmit}>
          <LabelForm htmlFor=''>Correo electr??nico</LabelForm>
          <InputForm
            name='correo'
            type='text'
            value={correo}
            placeholder='Ingrese su correo Electronico'
            onChange={handleChange}
          />
        </FormCorreo>
        {isAdd && (
          <BtnAcceso>
            <Link to='/categorias'>Empieza a Jugar</Link>
          </BtnAcceso>
        )}

        <PInscribirse>
          ??A??n no tienes una cuenta?{' '}
          <SpanInscribirse>
            <Link to='/inscribirse'> Inscribirse</Link>
          </SpanInscribirse>{' '}
        </PInscribirse>
        <SpanOlvido>
          {' '}
          <Link to='/adminuser'> Panel Admin </Link>
        </SpanOlvido>
      </DivLogin>
    </DivContainerRegistro>
  );
};

export default Registro;
