import { useEffect, useState } from "react"
import Hero from "../../components/Hero/Hero"
import SituationsCards from "../../components/Situations/SituationsCards"
import SituationsTable from "../../components/Situations/SituationsTable";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

const Indonesia = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchIndonesiaSituations() {
      await axios.get(ENDPOINTS.indonesia)
        .then((res) => {
          setDatas(res.data.indonesia);
        }).catch(err => console.error(err));
    }
    fetchIndonesiaSituations();
  }, [])

  return (
    <>
      <Hero />
      <SituationsCards datas={datas} title="Indonesia" />
      <SituationsTable />
    </>
  )
}

export default Indonesia