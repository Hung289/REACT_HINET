import { Fragment } from "react";
import { Link } from "react-router-dom";
import Catalog1 from '../../assets/images/c_04.jpg'
import Catalog2 from '../../assets/images/c_05.jpg'
import Catalog3 from '../../assets/images/c_06.jpg'


const Catalog = () => {
    return (
        <Fragment>
            <section className="catalog">
                <div className="container-m">
                    <div className="catalog__wrapper">
                        <div className="catalog__item">
                            <img src={Catalog1} alt="" />
                            <div className="catalog__card-title">Chairs</div>
                            <Link to="/shop-page">Shop now</Link>
                        </div>

                        <div className="catalog__item">
                            <img src={Catalog2} alt="" />
                            <div className="catalog__card-title">Planters</div>
                            <Link to="/shop-page">Shop now</Link>
                        </div>

                        <div className="catalog__item">
                            <img src={Catalog3} alt="" />
                            <div className="catalog__card-title">Tables</div>
                            <Link to="/shop-page">Shop now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Catalog;
