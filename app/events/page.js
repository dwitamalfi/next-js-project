import moment from "moment";

const ImgEvent = "/assets/images/Events/event_img.png";
import getEvent from '@/services/events'
import Link from 'next/link';
import { ListEvent } from "@/components/Event/ListEvent";

export default async function Event() {
  const now = moment().format("YYYY-MM-DD HH:mm:ss");
  const response = await getEvent();
  const data = response.data
  let tempClosestEvent = [];
  let tempPastEvent = [];
  data.forEach((item) => {
          const eventDatetime = moment(item?.Tanggal_waktu_event).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          if (eventDatetime > now) {
            tempClosestEvent?.push(item);
          } else {
            tempPastEvent?.push(item);
          }
        });
        tempClosestEvent = tempClosestEvent?.sort(
          (a, b) =>
            new Date(a?.Tanggal_waktu_event) - new Date(b?.Tanggal_waktu_event)
        );
        tempPastEvent = tempPastEvent?.sort(
          (a, b) =>
            new Date(b?.Tanggal_waktu_event) - new Date(a?.Tanggal_waktu_event)
        );
     const highlightEvent = tempClosestEvent?.length ? tempClosestEvent[0] : tempPastEvent[0] ;
     const otherEvents = tempPastEvent;
     let loadMore = 3

 async function handleLoadMore(){
    // setLoadMore(loadMore + 6);
    loadMore = loadMore + 6
  };

  return (
    <div>
      <div className="h-fit px-4 pt-16 lg:pt-32 md:px-8 mb-10" id="Highlight">
        <div className="container mx-auto h-full">
          <div className="h-full lg:mx-20 pt-12 text-left flex justify-between">
            <div className="flex-col xs:mx-auto md:w-2/3 xs:w-5/6 ">
              <h1
                className="py-6 text-4xl lg:text-5xl font-blueberryextrabold"
                style={{ color: "#323846" }}
              >
                {highlightEvent?.Judul_event}
              </h1>
              <div className="flex flex-row flex-wrap items-center my-4">
                <img
                  src={`${process.env.DIMULAI_CMS_ASSET_URL}/${
                    highlightEvent?.Gambar_foto_pemateri
                  }`}
                  className="object-cover h-12 w-12 mr-6"
                  style={{ borderRadius: "50%" }}
                  alt="pemateri"
                />
                <div className="flex-col">
                  <p className="text-xl font-blueberrymd">
                    {highlightEvent?.Pemateri}
                  </p>
                  <p className="text-lg font-blueberryreg">
                    {highlightEvent?.Pekerjaan_pemateri}
                  </p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap py-8">
                {moment(highlightEvent?.Tanggal_waktu_event).format(
                  "YYYY-MM-DD HH:mm:ss"
                ) > now ? (
                  <>
                    <a
                      href={highlightEvent?.Link_pendaftaran}
                      target="_blank"
                      className="mb-5 mr-4 bg-emerald-500 justify-center py-4 px-8 font-blueberrymd text-white text-md transition duration-200 rounded-lg hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="daftar"
                      title="daftar"
                    >
                      Daftar Sekarang
                    </a>
                    <Link
                      href={`/events/${highlightEvent.slug}`}
                      className="mb-5 bg-gray-100 justify-center py-4 p-12 font-blueberrymd text-md transition duration-200 rounded-lg hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      style={{ color: "#323846" }}
                    >
                      Lihat Event
                    </Link>
                  </>
                ) : (
                  <Link
                      href={`/events/${highlightEvent.slug}`}
                      className="mr-4 bg-emerald-500 justify-center py-4 p-11 font-blueberrymd text-white text-md transition duration-200 rounded-lg hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Lihat Event
                    </Link>
                )}
              </div>
            </div>
            <div className="flex justify-end items-end md:flex hidden">
              <img alt="gambar banner event"
                src={ImgEvent}
                className="h-auto lg:w-[330px] xl:w-[356px] sm:w-[273px]"
              />
            </div>
          </div>
          <hr className="my-16 border-gray-300" />
          <div className="lg:mx-20">
            <h1
              className="text-center text-4xl lg:text-5xl font-blueberryextrabold"
              style={{ color: "#323846" }}
            >
              Event Terkini
            </h1>
            <p className="max-w-2xl font-blueberryreg mx-auto text-xl mt-4 text-center text-black xl:mt-6 ">
              Jelajahi semua event yang sudah berakhir dan nikmati siaran
              ulangnya
            </p>

           <ListEvent otherEvents={otherEvents} currentLoadMore={loadMore}></ListEvent>
          </div>
        </div>
      </div>
    </div>
  );
};

