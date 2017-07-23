import store from "../redux/store/index";

export function dispatch(action) {
    store.dispatch(action);
}