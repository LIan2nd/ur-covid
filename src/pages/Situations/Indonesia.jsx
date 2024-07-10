import { useEffect, useState, useContext } from "react"
import ProvincesContext from "../../components/Context/ProvincesContext";
import Hero from "../../components/Hero/Hero"
import SituationsCards from "../../components/Situations/SituationsCards"
import SituationsTable from "../../components/Situations/SituationsTable";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

const Indonesia = () => {

  const [dataIndonesia, setDataIndonesia] = useState([]);
  const { provinsi, setProvinsi } = useContext(ProvincesContext);
  const [numbers, setNumbers] = useState({})

  useEffect(() => {
    async function fetchIndonesiaSituations() {
      await axios.get(ENDPOINTS.indonesia).then((res) => {
        const regions = res.data.regions;
        setDataIndonesia(res.data.indonesia);
        setProvinsi(res.data.regions);
        setNumbers(res.data.regions[0].numbers.confirmed);
      }).catch(err => console.error(err));
    }
    fetchIndonesiaSituations();
  }, []);

  return (
    <>
      <Hero />
      <SituationsCards datas={dataIndonesia} title="Indonesia" />
      <SituationsTable />
    </>
  )
}

export default Indonesia