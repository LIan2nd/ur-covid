
function Alert(props) {
  const { children, type } = props
  const stylingText = `inline text-sm mb-2 mt-[-8px] ${type === 'error' ? 'text-pink-700'
    : type === 'success' ? 'text-green-500 text-bold text-xl'
      : ''
    }`

  return (
    <>
      <p className={stylingText}>{children}</p>
    </>
  )
}

export default Alert;