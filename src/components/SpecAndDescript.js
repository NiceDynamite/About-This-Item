import React from "react";
import Specifications from "./Specifications";

class SpecAndDescript extends React.Component {
    render() {

        return (
        <div>
            <div className="specanddescript">
                <h3>Description</h3>
                <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat. Sed vulputate mi sit amet mauris commodo quis. Consequat id porta nibh venenatis cras. Massa tincidunt dui ut ornare lectus sit.</p>
                <div>
                    <Specifications />
                </div>
            </div>
        </div>
        )
    }
}

export default SpecAndDescript;