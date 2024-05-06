import Card from './Card';
import Data from './../../utils/constants/indonesia'
import { nanoid } from 'nanoid';

function Indonesia() {

  const indonesia = Data.indonesia;

  return (
    <div className='bg-white text-center p-16'>
      <h1 className='text-4xl font-medium text-[#FFD166]'>Indonesia</h1>
      <h2 className='text-[#118AB2] text-lg mb-8'>Data Covid berdasarkan Indonesia</h2>
      <div className='mx-auto grid md:grid-cols-2 min-[992px]:grid-cols-3 gap-8'>
        {indonesia.map((ind) => {
          let keyId = nanoid();
          return <Card key={keyId} status={ind.status} total={ind.total} color={
            ind.status == 'Positif' ? 'text-blue-500'
              : ind.status == 'Sembuh' ? 'text-green-500'
                : ind.status == 'Meninggal' ? 'text-red-500'
                  : ''
          } />
        })}
      </div>
    </div>
  )
}

export default Indonesia;