import { useEffect, useState, useContext } from "react"
import ProvincesContext from "../../components/Context/ProvincesContext";
import Hero from "../../components/Hero/Hero"
import SituationsCards from "../../components/Situations/SituationsCards"
import SituationsTable from "../../components/Situations/SituationsTable";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

const Indonesia = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [dataIndonesia, setDataIndonesia] = useState([]);
  const { setProvinsi } = useContext(ProvincesContext);

  useEffect(() => {
    async function fetchIndonesiaSituations() {
      await axios.get(ENDPOINTS.indonesia).then((res) => {
        setDataIndonesia(res.data.indonesia);
        setProvinsi(res.data.regions);
        setIsLoading(false);
      }).catch(err => console.error(err));
    }
    fetchIndonesiaSituations();
  }, []);

  return (
    <>
      <Hero />
      <SituationsCards datas={dataIndonesia} title="Indonesia" />
      <SituationsTable isLoading={isLoading} />
    </>
  )
}

export default Indonesia