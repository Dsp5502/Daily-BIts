import React from 'react';
import styled from 'styled-components';

const DivAdminUser = styled.div`
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

const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImPerfil = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px 15px;
  border-radius: 500px;
`;

const DivFoto = styled.div`
  display: flex;
  width: 360px;
  height: 100px;
  margin: 10px 15px;
  border: 2px solid #94a1b2;
  box-shadow: 0px 2px 0px #94a1b2;
`;

const TituloNombre = styled.h2`
  margin: 15px 0 5px;
`;
const DivDatosPerfil = styled.div`
  width: 330px;
  height: 100px;
  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
  /* border: solid 1px red; */
  padding: 0 16px;
  text-align: center;
  border-left: 2px solid #94a1b2;
`;

const DivEsta = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 160px;
  margin: 10px 15px;
  border: 2.5px solid #94a1b2;
  box-shadow: 0px 2px 0px #94a1b2;
  padding: 10px 0;
`;
const PEsta = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  margin: 0 15px;
`;
const EliminarUser = styled.button`
  background-color: red;
  border: none;
  margin: 15px;
  padding: 5px 0;
  color: white;
`;

const AdminUSer = ({ usuariosAdmin }) => {
  console.log(usuariosAdmin);
  return (
    <DivAdminUser>
      <h1>Admin</h1>
      {usuariosAdmin.map((usuario) => {
        return (
          <DivUser key={usuario.id}>
            <DivFoto>
              <ImPerfil src={usuario.imagen} alt='' />
              <DivDatosPerfil>
                <TituloNombre>{usuario.nombre}</TituloNombre>
                <p>{usuario.correo}</p>
              </DivDatosPerfil>
            </DivFoto>
            <DivEsta>
              <PEsta>
                Tiempo de estudio(horas): <span>{usuario.horas}</span>
              </PEsta>
              <PEsta>
                Respuestas contestadas: <span>{usuario.contestadas}</span>
              </PEsta>
              <PEsta>
                Respuestas correctas: <span>{usuario.correctas}</span>
              </PEsta>
              <PEsta>
                Respuestas incorrectas: <span>{usuario.incorrectas}</span>
              </PEsta>
              <EliminarUser>ELIMINAR</EliminarUser>
            </DivEsta>
          </DivUser>
        );
      })}
    </DivAdminUser>
  );
};

export default AdminUSer;
