import { Fragment, useState } from "react";
import Header from "../components/header/Header";
import HeaderTop from "../components/header/HeaderTop";
import HeaderMid from "../components/header/HeaderMid";
import HeaderBot from "../components/header/HeaderBot";
import Footer from "../components/footer/Footer";
import FooterTop from "../components/footer/FooterTop";
import FooterBot from "../components/footer/FooterBot";
import MenuMobile from "../components/common/MenuMobile";
import CartMobile from "../components/common/CartMobile";

const LayoutPage = (props) => {

    const [showMenuMobile, setShowMenuMobile] = useState(false)
    const [showCartMobile, setShowCartMobile] = useState(false)
 
    const toggleMenuMobileHandler = () => {
        setShowMenuMobile(!showMenuMobile)
    }

    const toggleCartMobileHandler = () => {
        setShowCartMobile(!showCartMobile)
    }

    const closeMenuMobileHandler = () => {
        setShowMenuMobile(false)
    }

    const closeCartMobileHandler = () => {
        setShowCartMobile(false)
    }

    return (
        <Fragment>
            <Header>
                <HeaderTop />
                <HeaderMid onToggleMenu={toggleMenuMobileHandler} onToggleCart={toggleCartMobileHandler}/>
                <HeaderBot />
            </Header>
                {props.children}
            <Footer>
                <FooterTop />
                <FooterBot />
            </Footer>
            <MenuMobile statusMenu={showMenuMobile} onCloseMenu={closeMenuMobileHandler}/>
            <CartMobile statusCart={showCartMobile} onCloseCart={closeCartMobileHandler}/>
        </Fragment>
    );
};

export default LayoutPage;
