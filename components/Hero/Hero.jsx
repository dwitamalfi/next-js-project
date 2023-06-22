'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import moment from "moment";

import Phone from './Phone.jsx';
const ImgEvent = '/assets/heroEvent.png'
export const Hero = ({ event }) => {
  const calculateTimeLeft = () => {
   
    const currentTime = new Date().getTime();
    const eventTime = new Date(event[0]?.Tanggal_waktu_event).getTime();
    const maxTimeCountdown = new Date(moment().add(3,'d').toDate()).getTime();
    if (eventTime > currentTime && eventTime <= maxTimeCountdown) {
      const leftTime = eventTime - currentTime;
      const hours = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((leftTime % (1000 * 60)) / 1000);
      return (hours+ ' jam ' + minutes+ ' min ' + seconds + ' det');
    } else if (
      currentTime > eventTime 
      && moment(event[0]?.Tanggal_waktu_event)?.format("YYYY-MM-DD") === moment()?.format("YYYY-MM-DD")
    ) {
      return 'D-day'
    } else if (eventTime > currentTime && eventTime >= maxTimeCountdown) {
      return 'Coming Soon'
    }
  }

  const [timeLeft, setTimeLeft] = useState("0 Hari 0 Jam 0 Min");

  useEffect(()=>{
    localStorage.setItem("closest_event", JSON.stringify(event));
    console.log("use Effect Hero localstorage")
  },[])

  useEffect(() => {
    if (event?.length) {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    }
  });

  return (
    <>
      {event?.length ? (
        <div className="h-full xl:mb-auto px-4 pt-16 lg:pt-32 md:px-8" id="Hero">
          <div className="container mx-auto h-full">
            <div className="h-full lg:mx-20 pt-12 text-left flex justify-between">
              <div className="flex-col">
                <h2
                  className="sm:text-md md:text-xl lg:text-2xl font-blueberrymd"
                  style={{ color: "#01C587" }}
                >
                  #WEBCASTDIMULAI
                </h2>
                <h1
                  className="py-6 text-5xl lg:text-6xl font-blueberryblack"
                  style={{ color: "#323846" }}
                >
                  {timeLeft}
                </h1>
                <p className="mt-3 text-black text-xl font-blueberryreg">
                  Yuk, tambah wawasanmu dengan ikutan webcast bertema
                </p>
                <p className="mb-3 text-xl font-bold">
                  {event[0].Judul_event} oleh {event[0].Pemateri}
                </p>
                <div className="flex flex-row flex-wrap pt-8 pb-10">
                  {timeLeft !== 'D-day' ? (
                    <>
                    <a
                      href={event[0]?.Link_pendaftaran}
                      target="_blank"
                      className="mr-4 mb-3 bg-emerald-500 justify-center py-4 px-6 font-blueberrymd text-white text-lg transition duration-200 rounded-lg hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="daftar"
                      title="daftar"
                    >
                      Daftar Sekarang
                    </a>
                    <Link
                      href={`/events/${event[0].slug}`}
                      className="mb-3 bg-gray-100 justify-center py-4 p-11 font-blueberry text-lg transition duration-200 rounded-lg hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      style={{ color: '#323846' }}
                    >
                      Lihat Event
                    </Link>
                    </>
                  ) : (
                    <Link
                      href={`/event/detail/${event[0].id}`}
                      className="mr-4 mb-3 bg-emerald-500 justify-center py-4 p-11 font-blueberrymd text-white text-lg transition duration-200 rounded-lg hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Lihat Event
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex justify-end items-end md:flex hidden">
                <img alt='Gambar Banner Event' src={`${process.env.DIMULAI_CMS_ASSET_URL}/${event[0].Gambar_banner_event}`} className="xl:h-[440px] lg:h-[380px] sm:h-[300px] w-auto" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-10">
          <div className=" flex xl:mb-auto xs:mb-10 xs:mt-10 flex-col items-center justify-center max-w-4xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8" id="Hero">
            <div className="max-w-full mb-10 mx-1 xs:text-center sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className=" mb-6 xl:text-[40px] xl:-ml-20 md:text-3xl md:w-full lg:text-4xl lg:w-full xs:w-[250px] font-semibold font-blueberry tracking-tight xl:w-[900px] mr-1 text-gray-900 xs:text-xl">
                <span className=" inline-block">
                </span>{' '}
                Temukan Cara Menjadi Versi Terbaikmu
              </h2>
              <p className="max-w-lg mb-6 lg:text-4xl lg:w-full md:text-3xl md:w-full  font-blueberry text-2xl font-semibold leading-none tracking-tight xl:text-[40px] text-gray-900 sm:text-2xl xs:text-2xl md:mx-auto" >
              <span className='font-semibold' style={{ color: "#01C587"}}>#Dimulai</span> Dengan Semangat!
              </p>
            </div>
            <div className="flex items-center sm:justify-center xs:pb-10">
                <a href="https://www.youtube.com/@dimulaiid" className="mr-3 transition duration-300 hover:shadow-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                    className="object-cover object-top w-32 mx-auto"
                    alt=""
                  />
                </a>
                <a href="https://www.youtube.com/@dimulaiid" className="transition duration-300 hover:shadow-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                    className="object-cover object-top w-32 mx-auto"
                    alt=""
                  />
                </a>
              </div>
          </div>
          <br /><br />
          <Phone />
          <br /> <br />
        </div>
      )}
    </>
  );
};

export default Hero