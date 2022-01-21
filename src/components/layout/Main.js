import { Fragment } from "react";

const Main = (props) => {
    return (
        <Fragment>
            <main className="content">{props.children}</main>
        </Fragment>
    );
};

export default Main;
