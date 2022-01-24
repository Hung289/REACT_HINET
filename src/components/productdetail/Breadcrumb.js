import { Fragment } from "react"

const Breadcrumb = () => {
    return <Fragment>
        <section className="nav-top">
                <div className="container-m">
                    <div className="nav-top__wrapper">
                        <div className="nav-top__left">
                            <ol className="breadcrumb">
                                <li><a href="!#">Home</a></li>
                                <li><a href="!#">Shop</a></li>
                                <li><a href="!#">Shop All</a></li>
                            </ol>
                        </div>

                        <div className="nav-top__right">
                            <a href="!#">
                                <i className="far fa-arrow-left"></i>
                            </a>
                            <a href="!#">
                                <i className="far fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    </Fragment>
}

export default Breadcrumb