import React, { Component } from 'react';
import './css/style.css';

class Header extends Component{
    render() {
        return(
            <header className = 'header'>
                <div className = 'header__text-box'>
                    <h1 className ='heading-primary'>
                        <span className = 'heading-primary--main'> Friendship</span>
                        <span className = 'heading-primary--sub'> is what you maintain</span>
                    </h1>
                    <a href = '#' className = 'btn btn-white btn-animiated'> Discover our friends</a>
                </div>
            </header>
      );
    }
}

export default Header;
