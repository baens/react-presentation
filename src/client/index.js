import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonComponent} from '../components/Button';

ReactDOM.render(
    <ButtonComponent count={2} />,
    document.getElementById('react-button')
);