import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import styles from './scss/application.scss';
import styled from 'styled-components';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);