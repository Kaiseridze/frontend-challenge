import React from "react"

import CatsBlock from "../components/CatsBlock"

import { useSelector } from "react-redux"

const Favorites = () => {
	const { favoriteCats } = useSelector((state) => state.favCatSlice)
	return (
		<div className='favorites'>
			<div className='cat'>
				{favoriteCats.length === 0 && (
					<h1>Вы не добавили ни одного котика 😔</h1>
				)}
				{favoriteCats.map((favCat) => (
					<CatsBlock key={favCat.id} cat={favCat} img={favCat.image?.url} />
				))}
			</div>
		</div>
	)
}

export default Favorites
