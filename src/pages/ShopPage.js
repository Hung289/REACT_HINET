import { Fragment } from "react";
import Main from "../components/layout/Main";
import BigImg from "../components/shoppage/BigImg";
import MainBody from "../components/shoppage/MainBody";
import LayoutPage from "./LayputPage";

const ShopPage = () => {
    return (
        <Fragment>
            <LayoutPage>
                <Main>
                    <BigImg/>
                    <MainBody/>
                </Main>
            </LayoutPage>
        </Fragment>
    );
};
export default ShopPage;
