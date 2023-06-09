"use client"
import React from 'react'
import './contents.css';
const Contents  = "/assets/images/Contents/contents.png";
const Bg1 = "/assets/images/Contents/circle.png";

const ContentThumbnail = () => {
  return (

   <section className='w-h-screen bg-gray-800 h-full' id='ContentThumbnail' style={{ backgroundImage: `url(${Bg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <div className='justify-center w-full text-center py-10 mx-auto'>

      <h1 className="font-blueberry mt-32 mb-10 font-bold text-white text-5xl max max-md:text-4xl max-xl:text-5xl dark:text-white">
          <span className='font-blueberry font-bold' style={{ color: "#01C587"}}>#Wawasan</span> dari berbagai sudut <br /> pandang kehidupan
      </h1>

      <h1 className="font-blueberryreg w-full text-lg text-white max-md:text-xl my-4">
        Tambah wawasanmu dengan belajar hal baru tiap hari lewat <br /> konten menarik yang mudah dipahami dari Dimulai
      </h1>

      {/* DIV GAMBAR  */}
        <div className="mt-20"> 

         <img src={Contents} alt="" className='w-full -mb-10' srcSet="" />

        </div>

      {/* END DIV GAMBAR   */}


    </div>
    


   </section>

  )
}

export default ContentThumbnail