import { Fragment, useState } from "react";
import Productpage9 from "../../assets/images/product-page-09.jpg";
import P1 from "../../assets/images/p1.png";
import P2 from "../../assets/images/p2.png";
import P3 from "../../assets/images/p3.png";
import P4 from "../../assets/images/p4.png";
import P5 from "../../assets/images/p5.png";

const DUM_DATA_COLOR = [
    { id: 1, color: "#000000" },
    { id: 2, color: "#68412d" },
    { id: 3, color: "#9ec8bb" },
];

const DUM_LOGO_PAYMENT = [
    { id: 1, logo: P1 },
    { id: 2, logo: P2 },
    { id: 3, logo: P3 },
    { id: 4, logo: P4 },
    { id: 5, logo: P5 },
];

const ProductDetailRight = () => {
    const [isActive, setIsAction] = useState("#000000");

    const toggleTab = (e, color) => {
        e.preventDefault();
        setIsAction(color);
    };

    return (
        <Fragment>
            <div className="product-detail__right">
                <div className="product-detail__title-small">Accessories</div>
                <div className="product-detail__title-big">Radial Clock</div>
                <div className="product-detail__price">$790.00</div>
                <div className="product-detail__time">
                    <span>
                        {" "}
                        <i className="far fa-stopwatch"></i>{" "}
                    </span>
                    <span> Only 11 Left in Stock </span>
                </div>

                <div className="product-detail__description">
                    Minimal, yet bold - LYNEA Plug Lamp adds an architectural
                    addition without the pain of a professional installation.
                </div>

                <img src={Productpage9} alt="" />

                <form action="#">
                    <div className="form-group-color">
                        <ul className="card__body-lists list-inline color">
                            {DUM_DATA_COLOR.map((el) => (
                                <li
                                    className={
                                        isActive === el.color
                                            ? "color-item active"
                                            : "color-item"
                                    }
                                    key={el.id}
                                >
                                    <a
                                        href="!#"
                                        style={{ backgroundColor: el.color }}
                                        data-var="black"
                                        onClick={(e) => toggleTab(e, el.color)}
                                    >
                                        {""}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <select
                            name="swatches"
                            className="swatches-select"
                            id=""
                        >
                            <option value="black">Black</option>
                            <option value="brown">Brown</option>
                            <option value="green">Grren</option>
                        </select>
                    </div>

                    <div className="form-group-show">
                        <div className="form-group-show__size">
                            <label htmlFor="">Select a Size</label>
                            <select className="size" name="size" id="">
                                <option value="">Choose an option</option>
                                <option value="SM">SM</option>
                                <option value="MD">MD</option>
                                <option value="LG">LG</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>

                        <div className="form-group-show__material">
                            <label htmlFor="">Material</label>
                            <select className="material" name="material" id="">
                                <option value="">Choose an option</option>
                                <option value="SM">SM</option>
                                <option value="MD">MD</option>
                                <option value="LG">LG</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn-form-product-detail">
                        Add To Cart
                    </button>

                    <ul className="payment-logo">
                        {DUM_LOGO_PAYMENT.map((el) => (
                            <li key={el.id}>
                                <img src={el.logo} alt="" />
                            </li>
                        ))}
                    </ul>

                    <div className="Guarantee">
                        <span>
                            <i className="far fa-lock"></i>
                        </span>
                        Guarantee Safe and Secure Checkout
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default ProductDetailRight;
