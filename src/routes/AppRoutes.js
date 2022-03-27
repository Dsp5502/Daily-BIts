import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Registro from '../components/Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
