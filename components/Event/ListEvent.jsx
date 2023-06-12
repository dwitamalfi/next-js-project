'use client'
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export  const ListEvent = ({otherEvents, currentLoadMore, }) => {
const [loadMore, setLoadMore] = useState(currentLoadMore)
const handleLoadMore = () => {
    setLoadMore(loadMore + 6);
  };
return (
<>

<div className="grid grid-cols-1 w-full h-full gap-5 mt-6 xl:my-12 md:grid-cols-2 lg:grid-cols-3">
              {otherEvents?.length &&
                otherEvents?.slice(0, loadMore)?.map((item) => (
                  <div key={item.id} className="flex flex-col w-full h-full mb-8 px-10 pt-7 pb-7 text-left bg-transparent border border-gray-300 rounded-large">
                    <Link
                      href={`/events/${item.slug}`}
                      className="text-2xl font-blueberryreg leading-10 focus:shadow-outline focus:outline-none"
                      style={{ color: "#323846" }}
                    >
                      {item?.Judul_event}
                    </Link>
                    <div
                      className="flex flex-row flex-wrap items-center"
                      style={{ marginTop: "auto" }}
                    >
                      <img
                        src={`${process.env.DIMULAI_CMS_ASSET_URL}/${
                          item?.Gambar_foto_pemateri
                        }`}
                        className="object-cover h-8 w-8 mr-3"
                        style={{ borderRadius: "50%" }}
                        alt="pemateri"
                      />
                      <p className="text-lg font-blueberryreg">
                        {item?.Pemateri?.length > 18
                          ? item?.Pemateri.substring(0, 18) + "..."
                          : item?.Pemateri}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
            {loadMore < otherEvents?.length && (
              <div className="flex justify-center mt-12">
                <button
                onClick={() => handleLoadMore()}
                  className="bg-gray-100 justify-center py-4 px-20 font-blueberry text-md transition duration-200 rounded-lg hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  style={{ color: "#323846" }}
                  aria-label="daftar"
                  title="daftar"
                >
                  Event Lainnya
                </button>
              </div>
            )}
</>
)
} ;