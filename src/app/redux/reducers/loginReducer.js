import {LOGIN_SUCCESSFUL, LOGIN_FAILED} from "../actions/index";

export function loginReducer(state = false, action) {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            return true;
        case LOGIN_FAILED:
            return false;
        default :
            return state;
    }
}