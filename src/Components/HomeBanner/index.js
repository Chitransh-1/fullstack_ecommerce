import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay : true
    };
    
    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/skechers_Reebok_web_fed1221d66/skechers_Reebok_web_fed1221d66.png"
                        alt="Skechers and Reebok"
                        className="w-100"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/Fossil_michael_kors_and_more_web_402682fbd4/Fossil_michael_kors_and_more_web_402682fbd4.png"
                        alt="Fossil, Michael Kors and more"
                        className="w-100"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/Biba_fashor_and_more_web_a2d364c21f/Biba_fashor_and_more_web_a2d364c21f.png"
                        alt="Biba and Fashor"
                        className="w-100"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/Forever_New_forever_new_and_more_web_5e9046490f/Forever_New_forever_new_and_more_web_5e9046490f.png"
                        alt="Forever New and more"
                        className="w-100"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/Jack_and_Jones_Levis_and_more_web_f70b98bf6b/Jack_and_Jones_Levis_and_more_web_f70b98bf6b.png"
                        alt="Jack and Jones, Levi's"
                        className="w-100"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/main_strapi_web_eda90b4582/main_strapi_web_eda90b4582.png"
                        alt="Main Strapi"
                        className="w-100"
                    />
                </div>
                <div className="item">
                    <img 
                        src="https://cmsimages.shoppersstop.com/Stop_Life_web_a50d796626/Stop_Life_web_a50d796626.png"
                        alt="Stop Life"
                        className="w-100"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default HomeBanner;
