//This will help you create the redux store
//It will help you combine all your modules
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listings from "./modules/listings";

//Here i am combining my modules
const reducer = combineReducers({
  //list all my modules
  listings,
});

// here im creating my store
const index = configureStore({
  reducer,
});

export default index;
