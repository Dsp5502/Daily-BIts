import {
  faHouse,
  faUser,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const DivNavBar = styled.div`
  border: solid 1px red;
  display: flex;
  position: absolute;
  width: 411px;
  height: 69px;
  bottom: 0px;
  color: white;
  justify-content: center;
  align-items: flex-end;
  background-color: #232e35;
  margin: 0;
  padding: 0;
`;

const DivIconos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 15px 40px;
  text-align: center;
  margin-top: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

const NavBar = () => {
  return (
    <DivNavBar>
      <DivIconos>
        <FontAwesomeIcon icon={faHouse} />
        <span>Home</span>
      </DivIconos>
      <DivIconos>
        <FontAwesomeIcon icon={faWaveSquare} />

        <span>Estadisticas</span>
      </DivIconos>
      <DivIconos>
        <FontAwesomeIcon icon={faUser} />
        <span>Perfil</span>
      </DivIconos>
    </DivNavBar>
  );
};

export default NavBar;
