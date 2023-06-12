"use client"
import { useState } from 'react'
import './contents.css';
const Img3 = "/assets/images/Contents/img2.png";
const Books = "/assets/images/Contents/books.png";
const Videos = "/assets/video/Seni Bersikap Bodo Amat.mp4";

const BOTW = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
          <div className="pt-6 pb-12 -mt-36">
            <div id="card" className="">
              <img alt='Gambar buku Seni Bersikap Bodo Amat' src={Books} className="absolute sm:ml-10 md:ml-10 lg:ml-64 xl:ml-80 -mt-3"/>
              <div className="container w-100 lg:w-3/5  mx-auto flex flex-col ">
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-xl  mt-4 lg:w-full mx-4 h-auto " style={{ backgroundColor: "#01C587" }} >
                  <div className="w-full ml-8 py-4 px-6 text-white flex flex-col justify-between">
                    <h3 className="font-blueberry font-bold text-3xl leading-tight truncate mt-9">
                      Seni untuk Bersikap Bodo Amat
                    </h3>
                      <p className="font-blueberryreg mt-12 mb-8 text-xl text-left"> Buku Seni Untuk Bersikap Bodo Amat cocok banget buat kamu yang mau ngembangin diri! Pokoknya udah gak ada waktu lagi buat insecure.</p>
                      <button type="button"  className="font-blueberrymd mt-7 text-white w-56 bg-[#029971] hover:bg-[#01D687]/90 focus:ring-4 focus:outline-none focus:ring-[#01D687]/50  font-medium rounded-lg text-md px-4 py-4 text-center inline-flex items-center dark:focus:ring-[#01D687]/55 mr-2 mb-[50px]" data-bs-toggle="modal" data-bs-target="#exampleModalLg"
                        onClick={() => setShowModal(true)} >
                        Lihat Buku
                        <svg className="h-7 ml-20"  fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    
                  </div>
                  <div className="mx-auto lg:mt-10 xl:mt-10">
                    <img alt='Gambar ilustrasi' src={Img3} className="w-60 md:mt-2 max-md:w-48 max-md:mb-10 mr-40"/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>


        {showModal ? (
            <>
                <div className="fixed inset-0">
                    <div className="fixed inset-0 w-full h-full bg-black opacity-60"
                        onClick={() => setShowModal(false)}></div>
                    <div className="flex items-center min-h-screen px-4 py-8 ">
                        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-lg">
                            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                                <div className="embed-responsive embed-responsive-16by9 relative h-full overflow-hidden rounded-l-3xl shadow-lg">
                                    <iframe className="embed-responsive-item top-0 right-0 bottom-0 left-0 w-full" height="550px"
                                    src={Videos}
                                     data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                                </div>
                                <div className="">
                                    <img alt='Gambar ilustrasi' src={Books} className="max-sm:ml-10" /><br /><br />
                                    <h1 className=" md:text-3xl max-sm:ml-10 font-bold tracking-tight mb-5">
                                        <span> Seni untuk Bersikap Bodo Amat </span>
                                    </h1>
                                    <p className="font-blueberryreg text-lg  max-sm:ml-10" >
                                        Kamu bisa mulai upgrade diri kamu cuma dari nonton doang, loh! Yuk nikmati ratusan video seru dari dimulai.id
                                    </p><br /><br /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : null}
        
        </>
        
        
    )
}


export default BOTW;