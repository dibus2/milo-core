import { DJANGO_API } from "../../utils/django.utils";
import { createAction } from "../utils";
import { UserReducerValidTypes } from "./user.types";

export const loginCurrentUserStart = () =>
    createAction(UserReducerValidTypes.LOGIN_CURRENT_USER_START);

export const loginCurrentUserFailed = () =>
    createAction(UserReducerValidTypes.LOGIN_CURRENT_USER_FAILED);

export const loginCurrentUserSuccess = () =>
    createAction(UserReducerValidTypes.LOGIN_CURRENT_USER_SUCCESS);

export const loginCurrentUserAsync = (username, password) => async (dispatch) => {
    dispatch(loginCurrentUserStart);
    try {
        const user = await DJANGO_API.login({
            "username": username,
            "password": password
        });
        console.log(user);
        dispatch(loginCurrentUserSuccess(user));
    } catch (error) {
        dispatch(loginCurrentUserFailed);
    }
};

export const logoutCurrentUserStart = () =>
    createAction(UserReducerValidTypes.LOGOUT_CURRENT_USER_START);

export const logoutCurrentUserFailed = () =>
    createAction(UserReducerValidTypes.LOGOUT_CURRENT_USER_FAILED);

export const logoutCurrentUserSuccess = () =>
    createAction(UserReducerValidTypes.LOGOUT_CURRENT_USER_SUCCESS);

export const logoutCurrentUserAsync = () => (dispatch) => {
    dispatch(logoutCurrentUserStart);
    try {
        dispatch(logoutCurrentUserSuccess({"email": "", "token": null}));
    } catch (error) {
        dispatch(
            logoutCurrentUserFailed
        );
    }
}
