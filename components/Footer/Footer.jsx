import React from 'react'
const logodimulai = '/assets/logofooter.png'

export const Footer = () => {
  return (
    
<footer className="p-4 bg-white w-full rounded-lg md:py-8 white:bg-gray-900" id='Footer'>
      <div className="xl:mx-32 sm:mx-auto xs:mx-6 md:mx-32 max-w-full relative lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
        <div className="-ml-6 flex flex-wrap">
          
          <div className="w-full px-1 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
            <a
                href="/"
                aria-label="Dimulai"
                title="Dimulai"
                className="inline-flex items-center"
              >
                <img src={logodimulai} className="mr-3 h-8 " alt="Logo" />
                <span className="ml-2 text-xl font-blueberry tracking-wide text-gray-800 ">
                  Dimulai
                </span>
              </a>
              <p className="text-body-color xl:w-full sm:w-xl text-sm ml-10 mb-7 mt-8 font-blueberryreg">
                Dimulai adalah media pengembangan berbagai kebiasaan baik yang menyajikan konten pembelajaran yang menarik.
              </p>
            </div>
          </div>

          <div className="w-full ml-auto px-2 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full font-blueberryreg">
              <h4 className="text-dark mb-9 text-gray-400 text-md font-blueberryreg font-semibold">DIMULAI</h4>
              <ul>
                <li>
                  <a
                    href="#Youtube"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Tentang Dimulai
                  </a>
                </li>
                <li>
                  <a
                    href="https://bigio.id/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="https://bigio.id/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    BIGIO
                  </a>
                </li>
                <li>
                  <a
                    href="#CTA"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-1 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full font-blueberryreg">
              <h4 className="text-dark mb-9 text-gray-400 text-md font-blueberryreg font-semibold">PRODUK</h4>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Dzikra
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Kasvaa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Inovasi360
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full font-blueberryreg">
              <h4 className="text-dark mb-9 text-gray-400 text-md font-blueberryreg font-semibold">PRIVASI</h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Syarat dan Ketentuan
                  </a>
                </li>
              </ul>
            </div>
          </div>
          

          <div className="w-full xl:mb-auto md:mb-10 sm:mb-10 lg:mb-10 xs:mb-10 px-2 sm:w-1/2 lg:w-2/12 font-blueberryreg">
            <ul>
              <li>
              <div className="mb-10 w-full ">
              <h4 className="text-dark mb-9 text-gray-400 text-md font-blueberryreg font-semibold">KONTAK</h4>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    hello@dimulai.id
                  </a>
                </li>
              </ul>
            </div>
              </li>
              <li>
              <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-md text-gray-400 font-semibold font-blueberryreg ">MEDIA</h4>
              <div className="mb-6 flex items-center">
                <a
                  href="https://www.tiktok.com/@dimulai.id?_t=8YBbnGc7e65&_r=1"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/> </svg> 
                </a>
                <a
                  href="https://www.instagram.com/dimulaiid/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@dimulaiid"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    className="fill-current"
                  >
                    <path
                      d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
              </li>
            </ul>



          </div>
          
        </div>
      </div>
      <div>
      </div>
      </div>

      <hr className="-my-8 border-gray-300 xl:mx-32 lg:mx-32 md:mx-32 sm:mx-20 " />
      
      <div className="mb-3 mt-12 xl:mx-32 lg:mx-32 md:mx-32 sm:mx-20 sm:flex sm:items-center sm:justify-between">
        <span className="block font-blueberryreg text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline">Dimulai</a>. All Rights Reserved.
        </span>
            <ul className='flex flex-wrap xs:mt-5 items-center xl:mb-6 text-sm text-gray-500 sm:mb-1 gap-2 dark:text-gray-400'>
                <li>
                  <a href="https://www.youtube.com/@dimulaiid" className=" transition duration-300 hover:shadow-lg">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                      className="object-cover object-top w-32 mx-auto"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                <a href="https://www.youtube.com/@dimulaiid" className="transition duration-300 hover:shadow-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                    className="object-cover object-top w-32 mx-auto"
                    alt=""
                  />
                </a>
                </li>
                  
                </ul>
        </div>


    </footer>
  );
};

export default Footer