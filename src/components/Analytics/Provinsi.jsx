
function Provinsi(props) {

  const { provinsi, setProvinsi } = props

  return (
    <div className=' text-center py-16'>
      <h1 className='text-4xl font-medium text-[#FFD166]'>Provinsi</h1>
      <h2 className='text-[#118AB2] text-lg mb-8'>Data Covid berdasarkan Provinsi</h2>
      <div>
        <table className='text-[12px] mx-auto table-auto border border-gray-500 w-full'>
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
            {provinsi.map((prov, index) => {
              return (
                <tr>
                  <td className='border border-gray-400 p-1 md:p-4'>{index + 1}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{prov.kota}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{prov.kasus}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{prov.sembuh}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{prov.dirawat}</td>
                  <td className='border border-gray-400 p-1 md:p-4'>{prov.meninggal}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Provinsi;