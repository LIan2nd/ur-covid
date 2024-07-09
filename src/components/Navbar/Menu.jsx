import { Link } from "react-router-dom"

const Menu = (props) => {

  const { addClass } = props

  const styles = `uppercase p-4 text-white md:p-0 md:flex md:justify-between ${addClass}`

  return (
    <ul className={styles}>
      <Link to='/'><li className='p-4 border-b border-gray-600 md:border-0 md:mx-4 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Global</li></Link>
      <Link to='/situation/indonesia'><li className='p-4 border-b border-gray-600 md:border-0 md:mx-4 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Indonesia</li></Link>
      <Link to='/situation/provinsi'><li className='p-4 border-b border-gray-600 md:border-0 md:mx-4 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>Provinsi</li></Link>
      <Link to='/about'><li className='p-4 border-b border-gray-600 md:border-0 md:mx-4 cursor-pointer hover:text-[#FFD166] transition ease-in-out duration-200'>About</li></Link>
    </ul>
  )
}

export default Menu