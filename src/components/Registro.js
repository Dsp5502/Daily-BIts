import React from 'react';
import styled from 'styled-components';

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
  color: #2cb67d;
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
  margin: 0 0 32px;
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

const Registro = () => {
  return (
    <DivContainerRegistro>
      <DivImgPrincipal>
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1648404167/dailyBits/images/Color_Purple_Container_Yes_yr4trz.png'
          alt='imgtop'
        />
      </DivImgPrincipal>
      <DivLogin>
        <Titulo>Iniciar sesión</Titulo>
        <BtnGoogle>Continuar con Google</BtnGoogle>
        <FormCorreo>
          <LabelForm htmlFor=''>Correo electrónico</LabelForm>
          <InputForm type='text' placeholder='Ingrese su correo Electronico' />
        </FormCorreo>
        <SpanOlvido>¿Se te olvidó tu contraseña?</SpanOlvido>
        <PInscribirse>
          ¿Aún no tienes una cuenta?{' '}
          <SpanInscribirse>Inscribirse</SpanInscribirse>{' '}
        </PInscribirse>
      </DivLogin>
    </DivContainerRegistro>
  );
};

export default Registro;
