import { Fragment, useState } from "react";
import Header from "../components/header/Header";
import HeaderTop from "../components/header/HeaderTop";
import HeaderMid from "../components/header/HeaderMid";
import HeaderBot from "../components/header/HeaderBot";
import Footer from "../components/footer/Footer";
import FooterTop from "../components/footer/FooterTop";
import FooterBot from "../components/footer/FooterBot";
import MenuMobile from "../components/common/MenuMobile";

const LayoutPage = (props) => {

    const [showMenuMobile, setShowMenuMobile] = useState(false)

    const toggleMenuMobileHandler = () => {
        setShowMenuMobile(!showMenuMobile)
    }

    const closeMenuMobileHandler = () => {
        setShowMenuMobile(false)
    }

    return (
        <Fragment>
            <Header>
                <HeaderTop />
                <HeaderMid onToggleMenu={toggleMenuMobileHandler}/>
                <HeaderBot />
            </Header>
                {props.children}
            <Footer>
                <FooterTop />
                <FooterBot />
            </Footer>
            <MenuMobile statusMenu={showMenuMobile} onCloseMenu={closeMenuMobileHandler}/>
        </Fragment>
    );
};

export default LayoutPage;
