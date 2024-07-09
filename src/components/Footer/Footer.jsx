import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='py-8 px-12 md:px-16 flex justify-between items-center border-t border-white'>
      <div className='py-4 md:p-0'>
        <h1 className='w-full text-[#FFD166] text-3xl font-bold'>UR COVID.</h1>
        <p className='text-gray-300'>&copy; Developed by LIand</p>
      </div>
      <div className='text-white ml-4'>
        <ul className='flex flex-col md:flex-row py-6 gap-4 text-left'>
          <li className='mx-3 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'><Link to='/'>Global</Link></li>
          <li className='mx-3 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'><Link to='/situation/indonesia'>Indonesia</Link></li>
          <li className='mx-3 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'><Link to='/situation/provinsi'>Provinsi</Link></li>
          <li className='mx-3 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;