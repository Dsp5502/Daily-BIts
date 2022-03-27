import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #7f5af0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 623px) {
    width: 100%;
    height: 100vh;
  }
`;

const Home = () => {
  return (
    <DivContainer>
      <Link to='/registro'>
        {' '}
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1648404167/dailyBits/images/Color_white_Container_No_foilzu.png'
          alt='imagenPrincipal'
        />{' '}
      </Link>
    </DivContainer>
  );
};

export default Home;
