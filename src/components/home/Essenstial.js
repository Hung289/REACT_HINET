import { Fragment } from "react";

import Product19 from "../../assets/images/product-19.jpg";
import Product02 from "../../assets/images/product-02.jpg";
import Product10 from "../../assets/images/product-19.jpg";
import Product04 from "../../assets/images/product-04.jpg";
import Product16 from "../../assets/images/product-16.jpg";
import Product06 from "../../assets/images/product-06.jpg";
import Product05 from "../../assets/images/product-05.jpg";

const DUM_DATA = [
    {
        id: 1,
        image: Product19,
    },
    { id: 2, image: Product02 },
    { id: 3, image: Product10 },
    { id: 4, image: Product04 },
    { id: 5, image: Product16 },
    { id: 6, image: Product16 },
    { id: 7, image: Product06 },
    { id: 8, image: Product05 },
];

const Essenstial = () => {
    return (
        <Fragment>
            <section className="essenstial">
                <div className="container-m">
                    <div className="section-title mg-medium">
                        Essenstial Items
                    </div>
                    <div className="essenstial__wrapper mg-medium">
                        {DUM_DATA.map((item) => (
                            <div className="essenstial__item animate__animated  animate__fadeInUp animate__delay-1s" key={item.id}>
                                <div className="essenstial__item-top">
                                    <img src={item.image} alt="" />
                                    <div className="action__lists">
                                        <a href="!#" className="basket">
                                            <i className="far fa-shopping-basket"></i>
                                        </a>
                                        <a href="!#" className="heart">
                                            <i className="far fa-heart"></i>
                                        </a>
                                        <a href="!#" className="random">
                                            <i className="far fa-random"></i>
                                        </a>
                                        <a href="!#" className="eye">
                                            <i className="far fa-eye"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="essenstial__item-body">
                                    <div className="body-title">Table</div>
                                    <div className="body-content">
                                        <div className="body-content-left">
                                            <a href="!#">Bow Chair</a>
                                        </div>
                                        <div className="body-content-right">
                                            $1390.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="btn essenstial__btn">
                        <a href="product-page.html">Shop now</a>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Essenstial;
