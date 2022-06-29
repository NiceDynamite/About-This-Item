import React from "react";
import { Link } from "react-router-dom";

class Labelinfo extends React.Component {
    render() {
        return (
            <div className="label-info">
                <div id="top-label">
                    <p><b>Serving Size:</b> 53g</p>
                    <p><b>Serving Per Container:</b> About 5</p>
                    <p><b>Amount per serving:</b></p>
                </div>
                <div className="nutrition">
                    <p><b>Calories:</b> 1 billion</p>
                </div>
            </div>
        )
    }
}

export default Labelinfo;