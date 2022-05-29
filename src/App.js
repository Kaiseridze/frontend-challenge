import React, { useState, useEffect } from "react"
import axios from "axios"
import "./index.css"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Favorites from "./pages/Favorites"

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/favorites' element={<Favorites/>} />
			</Routes>
		</div>
	)
}

export default App
