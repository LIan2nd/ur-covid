import { useEffect, useState } from 'react';
import SituationsCards from './../components/Situations/SituationsCards';
import AnotherSituations from '../components/Situations/AnotherSituations';
import Hero from '../components/Hero/Hero';
import axios from 'axios';
import ENDPOINTS from '../utils/constants/endpoints';

function HomePage() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchGlobalSituations() {
      await axios.get(ENDPOINTS.global).then((res) => {
        setDatas(res.data.global);
      }).catch(err => console.error(err));
    }

    fetchGlobalSituations();
  }, []);

  return (
    <div>
      <Hero />
      <SituationsCards datas={datas} title="Global" />
      <AnotherSituations title="Global" />
    </div>
  );
}

export default HomePage;
