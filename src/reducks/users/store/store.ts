import { createStore as reduxCreateStore, combineReducers } from "redux";
import { UsersReducers } from "../reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      users: UsersReducers,
    })
  );
}
