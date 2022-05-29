import React from 'react'
import './showMoreButton.css'

function ShowMoreButton({children, onClick}) {
   return (
      <>
         <button className='button' onClick={onClick}>{children}</button>
      </>
   )
}

export default ShowMoreButton
