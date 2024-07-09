
function Card(props) {
  const { title, total, color, children } = props;
  const totalStyle = `text-2xl md:text-4xl font-bold ${color} hover:cursor-default`

  return (
    <div className='m-auto w-full h-[350px] flex flex-col justify-center bg-white p-8 rounded-xl shadow-lg hover:scale-105 ease-in-out duration-200'>
      <h1 className='text-2xl md:text-3xl mb-2 hover:cursor-default'>{title}</h1>
      {total ? <p className={totalStyle}>{total}</p> : ''}
      {children}
    </div>
  )
}

export default Card;