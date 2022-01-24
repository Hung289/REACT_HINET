import { Fragment } from "react";
import Header from "../components/header/Header";
import HeaderTop from "../components/header/HeaderTop";
import HeaderMid from "../components/header/HeaderMid";
import HeaderBot from "../components/header/HeaderBot";
import Footer from "../components/footer/Footer";
import FooterTop from "../components/footer/FooterTop";
import FooterBot from "../components/footer/FooterBot";

const LayoutPage = (props) => {
    return (
        <Fragment>
            <Header>
                <HeaderTop />
                <HeaderMid />
                <HeaderBot />
            </Header>
                {props.children}
            <Footer>
                <FooterTop />
                <FooterBot />
            </Footer>
        </Fragment>
    );
};

export default LayoutPage;
