import React from "react";
import ReturnDetails from "./ReturnDetails";

class ShippingAndReturn extends React.Component {
    render() {
        return(
            <div>
                <h4>Shipping details</h4>
                <p>Estimated ship dimensions: {this.props.elem.dimensions}</p>
                <p>Estimated ship weight: {this.props.elem.weight}</p>
                <ReturnDetails />
            </div>
            
        )
    }
}

export default ShippingAndReturn;