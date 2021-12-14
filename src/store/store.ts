import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// applyMiddleware(...middlewares)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
