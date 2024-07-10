import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProvincesContext from './components/Context/ProvincesContext';
import Layout from "./layout/layout";
import HomePage from "./pages/Home";
import Indonesia from './pages/Situations/Indonesia';
import Provinsi from './pages/Situations/Provinsi';
import About from './pages/About';
import data from './utils/constants/provinces';

function App() {

  const [provinsi, setProvinsi] = useState([]);

  const contextValue = {
    provinsi,
    setProvinsi
  }

  return (
    <div>
      <ProvincesContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/situation/provinsi' element={<Provinsi />} />
            <Route path='/situation/indonesia' element={<Indonesia />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Layout>
      </ProvincesContext.Provider>
    </div>
  );
}

export default App;
