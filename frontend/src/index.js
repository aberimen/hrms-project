import React from 'react';
import ReactDOM from 'react-dom';
import './custom-bootstrap.scss';
import App from './App';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from './redux/configureStore';
import { ToastContainer } from 'react-toastify';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="bottom-right"
      hideProgressBar={true}
      autoClose={2000}
    />
  </Provider>,
  document.getElementById('root')
);
