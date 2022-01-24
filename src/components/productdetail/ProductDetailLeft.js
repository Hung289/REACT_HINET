import { Fragment, useState } from "react";
import Slider from "react-slick";
import ProductPage13 from "../../assets/images/product-page-13.jpg";
import ProductPage15 from "../../assets/images/product-page-15.jpg";
import ProductPage16 from "../../assets/images/product-page-16.jpg";
import ProductPage14 from "../../assets/images/product-page-14.jpg";

const DUM_DATA_SLIDE_01 = [
    {
        id: 1,
        image: ProductPage13,
    },
    { id: 2, image: ProductPage15 },
    { id: 3, image: ProductPage16 },
    { id: 4, image: ProductPage14 },
];

const ProductDetailLeft = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <Fragment>
            <div className="product-detail__left">
                <Slider asNavFor={nav2} ref={(slider) => setNav1(slider)}>
                    {DUM_DATA_SLIDE_01.map((el) => (
                        <div key={el.id}>
                            <a href="!#">
                                <img
                                    src={el.image}
                                    alt=""
                                    style={{ width: "100%", padding: '0px 10px' }}
                                />
                            </a>
                        </div>
                    ))}
                </Slider>
                <Slider
                    asNavFor={nav1}
                    ref={(slider) => setNav2(slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    
                >
                    {DUM_DATA_SLIDE_01.map((el) => (
                        <a href="!#" key={el.id}>
                            <img
                                src={el.image}
                                alt=""
                                style={{ width: "100%", padding:'10px' }}
                            />
                        </a>
                    ))}
                </Slider>
            </div>
        </Fragment>
    );
};
export default ProductDetailLeft;
