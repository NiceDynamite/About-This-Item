import React from "react";

class Questions extends React.Component {
    render() {

        const handleClick = (e) => {
            alert('This feature is currently disabled')
        }

        return (
            <div>
                <div>
                    <h4>Q: Are these the same as sweet 16 donuts</h4>
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