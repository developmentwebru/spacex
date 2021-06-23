import { applyMiddleware, createStore } from "redux";
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer from "./reducers/rootReducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
