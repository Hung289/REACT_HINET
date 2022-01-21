import { Fragment } from "react";
import Blog01 from "../../assets/images/blog_01.jpg";
import Blog02 from "../../assets/images/blog_02.jpg";
import Blog03 from "../../assets/images/blog_03.jpg";

const DUM_DATA = [
    {
        id: 1,
        image: Blog01,
        date: "April 14, 2019",
        title: "Under the sun in cape town",
        description:
            "these are beautiful, Wel made & ortable! I bought them to wear to work & casually",
    },
    {
        id: 2,
        image: Blog02,
        date: "April 14, 2019",
        title: "Under the sun in cape town",
        description:
            "these are beautiful, Wel made & ortable! I bought them to wear to work & casually",
    },
    {
        id: 3,
        image: Blog03,
        date: "April 14, 2019",
        title: "Under the sun in cape town",
        description:
            "these are beautiful, Wel made & ortable! I bought them to wear to work & casually",
    },
];

const Journal = () => {
    return (
        <Fragment>
            <section class="journal">
                <div class="container-m">
                    <div class="journal__wrapper">
                        <div class="section-title mg-medium">
                            Essenstial Items
                        </div>
                        <div class="journal__items">
                            {DUM_DATA.map((item) => (
                                <div class="journal__item" key={item.id}>
                                    <a href="!#" class="hover-shine">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </a>
                                    <div class="journal__content">
                                        <div class="journal__time">
                                            {item.date}
                                        </div>
                                        <div class="journal__title">
                                            <a href="!#">{item.title}</a>
                                        </div>
                                        <div class="journal__text">
                                            {item.description}
                                        </div>
                                        <a href="!#">Read mode</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Journal;
