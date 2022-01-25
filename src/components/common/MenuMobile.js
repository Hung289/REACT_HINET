import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ShortLogo from '../../assets/images/short_logo.png'


const MenuMobile = (props) => {


    const [isShowSubMenu, setIsShowSubMenu] = useState(false)

    const closeMenu = () => {
        props.onCloseMenu()
    }

    const toggleSubMenu = (e) => {
        console.log('hihi')
        e.preventDefault()
        setIsShowSubMenu(!isShowSubMenu)
    }

    return (
        <Fragment>
            <div className={props.statusMenu ? "menu-sidebar show": "menu-sidebar"}>
                <div className="menu-mobile-overlay" onClick={closeMenu}></div>

                <div className="menu-mobile">
                    <div className="menu-mobile-logo">
                        <Link to="/">
                            <img src={ShortLogo} alt="" />
                        </Link>
                        <span className="menu-close" onClick={closeMenu}>
                            <i className="fal fa-times"></i>
                        </span>
                    </div>

                    <div className="menu-mobile-body">
                        <ul className="ul-menu-first">
                            <li className={isShowSubMenu ? "li-menu-first show" : "li-menu-first"}>
                                <a href="!#" aria-expanded="false"  onClick={(e) => toggleSubMenu(e)}>
                                    Home<span className="caret"></span>
                                </a>
                                <ul className="ul-menu-second">
                                    <li className="li-menu-second">
                                        <Link to="/product-detail">
                                            Product-Page
                                        </Link>
                                    </li>
                                    <li className="li-menu-second">
                                        <Link to="/shop-page">Shop-page</Link>
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
                            <li className={isShowSubMenu ? "li-menu-first show" : "li-menu-first"}>
                                <a href="!#" aria-expanded="false"  onClick={(e) => toggleSubMenu(e)}>
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
                            <li className={isShowSubMenu ? "li-menu-first show" : "li-menu-first"}>
                                <a href="!#" aria-expanded="false"  onClick={(e) => toggleSubMenu(e)}>
                                    Pages<span className="caret"></span>
                                </a>
                            </li>
                            <li className={isShowSubMenu ? "li-menu-first show" : "li-menu-first"}>
                                <a href="!#" aria-expanded="false"  onClick={(e) => toggleSubMenu(e)}>
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
                            <li className={isShowSubMenu ? "li-menu-first show" : "li-menu-first"}>
                                <a href="!#" aria-expanded="false">
                                    Blog<span className="caret"></span>
                                </a>
                            </li>
                            <li className={isShowSubMenu ? "li-menu-first show" : "li-menu-first"}>
                                <a href="!#" aria-expanded="false"  onClick={(e) => toggleSubMenu(e)}>
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
