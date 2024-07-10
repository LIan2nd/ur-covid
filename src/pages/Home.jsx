import { useEffect, useState } from 'react';
import SituationsCards from './../components/Situations/SituationsCards';
import AnotherSituations from '../components/Situations/AnotherSituations';
import Hero from '../components/Hero/Hero';
import axios from 'axios';
import ENDPOINTS from '../utils/constants/endpoints';

function HomePage() {

  const [dataGlobal, setDataGlobal] = useState([]);
  const [dataRegions, setDataRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGlobalSituations() {
      await axios.get(ENDPOINTS.global).then((res) => {
        setDataGlobal(res.data.global);
        setDataRegions(res.data.regions);
        setIsLoading(false);
      }).catch(err => console.error(err));
    }
    fetchGlobalSituations();
  }, []);

  return (
    <div>
      <Hero />
      <SituationsCards datas={dataGlobal} title="Global" isLoading={isLoading} />
      <AnotherSituations dataRegions={dataRegions} title="Regions" isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
