import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './css/style.css';
import App from './App';
import Header from './Header';
import Friends from './Friends';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Friends />, document.getElementById('section'));
registerServiceWorker();
