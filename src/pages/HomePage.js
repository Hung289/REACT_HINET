import { Fragment } from "react"
import Footer from "../components/footer/Footer"
import FooterBot from "../components/footer/FooterBot"
import FooterTop from "../components/footer/FooterTop"
import Header from "../components/header/Header"
import HeaderBot from "../components/header/HeaderBot"
import HeaderMid from "../components/header/HeaderMid"
import HeaderTop from "../components/header/HeaderTop"
import Banner from "../components/home/Banner"
import Banner2 from "../components/home/Banner2"
import Brand from "../components/home/Brand"
import Catalog from "../components/home/Catalog"
import Essenstial from "../components/home/Essenstial"
import Journal from "../components/home/Journal"
import Main from "../components/layout/Main"

const HomePage = () => {
    return <Fragment>
        <Header>
            <HeaderTop/>
            <HeaderMid/>
            <HeaderBot/>
        </Header>
        <Main>
            <Banner/>
            <Catalog/>
            <Essenstial/>
            <Banner2/>
            <Brand/>
            <Journal/>
        </Main>
        <Footer>
            <FooterTop/>
            <FooterBot/>
        </Footer>
    </Fragment>
}

export default HomePage