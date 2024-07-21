import React from 'react'
import { nanoid } from 'nanoid';
import formatNumber from '../Functions/formatNumbers';

const RowData = ({ provinsi }) => {

  return (
    <>
      {/* Inii ko bisaa?? gimanaaa ceritanyaa 😭😭😭 hasil tanya chatgpt */}
      {provinsi.map((prov, index) => {
        const name = prov.name || prov.kota;
        const confirmed = prov.numbers?.confirmed || prov.kasus;
        const recovered = prov.numbers?.recovered || prov.sembuh;
        const treatment = prov.numbers?.treatment || prov.dirawat;
        const death = prov.numbers?.death || prov.meninggal;

        return (
          <tr key={nanoid()} className='hover:bg-[#FFD166] hover:text-black transition-all duration-100'>
            <td className='border border-gray-400 p-1 md:p-4'>{index + 1}</td>
            <td className='border border-gray-400 p-1 md:p-4'>{name}</td>
            <td className='border border-gray-400 p-1 md:p-4'>{formatNumber(confirmed)}</td>
            <td className='border border-gray-400 p-1 md:p-4'>{formatNumber(recovered)}</td>
            <td className='border border-gray-400 p-1 md:p-4'>{formatNumber(treatment)}</td>
            <td className='border border-gray-400 p-1 md:p-4'>{formatNumber(death)}</td>
          </tr>
        );
      })}
    </>
  )
}

export default RowData