import { Fragment } from "react";
import Product08 from "../../assets/images/product-08.jpg";
import Product05 from "../../assets/images/product-05.jpg";
import Product06 from "../../assets/images/product-06.jpg";
import Product19 from "../../assets/images/product-19.jpg";
const DUM_ITEMS = [
    {
        id: 1,
        name: "Table",
        category: "Bow Chair",
        price: 1390,
        description:
            "Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we...",
        image: Product08,
    },
    {
        id: 2,
        name: "Table",
        category: "Bow Chair",
        price: 1390,
        description:
            "Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we...",
        image: Product05,
    },
    {
        id: 3,
        name: "Table",
        category: "Bow Chair",
        price: 1390,
        description:
            "Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we...",
        image: Product06,
    },
    {
        id: 4,
        name: "Table",
        category: "Bow Chair",
        price: 1390,
        description:
            "Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we...",
        image: Product19,
    },
];

const MainBodyRight = () => {
    return (
        <Fragment>
            <div className="main-body__right">
                <div className="body-right__top">
                    <div className="body-right__top-left">
                        Showing 1 - 15 of 90 results
                    </div>

                    <div className="body-right__top-right">
                        <div className="dropdown-sort-shop">
                            <a className="sort-shop-page" href="!#">
                                Default Sorting
                            </a>
                            <div className="dropdown-menu-sort-shop">
                                <a href="!#">Price high to low</a>
                                <a href="!#">Price low to high</a>
                                <a href="!#">Random</a>
                            </div>
                        </div>
                    </div>
                </div>

                {DUM_ITEMS.map((el) => (
                    <div className="body-right__card" key={el.id}>
                        <div className="body-right__card-image-box">
                            <div className="hover-zoom-in">
                                <img src={el.image} alt="" />
                            </div>
                        </div>

                        <div className="body-right__card-content-box">
                            <div className="content-title">
                                <div className="content-title__left">
                                    <a href="!#">{el.name}</a>
                                    <a href="!#">{el.category}</a>
                                </div>

                                <div className="content-title__right">${el.price}</div>
                            </div>

                            <div className="content-description">
                                {el.description}
                            </div>

                            <a href="!#" className="btn-content-cart">
                                add to cart
                            </a>
                        </div>
                    </div>
                ))}

                <div className="navigation">
                    <ul className="navigation-ul">
                        <li>
                            <a href="!#">
                                <i className="far fa-angle-double-left"></i>
                            </a>
                        </li>
                        <li>
                            <a href="!#">1</a>
                        </li>
                        <li>
                            <a href="!#" className="active-navi">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="!#">3</a>
                        </li>
                        <li>
                            <a href="!#">...</a>
                        </li>
                        <li>
                            <a href="!#">6</a>
                        </li>
                        <li>
                            <a href="!#">
                                <i className="far fa-angle-double-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default MainBodyRight;
