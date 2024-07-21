import Hero from "../../components/Hero/Hero";
import SituationsTable from "../../components/Situations/SituationsTable";
import Form from './../../components/Form/Form';
import data from './../../utils/constants/provinces';
import { useContext, useEffect } from "react";
import ProvincesContext from "../../components/Context/ProvincesContext";

const Provinsi = () => {

  const { setProvinsi } = useContext(ProvincesContext);
  useEffect(() => {
    setProvinsi(data.provinces);
  }, [])

  return (
    <>
      <Hero />
      <SituationsTable />
      <Form />
    </>
  )
}

export default Provinsi