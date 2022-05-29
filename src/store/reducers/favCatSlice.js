import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   favoriteCats: []
}

export const favCatSlice = createSlice({
	name: "favCats",
	initialState,
	reducers: {
		addFavCat(state, action) {
			state.favoriteCats.push(action.payload)
		},
		removeFavCat(state, action) {
			state.favoriteCats = state.favoriteCats.filter(
				(cat) => cat.id !== action.payload
			)
		},
	},
})

export const { addFavCat, removeFavCat } = favCatSlice.actions
export default favCatSlice.reducer