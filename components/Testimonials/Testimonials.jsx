"use client"
import React from 'react'
const orang1 = '/assets/images/Testimonial/orang1.png'
const orang2 = '/assets/images/Testimonial/orang2.png'
const orang3 = '/assets/images/Testimonial/orang3.png'
const orang4 = '/assets/images/Testimonial/orang4.png'
const orang5 = '/assets/images/Testimonial/orang5.png'
const orang6 = '/assets/images/Testimonial/orang6.png'
const orang7 = '/assets/images/Testimonial/orang7.png'
const bg1 = '/assets/images/Testimonial/bg/1.png'
const bg2 = '/assets/images/Testimonial/bg/2.png'
import { useState } from 'react'
const pojokatas =  '/assets/pojokatas.png'
const pojokbwh =  '/assets/pojokbawah.png'




const Testimonials = () => {

  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);


  return (
    <section className="flex bg-no-repeat w-full bg-[#9197ff]"  id='testimonials' style={{ backgroundImage: `url(${bg1})` }}>
      <div className="bg-no-repeat bg-right-bottom mx-auto w-full sm:py-24 lg:px-8" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="mx-auto max-w-full text-center">
          <h2 className="text-5xl max-w-full text-white font-blueberry tracking-tight pb-4">
            Kata mereka tentang #Dimulai
          </h2>

          <p className="text-gring-offset-warm-gray-500 text-xl font-blueberryreg text-white mx-auto mt-4 max-w-xl xl:px-[0px] mb-20">
            Segera gunakan aplikasi kami supaya kamu juga bisa jadi orang hebat seperti mereka! Arahkan kursor pada foto di bawah untuk melihat apa yang mereka katakan.
          </p>
        </div>
        <div className="w-full mx-1 xl:px-20 xs:px-10 xs:pl-2 grid grid-rows-7 max-w-full grid-flow-col xs:mr-[360px]">
          <div>
            <ul>
              <li>
              <button className="flex-wrap row-end-3 row-span-2 " onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <img src={orang1} className="ml-20 h-15 w-15 xs:ml-10" alt="Logo1" />
              </button>
              </li>
              <li>
                {isShown && (
                <div className='absolute font-blueberryreg w-full xs:w-[200px] md:w-[300px] sm:w-[300px] lg:w-[450px] xl:w-[500px] inline-block py-6 px-3 lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] text-black bg-white rounded-lg shadow-lg opacity-100 '>
                  <h1 className='text-md text-center font-medium'>"Sering banget ikut event yang dibuat dimulai.id karena menghadirkan pemateri yang keren keren." </h1>
                  <br />
                  <h1 className='font-semibold text-center'>Alditraa Nadhif</h1>
                  <br />
                  <h1 className='text-center'>@Alditraa</h1>
                </div>
                )}
              </li>
            </ul>
          </div>
          <div className="row-start-1 row-end-4">
          <div>
            <ul>
              <li>
              <button className="row-start-1 row-end-4 mt-[200px]" onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
                <img src={orang2} className="ml-20 h-15 w-15 xs:ml-5" alt="Logo1" />
              </button>
              </li>
              <li>
                {isShown1 && (
              <div className='absolute font-blueberryreg w-full xs:w-[200px] md:w-[300px] sm:w-[300px] lg:w-[450px] xl:w-[500px] inline-block py-6 px-3  lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] text-black bg-white rounded-lg shadow-lg opacity-100'>
                
                <h1 className='text-md text-center font-medium'>"Aplikasinya mantul, sangat membantu dalam melakukan sebuah habit secara konsisten selama ini! kuy download, kalau gak download rugi deh kalian." </h1>
                <br />
                <h1 className='font-semibold text-center'>Isyana</h1>
                <br />
                <h1 className='text-center'>@Isyana</h1>
              </div>
                )}
              </li>
            </ul>
          </div>
          </div>
          <div className="row-end-3 row-span-2">
            <ul>
              <li>
                <button className="row-end-3 row-span-2 mt-1" onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
                <img src={orang3} className="ml-20 h-15 w-15 xs:ml-2" alt="Logo1" />
                </button>
              </li>
              <li>
              {isShown2 && (
              <div className='absolute font-blueberryreg w-full xs:right-[1px] lg:right-[450px] sm:right-[100px] md:right-[450px] xl:right-[700px] xs:w-[200px] md:w-[300px] sm:w-[300px] lg:w-[450px] xl:w-[500px] inline-block py-6 px-3 lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 className='text-md text-center font-medium'>"Selalu belajar dengan aplikasi dimulai.id karena tampilannya yang modern dan fitur fiturnya sangat membantu proses pembelajaran." </h1>
                <br />
                <h1 className='font-semibold text-center'>Arif Khairrudin</h1>
                <br />
                <h1 className='text-center'>@Arif</h1>
              </div>
                )}
              </li>
            </ul>
          </div>

          <div className="row-start-1 row-end-4">
            <ul>
              <li>
                <button className="row-start-1 row-end-4 mt-[250px] flex hidden md:flex" onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
                  <img src={orang4} className="ml-20 h-15 w-15" alt="Logo1" />
                </button>
              </li>
              <li>
              {isShown3 && (
              <div className='absolute font-blueberryreg inline-block py-6 px-3 w-[500px] lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 className='text-md text-center font-medium'>"Topik yang di bahas relate banget dengan yang sering aku rasain." </h1>
                <br />
                <h1 className='font-semibold text-center'>Hafidzah Oktafiani</h1>
                <br />
                <h1 className='text-center'>@Hafidzah</h1>
              </div>
                )}
              </li>
            </ul>


          </div>
          <div className=" pl-0 mr-6 items-center">
            <ul className=''>
              <li><button className="row-span-3 row-end-1 mt-10 flex hidden md:flex" onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}>
            <img src={orang5} className="ml-10  h-15 w-15" alt="Logo1" /></button></li>
              <li>
                {isShown4 && (
              <div className='absolute font-blueberryreg py-6 px-3 lg:right-[50px] lg:w-[500px] xl: lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] mb-20 text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 className='text-md text-center font-medium'>"Konten yang disajikan dengan animasi menarik secara visual, bikin belajar jadi menyenangkan." </h1>
                <br />
                <h1 className='font-semibold text-center'>Septiana Putri</h1>
                <br />
                <h1 className='text-center'>@Septiana</h1>
              </div>
              )}
              </li>
            </ul>
          </div>
          <div className="row-start-1 row-end-4 mt-20">
          <ul className=''>
              <li>
                <button className="row-start-1 row-end-4 flex hidden lg:flex overscroll-none" onMouseEnter={() => setIsShown5(true)} onMouseLeave={() => setIsShown5(false)}>
                  <img src={orang7} className="mt-[200px] mr-20 h-15 w-15" alt="Logo1" />
                </button>
              </li>
              <li>
                {isShown5 && (
                <div className='absolute inline-block font-blueberryreg py-6 px-3 w-[500px] lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] right-6 text-black bg-white rounded-lg shadow-lg opacity-100'>
                  <h1 className='text-md text-center font-medium'>"Materi dalam video perlu di kupas lebih dalam." </h1>
                  <br />
                  <h1 className='font-semibold text-center'>Muhammad Azzam</h1>
                  <br />
                  <h1 className='text-center'>@Azzam</h1>
                </div>
                )}
              </li>
          </ul>


          </div>
          <div className="row-start-1 row-end-4 ">
          <ul className='max-w-full min-w-xs'>
              <li>
              <button className="row-start-1 row-end-4 flex hidden xl:flex" onMouseEnter={() => setIsShown6(true)} onMouseLeave={() => setIsShown6(false)}>
                <img src={orang6} className="" alt="Logo1" />
              </button>
              </li>
              <li>
              {isShown6 && (
              <div className='absolute font-blueberryreg py-6 px-3 w-[500px] lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] mb-20 right-[70px]  text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 className='text-md text-center font-medium'>"Follow semua sosial media dimulai.id karena ga mau ketinggalan informasi event ataupun kontennya." </h1>
                <br />
                <h1 className='font-semibold text-center'>Gerardo Chandra</h1>
                <br />
                <h1 className='text-center'>@Gerardo</h1>
              </div>
                )}
              </li>
          </ul>


          </div>
          
        </div>
      </div>
    </section>

  )
}

export default Testimonials