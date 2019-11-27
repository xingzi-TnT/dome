/*
React 是 React核心库
ReactDOM 是提供与 DOM相关的功能
*/ 

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Store from './store/store'
import { Provider } from 'react-redux'
// React-Redux 提供<Provider/>组件，
// 能够使你的整个app访问到Redux store中的数据：


import * as serviceWorker from './serviceWorker';
// 加快react运行速度的 文件



ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
