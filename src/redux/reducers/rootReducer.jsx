import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import noteReducer from "./noteReducer";
import likeReducer from "./likeReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
  cart: cartReducer,
  notes: noteReducer,
  likes: likeReducer
});

export default rootReducer;
