const Navbar = () => {
  return (
    <nav className='px-12 py-4 flex flex-col md:flex-row md:justify-between'>
      <h1 className='w-full text-[#FFD166] text-3xl mb-4 font-bold m-4'>UR COVID.</h1>
      <ul className='uppercase md:flex md:justify-between text-white'>
        <li className='p-4 md:mx-4 border-b border-black md:border-none cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Global</li>
        <li className='p-4 md:mx-4 border-b border-black md:border-none cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Indonesia</li>
        <li className='p-4 md:mx-4 border-b border-black md:border-none cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Provinsi</li>
        <li className='p-4 md:mx-4 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>About</li>
      </ul>
    </nav>
  )
}

export default Navbar;