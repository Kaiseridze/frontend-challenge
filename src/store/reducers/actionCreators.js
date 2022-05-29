import { catsSlice } from "./catsSlice"
import { requestOptions } from "../../api"
import axios from "axios"

export const fetchCats = () => async (dispatch) => {
	try {
      dispatch(catsSlice.actions.catsFetching())
		const response = await axios.get(
			`https://api.thecatapi.com/v1/breeds?limit=5&page=0`,
			requestOptions
		)
		dispatch(catsSlice.actions.catsFetchingSuccess(response.data))
   } catch (e) {
      dispatch(catsSlice.actions.catsFetchingError(e.message))
   }
}

export const lazyLoadCats = (id) => async (dispatch) => {
	try {
		dispatch(catsSlice.actions.lazyLoadFetching())
		const response = await axios.get(
			`https://api.thecatapi.com/v1/breeds?limit=5&page=${id}`,
			requestOptions
		)
		dispatch(catsSlice.actions.catsLazyLoad(response.data))
	} catch (e) {
		dispatch(catsSlice.actions.catsFetchingError(e.message))
	}
}

