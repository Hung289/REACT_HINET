import { Fragment } from "react";
import ClientLogo01 from "../../assets/images/client_logo_01.png";
import ClientLogo02 from "../../assets/images/client_logo_02.png";
import ClientLogo03 from "../../assets/images/client_logo_03.png";
import ClientLogo04 from "../../assets/images/client_logo_04.png";
import ClientLogo05 from "../../assets/images/client_logo_05.png";
import ClientLogo06 from "../../assets/images/client_logo_06.png";
import ClientLogo07 from "../../assets/images/client_logo_07.png";
import ClientLogo08 from "../../assets/images/client_logo_08.png";
import ClientLogo09 from "../../assets/images/client_logo_09.png";
import ClientLogo10 from "../../assets/images/client_logo_10.png";

const DUM_DATA = [
    { id: 1, image: ClientLogo01, title: "ClientLog1" },
    { id: 2, image: ClientLogo02, title: "ClientLog2" },
    { id: 3, image: ClientLogo03, title: "ClientLog3" },
    { id: 4, image: ClientLogo04, title: "ClientLog4" },
    { id: 5, image: ClientLogo05, title: "ClientLog5" },
    { id: 6, image: ClientLogo06, title: "ClientLog6" },
    { id: 7, image: ClientLogo07, title: "ClientLog7" },
    { id: 8, image: ClientLogo08, title: "ClientLog8" },
    { id: 9, image: ClientLogo09, title: "ClientLog9" },
    { id: 10, image: ClientLogo10, title: "ClientLog10" },
];

const Brand = () => {
    return (
        <Fragment>
            <section class="brand">
                <div class="container-m">
                    <div class="brand__wrapper">
                        <div class="section-title mg-medium">
                            Essenstial Items
                        </div>

                        <div class="brand__lists">
                            {DUM_DATA.map((item) => (
                                <a href="!#" key={item.id}>
                                    <img src={item.image} alt={item.title} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Brand;
