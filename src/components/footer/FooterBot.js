import { Fragment } from "react";

import Card01 from "../../assets/images/card_01.png";
import Card02 from "../../assets/images/card_02.png";
import Card03 from "../../assets/images/card_03.png";
import Card04 from "../../assets/images/card_04.png";
import Card05 from "../../assets/images/card_05.png";
import Card06 from "../../assets/images/card_06.png";

const DUM_DATA = [
    { id: 1, image: Card01 },
    { id: 2, image: Card02 },
    { id: 3, image: Card03 },
    { id: 4, image: Card04 },
    { id: 5, image: Card05 },
    { id: 6, image: Card06 },
];

const FooterBot = () => {
    return (
        <Fragment>
            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    2021 Furnitor. All rights reserved
                </div>
                <div className="footer__bottom-right">
                    <ul>
                        {DUM_DATA.map((item) => (
                            <li key={item.id}>
                                <a href="!#">
                                    <img src={item.image} alt="" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterBot;
