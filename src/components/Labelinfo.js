import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

class Labelinfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            loadingMessage: 'Getting item info...'
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/label')
        .then((response) => response.json())
        .then((data) => this.setState({data: data, loading: false}))
      }

    render() {

        if (this.state.loading) {
            return (
                <Loading loadingMessage={this.state.loadingMessage} />
            )
        }


        return (
            <div className="label-info">
                <div id="top-label">
                    <p><b>Serving Size:</b> {this.state.data[0].number}g </p>
                    <p><b>Serving Per Container:</b> About {this.state.data[1].number}</p>
                    <p><b>Amount per serving:</b></p>
                </div>
                <div className="nutrition">
                    <p><b>Calories:</b> 1 billion</p>
                    
                    <ul id="nutrition-value">
                        <li><b>Total Fat</b> {this.state.data[2].number}</li>
                        <li><b>Saturated Fat</b> {this.state.data[3].number}</li>
                        <li><b>Trans Fat</b> {this.state.data[4].number}</li>
                        <li><b>Cholesterol</b> {this.state.data[5].number}</li>
                        <li><b>Sodium</b> {this.state.data[6].number}</li>
                        <li><b>Total Carbohydrate</b> {this.state.data[7].number}</li>
                        <li><b>Dietary Fiber</b> {this.state.data[8].number}</li>
                        <li><b>Sugars</b> {this.state.data[9].number}</li>
                        <li><b>Added Sugars</b> {this.state.data[10].number}</li>
                        <li><b>Protein</b> {this.state.data[11].number}</li>
                        <li><b>Vitamin D</b> {this.state.data[12].number}</li>
                        <li><b>Calcium</b> {this.state.data[13].number}</li>
                        <li><b>Iron</b> {this.state.data[14].number}</li>
                        <li><b>Potassium</b> {this.state.data[15].number}</li>
                    </ul>
                    <p>* Percentage of Daily Values are based on a 2,000 calorie diet.</p>
                </div>
            </div>
        )
    }
}

export default Labelinfo;