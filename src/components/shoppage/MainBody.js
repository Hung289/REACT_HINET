import { Fragment } from "react";
import MainBodyLeft from "./MainBodyLeft";
import MainBodyRight from "./MainBodyRight";

const MainBody = () => {
    return (
        <Fragment>
            <section className="main-body">
                <div className="container-m">
                    <div className="main-body__wrapper">
                        <MainBodyLeft />
                        <MainBodyRight />
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default MainBody;
