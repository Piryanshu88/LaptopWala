import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as dataReducer } from "./dataReducer/reducer";
import { reducer as cartReducer } from "./cartReducer/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer = combineReducers({ authReducer, dataReducer, cartReducer });

export const store = legacy_createStore(
  rootreducer,
  composeEnhancer(applyMiddleware(thunk))
);
