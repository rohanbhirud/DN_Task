import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CreateUpdate from './components/CreateUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<CreateUpdate />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
