import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from './root-reducer';
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []//, 'games']
}
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
    process.env.NODE_ENV === 'development' && logger,
    thunk].filter(Boolean);

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))


export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);