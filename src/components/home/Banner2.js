import { Fragment } from "react";
import b11 from '../../assets/images/b-11.jpg'

const Banner2 = () => {
    return (
        <Fragment>
            <section className="banner-2">
                <div className="container-m">
                    <div className="banner-2__warrper">
                        <div className="banner-2__img">
                            <img src={b11} alt="" />
                        </div>

                        <div className="banner-2__content">
                            <p className="banner-2__title-small">New - In</p>
                            <div className="banner-2__title">
                                <a href="!#">
                                    Happy
                                    <br />
                                    Dining Set
                                </a>
                            </div>
                            <div className="btn banner-2-btn">
                                <a href="!#">From $500</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Banner2;
