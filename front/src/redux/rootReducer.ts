import { AnyAction, combineReducers, ThunkAction } from "@reduxjs/toolkit";
import authModule from "./modules/authModule";
import testModule from "./modules/testModule";
import { reducer as reduxFormReducer } from "redux-form";

const rootReducer = combineReducers({
  form: reduxFormReducer,
  test: testModule.reducer,
  auth: authModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type DefaultThunkAction = ThunkAction<
  void,
  RootState,
  undefined,
  AnyAction
>;

export default rootReducer;
