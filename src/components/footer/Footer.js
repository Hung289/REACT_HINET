import { Fragment } from "react";

const Footer = (props) => {
    return (
        <Fragment>
            <footer>
                <div className="container-m">
                    <div className="footer__wrapper">
                        {props.children}
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
