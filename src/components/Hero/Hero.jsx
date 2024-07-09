import Button from './../Button/Button'
import HeroIlus from './../../assets/undraw_medical_care_movn-removebg-preview.png'

function Hero() {
  return (
    <div className='py-8 px-16 grid md:grid-cols-2 md:gap-8'>
      <div className='md:my-auto order-1 md:order-none text-right md:text-left'>
        <h1 className='text-left w-full text-4xl min-[992px]:text-6xl font-medium text-[#FFD166] uppercase'>ur covid</h1>
        <h2 className='text-left text-[#118AB2] text-lg min-[992px]:text-xl mb-6'>Monitoring Perkembangan Covid</h2>
        <p className='text-gray-300 text-justify md:text-left min-[992px]:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam sit impedit corporis ea, cum culpa perferendis dolorum, officiis placeat rerum! Ducimus reiciendis ullam ab doloribus quam, porro enim aliquid consequuntur, aliquam excepturi voluptas? In.</p>
        <Button title='Vaccine' />
      </div>
      <div className=''>
        <img className='mb-4 md:mb-0' src={HeroIlus} alt="" />
      </div>
    </div>
  )
}

export default Hero;