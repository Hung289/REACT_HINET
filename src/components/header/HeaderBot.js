import { Fragment } from "react";
import {Link} from 'react-router-dom'
const HeaderBot = () => {
    return (
        <Fragment>
            <div className="header__sticky">
                <div className="container-m">
                    <div className="header__stickey-wrapper">
                        <ul className="dropdown-menu-main">
                            <li>
                                <Link className="dropdown-main-link" to="/">
                                    Home{" "}
                                </Link>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <Link
                                            className="dropdown-link"
                                            to="/product-detail"
                                        >
                                            Product-page
                                        </Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <Link
                                            className="dropdown-link"
                                            to="/shop-page"
                                        >
                                            Shop-page
                                        </Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <a
                                            className="dropdown-link"
                                            href="contact.html"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 04
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 05
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-main-link" href="!#">
                                    Shop
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 01
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 02
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 03
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 04
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 05
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-main-link" href="!#">
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 01
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 02
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 03
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 04
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 05
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-main-link" href="!#">
                                    Contact
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <a
                                            className="dropdown-link"
                                            href="contact.html"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 02
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 03
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 04
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 05
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-main-link" href="!#">
                                    Blog
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 01
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 02
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 03
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 04
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 05
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-main-link" href="!#">
                                    Docs
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 01
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 02
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 03
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 04
                                        </a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="!#">
                                            Home 05
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderBot;
