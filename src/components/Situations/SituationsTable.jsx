import { nanoid } from 'nanoid';
import { useContext } from 'react';
import ProvincesContext from '../Context/ProvincesContext';

function SituationsTable() {

  const { provinsi } = useContext(ProvincesContext);

  return (
    <div className='text-center py-16'>
      <h1 className='text-4xl min-[992px]:text-6xl font-medium text-[#FFD166]'>Provinsi</h1>
      <h2 className='text-[#118AB2] text-lg min-[992px]:text-xl mb-8'>Data Covid berdasarkan Provinsi</h2>
      <div>
        <table className='text-sm md:text-lg min-[992px]:text-xl mx-auto table-auto border border-gray-500 w-[90%]'>
          <thead className='bg-gray-800 text-[#FFD166]'>
            <tr>
              <th className='border border-gray-400 p-1 md:p-4'>No</th>
              <th className='border border-gray-400 p-1 md:p-4'>Provinsi</th>
              <th className='border border-gray-400 p-1 md:p-4'>Kasus</th>
              <th className='border border-gray-400 p-1 md:p-4'>Sembuh</th>
              <th className='border border-gray-400 p-1 md:p-4'>Dirawat</th>
              <th className='border border-gray-400 p-1 md:p-4'>Meninggal</th>
            </tr>
          </thead>
          <tbody className='text-gray-100'>
            {/* Inii ko bisaa?? gimanaaa ceritanyaa 😭😭😭 hasil tanya chatgpt */}
            {provinsi.map((prov, index) => {
              const name = prov.name || prov.kota;
              const confirmed = prov.numbers?.confirmed || prov.kasus;
              const recovered = prov.numbers?.recovered || prov.sembuh;
              const treatment = prov.numbers?.treatment || prov.dirawat;
              const death = prov.numbers?.death || prov.meninggal;

              return (
                <tr key={nanoid()} className='hover:bg-[#FFD166] hover:text-black transition-all duration-100'>
                  <td className='border border-gray-400 p-1 md:p-4'>{index + 1}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{name}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{confirmed}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{recovered}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{treatment}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{death}</td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    </div >
  )
}

export default SituationsTable;