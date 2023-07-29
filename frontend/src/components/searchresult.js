import React, { useContext } from 'react'
import StockContex from './stockContex'

const Searchresult = ({results}) => {
  const {setStockSymbol}=useContext(StockContex)
  
  return (
    <ul className='absolute w-full top-12 border-2 rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar'>
        
            {results.map((item)=>{
                return <li key={item.symbol} className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200" onClick={()=>{setStockSymbol(item.symbol)}}>
                    <span>{item.symbol}</span>
                    <span>{item.description}</span>
                </li>
            })}
        
    </ul>
  )
}

export default Searchresult