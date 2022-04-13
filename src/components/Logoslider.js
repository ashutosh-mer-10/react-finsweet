import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { DataList_Logo } from "../data/logo-data";
import "swiper/css";

const Logoslider = () => {
  return (
    <>
     <div className="logo-slider">
          <div className="container">
            <Row>
              <Col lg={4}>
                <h3 className="h3">Podcast Available On</h3>
              </Col>
              <Col lg={8}>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={25}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  fadeEffect={true}
                  modules={[EffectFade]}
                >
                  {DataList_Logo.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <div className="image-box" id={item.id}>
                          <img src={item.image} alt="" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Col>
            </Row>
          </div>
        </div>
    </>
  )
}

export default Logoslider