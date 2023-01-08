import { AnyAction } from "redux"


export const createAction = (type, payload ) => {
    return {
        type: type,
        payload: payload
    }
}