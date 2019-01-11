import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.css'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
