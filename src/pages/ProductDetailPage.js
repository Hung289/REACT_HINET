import { Fragment } from "react";
import Main from "../components/layout/Main";
import Bought from "../components/productdetail/Bought";
import Breadcrumb from "../components/productdetail/Breadcrumb";
import ColTab from "../components/productdetail/Coltab";
import LikeThis from "../components/productdetail/LikeThis";
import ProductDetail from "../components/productdetail/ProductDetail";
import LayoutPage from "./LayputPage";


const ProductDetailPage = () => {
    return (
        <Fragment>
            <LayoutPage>
                <Main>
                    <Breadcrumb/>
                    <ProductDetail/>
                    <Bought/>
                    <ColTab/>
                    <LikeThis/>
                </Main>    
            </LayoutPage>            
        </Fragment>
    );
};

export default ProductDetailPage;
