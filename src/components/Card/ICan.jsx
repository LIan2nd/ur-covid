import React from 'react'

const ICan = ({ children }) => {
  return (
    <div className='bg-white w-[300px] h-[300px] min-[992px]:w-[320px] min-[992px]:h-[320px] rounded-sm text-black p-4'>
      {children}
    </div>
  )
}

export default ICan;