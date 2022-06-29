import React from "react";
import Feedback from "./Feedback";

class Specifications extends React.Component {
    render() {
        return (
            <div className="specs">
                <h4>Specifications</h4>
                <ul id="specifications">
                    <li><b>Contains:</b> risus ultricies tristique nulla aliquet</li>
                    <li><b>Filling:</b> adipiscing vitae</li>
                    <li><b>Features:</b> sed nisi lacus sed</li>
                    <li><b>State of Readiness:</b> tincidunt augue interdum</li>
                    <li><b>Package Quantity:</b> turpis egestas sed tempus urna</li>
                    <li><b>Pre-package preparation:</b> sed nisi lacus</li>
                    <li><b>Baker topping:</b> at consectetur</li>
                    <li><b>Origin:</b> Made in the Usa or Imported</li>
                </ul>
                <p><b>Grocery Disclaimer:</b> Content on this site is for reference purposes only. Target does not represent or warrant that the nutrition, ingredient, allergen and other product information on our Web or Mobile sites are accurate or complete, since this information comes from the product manufacturers. On occasion, manufacturers may improve or change their product formulas and update their labels. We recommend that you do not rely solely on the information presented on our Web or Mobile sites and that you review the product's label or contact the manufacturer directly if you have specific product concerns or questions. If you have specific healthcare concerns or questions about the products displayed, please contact your licensed healthcare professional for advice or answers. Any additional pictures are suggested servings only.</p>
                <Feedback />
            </div>

        )
    }
}

export default Specifications;