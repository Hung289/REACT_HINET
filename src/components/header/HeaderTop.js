import { Fragment } from "react";

const HeaderTop = () => {
    return (
        <Fragment>
            <div className="header__top">
                <div className="container-m">
                    <div className="header__top-wrapper">
                        <div className="header__top-left">
                            <a href="!#" className="border-right">
                                <span>
                                    <i className="fal fa-map-marker-alt"></i>
                                </span>
                                <span>Find a Store</span>
                            </a>

                            <a href="!#">
                                <span>
                                    <i className="fal fa-envelope"></i>
                                </span>
                                <span>Newsletter</span>
                            </a>
                        </div>

                        <div className="header__top-center">
                            Free shipping for orders over $59!
                        </div>

                        <div className="header__top-right">
                            <a href="!#" className="border-right">
                                {" "}
                                English{" "}
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
                            <a href="!#"> USD </a>
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
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderTop;
