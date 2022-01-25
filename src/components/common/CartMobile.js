import { Fragment } from "react";
import CartImage01 from '../../assets/images/cart-01.jpg'
const CartMobile = (props) => {

    const closeCart = () => {
        props.onCloseCart()
    }

    return (
        <Fragment>
            <div className={props.statusCart ? 'cart-sidebar show' : 'cart-sidebar'}>
                <div className="cart-overlay" onClick={closeCart}></div>

                <form action="" method="POST">
               
                    <div className="card">
                        <div className="card-close" onClick={closeCart}>
                            <span>
                                <i className="fal fa-times"></i>
                            </span>
                        </div>
                        <div className="card-header">
                            <div className="card-header-title">Your Cart</div>
                            <div className="card-header-text">
                                <span>
                                    <i className="far fa-check-circle"></i>
                                </span>
                                Your cart is saved for the next
                                <span>4m34s</span>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="card-body-item">
                                <a href="!#">
                                    <i className="fal fa-times"></i>
                                </a>
                                <div className="detail-item">
                                    <div className="detail-item-image">
                                        <img src={CartImage01} alt="" />
                                    </div>
                                    <div className="detail-item-body">
                                        <div className="detail-item-body-small-title">
                                            Chairs
                                        </div>
                                        <div className="detail-item-body-big-title">
                                            <a href="!#">Partridge Bar Stool</a>
                                        </div>
                                        <div className="detail-item-body-input">
                                            <div className="input-group">
                                                <a href="!#" className="left">
                                                    <i className="far fa-minus"></i>
                                                </a>
                                                <input
                                                    type="number"
                                                    defaultValue="1"
                                                />
                                                <a href="!#" className="right">
                                                    <i className="far fa-plus"></i>
                                                </a>
                                            </div>

                                            <div className="detail-item-number">
                                                $1250.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body-item">
                                <a href="!#">
                                    <i className="fal fa-times"></i>
                                </a>
                                <div className="detail-item">
                                    <div className="detail-item-image">
                                        <img src={CartImage01} alt="" />
                                    </div>
                                    <div className="detail-item-body">
                                        <div className="detail-item-body-small-title">
                                            Chairs
                                        </div>
                                        <div className="detail-item-body-big-title">
                                            <a href="!#">Partridge Bar Stool</a>
                                        </div>
                                        <div className="detail-item-body-input">
                                            <div className="input-group">
                                                <a href="!#" className="left">
                                                    <i className="far fa-minus"></i>
                                                </a>
                                                <input
                                                    type="number"
                                                    defaultValue="1"
                                                />
                                                <a href="!#" className="right">
                                                    <i className="far fa-plus"></i>
                                                </a>
                                            </div>

                                            <div className="detail-item-number">
                                                $1250.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body-text">
                                <span>
                                    <i className="fas fa-info-circle"></i>
                                </span>
                                Special instruction for seller
                            </div>
                        </div>

                        <div className="card-footer">
                            <div className="card-subtotal">
                                <div className="card-subtotal-title">Subtotal</div>
                                <div className="card-subtotal-price">$2000.00</div>
                            </div>

                            <div className="card-footer-input">
                                <input
                                    type="text"
                                    placeholder="Enter coupon code here"
                                />
                            </div>

                            <div className="card-footer-btn">
                                <a href="!#">Check out</a>
                            </div>

                            <div className="card-footer-viewcart">
                                <a href="!#">View cart</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default CartMobile;
