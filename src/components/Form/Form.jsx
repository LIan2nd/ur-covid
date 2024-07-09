import { useContext, useState } from 'react';
import Button from '../Button/Button';
import FormIlus from './../../assets/undraw_Forms_re_pkrt.png'
import Alert from './Alert';
import { nanoid } from 'nanoid';
import SituationsContext from '../Context/SituationsContext';

function Form() {

  const { provinsi, setProvinsi } = useContext(SituationsContext);

  const [formData, setFormData] = useState({
    kota: "Select Provinsi",
    status: "Select Status",
    jumlah: 0
  });

  const [isError, setIsError] = useState({
    isKotaError: false,
    isStatusError: false,
    isJumlahError: false,
  });

  const { kota, status, jumlah } = formData;
  const { isKotaError, isStatusError, isJumlahError } = isError;

  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function validate() {
    if (kota === 'Select Provinsi') {
      setIsError({
        ...isError,
        isKotaError: true,
      })
      return false;
    } else if (status === 'Select Status') {
      setIsError({
        ...isError,
        isStatusError: true,
        isKotaError: false,
      });
      return false;
    } else if (jumlah === 0) {
      setIsError({
        isJumlahError: true,
        isStatusError: false,
        isKotaError: false,
      });
      return false;
    } else {
      setIsSuccess(true);
      setIsError({
        isKotaError: false,
        isStatusError: false,
        isJumlahError: false,
      });
      return true;
    }
  }

  function handleIsSuccess() {
    setIsSuccess(false);
  }

  function updateStatus() {
    const selectedProvinsi = provinsi[kota];

    if (status === 'kasus') {
      provinsi[kota] = {
        ...selectedProvinsi,
        kasus: selectedProvinsi.kasus + parseInt(jumlah)
      }
    } else if (status === 'sembuh') {
      provinsi[kota] = {
        ...selectedProvinsi,
        sembuh: selectedProvinsi.sembuh + parseInt(jumlah)
      }
    } else if (status === 'meninggal') {
      provinsi[kota] = {
        ...selectedProvinsi,
        meninggal: selectedProvinsi.meninggal + parseInt(jumlah)
      }
    } else if (status === 'dirawat') {
      provinsi[kota] = {
        ...selectedProvinsi,
        dirawat: selectedProvinsi.dirawat + parseInt(jumlah)
      }
    } else {
      alert('what the dog doin\'?')
    }
    setProvinsi([...provinsi]);
    setFormData({
      kota: "Select Provinsi",
      status: "Select Status",
      jumlah: 0
    });
  }

  function handleForm(e) {
    e.preventDefault();

    validate() && updateStatus();
  }

  return (
    <div className="bg-white py-8 px-16 grid md:grid-cols-2 md:gap-8">
      <img className='mb-4 md:mb-0' src={FormIlus} alt='/' />
      <form onSubmit={handleForm}>
        <div className='grid grid-cols-1 p-4'>
          <h1 className='w-full text-3xl font-medium text-[#FFD166] mb-4'>Form Covid</h1>
          {isSuccess ? <div className='mt-[-16px] mb-4'><Alert type='success'>Status Successfully Updated!</Alert> <button className='text-bold ml-1 w-5 h-5 text-black text-sm rounded-md bg-[#ef476f] text-bold' type='button' onClick={handleIsSuccess} >x</button></div> : ''}
          <label className='text-gray-500 after:content-["*"] after:text-pink-500 after:ml-0.5' htmlFor='kota'>Provinsi</label>
          <select className="
            text-gray-600 border border-[#FFD166] 
              rounded-sm py-1.5 pl-1 focus:ring-1 focus:ring-[#FFD166] focus:outline-none 
              mt-1 mb-4" type='text' name='kota' id='kota' value={kota} onChange={handleChange}>
            <option className='text-4xl' disabled>Select Provinsi</option>;
            {
              provinsi.map((prov, index) => {
                let keyId = nanoid();
                return (
                  <option key={keyId} value={index}>{prov.kota}</option>
                )
              })
            }
          </select>
          {
            isKotaError && <Alert type='error'>Please Select Provinsi</Alert>
          }
          <label className='text-gray-500 after:content-["*"] after:text-pink-500 after:ml-0.5' htmlFor='status'>Status</label>
          <select className="
            text-gray-600 border border-[#FFD166] 
              rounded-sm py-1.5 pl-1 focus:ring-1 focus:ring-[#FFD166] focus:outline-none 
              mt-1 mb-4" type='text' name='status' id='status' value={status} onChange={handleChange}>
            <option className='text-4xl' disabled>Select Status</option>
            <option value="kasus">Kasus</option>
            <option value="sembuh">Sembuh</option>
            <option value="dirawat">Dirawat</option>
            <option value="meninggal">Meninggal</option>
          </select>
          {
            isStatusError && <Alert type='error'>Please Select Status</Alert>
          }
          <label className='text-gray-500 after:content-["*"] after:text-pink-500 after:ml-0.5' htmlFor='jumlah'>Jumlah</label>
          <input className="
            text-gray-600 border border-[#FFD166] 
              rounded-sm py-1.5 pl-2 focus:ring-1 focus:ring-[#FFD166] focus:outline-none 
              mt-1 mb-4" type='number' name='jumlah' id='jumlah' value={jumlah} onChange={handleChange} min='0' required />
          {
            isJumlahError && <Alert type='error'>Jumlah is Required</Alert>
          }
          <div className='ml-auto'>
            <Button type='submit' title='Submit' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form;