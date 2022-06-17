const auth = (user) => ({
  type: "USER_AUTH",
  payload: user,
});

const logout = () => ({
  type: "USER_LOGOUT",
});

export const Actions = { auth, logout };
export const initialState = { isLogged: false };
