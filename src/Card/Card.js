import React from 'react';
import '../css/style.css';
import imgs from '../img/friendsList/Peng.png'

const Card = (props) => {
    return (
        <div className = 'card'>
            <div className = 'card__side card__side--front'>
                <img src={require(`../img/friendsList/${props.name}.png`)}
                    className = 'card__side--front--img'/>
            </div>
            <div className = 'card__side card__side--back card__side--back-1'>
                <div className = 'card__heading'>
                    <h2> {props.name}</h2>
                </div>
                <div className = 'card__details'>
                    <h2> {props.detail}</h2>
                </div>
            </div>
        </div>
  )};

export default Card;
