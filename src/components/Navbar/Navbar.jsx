import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Menu from './Menu';
import Logo from './Logo';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='px-12 py-4 flex justify-between items-center border-b border-white'>
      <Logo />
      <Menu addClass="hidden" />
      <div onClick={handleNav} className='block text-white md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#073b4C] ease-in-out duration-500' : 'fixed w-[60%] h-full top-0 left-[-100%] ease-in-out duration-500'}>
        <Logo />
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar;