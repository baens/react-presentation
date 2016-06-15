import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonComponent} from '../components/Button';

ReactDOM.render(
    <ButtonComponent data={window.data} />,
    document.getElementById('react-button')
);