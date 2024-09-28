import Button from '@mui/material/Button';
import React from "react";
import Rating from '@mui/material/Rating';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';

const HomeProduct = () => {
    var productSlideroptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <>
            <section className="homeProducts">
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img 
                                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" 
                                    alt=""
                                    className="cursor w-100"
                                />
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLER</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>

                                <Button className='viewAllbtn ml-auto'>View All<IoIosArrowRoundForward/></Button>
                            </div>

                            <div className='product_row w-100 mt-4'>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={0}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <div className='item productItem'>
                                            <div className='imgWrapper'>
                                                <img
                                                    src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                                    alt='Italian-Style Chicken Meatballs'
                                                    className='w-100'
                                                />
                                                <span className='badge badge-primary'>28%</span>
                                            </div>

                                            <div className='info'>
                                                <h4>Italian-Style Chicken Meatballs</h4>
                                                <span className='text-success d-block'>In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" />

                                                <div className='d-flex'>
                                                    <span className='oldPrice'>$15.00</span>
                                                    <span className='netPrice text-danger ml-2 ml-3'>$10.00</span>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='item productItem'>
                                            <div className='imgWrapper'>
                                                <img
                                                    src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg'
                                                    alt='Angie’s Boomchickapop Sweet & Salty Kettle Corn'
                                                    className='w-100'
                                                />
                                                <span className='badge badge-primary'>28%</span>
                                            </div>

                                            <div className='info'>
                                                <h4>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h4>
                                                <span className='text-success d-block'>In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" />

                                                <div className='d-flex'>
                                                    <span className='oldPrice'>$20.00</span>
                                                    <span className='netPrice text-danger ml-2 ml-3'>$18.00</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='item productItem'>
                                            <div className='imgWrapper'>
                                                <img
                                                    src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg'
                                                    alt='Field Roast Chao Cheese Creamy Original'
                                                    className='w-100'
                                                />
                                                <span className='badge badge-primary'>28%</span>
                                            </div>

                                            <div className='info'>
                                                <h4>Field Roast Chao Cheese Creamy Original</h4>
                                                <span className='text-success d-block'>In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" />

                                                <div className='d-flex'>
                                                    <span className='oldPrice'>$22.00</span>
                                                    <span className='netPrice text-danger ml-2 ml-3'>$20.00</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='item productItem'>
                                            <div className='imgWrapper'>
                                                <img
                                                    src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg'
                                                    alt='Blue Diamond Almonds Lightly Salted'
                                                    className='w-100'
                                                />
                                                <span className='badge badge-primary'>28%</span>
                                            </div>

                                            <div className='info'>
                                                <h4>Blue Diamond Almonds Lightly Salted</h4>
                                                <span className='text-success d-block'>In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" />

                                                <div className='d-flex'>
                                                    <span className='oldPrice'>$19.00</span>
                                                    <span className='netPrice text-danger ml-2 ml-3'>15.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='item productItem'>
                                            <div className='imgWrapper'>
                                                <img
                                                    src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg'
                                                    alt='Foster Farms Takeout Crispy Classic Buffalo Wings'
                                                    className='w-100'
                                                />
                                                <span className='badge badge-primary'>28%</span>
                                            </div>

                                            <div className='info'>
                                                <h4>Foster Farms Takeout Crispy Classic Buffalo Wings</h4>
                                                <span className='text-success d-block'>In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" />

                                                <div className='d-flex'>
                                                    <span className='oldPrice'>$20.00</span>
                                                    <span className='netPrice text-danger ml-2 ml-3'>$14.00</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </SwiperSlide>
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default HomeProduct