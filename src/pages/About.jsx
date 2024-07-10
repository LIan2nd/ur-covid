import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import aboutUs from './../assets/about.jpg';
import movieApp from './../assets/movie-app.png'
import ICan from '../components/Card/ICan';
import reactLogo from './../assets/react.png'

const About = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [dummyPost, setDummyPost] = useState('');
  function nextPage() {
    if (page < 251) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    async function fetchDummyJson() {
      setIsLoading(true);
      await axios(`https://dummyjson.com/posts/${page}`).then((res) => {
        setDummyPost(res.data);
        setIsLoading(false);
      }).catch(err => console.error(err));
    }
    fetchDummyJson();
  }, [page])

  return (
    <div className="mb-20">
      <section className="flex flex-wrap items-center justify-center md:justify-between mx-8 md:mx-16 text-white p-4">
        <div className='text-center md:text-left'>
          <p>My name is</p>
          <h1 className="text-9xl">L</h1>
          <p>for LIand. LIand stand for aLfIAn Nur usyaiD</p>
        </div>
        <div className="md:basis-1/2 text-justify">
          <h2 className="text-4xl md:text-6xl font-semibold text-left mt-8 mb-6 text-[#FFD166]">About <span className='line-through'>Me</span> Us.</h2>
          <p className="mb-4">Website ini dibuat karena ditugaskan <strong>Ka Aufa Billah</strong> selaku dosen mata kuliah Pemrograman Frontend sebagai ujian akhir semester. Tanpa adanya <strong>Ka Aufa</strong> sebagai dosen mata kuliah frontend, tidak ada pula website <strong>Ur Covid.</strong> yang telah saya buat ini.</p>
          <p className="mb-4">Dan kurang lebih seperti inilah hasil dari pembelajaran saya di mata kuliah frontend satu semester.</p>
          <p className="">Tentu saja, banyak sekali ilmu yang saya dapatkan di satu semester ini. Banyak juga <em>insight-insight</em> yang diberikan oleh <strong>Ka Aufa</strong> yang membuat saya berkembang sebagai mahasiswa IT.</p>
        </div>
      </section>
      <section className="md:h-[350px] my-5 mx-8 md:mx-16">
        <img className='h-full w-full object-cover object-center rounded-sm' src={aboutUs} alt="Foto bersama SE01-SE02 dengan Ka Aufa dan Asdos" />
      </section>
      <section className="mx-8 md:mx-16 text-white">
        <h2 className='text-4xl font-semibold text-center my-6 text-[#FFD166]'>Thanks to <strong>Ka Aufa Billah</strong> and <strong>Para Asdos</strong></h2>
        <p>Cause now....</p>
        <div className='flex flex-wrap gap-10 my-5 justify-center md:justify-between'>
          <ICan>
            <h2 className='mb-4'>I can make it.</h2>
            <a href="https://l-movie.vercel.app/" target="_blank">
              <img src={movieApp} alt="UTS Project : movie-app" className='h-[200px] object-cover rounded-sm' />
            </a>
          </ICan>
          <ICan>
            <h2>We can do it.</h2>
            <div className="flex justify-between my-3">
              <button onClick={prevPage} className='bg-[#FFD166] text-black font-medium rounded-sm py-1 px-2 hover:bg-[black] hover:text-[#FFD166] transition ease-in-out duration-200'><FaArrowLeft /></button>
              <p className='text-center'>{page}</p>
              <button onClick={nextPage} className='bg-[#FFD166] text-black font-medium rounded-sm py-1 px-2 hover:bg-[black] hover:text-[#FFD166] transition ease-in-out duration-200'><FaArrowRight /></button>
            </div>
            <div className='h-[75%] overflow-y-auto'>
              {isLoading && <p className="text-center text-md basis-80">Loading...</p>}
              {!isLoading && <p className='text-center text-sm basis-80'>{dummyPost.body}</p>}
            </div>
          </ICan>
          <ICan>
            <h2 className='mb-8'>I Love React.</h2>
            <a href="https://react.dev/" target="_blank">
              <img src={reactLogo} alt="React Logo" className='w-[200px] mx-auto' />
            </a>
          </ICan>
          <ICan>
            <h2>I can create it.</h2>
            <h2 className='text-4xl my-4'>Hello World ❣️</h2>
            <h2>Using react.</h2>
          </ICan>
        </div>
      </section>
    </div>
  )
}

export default About;