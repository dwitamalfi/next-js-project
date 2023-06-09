"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [event, setEvent] = useState([]);

  // useEffect(() => {
  //   const closest_event = JSON.parse(localStorage.getItem('closest_event'));
  //   if (closest_event?.length) {
  //     setEvent(closest_event);
  //   }
  // }, [localStorage.getItem('closest_event')]);

  const scrollWithOffset = (el, section) => {
    let yCoordinate
    let yOffset = 0;
    if (section === 'ContentThumbnail') {
      if (event?.length > 0) {
        yCoordinate = el.getBoundingClientRect().width < 768 ? 484 : 616;
      } else {
        yCoordinate = el.getBoundingClientRect().width < 768 ? 1131 : 1436;
      }
    } else if (section === 'product') {
      if (event?.length > 0) {
        yCoordinate = el.getBoundingClientRect().width < 768 ? 1863 : 1943;
      } else {
        yCoordinate = el.getBoundingClientRect().width < 768 ? 2515 : 2785;
      }
    } else if (section === 'about') {
      if (event?.length > 0) {
        yCoordinate = el.getBoundingClientRect().width < 768 ? 6069 : 5532;
      } else {
        yCoordinate = el.getBoundingClientRect().width < 768 ? 6707 : 6355;
      }
    } else if (section === 'faq') {
      if (event?.length > 0) {
        yCoordinate = el.getBoundingClientRect().width < 768 ? 5403 : 5029;
      } else {
        yCoordinate = el.getBoundingClientRect().width < 768 ? 6069 : 5744;
      }
    }

    if (el.getBoundingClientRect().width < 1080) {
      yOffset = -200;
    }
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };

  return (
    
    <div className="container fixed max-w-full bg-white z-10 px-4 py-5 bg-opacity-80 mx-auto shadow-sm backdrop-blur-xl">
      <div className="xl:mx-28 lg:mx-20 md:mx-auto flex justify-between">
        <a
          href="/"
          aria-label="Dimulai"
          title="Dimulai"
          className="inline-flex items-center"
        >
          <img src='assets/logodimulai.png' className="mr-3 h-8 rounded-full" alt="Logo" />
          <span className="ml-2 text-2xl font-blueberry tracking-wide text-gray-800 ">
            Dimulai
          </span>
        </a>
        <ul className="relative flex items-center max-w-full justify-end hidden min-w-xs space-x-7 md:flex">
          <li>
          <Link
            className="font-blueberrymd tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
            activeStyle={{ color: 'rgb(52 211 153)' }}
            href='/#ContentThumbnail'
            scroll={false}
          >
            Konten
          </Link>
          </li>
          <li>
            <Link
              smooth
              className="font-blueberrymd tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
              activeStyle={{ color: 'rgb(52 211 153)' }}
              href='/#product'
              scroll={false}
            >
              Produk
            </Link>
          </li>
          <li>
            <Link
              smooth
              className="font-blueberrymd tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
              activeStyle={{ color: 'rgb(52 211 153)' }}
              href='/#about'
              scroll={false}
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              smooth
              className="font-blueberrymd tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
              activeStyle={{ color: 'rgb(52 211 153)' }}
              href='/#faq'
              scroll={false}
            >
              FAQ
            </Link>
          </li>
          {/* <li>
            <a
              href="#CTA"
              aria-label="CTA"
              title="CTA"
              className="font-blueberrymd tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
            >
              Promo
            </a>
          </li>
          <li>
            {event?.length > 0 ? (
              <Link
                to='/event'
                className="inline-flex items-center bg-emerald-500 justify-center h-11 px-6 font-blueberrymd tracking-wide text-white transition duration-200 rounded-lg shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                NEW Event!
              </Link>
            ) : (
              <Link
                smooth
                className="inline-flex items-center bg-emerald-500 justify-center h-11 px-6 font-blueberrymd tracking-wide text-white transition duration-200 rounded-lg shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                to={'/#ContentThumbnail'}
              >
                Kenalan Yuk
              </Link>
            )}
          </li> */}
        </ul>
        {/* <div className="md:hidden mr-30">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 ml-[70px] transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute ml-auto top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                    <img src={logodimulai} className="mr-3 h-8 rounded-full" alt="Logo" />

                      <span className="ml-2 text-xl font-blueberry tracking-wide text-gray-800">
                        Dimulai
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                  <li>
                    <Link
                      smooth
                      className="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
                      to={'/#ContentThumbnail'}
                      scroll={el => scrollWithOffset(el, 'ContentThumbnail')}
                    >
                      Konten
                    </Link>
                    </li>
                    <li>
                      <Link
                        smooth
                        className="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
                        to={'/#product'}
                        scroll={el => scrollWithOffset(el, 'product')}
                      >
                        Produk
                      </Link>
                    </li>
                    <li>
                      <Link
                        smooth
                        className="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
                        to={'/#about'}
                        scroll={el => scrollWithOffset(el, 'about')}
                      >
                        Tentang Kami
                      </Link>
                    </li>
                    <li>
                      <Link
                        smooth
                        className="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
                        to={'/#faq'}
                        scroll={el => scrollWithOffset(el, 'faq')}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#CTA"
                        aria-label="CTA"
                        title="CTA"
                        className="font-blueberry tracking-wide text-gray-700 transition-colors duration-200 hover:text-emerald-400"
                      >
                        Promo
                      </a>
                    </li>
                    <li>
                      {event?.length > 0 ? (
                        <Link
                          to='/event'
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-blueberry tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 focus:shadow-outline focus:outline-none"
                        >
                          NEW Event!
                        </Link>
                      ) : (
                        <Link
                          smooth
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-blueberry tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 focus:shadow-outline focus:outline-none"
                          to={'/#ContentThumbnail'}
                        >
                          Kenalan Yuk
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;