import React from 'react';
import '../css/style.css';
import ReactDOM from 'react-dom';
import imgs from '../img/friendsList/Peng.png'
import Popup_star from '../Popup_star.js';
var state = require("../State.js");
const Card = (props) => {
    const changeFaceHandler = () => {
        state.myName = props.name;
     }
    return (
        <div className = 'card'>
            <div className = 'card__side card__side--front'>
                <img src={require(`../img/friendsList/${props.name}.png`)}
                    className = 'card__side--front--img'/>
            </div>
            <div className =
                {`card__side card__side--back card__side--back-${props.col}`}>
                <div className = 'card__heading'>
                    <h2> {props.name}</h2>
                </div>
                <div className = 'card__details'>
                    <h2> {props.detail}</h2>
                </div>
                <div className = 'card__side--back--second--bottom'>
                    <img src={require(`../img/friendsList/${props.name}.png`)}
                        className = 'card__side--back--second--bottom--img'/>
                </div>
                <div className = 'card__side--back--bottom'>
                    <a href='#popup_star' onClick = {this.changeFaceHandler} className = 'btn btn-white btn-animiated btn-star_face'> Star Face</a>
                </div>
            </div>
        </div>
  )};
export default Card;
