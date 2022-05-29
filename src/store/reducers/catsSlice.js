import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cats: [],
	isLoading: false,
	error: "",
	lazyLoad: false
}

export const catsSlice = createSlice({
	name: "cats",
	initialState,
	reducers: {
		catsFetching(state, action) {
			state.isLoading = true
		},
		catsFetchingSuccess(state, action) {
			state.cats = action.payload
			state.isLoading = false
			state.error = ""
		},
		catsFetchingError(state, action) {
			state.isLoading = false
			state.error = action.payload
		},
		lazyLoadFetching(state, action) {
			state.lazyLoad = true
		},
		catsLazyLoad(state, action) {
			state.lazyLoad = false
			state.cats.push(...action.payload)	
		},
	},
})

export default catsSlice.reducer