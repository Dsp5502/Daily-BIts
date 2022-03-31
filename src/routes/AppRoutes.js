import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminUSer from '../components/AdminUSer';
import Categorias from '../components/Categorias';
import Estadisticas from '../components/Estadisticas';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import Inscribirse from '../components/Inscribirse';
import Perfil from '../components/Perfil';
import MevnPregunta from '../components/preguntasHTML/MevnPregunta';
import OrdenarPregunta from '../components/preguntasHTML/OrdenarPregunta';
import PreguntaHtml from '../components/preguntasHTML/PreguntaHtml';
import Registro from '../components/Registro';

function App() {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: 0,
    nombre: 'persona',
    correo: 'correo@correo',
    imagen: 'https://www.knack.com/images/about/default-profile.png',
    horas: 0,
    contestadas: 0,
    correctas: 0,
    incorrectas: 0,
  });
  const [vidasGlobal, setVidasGlobal] = useState(3);
  const [punto, setPunto] = useState(0);
  const [final, setfinal] = useState(false);
  const [contestadas, setContestadas] = useState(0);
  const [correctas, setCorrectas] = useState(0);
  const [incorrectas, setIncorrectas] = useState(0);
  const [usuariosAdmin, setusuariosAdmin] = useState({});

  console.log(punto);
  console.log(vidasGlobal);
  console.log(usuariosAdmin);

  if (final && vidasGlobal === 0) {
    setVidasGlobal(3);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/registro'
          element={
            <Registro
              setUsuarioSeleccionado={setUsuarioSeleccionado}
              setusuariosAdmin={setusuariosAdmin}
            />
          }
        />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route
          path='/estadisticas'
          element={<Estadisticas usuarioSeleccionado={usuarioSeleccionado} />}
        />
        <Route
          path='/perfil'
          element={<Perfil usuarioSeleccionado={usuarioSeleccionado} />}
        />
        <Route
          path='/preguntaHtml'
          element={
            <PreguntaHtml
              setUsuarioSeleccionado={setUsuarioSeleccionado}
              usuarioSeleccionado={usuarioSeleccionado}
              setVidasGlobal={setVidasGlobal}
              vidasGlobal={vidasGlobal}
            />
          }
        />
        <Route
          path='/ordenaPreguntar'
          element={
            <OrdenarPregunta
              vidasGlobal={vidasGlobal}
              setPunto={setPunto}
              punto={punto}
              setVidasGlobal={setVidasGlobal}
              setfinal={setfinal}
              setContestadas={setContestadas}
              setCorrectas={setCorrectas}
              setIncorrectas={setIncorrectas}
              contestadas={contestadas}
              correctas={correctas}
              incorrectas={incorrectas}
            />
          }
        />
        <Route
          path='/mevnpregunta'
          element={
            <MevnPregunta
              vidasGlobal={vidasGlobal}
              setPunto={setPunto}
              punto={punto}
              setVidasGlobal
              setfinal={setfinal}
              final={final}
              setContestadas={setContestadas}
              setCorrectas={setCorrectas}
              setIncorrectas={setIncorrectas}
              contestadas={contestadas}
              correctas={correctas}
              incorrectas={incorrectas}
              setUsuarioSeleccionado={setUsuarioSeleccionado}
              usuarioSeleccionado={usuarioSeleccionado}
            />
          }
        />
        <Route
          path='/adminuser'
          element={<AdminUSer usuariosAdmin={usuariosAdmin} />}
        />
        <Route path='/inscribirse' element={<Inscribirse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
