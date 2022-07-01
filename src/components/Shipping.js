import React from "react";
import ShippingAndReturn from "./ShippingAndReturn";

class Shipping extends React.Component {
    render() {
        return (
            <div id="shipping-return">
                <ShippingAndReturn data={this.props.data} key={this.props.data.id} />
            </div>
                
            )
            
        
    }
}

export default Shipping;