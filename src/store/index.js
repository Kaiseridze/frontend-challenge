import { configureStore, combineReducers } from "@reduxjs/toolkit";
import catsSlice from "./reducers/catsSlice";
import favCatSlice  from "./reducers/favCatSlice";

const rootReducer = combineReducers({
	catsSlice,
	favCatSlice,
})
export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}