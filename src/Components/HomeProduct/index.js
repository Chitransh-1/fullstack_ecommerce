import Button from '@mui/material/Button';
import React from 'react';
import ProductItem from '../ProductItem';
import { IoIosArrowRoundForward } from 'react-icons/io';
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
        <section className="homeProducts">
            <div className="container">
                <div className="row">

                    <div className="col-md-3">
                        <div className="banner">
                            <img
                                src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                                alt="Banner"
                                className="cursor w-100"
                            />
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
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeProduct;
