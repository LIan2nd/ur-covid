import Button from '../Button/Button';
import FormIlus from './../../assets/undraw_Forms_re_pkrt.png'
import Alert from './Alert';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Form(props) {

  const { provinsi, setProvinsi } = props
  const [kota, setKota] = useState('Select Provinsi');
  const [status, setStatus] = useState('Select Status');
  const [jumlah, setJumlah] = useState(0);

  const [isKotaError, setIsKotaError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleKota(e) {
    setKota(e.target.value);
  }

  function updateStatus() {

    const selectedProvinsi = provinsi[kota]

    console.log(selectedProvinsi);

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
    setProvinsi([...provinsi])
    setKota('Select Provinsi');
    setStatus('Select Status');
    setJumlah(0);
  }

  function handleForm(e) {
    e.preventDefault();

    if (kota === 'Select Provinsi') {
      setIsKotaError(true);
    } else if (status === 'Select Status') {
      setIsKotaError(false);
      setIsStatusError(true);
    } else if (jumlah === 0) {
      setIsKotaError(false);
      setIsStatusError(false);
      setIsJumlahError(true);
    } else {
      updateStatus();
      setIsKotaError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
      setIsSuccess(true);
    }
  }

  function handleIsSuccess() {
    setIsSuccess(false);
  }

  return (
    <div className="bg-white py-8 px-16 grid md:grid-cols-2 md:gap-8">
      <img className='mb-4 md:mb-0' src={FormIlus} alt='/' />
      <form onSubmit={handleForm}>
        <div className='grid grid-cols-1 p-4'>
          <h1 className='w-full text-3xl font-medium text-[#FFD166] mb-4'>Form Covid</h1>
          {isSuccess ? <div className='mt-[-16px] mb-4'><Alert type='success'>Status Successfully Updated!</Alert> <button className='text-bold ml-1 w-5 h-5 text-black text-sm rounded-md bg-[#ef476f] text-bold' type='button' onClick={handleIsSuccess} >x</button></div> : ''}
          <label className='text-gray-500 after:content-["*"] after:text-pink-500 after:ml-0.5' htmlFor='provinsi'>Provinsi</label>
          <select className="
            text-gray-600 border border-[#FFD166] 
              rounded-sm py-1.5 pl-1 focus:ring-1 focus:ring-[#FFD166] focus:outline-none 
              mt-1 mb-4" type='text' name='provinsi' id='provinsi' value={kota} onChange={handleKota}>
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
              mt-1 mb-4" type='text' name='status' id='status' value={status} onChange={handleStatus}>
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
              rounded-sm py-1.5 pl-1 focus:ring-1 focus:ring-[#FFD166] focus:outline-none 
              mt-1 mb-4" type='number' name='jumlah' id='jumlah' value={jumlah} onChange={handleJumlah} min='0' required />
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