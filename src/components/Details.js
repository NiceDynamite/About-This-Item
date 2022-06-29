import React from "react";
import Highlights from "./Highlights";
import SpecAndDescript from "./SpecAndDescript";

class Details extends React.Component {
    render() {
        return (
            <div>
                <Highlights />
                <SpecAndDescript />
            </div>
        )
    }
}

export default Details;