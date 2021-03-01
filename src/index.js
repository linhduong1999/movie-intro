import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import App from './Router.js'
import configStore from './store';
import Load from "./components/loading"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { store, persistor, history } = configStore();

const Movie = () => {
  return (
      <>
        <Provider store={store}>
          <PersistGate loading={<Load/>} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
          </PersistGate>
        </Provider>
      </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Movie />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
