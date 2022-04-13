import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade } from "swiper";
import { Sponsers_Logo } from "../data/logo-data";

const Oursponsers = () => {
  return (
    <>
      <div className="our-sponsers-wrap section">
        <div className="container">
          <div className="content-box">
            <h2 className="h2 title">Our Sponsors</h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={25}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              fadeEffect={true}
              modules={[EffectFade]}
              className="sponsers-slider"
            >
              {Sponsers_Logo.map((item, index) => {
                return (
                  <>
                    <SwiperSlide>
                      <img src={item.image} alt="img" />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oursponsers;
