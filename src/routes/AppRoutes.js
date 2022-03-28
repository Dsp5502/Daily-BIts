import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorias from '../components/Categorias';
import Formulario from '../components/Formulario';
import Home from '../components/Home';
import Registro from '../components/Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/formulario' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
