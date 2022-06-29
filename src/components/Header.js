import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {

        //handleClick will remove 'active' as the className and add 'active' as a className to whatever is clicked on
        //'active' will just change the CSS of the selected tab
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
                <Link to="/Details" onClick={handleClick} className="details-Btn">Details</Link>
                <Link to="/Label" onClick={handleClick} className="label-infoBtn">Label info</Link>
                <Link to="/" onClick={handleClick} className="shipping-returnsBtn active">Shipping & Returns</Link>
                <Link to="/Questions" onClick={handleClick} className="QA-btn">Q&A (2)</Link>
            </div>
        )
    }
}

export default Header;