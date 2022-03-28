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

const Perfil = () => {
  return (
    <DivContainerPerfil>
      Perfil
      <NavBar />
    </DivContainerPerfil>
  );
};

export default Perfil;
