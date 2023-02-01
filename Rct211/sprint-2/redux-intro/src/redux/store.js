import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  counter: 10,
};

export const store = legacy_createStore(reducer, initialState);
// @params
// 1. reducer
// 2. initialState

// 1. Single source of truth
// 2. State is read only
// 3. Changes made with pure function
