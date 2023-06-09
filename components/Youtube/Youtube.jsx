"use client"
import React from "react";
import Bg1 from "../../public/assets/images/YoutubeDimulai/PreviewYoutube.png";

const Youtube = () => {
  return (
    <section
      className="max-h-screen-sm text-gray-800 background-radial-gradient"
      id='about'
    >
      <div className="px-6 py-12 md:px-12 text-center lg:text-left">
        <div className="container mx-auto">
          <div className="ml-7 grid lg:grid-cols-2 gap-12 flex items-center">
            <div className="mt-12 ml-7 lg:mt-0">
              <h1 className="font-blueberry text-2xl md:text-5xl xl:text-5xl font-bold tracking-tight mb-12">
                Cobain belajar bareng{" "}
                <span style={{ color: "#01C587" }}>#Dimulai.id </span> Sekarang!
                {/* <span style={{ color: "#01C587" }}>#Dimulai </span> dari nonton, <br className=""/> dan upgrade dirimu */}
              </h1>
              <p className="text-lg font-blueberryreg">
                Belajar asik dengan nontonin ratusan video pembelajaran yang
                bisa di akses secara free di Youtube Dimulai.id kapan dan dimana
                saja!
              </p>
            </div>
            <div className=" lg:mb-0">
              <div
                className="embed-responsive embed-responsive-16by9 w-full relative h-full overflow-hidden rounded-b-3xl"
                style={{
                  backgroundImage: `url(${Bg1})`,
                  height: "500px",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <iframe
                  className="embed-responsive-item  right-0  left-0 ml-7 w-[90%] mt-20"
                  height="307px"
                  style={{ borderRadius: 20 }}
                  src="https://www.youtube.com/embed/wnboAM2SFH8"
                  allowFullScreen=""
                  data-gtm-yt-inspected-2340190_699="true"
                  id="240632615"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
