import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import cat1 from '../../assets/images/cat1.jpg';
import cat2 from '../../assets/images/cat2.jpg';
import cat3 from '../../assets/images/cat3.jpg';
import cat4 from '../../assets/images/cat4.jpg';
import cat5 from '../../assets/images/cat5.jpg';
import cat6 from '../../assets/images/cat6.jpg';
import cat7 from '../../assets/images/cat7.jpg';
import cat8 from '../../assets/images/cat8.jpg';
import cat9 from '../../assets/images/cat9.jpg';
import cat10 from '../../assets/images/cat10.jpg';
import cat11 from '../../assets/images/cat11.jpg';

const HomeItems = () => {
    return (
        <>
            <Swiper
                slidesPerView={10}
                spaceBetween={8}
                navigation={true}
                slidesPerGroup={3}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#fffceb' }}>
                        <img
                            src={cat1}
                            alt="Custard Apple"
                            className="w-100"
                        />
                        <h6>Vegetables</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#ecffec' }}>
                        <img
                            src={cat2}
                            alt="Strawberry"
                            className="w-100"
                        />
                        <h6>Strawberry</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#feefea' }}>
                        <img
                            src={cat3}
                            alt="Snack"
                            className="w-100"
                        />
                        <h6>Snack</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#ecffec' }}>
                        <img
                            src={cat4}
                            alt="Black plum"
                            className="w-100"
                        />
                        <h6>Black plum</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#f2fec4' }}>
                        <img
                            src={cat5}
                            alt="Custard Apple"
                            className="w-100"
                        />
                        <h6>Custard Apple</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#fffceb' }}>
                        <img
                            src={cat6}
                            alt="Red Apple"
                            className="w-100"
                        />
                        <h6>Red Apple</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#fff3eb' }}>
                        <img
                            src={cat7}
                            alt="Peach"
                            className="w-100"
                        />
                        <h6>Peach</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#f2fec4' }}>
                        <img
                            src={cat8}
                            alt="Organic Kiwi"
                            className="w-100"
                        />
                        <h6>Organic Kiwi</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#ecffec' }}>
                        <img
                            src={cat9}
                            alt="Cake & Milk"
                            className="w-100"
                        />
                        <h6>Cake & Milk</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#fffceb' }}>
                        <img
                            src={cat10}
                            alt="Coffee & Tea"
                            className="w-100"
                        />
                        <h6>Coffee & Tea</h6>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item text-center cursor" style={{ background: '#feefea' }}>
                        <img
                            src={cat11}
                            alt="Headphones"
                            className="w-100"
                        />
                        <h6>Headphones</h6>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HomeItems;
