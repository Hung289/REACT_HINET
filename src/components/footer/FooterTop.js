import { Fragment } from "react";

const FooterTop = () => {
    return (
        <Fragment>
            <div className="footer__top">
                <div className="footer__new">
                    <div className="footer__title">New Sletter</div>

                    <form action="" method="post" className="form">
                        <input
                            className="form__input footer__search"
                            type="text"
                            placeholder="Search Something"
                        />

                        <div className="form__icon footer__icon">
                            <i className="far fa-arrow-right"></i>
                        </div>
                    </form>
                </div>

                <div className="footer__menu">
                    <div className="footer__title">Menu</div>
                    <ul className="footer-ul">
                        <li>
                            <a href="!#">Seatting</a>
                        </li>
                        <li>
                            <a href="!#">Tables</a>
                        </li>
                        <li>
                            <a href="!#">Decoration</a>
                        </li>
                        <li>
                            <a href="!#">Gift Ideas</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__about">
                    <div className="footer__title">About</div>
                    <ul className="footer-ul">
                        <li>
                            <a href="!#">Contact us</a>
                        </li>
                        <li>
                            <a href="!#">Contributiors</a>
                        </li>
                        <li>
                            <a href="!#">Privacy</a>
                        </li>
                        <li>
                            <a href="!#">Sponsors</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__follow">
                    <div className="footer__title">Follow us</div>
                    <ul className="footer-ul">
                        <li>
                            <a href="!#">Facebook</a>
                        </li>
                        <li>
                            <a href="!#">Pinterest</a>
                        </li>
                        <li>
                            <a href="!#">Instagram</a>
                        </li>
                        <li>
                            <a href="!#">Twitter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterTop;
