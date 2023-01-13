import { UserReducerValidTypes } from "./user.types";

const INITIAL_STATE = {
    email: "",
    token: null,
    isLoading: false,
    error: null
};

export const UserReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case UserReducerValidTypes.LOGIN_CURRENT_USER_START:
            return {
                ...state,
                isLoading: true,
            };
        case UserReducerValidTypes.LOGIN_CURRENT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                email: payload.email,
                token: payload.token
            };
        case UserReducerValidTypes.LOGIN_CURRENT_USER_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default:
            return state;
    };
}
