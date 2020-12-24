import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import store from './redux/store';
import App from './App';
import { Provider } from 'react-redux'

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'))