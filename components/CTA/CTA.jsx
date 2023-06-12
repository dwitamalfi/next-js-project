"use client"
import React, { useState } from 'react';
const Img1 = '/assets/images/CTA/Img1.png';
const IconSucess = '/assets/images/CTA/success-icon.png';
const Bg1 = '/assets/images/CTA/Circle.png';

const CTA = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [formData, setFormData] = useState('');
    const [formArray, setFormArray] = useState([]);
    const [checkedSK, setCheckedSK] = useState("");


    const saveNews = () => {
        var base = "https://dev.svc.dimulai.apps360.id";
        fetch(`${base}/v1/public/email/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            allow_interests: formArray,
            email: formData 
          }),
        })
          .then((res) => {
              if (res) {
                res.json()
                setTimeout(() => {
                  handleCloseModal()
                  setShowModalSuccess(true)
                }, 100);
              }
            })
          .then((result) => setData(result.rows))
          .catch((error) => console.log())
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        saveNews() 
    }

    
    const handleChange = (event) => {
        setFormData(event.target.value)
    }

    const handleCheck = (event) => {
        var formArray_array = [...formArray];
        if (event.target.checked) {
          formArray_array = [...formArray, event.target.value];
        } else {
          formArray_array.splice(formArray.indexOf(event.target.value));
        }
        setFormArray(formArray_array);
      
      };
    
    const handleCheckSK = (event) => {
        if (event.target.checked) {
          setCheckedSK(1);
        } else {
          setCheckedSK("");
        }
      
      };

    const handleCloseModal = () => {
      setFormData(""); 
      setFormArray([]); 
      setCheckedSK("");
      setShowModal(false);
    } 

  return (
    <>
        <section className="py-[50px] mx-auto w-5/6" id='CTA' style={{ backgroundColor: "#4E5DFF", backgroundImage: `url(${Bg1})`, backgroundSize: 'cover', borderRadius: 40, height: 360 }}>
            <div className="mx-auto container ">
                <div className="-mx-4 flex">
                    <div className=" mx-auto px-4">
                        <div className="mx-auto font-blueberry max-w-[600px] text-center">
                            <h1 className="font-blueberry mb-3 text-[40px] max-md:text-[28px]  font-semibold leading-tight text-white max-sm:text-[24px]">
                                Hal, baik jangan ditunda ya!
                            </h1>
                            <p className="mb-8 text-lg text-white font-blueberryreg">
                                Ikuti terus info terbaru tentang diskon, event, dan banyak lainnya lewat newsletter hanya untuk kamu!
                            </p>
                            <a href="javascript:void(0)" type='button' onClick={() => setShowModal(true)} className="text-primary w-80 font-blueberryreg inline-block rounded-lg border border-white px-8 py-3 mt-12 text-center text-base font-semibold bg-white">
                                Langganan Sekarang
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

    {showModal ? (
            <>  
                <div className="fixed inset-0 z-10 overflow-y-auto transition-all ease-in-out duration-200">
                    <div
                      className="fixed inset-0 w-full h-full bg-black opacity-60" 
                      onClick={handleCloseModal}
                    ></div>
                    
                    <div className="max-sm:w-80 max-w-md mx-auto mt-24 md:h-auto">
                        <div className="relative bg-white rounded-lg shadow">
                            <img src={Img1} className="mx-auto pt-10" alt="" srcset="" />
                            <button 
                              type="button" 
                              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-300 dark:hover:text-white" 
                              data-modal-toggle="authentication-modal" 
                              onClick={handleCloseModal}
                            >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="font-blueberry mb-4 text-4xl font-bold text-center">Tetap Terhubung</h3>
                                <p className='text-center'>Berbagai acara, diskon, dan informasi terbaru bisa kamu dapatkan lewat newsletter Dimulai.</p>
                                <form className="space-y-6" action="#">
                                    <div>
                                        <input type="email" name="email" id="email" defaultValue={formData} onChange={handleChange} className="mt-4 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan email aktifmu" required />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="allow_interests" name='allow_interests' type="checkbox" onChange={handleCheck} value={'0'} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" className="font-blueberryreg ml-2 text-sm">Informasi, pembaruan, dan promosi dari Dimulai.</label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="allow_interests" type="checkbox" onChange={handleCheck} value={"1"} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" className="font-blueberryreg ml-2 text-sm">Webinar dan acara yang akan diselenggarakan Dimulai.</label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="allow_interests" type="checkbox" onChange={handleCheck} value={"2"} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" className="font-blueberryreg ml-2 text-sm">Konten terbaru dan Book of the Week.</label>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" type="checkbox" onChange={handleCheckSK} value={1} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" className="font-blueberryreg ml-2 text-sm">Dengan mendaftar newsletter ini, saya telah menyetujui <span className='font-bold'> Syarat dan Ketentuan </span> yang berlaku.</label>
                                        </div>
                                    </div>
                                        <button 
                                          disabled={
                                            formData != "" && 
                                            checkedSK != "" && 
                                            (formArray.length && formArray.includes("0")) 
                                              ? false 
                                              : true
                                          } 
                                          type="submit" 
                                          onClick={handleSubmit} 
                                          className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:opacity-50"
                                        >
                                          Berlangganan Sekarang
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : null}
    
    {showModalSuccess ? (
      <>  
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-60" 
              onClick={() => setShowModalSuccess(false)}
            ></div>
            
            <div className="max-sm:w-80 max-w-md mx-auto mt-24 md:h-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <img
                      src={IconSucess} 
                      className="mx-auto pt-10" 
                      style={{ width: "166px" }} 
                      alt="" 
                      srcSet="" 
                    />
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="font-blueberry mb-4 text-4xl font-bold text-center">
                          Terima Kasih
                        </h3>
                        <p className='text-center mb-5'>
                          Terima kasih sudah berlangganan!
                          <br/>
                          Pantau terus inbox-mu dan dapatkan informasi menarik dari Dimulai!
                        </p>
                        <button
                          type="submit"
                          onClick={() => setShowModalSuccess(false)}
                          className="w-full text-black bg-transparent border border-gray-300 focus:outline-none font-medium rounded-lg text-sm mt-5 px-5 py-2.5 text-center"
                        >
                          Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </>
    ) : null}
    
    </>

  )
}

export default CTA