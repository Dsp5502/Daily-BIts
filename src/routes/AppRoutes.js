import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorias from '../components/Categorias';
import Estadisticas from '../components/Estadisticas';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import Perfil from '../components/Perfil';
import Registro from '../components/Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/estadisticas' element={<Estadisticas />} />
        <Route path='/perfil' element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
