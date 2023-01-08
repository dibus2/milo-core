import { DJANGO_API } from "../../utils/django.utils";
import { createAction } from "../utils";
import { UserReducerValidTypes } from "./user.types";

export const logCurrentUserStart = () =>
    createAction(UserReducerValidTypes.LOG_CURRENT_USER_START);

export const logCurrentUserFailed = () =>
    createAction(UserReducerValidTypes.LOG_CURRENT_USER_FAILED);

export const logCurrentUserSuccess = () =>
    createAction(UserReducerValidTypes.LOG_CURRENT_USER_SUCCESS);

export const logCurrentUserAsync = (username, password) => async (dispatch) => {
    dispatch(logCurrentUserStart);
    try {
        const user = await DJANGO_API.login({
            "username": username,
            "password": password
        });
        dispatch(logCurrentUserSuccess);
    } catch (error) {
        dispatch(logCurrentUserFailed);
    }
};
