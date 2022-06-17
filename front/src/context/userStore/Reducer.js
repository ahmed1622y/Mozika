import { initialState } from "./Actions";
import { AuthService } from "../../services/AuthService";

export const UserReducer = async (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER":
      state = await AuthService.auth();
    case "AUTH_LOGOUT":
      state = { initialState };
  }
};
