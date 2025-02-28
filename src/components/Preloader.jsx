import React from "react";
import { ClipLoader } from "react-spinners";

function Preloader(props) {
    return (
        <div id={props.load ? "preloader" : "preloader-none"}>
            <ClipLoader size={50} color={"#123abc"} loading={props.load} />
        </div>
    );
}

export default Preloader;
