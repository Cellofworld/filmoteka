import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterNav from './components/router/RouterNav';
import store from './store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <RouterNav />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


