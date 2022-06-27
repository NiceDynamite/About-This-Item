import React from "react";

class Header extends React.Component {
    render() {

        const handleClick = (e) => {
            const details = document.getElementsByClassName('details-Btn')
            const label = document.getElementsByClassName('label-infoBtn')
            const shippingReturn = document.getElementsByClassName('shipping-returnsBtn')
            const questions = document.getElementsByClassName('QA-btn')
            if (details[0].classList.contains('active')) {
                details[0].classList.remove('active')
            }
            if (label[0].classList.contains('active')) {
                label[0].classList.remove('active')
            }
            if (shippingReturn[0].classList.contains('active')) {
                shippingReturn[0].classList.remove('active')
            }
            if (questions[0].classList.contains('active')) {
                questions[0].classList.remove('active')
            }
            e.target.classList.add('active')
            
        }

        return (
            <div id="header" >
                <h4 onClick={handleClick} className="details-Btn">Details</h4>
                <h4 onClick={handleClick} className="label-infoBtn">Label info</h4>
                <h4 onClick={handleClick} className="shipping-returnsBtn">Shipping & Returns</h4>
                <h4 onClick={handleClick} className="QA-btn">Q&A (2)</h4>
            </div>
        )
    }
}

export default Header;