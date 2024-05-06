function Button(props) {
  const { title } = props;

  return <button className='bg-[#FFD166] text-black font-medium rounded-md w-[150px] my-6 mx-auto px-6 py-3 hover:bg-[black] hover:text-[#FFD166] transition ease-in-out duration-200'>{title}</button>;
}

export default Button;
