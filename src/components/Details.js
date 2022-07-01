import React from "react";
import Highlights from "./Highlights";
import Loading from "./Loading";
import SpecAndDescript from "./SpecAndDescript";

class Details extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            loadingMessage: "Getting item info...",
            data: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:5002/api/target_questions')
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
            <div>
                <Highlights data={this.state.data}/>
                <SpecAndDescript data={this.state.data}/>
            </div>
        )
    }
}

export default Details;