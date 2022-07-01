import React from "react";

class Highlights extends React.Component {
    render() {
        return (
            <div className="highlights">                
                <h4>Highlights</h4>
                <ul className="list">
                    <li>{this.props.data[3].question}.</li>
                    <li>{this.props.data[4].question}.</li>
                    <li>{this.props.data[6].question}.</li>
                    <li>{this.props.data[8].question}.</li>
                </ul>
            </div>
        )
    }
}

export default Highlights;