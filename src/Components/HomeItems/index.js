import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import cat1 from '../../assets/images/cat1.jpg'
import cat2 from '../../assets/images/cat2.jpg'
import cat3 from '../../assets/images/cat3.jpg'
import cat4 from '../../assets/images/cat4.jpg'
import cat5 from '../../assets/images/cat5.jpg'
import cat6 from '../../assets/images/cat6.jpg'
import cat7 from '../../assets/images/cat7.jpg'
import cat8 from '../../assets/images/cat8.jpg'
import cat9 from '../../assets/images/cat9.jpg'
import cat10 from '../../assets/images/cat10.jpg'
import cat11 from '../../assets/images/cat11.jpg'

const HomeItems = () => {
    return(
        <>
            <Swiper
                slidesPerView={10}
                spaceBetween={8}
                navigation={true}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat1}
                            alt="Custard Apple"
                            className=""
                        />
                        <h6>Vegetables</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat2}
                            alt=""
                            className=""
                        />
                        <h6>Strawberry</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat3}
                            alt=""
                            className=""
                        />
                        <h6>Snack</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat4}
                            alt=""
                            className=""
                        />
                        <h6>Black plum</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat5}
                            alt=""
                            className=""
                        />
                        <h6>Custard Apple</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat6}
                            alt=""
                            className=""
                        />
                        <h6>Red Apple</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat7}
                            alt=""
                            className=""
                        />
                        <h6>Peach</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat8}
                            alt=""
                            className=""
                        />
                        <h6>Oganic Kiwi</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat9}
                            alt=""
                            className=""
                        />
                        <h6>Cake & milk</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat10}
                            alt=""
                            className=""
                        />
                        <h6>Coffe & Tea</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center">
                        <img
                            src={cat11}
                            alt=""
                            className=""
                        />
                        <h6>Headphones</h6>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}

export default HomeItems;