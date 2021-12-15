import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
