import React from 'react';
import styled from 'styled-components';

const DivContainerRegistro = styled.div`
  width: 411px;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;

  @media (min-width: 550px) {
    width: 100%;
    height: 100vh;
  }
`;

const DivImgPrincipal = styled.div`
  margin: 25px auto;
  width: 70px;
  height: 70px;
  @media (min-width: 550px) {
    width: 140px;
    height: 140px;
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
      <div>
        <h5>Iniciar sesión</h5>
        <button>Continuar con Google</button>
        <label htmlFor=''>Correo electrónico</label>
        <input type='text' placeholder='Ingrese su correo Electronico' />
        <span>¿Se te olvidó tu contraseña?</span>
        <p>
          ¿Aún no tienes una cuenta? <span>Inscribirse</span>{' '}
        </p>
      </div>
    </DivContainerRegistro>
  );
};

export default Registro;
