import React from "react";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { TfiFullscreen } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";



const ProductItem = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                navigation={true}
                slidesPerGroup={3}
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
                            <div className='actions'>
                                <Button><TfiFullscreen/></Button>
                                <Button><CiHeart style={{fontSize:'20px'}}/></Button>
                            </div>
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
                            <div className='actions'>
                                <Button><TfiFullscreen/></Button>
                                <Button><CiHeart/></Button>
                            </div>
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
                            <div className='actions'>
                                <Button><TfiFullscreen/></Button>
                                <Button><CiHeart/></Button>
                            </div>
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
                                src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                alt='Italian-Style Chicken Meatballs'
                                className='w-100'
                            />
                            <span className='badge badge-primary'>28%</span>
                            <div className='actions'>
                                <Button><TfiFullscreen/></Button>
                                <Button><CiHeart style={{fontSize:'20px'}}/></Button>
                            </div>
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
                                src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg'
                                alt='Blue Diamond Almonds Lightly Salted'
                                className='w-100'
                            />
                            <span className='badge badge-primary'>28%</span>
                            <div className='actions'>
                                <Button><TfiFullscreen/></Button>
                                <Button><CiHeart/></Button>
                            </div>
                        </div>
                        <div className='info'>
                            <h4>Blue Diamond Almonds Lightly Salted</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" />

                            <div className='d-flex'>
                                <span className='oldPrice'>$19.00</span>
                                <span className='netPrice text-danger ml-2 ml-3'>$15.00</span>
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
                            <div className='actions'>
                                <Button><TfiFullscreen/></Button>
                                <Button><CiHeart/></Button>
                            </div>
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

                <SwiperSlide>
                    <div className='item productItem'>
                        <div className='imgWrapper'>
                            <img
                                src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg'
                                alt='Blue Diamond Almonds Lightly Salted'
                                className='w-100'
                            />
                            <span className='badge badge-primary'>28%</span>
                            <div className='actions'>
                                <Button><TfiFullscreen/></Button>
                                <Button><CiHeart/></Button>
                            </div>
                        </div>
                        <div className='info'>
                            <h4>Blue Diamond Almonds Lightly Salted</h4>
                            <span className='text-success d-block'>In Stock</span>
                            <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" />

                            <div className='d-flex'>
                                <span className='oldPrice'>$19.00</span>
                                <span className='netPrice text-danger ml-2 ml-3'>$15.00</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}

export default ProductItem;