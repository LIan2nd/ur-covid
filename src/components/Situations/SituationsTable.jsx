import { useContext } from 'react';
import ProvincesContext from '../Context/ProvincesContext';
import RowData from '../Table/RowData';

function SituationsTable(props) {
  const { isLoading } = props;

  const { provinsi } = useContext(ProvincesContext);

  return (
    <div className='text-center py-16'>
      <h1 className='text-4xl min-[992px]:text-6xl font-medium text-[#FFD166]'>Provinsi</h1>
      <h2 className='text-[#118AB2] text-lg min-[992px]:text-xl mb-8'>Data Covid berdasarkan Provinsi</h2>
      <div>
        {isLoading && <p className='text-white text-xl'>Loading...</p>}
        {!isLoading && <table className='text-sm md:text-lg min-[992px]:text-xl cursor-default mx-auto table-auto border border-gray-500 w-[90%]'>
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
            <RowData provinsi={provinsi} />
          </tbody>
        </table>}
      </div>
    </div >
  )
}

export default SituationsTable;