// src/components/Slider.jsx
import React from "react";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";

const Slider = () => {
  return (
    <section className="mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-50 z-10">
      <div className="text-center font-extrabold text-2xl my-8">
      You're going to fall in love with nature
      </div>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30} // Adjust the spacing as needed
        slidesPerView={1} // Show only one slide by default
        autoplay
      >
        <SwiperSlide>
          <div
            className="hero min-h-[420px] max-w-screen-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/TrD55PR/maldives.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Maldives</h1>
                <p className="mb-5">
                The scenic beauty of the Maldives is something to behold, something you can't quite understand until you're there in person.
                </p>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[420px] max-w-screen-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/pP9BrNq/sundarbans.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Sundarbans</h1>
                <p className="mb-5">
                The Sundarbans along the Bay of Bengal has evolved over the millennia through natural deposition of upstream sediments accompanied by intertidal segregation. 
                </p>
             
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[420px] max-w-screen-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/5YpmWkb/Bandorbon.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Bandorbon</h1>
                <p className="mb-5">
                Bandarban is a district in South-Eastern Bangladesh, and a part of the Chittagong Division.It is one of the three hill districts of Bangladesh and a part of the Chittagong Hill Tracts, the others being Rangamati District and Khagrachhari District. 
                </p>
             
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[420px] max-w-screen-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/QbHK4d1/BANGKOK.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Bangkok</h1>
                <p className="mb-5">
                A city that never sleeps, Bangkok, the capital of Thailand is a modern-day melting pot of contrasting cultures and faiths.
                </p>
             
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
