import React from "react";
import Specifications from "./Specifications";

class SpecAndDescript extends React.Component {
    render() {

        return (
        <div>
            <div className="specanddescript">
                <h3>Description</h3>
                <p id="description">{this.props.data[19].question}.</p>
                <div>
                    <Specifications data={this.props.data}/>
                </div>
            </div>
        </div>
        )
    }
}

export default SpecAndDescript;