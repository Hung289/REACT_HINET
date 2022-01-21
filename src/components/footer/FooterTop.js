import { Fragment } from "react";

const FooterTop = () => {
    return (
        <Fragment>
            <div class="footer__top">
                <div class="footer__new">
                    <div class="footer__title">New Sletter</div>

                    <form action="" method="post" class="form">
                        <input
                            class="form__input footer__search"
                            type="text"
                            placeholder="Search Something"
                        />

                        <div class="form__icon footer__icon">
                            <i class="far fa-arrow-right"></i>
                        </div>
                    </form>
                </div>

                <div class="footer__menu">
                    <div class="footer__title">Menu</div>
                    <ul class="footer-ul">
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

                <div class="footer__about">
                    <div class="footer__title">About</div>
                    <ul class="footer-ul">
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

                <div class="footer__follow">
                    <div class="footer__title">Follow us</div>
                    <ul class="footer-ul">
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
