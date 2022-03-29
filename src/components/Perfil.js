import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';

const DivContainerPerfil = styled.div`
  /* border: solid 1px red; */
  width: 411px;
  height: 95vh;
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

const TituloPerfil = styled.p`
  /* border: solid 1px red; */
  width: 328px;
  height: 30px;
  text-align: start;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
`;
const DivDatosPerfil = styled.div`
  /* border: solid 1px red; */
  width: 181px;
  height: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImPerfil = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px 0;
  border-radius: 500px;
`;

const SpanNombre = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const PNombre = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

const DivCerrarSesion = styled.div`
  width: 105px;
  height: 24px;
  margin: 15px 0;
`;

const SpanCerrar = styled.span`
  margin: 45px auto;
  color: #ef4565;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
const Perfil = ({ usuarioSeleccionado }) => {
  const { correo, nombre, imagen } = usuarioSeleccionado;
  console.log(usuarioSeleccionado);
  return (
    <DivContainerPerfil>
      <TituloPerfil>Perfil</TituloPerfil>
      <DivDatosPerfil>
        <ImPerfil src={imagen} alt='foto' />
        <SpanNombre>{nombre}</SpanNombre>
        <PNombre>{correo}</PNombre>
      </DivDatosPerfil>
      <DivCerrarSesion>
        <Link to='/'>
          <SpanCerrar>Cerrar Sesión</SpanCerrar>
        </Link>
      </DivCerrarSesion>

      <NavBar />
    </DivContainerPerfil>
  );
};

export default Perfil;
