import { useEffect, useState } from 'react';
import SituationsCards from './../components/Situations/SituationsCards';
import AnotherSituations from '../components/Situations/AnotherSituations';
import Hero from '../components/Hero/Hero';
import axios from 'axios';
import ENDPOINTS from '../utils/constants/endpoints';

function HomePage() {

  const [dataGlobal, setDataGlobal] = useState([]);
  const [dataRegions, setDataRegions] = useState([]);

  useEffect(() => {
    async function fetchGlobalSituations() {
      await axios.get(ENDPOINTS.global).then((res) => {
        setDataGlobal(res.data.global);
        setDataRegions(res.data.regions)
      }).catch(err => console.error(err));
    }
    fetchGlobalSituations();
  }, []);

  return (
    <div>
      <Hero />
      <SituationsCards datas={dataGlobal} title="Global" />
      <AnotherSituations dataRegions={dataRegions} title="Regions" />
    </div>
  );
}

export default HomePage;
