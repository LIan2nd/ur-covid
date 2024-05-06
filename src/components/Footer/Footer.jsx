
function Footer() {
  return (
    <div className='py-8 px-12 md:px-16 flex justify-between'>
      <div className='py-4 md:p-0'>
        <h1 className='w-full text-[#FFD166] text-3xl font-bold'>UR COVID.</h1>
        <p className='text-gray-300'>&copy; Developed by LIand</p>
      </div>
      <div className='text-white ml-4'>
        <ul className='grid grid-cols-2 md:grid-cols-4 py-6 gap-4 text-center'>
          <li className='mx-3 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Global</li>
          <li className='mx-3 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Indonesia</li>
          <li className='mx-3 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Provinsi</li>
          <li className='mx-3 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;