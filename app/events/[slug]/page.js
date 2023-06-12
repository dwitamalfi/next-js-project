import Head from 'next/head';
import styles from '../../page.module.css'
import { Metadata, ResolvingMetadata } from 'next';
import moment from "moment";
const IconBroadcast = '/assets/images/Events/IconBroadcast.png'
const IconPlay = '/assets/images/Events/IconPlay.png'

export default async function Event({ params: {slug}}) {
    const response = await getData(slug);
    const today = moment().format("YYYY-MM-DD HH:mm:ss");
   
    // console.log("data",data.data)
    const data = response.data.length > 0? 
                response.data[0] : null
    let linkIframe = data?.link_siaran_ulang !== null? ("//www.youtube.com/embed/" + data.link_siaran_ulang) : ''
    return (
        <div>
            <div
              className="h-fit pt-16 lg:pt-32 px-6 md:px-12 mb-10"
              id="Event"
            >
            <div className="container mx-auto">
              <div className="pt-12 lg:mx-20 text-left flex xs:flex-col md:flex-row justify-between">
                <div className="flex-col xs:mx-auto md:w-2/3 xs:w-5/6 pr-6 mb-8">
                  <h1
                    className="text-4xl lg:text-5xl font-blueberryextrabold"
                    style={{ color: "#323846" }}
                  >
                    {data?.Judul_event}
                  </h1>
                  <hr className="my-8 border-gray-300" />
                  <div className="flex flex-row flex-wrap items-center mb-8">
                    <img 
                      src={`${process.env.DIMULAI_CMS_ASSET_URL}/${data?.Gambar_foto_pemateri}`}
                      className="object-cover h-14 w-14 mr-6" 
                      style={{ borderRadius: '50%' }}
                      alt="pemateri" 
                    />
                    <div className="flex-col">
                      <p className="text-xl font-blueberrymd">
                        {data?.Pemateri}
                      </p>
                      <p className="text-lg font-blueberryreg">
                        {data?.Pekerjaan_pemateri}
                      </p>
                    </div>
                  </div>
                  <p className="text-md font-blueberryreg">
                    {data?.Deskripsi_event}
                  </p>
                </div>
                <div className="flex justify-end xs:mx-auto items-start md:w-1/3 xs:w-5/6 md:pl-0 lg:pl-6">
                  <div className="max-w-96 w-full h-96 flex flex-col">
                    {moment(data?.Tanggal_waktu_event).format("YYYY-MM-DD HH:mm:ss") > today
                      ? (
                        <>
                          <div
                            className="p-7 text-left rounded-t-2xl bg-emerald-500"
                          >
                            <h1 className="text-2xl font-blueberry text-white mb-2">
                              {data?.Tiket === 'gratis'? 'Gratis' : data?.Harga_tiket}
                            </h1>
                            <p className="text-xl font-blueberryreg text-white">
                              {moment(data?.Tanggal_waktu_event).format(
                                "D MMMM YYYY, h:mm"
                              )}
                            </p>
                          </div>
                          <div
                            className="p-7 bg-emerald-600 rounded-b-2xl bg-emerald-600"
                          >
                            <div className="flex items-center">
                              <img
                                src={IconBroadcast}
                                className="h-9 w-9 mr-4"
                                alt="icon"
                              />
                              <p className="text-lg font-blueberrylight text-white">
                                Webcast akan diadakan via Platform Zoom
                              </p>
                            </div>
                            <div className="flex justify-center mt-6">
                              <a
                                href={data?.Link_pendaftaran}
                                target="_blank"
                                className="text-center bg-white py-4 w-full font-blueberry text-slate-700 text-lg transition duration-200 rounded-lg hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="daftar"
                                title="daftar"
                              >
                                Daftar Sekarang
                              </a>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="p-7 text-left rounded-t-2xl bg-indigo-400"
                          >
                            <h1 className="text-2xl font-blueberry text-white mb-2">
                              Event Ditutup
                            </h1>
                            <p className="text-xl font-blueberryreg text-white">
                              {moment(data?.Tanggal_waktu_event).format(
                                "D MMMM YYYY, h:mm"
                              )}
                            </p>
                          </div>
                          <div
                            className="p-7 rounded-b-2xl bg-indigo-600"
                          >
                            <div className="flex items-center">
                              <img
                                src={IconBroadcast}
                                className="h-9 w-9 mr-4"
                                alt="icon"
                              />
                              <p className="text-lg font-blueberrylight text-white">
                                Webcast telah diadakan via Platform Zoom
                              </p>
                            </div>
                          </div>
                        </>
                      )
                    }
                  </div>
                </div>
              </div>
              {(moment(data?.Tanggal_waktu_event).format("YYYY-MM-DD HH:mm:ss") < today 
                && linkIframe) && (
                <div className="lg:mx-20 mb-14">
                  <hr className="pb-10 border-gray-300" />
                  <div className="flex items-center xs:flex-col md:flex-row justify-between mt-10">
                    <div className="flex flex-col xs:mx-auto md:mx-0 md:text-left xs:text-center md:w-1/2 xs:w-5/6">
                      <div className="flex flex-row items-center md:mx-0 xs:mx-auto mb-4">
                        <img
                          src={IconPlay}
                          className="h-11 w-11 mr-6"
                          alt="icon"
                        />
                        <h1
                          className="text-3xl lg:text-4xl font-blueberryextrabold"
                          style={{ color: "#323846" }}
                        >
                          Siaran Ulang
                        </h1>
                      </div>
                      <p className="text-lg font-blueberryreg">
                        Jangan khawatir ketinggalan webcast dimulai, tonton siaran ulangnya disini!
                      </p>
                    </div>
                    <div className="flex xs:mx-auto md:w-1/2 xs:w-full xs:mt-16">
                      <div
                        className="embed-responsive embed-responsive-16by9 w-full h-full overflow-hidden rounded-b-3xl"
                      >
                        <iframe
                          className="embed-responsive-item right-0 left-0 ml-5 w-[95%]"
                          height="307px"
                          style={{ borderRadius: 20 }}
                          src={linkIframe}
                          allowFullScreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    )
}

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const slug = params.slug;
   
    // fetch data
    const response = await getData(slug);
    const data = response?.data[0]
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];
   
    return {
      title: data.Judul_event,
      description: data.Deskripsi_event,
      siteName: 'Dimulai.id',
      images: [
        {
          url: process.env.DIMULAI_CMS_ASSET_URL + "/"+ data.Gambar_banner_event,
          width: 800,
          height: 600,
        },
      ],
      openGraph: {
        images: process.env.DIMULAI_CMS_ASSET_URL + "/"+ data.Gambar_banner_event,
        description: data.Deskripsi_event,
        publishedTime: data.date_updated,
      },
      robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      twitter: {
        card: 'summary_large_image',
        title: data.Judul_event,
        description: data.Deskripsi_event,
        images: [process.env.DIMULAI_CMS_ASSET_URL + "/"+ data.Gambar_banner_event],
      },
    };
  }
async function getData(slug) {
    const res = await fetch(`https://dev.cms.dimulai.apps360.id/items/Event?filter[slug][_eq]=${slug}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log("res",res)
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }
