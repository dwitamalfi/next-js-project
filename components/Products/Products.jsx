"use client"
import { useState } from 'react'
const hape = '/assets/hape.png'
const global = '/assets/global.png'
const disesuaikan = '/assets/disesuaikan.png'
const mingguan = '/assets/mingguan.png'
const preview1 = '/assets/preview1.png'

const Products = () => {
  const [image, setImage] = useState(hape);


  const changeImg = () => {
    let value = image;

    if (value === hape) {
      setImage(preview1);
    } else {
      setImage(hape);
    }
  };


  return (
    <section className="container px-5 w-full py-24 mx-auto flex flex-wrap" id='product'>
        <div className="flex flex-col items-center justify-center  max-w-full px-4 pt-16 mx-auto sm:max-w-xl md:max-w-4xl lg:pt-32 md:px-8">
          <h1 className="font-blueberry text-3xl font-bold text-center text-black lg:text-4xl ">Kenali <span className='font-bold' style={{ color: "#01C587"}}>#Dimulai</span> dan fitur menariknya Lebih dalam lagi</h1>
            <br />
            <p className="font-blueberryreg max-w-full text-xl mx-auto mt-4 text-center text-black xl:mt-6 ">
                Dimulai memiliki banyak hal menarik didalamnya, coba jelajahi dan lihat manfaatnya bagimu dan bagi sekitarmu.
            </p>
        </div>
        <br />

        <div className="pt-20 grid gap-6 w-full row-gap-10 lg:grid-cols-2" id='prev'>
          <div className="max-w-full flex bg-emerald-500 outline outline-1 outline-emerald-500/20 outline-offset-[100px] lg:flex hidden w-3/5 xl:h-[310px] lg:h-[280px] mx-auto my-auto rounded-full px-6 ">
            <img
              className="absolute lg:-ml-1 xl:-mt-20 lg:-mt-20 xl:mr-0 w-full object-center xl:mx-5 items-center md:w-auto md:max-w-xs"
              src={preview1}
              alt=""
            />
          </div>
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
              <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
              <img src={global} className="mr-20 h-20 w-20 rounded-full" alt="Logo" />
            </button>
              </div>

            </div>
            <div className="pt-1 pb-8 w-full">
              <p className="mb-2 text-lg font-bold">Peringkat Global</p>
              <p className="text-gray-700 ">
                Berjuang dan menjadi yang terbaik dalam mengembangkan diri.
              </p>
            </div>
          </div>
          <div className="flex mt-10">
          <div className="flex flex-col items-center mr-4">
              <div>
                <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                <img src={disesuaikan} className="mr-20 h-20 w-20 rounded-full" alt="Logo" />
                </button>
              </div>
            </div>
            <div className="pt-1 pb-8 w-full">
              <p className="mb-2 text-lg font-bold">Disesuaikan Untukmu</p>
              <p className="text-gray-700">
                Konten yang disesuaikan denganmu, jadilah versi terbaikmu.
              </p>
            </div>
          </div>
          <div className="flex mt-10">
          <div className="flex flex-col items-center mr-4">
              <div>
                <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                <img src={mingguan} className="mr-20 h-20 w-20 rounded-full" alt="Logo" />
                </button>
              </div>
            </div>
            <div className=" pt-1 pb-8 w-full">
              <p className="mb-2 text-lg font-bold">Buku Terbaik Mingguan</p>
              <p className="text-gray-700 ">
                Setiap minggunya kamu akan diberikan 1 buku terbaik selama minggu tersebut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products