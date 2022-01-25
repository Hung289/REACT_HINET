import { Fragment } from "react";
import { Link } from "react-router-dom";

const BigImg = () => {
    return <Fragment>
        <section className="big-img">
                <div className="container-m">

                    <div className="big-img__wrapper">
                        <div className="big-title">Shop All</div>

                        <ol className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="!#">Shop</Link></li>
                            <li><Link to="/shop-page">Shop All</Link></li>
                        </ol>
                    </div>
                    

                </div>
            </section>
    </Fragment>;
};

export default BigImg;
