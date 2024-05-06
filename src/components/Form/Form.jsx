import Button from '../Button/Button';
import FormIlus from './../../assets/undraw_Forms_re_pkrt.png'
import Alert from './Alert';
import { useState } from 'react';

function Form(props) {

  const { provinsi, setProvinsi } = props
  const [kota, setKota] = useState('');
  const [status, setStatus] = useState('');
  const [jumlah, setJumlah] = useState('');

  const [isKotaError, setIsKotaError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleForm(e) {
    e.preventDefault();

    if (kota === '') {
      setIsKotaError(true);
    } else if (status === '') {
      setIsStatusError(true);
    }
    // else if (jumlah === '') {
    //   setIsJumlahError(true);
    // } 
    else {
      const prov = {
        kota: kota, kasus: jumlah,
        sembuh: jumlah, meninggal: jumlah,
        dirawat: jumlah
      }
      setProvinsi([...provinsi, prov]);
      setIsKotaError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
    }
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleKota(e) {
    setKota(e.target.value);
  }

  return (
    <div className="bg-white py-8 px-16 grid md:grid-cols-2 md:gap-8">
      <img className='mb-4 md:mb-0' src={FormIlus} alt='/' />
      <form onSubmit={handleForm}>
        <div className='grid grid-cols-1 p-4'>
          <h1 className='w-full text-3xl font-medium text-[#FFD166] mb-4'>Form Covid</h1>
          <label className='text-gray-500 after:content-["*"] after:text-pink-500 after:ml-0.5' htmlFor='provinsi'>Provinsi</label>
          <input className="
            text-gray-600 border border-[#FFD166] 
              rounded-sm py-1.5 pl-1 focus:ring-1 focus:ring-[#FFD166] focus:outline-none 
              mt-1 mb-4" type='text' name='provinsi' id='provinsi' value={kota} onChange={handleKota} />
          {
            isKotaError && <Alert message='Provinsi is Required' />
          }
          <label className='text-gray-500 after:content-["*"] after:text-pink-500 after:ml-0.5' htmlFor='status'>Status</label>
          <input className="
            text-gray-600 border border-[#FFD166] 
              rounded-sm py-1.5 pl-1 focus:ring-1 focus:ring-[#FFD166] focus:outline-none 
              mt-1 mb-4" type='text' name='status' id='status' value={status} onChange={handleStatus} />
          {
            isStatusError && <Alert message='Status is Required' />
          }
          <label className='text-gray-500 after:content-["*"] after:text-pink-500 after:ml-0.5' htmlFor='jumlah'>Jumlah</label>
          <input className="
            text-gray-600 border border-[#FFD166] 
              rounded-sm py-1.5 pl-1 focus:ring-1 focus:ring-[#FFD166] focus:outline-none 
              mt-1 mb-4" type='number' name='jumlah' id='jumlah' value={jumlah} onChange={handleJumlah} required />
          {
            isJumlahError && <Alert message='Jumlah is Required' />
          }
          <div className='ml-auto'>
            <Button title='Submit' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form;