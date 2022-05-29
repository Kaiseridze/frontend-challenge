import React, { useEffect, useState } from "react"
import CatsBlock from "../components/CatsBlock"
import ShowMoreButton from "../components/ShowMoreBtn"

import { useSelector, useDispatch } from "react-redux"
import { fetchCats, lazyLoadCats } from "../store/reducers/actionCreators"

import Loader from "../components/Loader"

const Main = () => {
	/* i am initializing the state locally as storage 
	will store changes even after navigating to another page*/
	const [page, setPage] = useState(1)

	const dispatch = useDispatch()
	const { cats, isLoading, error, lazyLoad } = useSelector(
		(state) => state.catsSlice
	)

	// dispatch initial page
	useEffect(() => {
		dispatch(fetchCats())
	}, [])

	// dispatch next page
	const showMoreHandler = () => {
		dispatch(lazyLoadCats(page))
		setPage((prev) => prev + 1)
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className='main'>
					<div className='cat'>
						{cats.map((cat) => (
							<CatsBlock cat={cat} key={cat.id} img={cat.image?.url} />
						))}
					</div>
					{lazyLoad && (
						<strong className='lazy_load'>Загружаем еще котиков...</strong>
					)}
					<ShowMoreButton onClick={showMoreHandler}>
						Показать еще
					</ShowMoreButton>
				</div>
			)}
			{error && <h1>{error}</h1>}
		</>
	)
}

export default Main
