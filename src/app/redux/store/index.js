import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createLogger} from "redux-logger";
import {loginReducer} from "../reducers/loginReducer";
import {loadState, saveState} from './localStorage';

const logger = createLogger();
const persistedState = loadState();
let enhancer;

const rootReducer = (state, action) => {
    return combineReducers({
        //Store object is here
        isLogin: loginReducer,
    })(state, action);
};


if (process.env.NODE_ENV !== 'production') {
    enhancer = compose(
        applyMiddleware(
            logger
        ),
    );

} else {
    enhancer = compose(
        applyMiddleware(),
    );
}


let store = createStore(
    rootReducer,
    persistedState,
    enhancer
);


store.subscribe(() => {
    saveState(store.getState())
});


export default store;