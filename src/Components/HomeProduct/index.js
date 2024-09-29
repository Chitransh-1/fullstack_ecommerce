import Button from '@mui/material/Button';
import HomeShop from '../HomeShop';
import React from 'react';
import ProductItem from '../ProductItem';
import banner from '../../assets/images/banner.jpg'
import banner1 from '../../assets/images/banner1.jpg'
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import coupon from '../../assets/images/coupon.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoMailOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';



const HomeProduct = () => {
    const productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className="homeProducts">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3">
                            <div className='sticky'>
                                <div className="banner">
                                    <img
                                        src={banner1}
                                        alt="Banner1"
                                        className="cursor w-100"
                                    />
                                </div>
                                <div className="banner mt-4">
                                    <img
                                        src={banner}
                                        alt="Banner2"
                                        className="cursor w-100"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 productRow">

                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLER</h3>
                                    <p className="text-light text-sml mb-0"> Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className="viewAllbtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>
                            <div className="product_row w-100 mt-4"><ProductItem /></div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllbtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>
                            <div className="product_row w-100 mt-4"><ProductItem /></div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllbtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <HomeShop/>
                            </div>

                            <div className='d-flex mt-4 mb-5 bannerSec'>
                                <div className='banner'>
                                    <img
                                        src={banner3}
                                        alt="Banner1"
                                        className="cursor w-100"
                                    />
                                </div>
                                <div className='banner'>
                                    <img
                                        src={banner4}
                                        alt="Banner1"
                                        className="cursor w-100"
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className='newsLetterSection mt-3 mb-3 d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p className='text-white mb-3'>#29 discount for your first oder</p>
                            <h3 className='text-white'>Join our mewsletter and get...</h3>
                            <p className='text-white'>Join our email subscription now to get updates on <br/> promotion and coupons</p>

                            <form>
                                <IoMailOutline/>
                                <input type='text' placeholder='Enter your email address'/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>

                        <div className='col-md-6'>
                            <img 
                                className='' 
                                src={coupon} 
                                alt='NewsLetterSection'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <br/><br/><br/><br/><br/><br/>
        </>
    );
};

export default HomeProduct;
