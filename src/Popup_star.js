import React, { Component } from 'react';
import './css/style.css';
var state = require("./State.js");
//import {myName} from './State.js';
const Popup_star = (props) => {
  return (
          <div className = 'popup__content'>
              <div className = 'popup__up'>
                  <div className = 'popup__up__left'>
                      <img src={require(`./img/friendsList/${state.myName}.png`)}
                       alt = 'Tour phot' className = 'popup__img'/>
                  </div>
                  <div className = 'popup__up__middle'>
                      <h2 class = 'heading-tertiary'> similarity score:</h2>
                      <h1 class = 'heading-secondary u-margin-bottom-small'>
                         {state.myName}  87%
                  </h1>
                  </div>
                  <div className = 'popup__up__right'>
                      <img src={require(`./img/starList/Ann.jpg`)}
                       alt = 'Tour phot' className = 'popup__img'/>
                       <a href='#section' className = 'popup__close'>
                           &times;
                       </a>
                  </div>
              </div>
              <div className = 'popup__bottom'>
                  <p className = 'popup__text'>
                  Anne Jacqueline Hathaway was born in Brooklyn, New York, to Kate McCauley Hathaway, an actress, and Gerald T. Hathaway, a lawyer, both originally from Philadelphia. She is of mostly Irish descent, along with English, German, and French. Her first major role came in the short-lived television series Get Real (1999). She gained widespread recognition for her roles in The Princess Diaries (2001) and its 2004 sequel as a young girl who discovers she is a member of royalty, opposite Julie Andrews and Heather Matarazzo.
                  She also had a notable role in Nicholas Nickleby (2002) opposite Charlie Hunnam and Jamie Bell, and a starring role in Ella Enchanted (2004). A former top-ranking soprano in New York, Hathaway was reportedly a front-runner for the role of "Christine" in the 2004 The Phantom of the Opera (2004). However, due to scheduling conflicts with The Princess Diaries 2: Royal Engagement (2004), she couldnt take the role, which was later given to newcomer Emmy Rossum.
                  Hathaway soon started to move away from family-friendly films. Following The Princess Diaries 2: Royal Engagement (2004), she appeared topless in the films Havoc (2005) opposite Josh Peck and Brokeback Mountain (2005) opposite Heath Ledger and Jake Gyllenhaal. Her desire to break out of her "Princess Diaries" image parallels that of her one-time co-star, Julie Andrews, who went topless in the film S.O.B. (1981) in order to break away from the image she created from her 1960s musicals. In interviews, Hathaway said that doing family-friendly films didnt mean she was similar to their characters or mean she objected to appearing nude in other films.
                  </p>
              </div>
          </div>
  )
};
export default Popup_star;
