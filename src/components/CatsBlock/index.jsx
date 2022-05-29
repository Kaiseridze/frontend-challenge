import React, { useState } from "react"
import "./catsBlock.css"
import addFav from "../../assets/addFav.svg"
import removeFromFav from "../../assets/removeFromFav.svg"
import { useDispatch, useSelector } from "react-redux"
import { addFavCat, removeFavCat } from "../../store/reducers/favCatSlice"

const CatsBlock = ({ img, cat }) => {
	const dispatch = useDispatch()
	const { favoriteCats } = useSelector((state) => state.favCatSlice)
	const isCatInFav = favoriteCats.some((item) => item.id === cat.id)
	
	// add/remove favorite cats
	const handleFav = () => {
		if (isCatInFav) {
			dispatch(removeFavCat(cat.id))
		} else {
			dispatch(addFavCat(cat))
		}
	}
	// 'img' means that if the data has an image then display it
	return (
		<div className='cat_block'>
			{img && (
				<>
					<img className='cat_img' src={img} alt='Котик потерялся!' />
					<img
						src={isCatInFav ? removeFromFav : addFav}
						onClick={handleFav}
						className='cat_badge'
					/>
				</>
			)}
		</div>
	)
}

export default CatsBlock
