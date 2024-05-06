import Indonesia from "../../components/Analytics/Indonesia";
import Provinsi from "../../components/Analytics/Provinsi";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Form2 from "../../components/Form/Form2";
import Hero from './../../components/Hero/Hero'
import Data from './../../utils/constants/provinces'
import { useState } from 'react';

function HomePage() {

  const [provinsi, setProvinsi] = useState(Data.provinces);

  return (
    <div>
      <Hero />
      <Indonesia />
      <Provinsi provinsi={provinsi} setProvinsi={setProvinsi} />
      {/* <Form provinsi={provinsi} setProvinsi={setProvinsi} /> */}
      <Form2 provinsi={provinsi} setProvinsi={setProvinsi} />
    </div>
  );
}

export default HomePage;
