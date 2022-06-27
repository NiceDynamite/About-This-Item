import React from "react";
import ShippingAndReturn from "./ShippingAndReturn";

class Shipping extends React.Component {
    render() {
        return (
            this.props.data.map((elem) => {
                return (
                    <div id="shipping-return">
                        <ShippingAndReturn elem={elem} key={elem.id} />
                    </div>
                )
            })
            
        )
    }
}

export default Shipping;