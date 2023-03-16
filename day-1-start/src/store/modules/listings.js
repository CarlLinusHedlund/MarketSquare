import { createSlice } from "@reduxjs/toolkit";

// slice
//name
//initial state
//reducers // those are the functions which amend of chenges

const listingSlice = createSlice({
  name: "listings",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    // here we declare the functions which demand out state
    SET_PRODUCTS: (state, action) => {},
  },
});

export default listingSlice.reducer;

//actions // API call etc. NB: ***** we dont change the state here *****
const { SET_PRODUCTS } = listingSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://dummyjson.com/products/");
    const data = await response.JSON();
    console.log(data);
    dispatch(SET_PRODUCTS(data));
  } catch (e) {
    //handle any error
    return console.error(e);
  }
};
