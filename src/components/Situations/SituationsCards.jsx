import Card from './../Card/Card';
import { nanoid } from 'nanoid';
import Body from '../Card/Body';
import formatNumber from './../Functions/formatNumbers';

function SituationsCards(props) {
  const { datas, title, isLoading } = props;
  const colors = {
    'confirmed': 'text-blue-500',
    'recovered': 'text-green-500',
    'death': 'text-red-500',
  };

  const renderCards = (datas) => {
    return datas.map((data) => {
      if (data.status) {
        return <Card key={nanoid()} title={data.status} total={formatNumber(data.total)} color={colors[data.status]} />
      } else if (data.numbers) {
        return <Card key={nanoid()} title={data.name}>
          <Body title="confirmed" total={formatNumber(data.numbers.confirmed)} />
          <Body title="recovered" total={formatNumber(data.numbers.recovered)} />
          <Body title="death" total={formatNumber(data.numbers.death)} />
        </Card>
      }
    })
  }

  return (
    <div className='bg-white text-center p-16 w-full'>
      <h1 className='text-4xl min-[992px]:text-6xl font-medium text-[#FFD166] mb-2'>{title} Situation</h1>
      <h2 className='text-[#118AB2] text-lg min-[992px]:text-xl mb-8'>Data Covid Berdasarkan {title}</h2>
      {isLoading && <p className='text-black text-xl text-center'>Loading...</p>}
      {!isLoading &&
        <div className='mx-auto grid md:grid-cols-2 min-[992px]:grid-cols-3 gap-8'>
          {renderCards(datas)}
        </div>
      }
    </div>
  )
}

export default SituationsCards;