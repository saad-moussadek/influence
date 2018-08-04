import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import generalData from "./testData/generalData";

console.log(generalData)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
