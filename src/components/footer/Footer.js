import { Fragment } from "react";

const Footer = (props) => {
    return (
        <Fragment>
            <footer>
                <div class="container-m">
                    <div class="footer__wrapper">
                        {props.children}
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
