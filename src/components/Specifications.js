import React from "react";
import Feedback from "./Feedback";

class Specifications extends React.Component {
    render() {
        return (
            <div className="specs">
                <h4>Specifications</h4>
                <ul id="specifications">
                    <li><b>Contains:</b> {this.props.data[20].question}</li>
                    <li><b>Filling:</b> {this.props.data[22].question}</li>
                    <li><b>Features:</b> {this.props.data[23].question}</li>
                    <li><b>State of Readiness:</b> {this.props.data[24].question}</li>
                    <li><b>Package Quantity:</b> {this.props.data[25].question}</li>
                    <li><b>Pre-package preparation:</b> {this.props.data[26].question}</li>
                    <li><b>Baker topping:</b> {this.props.data[27].question}</li>
                    <li><b>Origin:</b> Made in the Usa or Imported</li>
                </ul>
                <p><b>Grocery Disclaimer:</b> Content on this site is for reference purposes only. Target does not represent or warrant that the nutrition, ingredient, allergen and other product information on our Web or Mobile sites are accurate or complete, since this information comes from the product manufacturers. On occasion, manufacturers may improve or change their product formulas and update their labels. We recommend that you do not rely solely on the information presented on our Web or Mobile sites and that you review the product's label or contact the manufacturer directly if you have specific product concerns or questions. If you have specific healthcare concerns or questions about the products displayed, please contact your licensed healthcare professional for advice or answers. Any additional pictures are suggested servings only.</p>
                <Feedback />
            </div>

        )
    }
}

export default Specifications;