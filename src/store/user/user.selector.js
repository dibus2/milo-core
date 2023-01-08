import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectCurrentUserEmail = createSelector(
    [selectUser],
    (user) => user.email
);

export const selectCurrentUserToken = createSelector(
    [selectUser],
    (user) => user.token
);

export const selectIsLoading = createSelector(
    [selectUser],
    (user) => user.isLoading
);