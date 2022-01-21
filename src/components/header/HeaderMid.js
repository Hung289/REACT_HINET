import { Fragment } from "react";
import Logo from '../../assets/images/logo.png'    
const HeaderMid = () => {
    return (
        <Fragment>
            <div className="header__center">
                <div className="container-m">
                    <div className="header__center-wrapper">
                        <div className="btn-mobile-menu">
                            <div className="btn-menu">
                                <span className="toggle-icon"></span>
                            </div>
                        </div>
                        <div className="header__center-left">
                            <form
                                action=""
                                method="post"
                                className="form header__left-form"
                            >
                                <input
                                    className="form__input header__left-search"
                                    type="text"
                                    placeholder="Search Something"
                                />

                                <div className="form__icon header__left-icon">
                                    <i className="far fa-search"></i>
                                </div>
                            </form>
                        </div>

                        <div className="header__center-center">
                            <a className="navbar-brand" href="index.html">
                                <img src={Logo} alt="" />
                            </a>
                        </div>

                        <div className="header__center-right">
                            <ul>
                                <li>
                                    <a href="!#">
                                        <i className="far fa-user-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <i className="far fa-heart"></i>
                                    </a>
                                    <span className="number">0</span>
                                </li>
                                <li className="basket-btn">
                                    <a href="!#">
                                        <i className="far fa-shopping-basket"></i>
                                    </a>
                                    <span className="number">0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderMid;
