import { Fragment } from "react";

const MenuMobile = (props) => {

    const closeMenu = () => {
        props.onCloseMenu()
    }

    return (
        <Fragment>
            <div className={props.statusMenu ? "menu-sidebar show": "menu-sidebar"}>
                <div className="menu-mobile-overlay" onClick={closeMenu}></div>

                <div className="menu-mobile">
                    <div className="menu-mobile-logo">
                        <a href="!#">
                            <img src="images/short_logo.png" alt="" />
                        </a>
                        <span className="menu-close" onClick={closeMenu}>
                            <i className="fal fa-times"></i>
                        </span>
                    </div>

                    <div className="menu-mobile-body">
                        <ul className="ul-menu-first">
                            <li className="li-menu-first">
                                <a href="!#" aria-expanded="false">
                                    Home<span className="caret"></span>
                                </a>
                                <ul className="ul-menu-second">
                                    <li className="li-menu-second">
                                        <a href="product-page.html">
                                            Product-Page
                                        </a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="shop-page.html">Shop-page</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Home 04</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Home 05</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Home 06</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="li-menu-first">
                                <a href="!#" aria-expanded="false">
                                    Shop<span className="caret"></span>
                                </a>
                                <ul className="ul-menu-second">
                                    <li className="li-menu-second">
                                        <a href="!#">Home 01</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Home 02</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Home 03</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Home 04</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Home 05</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Home 06</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="li-menu-first">
                                <a href="!#" aria-expanded="false">
                                    Pages<span className="caret"></span>
                                </a>
                            </li>
                            <li className="li-menu-first">
                                <a href="!#" aria-expanded="false">
                                    Contact<span className="caret"></span>
                                </a>
                                <ul className="ul-menu-second">
                                    <li className="li-menu-second">
                                        <a href="!#">Contact 01</a>
                                    </li>
                                    <li className="li-menu-second">
                                        <a href="!#">Contact 02</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="li-menu-first">
                                <a href="!#" aria-expanded="false">
                                    Blog<span className="caret"></span>
                                </a>
                            </li>
                            <li className="li-menu-first">
                                <a href="!#" aria-expanded="false">
                                    Docs<span className="caret"></span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu-mobile-footer">dssd</div>
                </div>
            </div>
        </Fragment>
    );
};

export default MenuMobile;
