import { Fragment } from "react";
import Slider from "react-slick";

const DUM_DATA = [
    { id: 1, bigTitle: "Piper Bar", smallTitle: "Table", price: 1390 },
    { id: 2, bigTitle: "Piper Bar", smallTitle: "Table", price: 1390 },
    { id: 3, bigTitle: "Piper Bar", smallTitle: "Table", price: 1390 },
    { id: 4, bigTitle: "Piper Bar", smallTitle: "Table", price: 1390 },
    { id: 5, bigTitle: "Piper Bar", smallTitle: "Table", price: 1390 },
    { id: 6, bigTitle: "Piper Bar", smallTitle: "Table", price: 1390 }
];
const LikeThis = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        slickNext: null,
        slickPrev: null,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Fragment>
            <section className="like-this">
                <div className="container-xl">
                    <div className="like-this__wrapper">
                        <div className="like-this__title">
                            May you like this
                        </div>
                    </div>

                    <Slider {...settings}>
                        {DUM_DATA.map((el) => (
                            <div key={el.id}>
                                <div className="card-box" key={el.id} style={{padding: '0px 10px', boxShadow:'border-box'}}>
                                    <div className="image-box"></div>
                                    <div className="info-box">
                                        <div className="info-box-left">
                                            <a href="!#" className="title-big">
                                                {el.bigTitle}
                                            </a>
                                            <a className="title-small" href="!#">
                                                {el.smallTitle}
                                            </a>
                                            <div>${el.price}</div>
                                        </div>
                                        <div className="info-box-right">
                                            <div className="content-change-vertical">
                                                <a
                                                    href="!#"
                                                    className="pp-basket"
                                                >
                                                    <i
                                                        className="
                                                            far
                                                            fa-shopping-basket
                                                        "
                                                    ></i>
                                                </a>
                                                <a
                                                    href="!#"
                                                    className="pp-heart"
                                                >
                                                    <i className="far fa-heart"></i>
                                                </a>
                                                <a
                                                    href="!#"
                                                    className="pp-random"
                                                >
                                                    <i className="far fa-random"></i>
                                                </a>
                                                <a href="!#" className="pp-eye">
                                                    <i className="far fa-eye"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </Fragment>
    );
};

export default LikeThis;
