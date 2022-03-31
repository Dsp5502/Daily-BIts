import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { urlBD } from './helpers/url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  cursor: pointer;
`;

const AdminUSer = ({ usuariosAdmin, setusuariosAdmin }) => {
  const navigate = useNavigate();

  const deleteData = (id) => {
    axios
      .delete(urlBD + id)
      .then((resp) => {
        console.log(resp);
        navigate('/adminuser');
      })
      .catch((err) => console.log(err));

    toast.warn('Usuario Eliminado!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <DivAdminUser>
      <Link to='/registro'>
        <h1>Admin</h1>
      </Link>
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
              <EliminarUser onClick={() => deleteData(usuario.id)}>
                ELIMINAR
              </EliminarUser>
              <ToastContainer />
            </DivEsta>
          </DivUser>
        );
      })}
    </DivAdminUser>
  );
};

export default AdminUSer;
