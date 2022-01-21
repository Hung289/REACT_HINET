import { Fragment } from "react";
import Slider from "react-slick";
import Market01 from "../../assets/images/image-marker-01.jpg";
import Market02 from "../../assets/images/image-marker-02.jpg";
const DATA_DUM = [
    {
        id: 1,
        image: Market01,
        title: "Collection",
        titleSmall: "Spring - Summner Vibe 2021",
    },
    {
        id: 2,
        image: Market02,
        title: "Collection",
        titleSmall: "Spring - Summner Vibe 2021",
    },
    {
        id: 3,
        image: Market01,
        title: "Collection",
        titleSmall: "Spring - Summner Vibe 2021",
    },
    {
        id: 4,
        image: Market02,
        title: "Collection",
        titleSmall: "Spring - Summner Vibe 2021",
    }
];

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            <section className="banner">
                <div className="container-m">
                    <Slider {...settings}>
                        {DATA_DUM.map((item) => (
                            <div className="item" key={item.id}>
                                <img
                                    src={item.image}
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                                <p>
                                    {item.title}
                                    <a href="!#">{item.titleSmall}</a>
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </Fragment>
    );
};

export default Banner;
