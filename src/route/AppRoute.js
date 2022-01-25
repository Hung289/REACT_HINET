import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShopPage from "../pages/ShopPage";


const AppRoute = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                    path="/product-detail"
                    element={<ProductDetailPage />}
                ></Route>
                <Route path="/shop-page" element={<ShopPage />}></Route>
                
            </Routes>
            
        </Fragment>
    );
};

export default AppRoute;
