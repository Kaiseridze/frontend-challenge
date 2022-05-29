import React from 'react'
import { NavLink } from 'react-router-dom'


import './header.css'

const Header = () => {

   return (
			<header className='cat_header'>
				<NavLink to='/'>
					<button>Все котики</button>
				</NavLink>
				<NavLink to='favorites'>
					<button>Любимые котики</button>
				</NavLink>
			</header>
		)
}

export default Header
