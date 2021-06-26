import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

    return store;
};

export default configureStore;