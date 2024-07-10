import Card from './../Card/Card';
import Body from './../Card/Body';

function AnotherSituations(props) {
  const { dataRegions, title, isLoading } = props;

  // mengambil dari gugel, xixi
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  return (
    <div className='text-center p-16'>
      <h1 className='text-4xl font-medium text-[#FFD166] min-[992px]:text-6xl mb-2'>Situation by {title}</h1>
      <h2 className='text-[#118AB2] text-lg min-[992px]:text-xl mb-8'>Data Covid Berdasarkan {title}</h2>
      {isLoading && <p className='text-white text-xl text-center'>Loading...</p>}
      {!isLoading &&
        <div className='mx-auto grid md:grid-cols-2 min-[992px]:grid-cols-3 gap-8'>
          {
            dataRegions.map((data, i) => {
              return (<Card key={i} title={data.title}>
                <Body title="confirmed" total={formatNumber(data.numbers.confirmed)} />
                <Body title="recovered" total={formatNumber(data.numbers.recovered)} />
                <Body title="death" total={formatNumber(data.numbers.death)} />
              </Card>)
            })
          }
        </div>
      }
    </div>
  )
}

export default AnotherSituations;