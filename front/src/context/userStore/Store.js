import { useReducer, createContext } from "react";
import { initialState } from "./Actions";
import { UserReducer } from "./Reducer";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};
