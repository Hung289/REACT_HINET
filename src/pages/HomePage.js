import { Fragment } from "react";
import Banner from "../components/home/Banner";
import Banner2 from "../components/home/Banner2";
import Brand from "../components/home/Brand";
import Catalog from "../components/home/Catalog";
import Essenstial from "../components/home/Essenstial";
import Journal from "../components/home/Journal";
import Main from "../components/layout/Main";
import LayoutPage from "./LayputPage";

const HomePage = () => {
    return (
        <Fragment>
            <LayoutPage>
                <Main>
                    <Banner />
                    <Catalog />
                    <Essenstial />
                    <Banner2 />
                    <Brand />
                    <Journal />
                </Main>
            </LayoutPage>
        </Fragment>
    );
};

export default HomePage;
