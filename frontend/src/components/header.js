import React from 'react'
import Search from './search'

const Header = ({name}) => {
  return (
      <>
      <div className='xl:px-20 md:pb-10 '>
      
      <div className='xl:absolute right-8 bg-indigo'>
      
        <Search></Search>
        
        </div>
        <h1 className='text-4xl'>{name}</h1>  
        
    </div>
    
       
      
      </>
  )
}

export default Header