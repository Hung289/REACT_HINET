import { Fragment, useState } from "react";

const ColTab = () => {

    const [isActive, setIsActive] = useState('description')

    const toggleTab = () => {}

    return (
        <Fragment>
            <section className="col-tab">
                <div className="container-m">
                    <ul className="product-detail-tab">
                        <li>
                            <a
                                href="!#"
                                className="tabLinks active"
                                data-var="description"
                                onClick={toggleTab}
                            >
                                Description
                            </a>
                        </li>
                        <li>
                            <a
                                href="!#"
                                className="tabLinks"
                                data-var="information"
                                onClick={toggleTab}
                            >
                                Information
                            </a>
                        </li>
                        <li>
                            <a
                                href="!#"
                                className="tabLinks"
                                data-var="review"
                                onClick={toggleTab}
                            >
                                Review(3)
                            </a>
                        </li>
                    </ul>

                    <div
                        className="tab-pane-m"
                        id="description"
                        className="desctiption"
                    >
                        <div className="box-tab-pane">
                            <div
                                className="box-tab-pane-title"
                                data="description2"
                            >
                                <div className="div">Description</div>
                            </div>

                            <div
                                className="box-tab-pane-content"
                                id="description2"
                            >
                                <div className="description-img">
                                    <img
                                        src="images/description-product.jpg"
                                        alt=""
                                    />
                                </div>

                                <div className="description-text">
                                    Perfect for Equestrian homes or every horse
                                    lover. Designer premium signature aluminum
                                    alloy all Arthur Court is compliance with
                                    FDA regulations. Aluminum Serveware can be
                                    chilled in the freezer or refrigerator and
                                    warmed in the oven to 350. Wash by hand with
                                    mild dish soap and dry immediately – do not
                                    put in the dishwasher. Comes in Gift Box
                                    perfect for Equestrian home or Horse lover
                                    in your life.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane-m information" id="information">
                        <div className="box-tab-pane">
                            <div
                                className="box-tab-pane-title"
                                data="infomation2"
                            >
                                <div className="div">Infomation</div>
                            </div>

                            <div
                                className="box-tab-pane-content"
                                id="infomation2"
                            >
                                <div className="table-infomation">
                                    <div className="table-infomation-row">
                                        <div className="table-name">
                                            Material
                                        </div>
                                        <div className="table-units">
                                            Steel, Wood, Marble
                                        </div>
                                    </div>

                                    <div className="table-infomation-row">
                                        <div className="table-name">
                                            Dimensions
                                        </div>
                                        <div className="table-units">
                                            55.1"W X 14.6"D X 23.6"H
                                        </div>
                                    </div>

                                    <div className="table-infomation-row">
                                        <div className="table-name">Weight</div>
                                        <div className="table-units">
                                            Weight 23 lbs
                                        </div>
                                    </div>

                                    <div className="table-infomation-row">
                                        <div className="table-name">Origin</div>
                                        <div className="table-units">
                                            Denmark
                                        </div>
                                    </div>

                                    <div className="table-infomation-row">
                                        <div className="table-name">Brand</div>
                                        <div className="table-units">FLOYD</div>
                                    </div>
                                </div>

                                <div className="infomation-description">
                                    <div className="info-des-image">
                                        <img
                                            src="images/product-page-09.jpg"
                                            alt=""
                                        />
                                    </div>

                                    <div className="info-des-des">
                                        Perfect for Equestrian homes or every
                                        horse lover. Designer premium signature
                                        aluminum alloy all Arthur Court is
                                        compliance with FDA regulations.
                                        Aluminum Serveware can be chilled in the
                                        freezer or refrigerator and warmed in
                                        the oven to 350. Wash by hand with mild
                                        dish soap and dry immediately – do not
                                        put in the dishwasher. Comes in Gift Box
                                        perfect for Equestrian home or Horse
                                        lover in your life.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane-m review" id="review">
                        <div className="tab-pane-m__wrapper">
                            <div className="box-tab-pane">
                                <div
                                    className="box-tab-pane-title "
                                    data="review2"
                                >
                                    <div className="div">Review(3)</div>
                                </div>

                                <div
                                    className="box-tab-pane-content"
                                    id="review2"
                                >
                                    <ul className="list-star">
                                        <li>
                                            <a href="#"></a>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <a href="#"></a>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <a href="#"></a>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <a href="#"></a>
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li>
                                            <a href="#"></a>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>

                                    <div className="star-on-review">
                                        <span>5.0</span>
                                        Base on 3 Reviews
                                    </div>

                                    <div className="review-item">
                                        <div className="review-item-avatar">
                                            <img
                                                src="images/tes_01.png"
                                                alt=""
                                            />
                                        </div>

                                        <div className="review-item-body">
                                            <div className="star-time">
                                                <ul className="list-star">
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>

                                                <div className="time">
                                                    Nov 20, 2020
                                                </div>
                                            </div>

                                            <div className="review-content">
                                                It has a really nice fit however
                                                it loses many fluffs and is kind
                                                of see-through because the
                                                fabric is quite wid-meshed.
                                                Nevertheless it's a really good
                                                and comfy staple that goes with
                                                every kind.
                                            </div>

                                            <div className="person-review">
                                                Dean.D
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-item">
                                        <div className="review-item-avatar">
                                            <img
                                                src="images/tes_02.png"
                                                alt=""
                                            />
                                        </div>

                                        <div className="review-item-body">
                                            <div className="star-time">
                                                <ul className="list-star">
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>

                                                <div className="time">
                                                    Nov 20, 2020
                                                </div>
                                            </div>

                                            <div className="review-content">
                                                It has a really nice fit however
                                                it loses many fluffs and is kind
                                                of see-through because the
                                                fabric is quite wid-meshed.
                                                Nevertheless it's a really good
                                                and comfy staple that goes with
                                                every kind.
                                            </div>

                                            <div className="person-review">
                                                Dean.D
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review-item">
                                        <div className="review-item-avatar">
                                            <img
                                                src="images/tes_03.png"
                                                alt=""
                                            />
                                        </div>

                                        <div className="review-item-body">
                                            <div className="star-time">
                                                <ul className="list-star">
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                    <li>
                                                        <a href="#"></a>
                                                        <i className="fas fa-star"></i>
                                                    </li>
                                                </ul>

                                                <div className="time">
                                                    Nov 20, 2020
                                                </div>
                                            </div>

                                            <div className="review-content">
                                                It has a really nice fit however
                                                it loses many fluffs and is kind
                                                of see-through because the
                                                fabric is quite wid-meshed.
                                                Nevertheless it's a really good
                                                and comfy staple that goes with
                                                every kind.
                                            </div>

                                            <div className="person-review">
                                                Dean.D
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-add-review">
                                        <a href="#">Write a review</a>
                                    </div>

                                    <div className="card-review">
                                        <div className="card-body">
                                            <div className="card-title">
                                                Write A Review
                                            </div>

                                            <form action="">
                                                <div className="form-rating">
                                                    <div className="text-rating">
                                                        Your Rating
                                                    </div>
                                                    <div className="form-group-lists-star">
                                                        <div className="rate-input">
                                                            <input
                                                                type="radio"
                                                                id="star5"
                                                                name="rate"
                                                                value="5"
                                                            />
                                                            <label htmlFor="star5">
                                                                <i className="fal fa-star"></i>
                                                            </label>

                                                            <input
                                                                type="radio"
                                                                id="star4"
                                                                name="rate"
                                                                value="4"
                                                            />
                                                            <label htmlFor="star4">
                                                                <i className="fal fa-star"></i>
                                                            </label>

                                                            <input
                                                                type="radio"
                                                                id="star3"
                                                                name="rate"
                                                                value="3"
                                                            />
                                                            <label htmlFor="star3">
                                                                <i className="fal fa-star"></i>
                                                            </label>

                                                            <input
                                                                type="radio"
                                                                id="star2"
                                                                name="rate"
                                                                value="2"
                                                            />
                                                            <label htmlFor="star2">
                                                                <i className="fal fa-star"></i>
                                                            </label>

                                                            <input
                                                                type="radio"
                                                                id="star1"
                                                                name="rate"
                                                                value="1"
                                                            />
                                                            <label htmlFor="star1">
                                                                <i className="fal fa-star"></i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-name-email">
                                                    <div className="input-name">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Your Name*"
                                                        />
                                                    </div>

                                                    <div className="input-email">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            placeholder="Your Email*"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-review">
                                                    <textarea
                                                        name="review"
                                                        id=""
                                                        cols="30"
                                                        rows="10"
                                                        placeholder="Your Review"
                                                    ></textarea>
                                                </div>

                                                <div className="btn-submit">
                                                    <button type="submit">
                                                        Submit now
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ColTab;
