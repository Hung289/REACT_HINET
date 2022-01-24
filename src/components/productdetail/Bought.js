import { Fragment } from "react";
import Product19 from '../../assets/images/product-19.jpg'
import Product02 from '../../assets/images/product-02.jpg'
import Product06 from '../../assets/images/product-06.jpg'

const Bought = () => {
    return (
        <Fragment>
            <section className="bought-together">
                <div className="container-m">
                    <div className="like-this__title">
                        Frequently Bought Together
                    </div>

                    <form action="" className="form-together">
                        <div className="lists-item-together">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="product[]"
                                    id="item-1"
                                />
                                <label htmlFor="item-1" className="form-check-label">
                                    <img
                                        src={Product19}
                                        alt="Image Product"
                                    />
                                    <span>
                                        <i className="far fa-plus"></i>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="product[]"
                                    id="item-2"
                                />
                                <label htmlFor="item-2" className="form-check-label">
                                    <img
                                        src={Product02}
                                        alt="Image Product"
                                    />
                                    <span>
                                        <i className="far fa-plus"></i>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="product[]"
                                    id="item-3"
                                />
                                <label htmlFor="item-3" className="form-check-label">
                                    <img
                                        src={Product06}
                                        alt="Image Product"
                                    />
                                    <span>
                                        <i className="far fa-plus"></i>
                                    </span>
                                </label>
                            </div>
                            <div className="form-check">
                                <div className="text-primary-together">
                                    Total price:
                                    <span>$360.00</span>
                                </div>
                                <button type="submit">Add selected Item</button>
                            </div>
                        </div>
                    </form>

                    <ul className="lists-unstyled">
                        <li>
                            <label htmlFor="item1">
                                <span>
                                    <i className="fas fa-scrubber"></i>This item:
                                </span>
                            </label>
                            <select name="" id="item1">
                                <option value="">
                                    Riarien Beige / S / none - $120.00
                                </option>
                                <option value="">
                                    Riarien Beige / S / none - $120.00
                                </option>
                                <option value="">
                                    Riarien Beige / S / none - $120.00
                                </option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="item2">
                                <span>
                                    <i className="fas fa-scrubber"></i>Tralisien:
                                </span>
                            </label>
                            <select name="" id="item2">
                                <option value="">
                                    Red - $120.00 Stassinos Navi Multi - $120.00
                                </option>
                                <option value="">
                                    Red - $120.00 Stassinos Navi Multi - $120.00
                                </option>
                                <option value="">
                                    Red - $120.00 Stassinos Navi Multi - $120.00
                                </option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="item3">
                                <span>
                                    <i className="fas fa-scrubber"></i>Stassinos:
                                </span>
                            </label>
                            <select name="" id="item3">
                                <option value="">Navi Multi - $120.00</option>
                                <option value="">Navi Multi - $120.00</option>
                                <option value="">Navi Multi - $120.00</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </section>
        </Fragment>
    );
};

export default Bought;
