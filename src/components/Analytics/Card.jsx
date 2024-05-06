
function Card(props) {
  const { status, total, color } = props;
  const totalStyle = `text-4xl font-bold ${color}`

  return (
    <div className='m-auto w-full h-[250px] flex flex-col justify-center bg-white p-8 rounded-xl shadow-lg hover:scale-105 ease-in-out duration-200'>
      <h1 className='text-2xl mb-2'>{status}</h1>
      <p className={totalStyle}>{total}</p>
    </div>
  )
}

export default Card;