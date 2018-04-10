import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
//import App from './App';
//import Card from './Card';
//import {robots} from './robots';
//import CardList from './CardList';

//AppComponent contains all the Comented imports
import App from './container/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
