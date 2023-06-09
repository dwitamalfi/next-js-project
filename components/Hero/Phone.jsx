import React from 'react'
const hape = '/assets/hape.png'
const hape2 = '/assets/ipun.png'
const orbit = '/assets/orbit.png'

const Phone = () => {
  return (
    <div className="flex -mt-[150px] w-full items-center justify-center  px-4 pt-16 mx-auto lg:pt-32 md:px-8">
      <img
        src={orbit}
        className="animate-anim relative max-w-full ml-4 xl:w-3xl xl:mt-10 xl:mb-10 place-self-center "
        alt="orbit"
      />
      <img
        src={hape2}
        className="absolute xl:-mr-14 xl:mt-14 lg:w-[500px] lg:mt-20 md:mt-32 xl:-my-10 xl:w-[470px] sm:w-[400px] xs:ml-10 xs:mt-12 xs:w-[200px]"
        alt="hape"
      />
    </div>




  )
}

export default Phone