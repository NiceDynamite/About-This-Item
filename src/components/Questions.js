import React from "react";
import Loading from "./Loading";

class Questions extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          data: null,
          loading: true,
          loadingMessage: "Getting item info..."
        }
      }

      componentDidMount() {
        fetch('http://localhost:8000/api/target_questions')
        .then((response) => response.json())
        .then((data) => this.setState({data: data, loading: false}))
      }

    render() {

        if (this.state.loading) {
            return (
                <Loading loadingMessage={this.state.loadingMessage}/>
            )
        }


        const handleClick = (e) => {
            alert('This feature is currently disabled')
        }

        return (
            <div>
                <div>
                    <h4>Q: {this.state.data[1].question}</h4>
                    <p>cge - 3 years ago</p>
                </div>
                <div className="answer">
                    <p><b>A: </b>Yes- same great taste/product. Sweet 16 is a bigger bag! Enjoy!</p>
                    <div className="answerBtn">
                    <button id="answerBtn">Answer it</button>
                    </div>
                </div>
                <button onClick={handleClick} id="viewQuestionBtn">See all questions</button>
                <button onClick={handleClick} id="askQuestionBtn">Ask a question</button>
            </div>
        )
    }
}

export default Questions;