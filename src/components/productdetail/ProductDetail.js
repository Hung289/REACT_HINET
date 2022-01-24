import { Fragment } from "react";
import ProductDetailLeft from "./ProductDetailLeft";
import ProductDetailRight from "./ProductDetailRight";

const ProductDetail = () => {
    return (
        <Fragment>
            <section className="product-detail">
                <div className="container-m">
                    <div className="product-detail__wrapper">
                        <ProductDetailLeft/>
                        <ProductDetailRight/>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ProductDetail;
