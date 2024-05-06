
function Alert(props) {
  const { message } = props

  return (
    <>
      <p className='text-sm mt-[-8px] mb-2 text-pink-700'>{message}</p>
    </>
  )
}

export default Alert;