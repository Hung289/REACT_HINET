import { Fragment } from "react";

const DUM_CATEGORY = [
    { id: 1, name: "Accessories" },
    { id: 2, name: "Chairs" },
    { id: 3, name: "Clock" },
    { id: 4, name: "Dining Tables" },
    { id: 5, name: "Lighting" },
    { id: 6, name: "Lounges & Sofa" },
    { id: 7, name: "Stool" },
];

const DUM_COLOR = [
    { id: 1, color: "#d0a272" },
    { id: 2, color: "#68412d" },
    { id: 3, color: "#000000" },
    { id: 4, color: "#aa5959" },
    { id: 5, color: "#8db4d2" },
    { id: 6, color: "#c2c3a0" },
    { id: 7, color: "#c7857d" },
    { id: 8, color: "#e3e1e7" },
    { id: 9, color: "#b490b0" },
];

const DUM_TAGS = [
    { id: 1, tag: "Vintage" },
    { id: 2, tag: "Awesome" },
    { id: 3, tag: "Summer" },
    { id: 4, tag: "Beachwear" },
    { id: 5, tag: "Sunglasses" },
    { id: 6, tag: "Winter" },
    { id: 7, tag: "Shorts" },
    { id: 8, tag: "Cool" },
    { id: 9, tag: "Nice" },
];
const DUM_MATERIAL = [
    {id: 1, name: 'Laminate'},
    {id: 2, name: 'Acrylic'},
    {id: 3, name: 'Aluminium'},
    {id: 4, name: 'Cotton'},
    {id: 5, name: 'Leather'},
    {id: 6, name: 'Metal'},
]

const MainBodyLeft = () => {
    return (
        <Fragment>
            <div className="main-body__left">
                <div className="primary-sidebar-inner">
                    <div className="primary__card">
                        <div className="card__header">Categories</div>
                        <div className="card__body">
                            <ul className="card__body-lists">
                                {DUM_CATEGORY.map((el) => (
                                    <li key={el.id}>
                                        <a href="!#">{el.name}</a>
                                    </li>
                                ))}
                                <li>
                                    <a href="!#">...</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="primary__card">
                        <div className="card__header">Price</div>
                        <div className="card__body">
                            <ul className="card__body-lists">
                                <li>
                                    <a href="#">All</a>
                                </li>
                                <li>
                                    <a href="#">$10 - $100</a>
                                </li>
                                <li>
                                    <a href="#">$100 - $200</a>
                                </li>
                                <li>
                                    <a href="#">$200 - $300</a>
                                </li>
                                <li>
                                    <a href="#">$300 - $400</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="primary__card">
                        <div className="card__header">Material</div>
                        <div className="card__body">
                            <ul className="card__body-lists">
                                {DUM_MATERIAL.map(el => (
                                    <li key={el.id}>
                                        <a href="!#">{el.name}</a>
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>

                    <div className="primary__card">
                        <div className="card__header">Colors</div>
                        <div className="card__body">
                            <ul className="card__body-lists  list-inline color">
                                {DUM_COLOR.map((el) => (
                                    <li className="color-item" key={el.id}>
                                        <a
                                            href="!#"
                                            style={{
                                                backgroundColor: el.color,
                                            }}
                                        ></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="primary__card">
                        <div className="card__header">Tags</div>
                        <div className="card__body">
                            <ul className="card__body-lists  list-inline">
                                {DUM_TAGS.map((el) => (
                                    <li className="tag-item" key={el.id}>
                                        <a href="!#">{el.tag}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MainBodyLeft;
