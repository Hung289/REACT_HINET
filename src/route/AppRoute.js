import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";

const AppRoute = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/product-detail" element={<ProductDetailPage/>}></Route>
            </Routes>
        </Fragment>
    );
};

export default AppRoute;
