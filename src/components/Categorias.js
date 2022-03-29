import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';

const DivContainerCategorias = styled.div`
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

const DivTitle = styled.div`
  width: 318px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.0015em;
  @media (min-width: 623px) {
    width: 300px;
    height: 90;
  }
`;

const DivLogos = styled.div`
  width: 220px;
  height: 80vh;
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  margin: 0px 100px;
  padding: 30px 20px;
`;

const DivlogoSelec = styled.div`
  /* border: 1px solid red; */
  width: 100px;
  height: 100px;
  text-align: center;
  margin: 0 auto;
`;

const ImgLogo = styled.img`
  margin: 0 auto;
  cursor: pointer;
`;

const TitleLogo = styled.h5`
  color: #fffffe;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.005em;
`;

const Categorias = () => {
  return (
    <DivContainerCategorias>
      <DivTitle>
        <p>Practica tus conocimientos en la categoría que prefieras.</p>
      </DivTitle>
      <DivLogos>
        <DivlogoSelec>
          <ImgLogo
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1648435350/dailyBits/images/Ellipse_2_avq8da.png'
            alt='figma'
          />
          <TitleLogo>Figma</TitleLogo>
        </DivlogoSelec>
        <DivlogoSelec>
          <ImgLogo
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1648435350/dailyBits/images/Elzlipse_2_xiwmj1.png'
            alt='ux'
          />
          <TitleLogo>UX</TitleLogo>
        </DivlogoSelec>
        <DivlogoSelec>
          <ImgLogo
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1648435350/dailyBits/images/Ellipse_ni6pz6.png'
            alt='css'
          />
          <TitleLogo>CSS</TitleLogo>
        </DivlogoSelec>
        <DivlogoSelec>
          <ImgLogo
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1648435350/dailyBits/images/Ellipse_4_q9mest.png'
            alt='js'
          />
          <TitleLogo>JS</TitleLogo>
        </DivlogoSelec>
        <Link to='/preguntaHtml'>
          <DivlogoSelec>
            <ImgLogo
              src='https://res.cloudinary.com/djjgtili7/image/upload/v1648435350/dailyBits/images/Ellipse_9_yqvk4a.png'
              alt='html'
            />
            <TitleLogo>HTML</TitleLogo>
          </DivlogoSelec>
        </Link>
      </DivLogos>
      <NavBar />
    </DivContainerCategorias>
  );
};

export default Categorias;
