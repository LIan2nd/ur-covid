import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SituationsContext from './components/Context/SituationsContext';
import Layout from "./layout/layout";
import HomePage from "./pages/Home";
import Indonesia from './pages/Situations/Indonesia';
import Provinsi from './pages/Situations/Provinsi';
import About from './pages/About';
import data from './utils/constants/provinces';

function App() {

  const [provinsi, setProvinsi] = useState(data.provinces);

  const contextValue = {
    provinsi,
    setProvinsi
  }

  return (
    <div>
      <SituationsContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/situation/provinsi' element={<Provinsi />} />
            <Route path='/situation/indonesia' element={<Indonesia />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Layout>
      </SituationsContext.Provider>
    </div>
  );
}

export default App;
