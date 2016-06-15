import React from 'react';
import ReactDOM from 'react-dom';
import {RootComponent} from '../components/Root';

ReactDOM.render(
    <RootComponent data={window.data} />,
    document.getElementById('react-button')
);