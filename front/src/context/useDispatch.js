import React from "react";
import { Actions as UserActions } from "./userStore/Actions";
const useDispatch = (dispatch) => {
  const auth = (user) => dispatch(UserActions.auth(user));
  const logout = () => dispatch(UserActions.logout());
  return {
    auth,
    logout,
  };
};
