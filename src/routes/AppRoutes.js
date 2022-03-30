import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorias from '../components/Categorias';
import Estadisticas from '../components/Estadisticas';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import Perfil from '../components/Perfil';
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/registro'
          element={<Registro setUsuarioSeleccionado={setUsuarioSeleccionado} />}
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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
