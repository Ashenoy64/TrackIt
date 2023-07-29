import React from 'react'

const ChartFilter = ({text,active,onClick}) => {
  
  return (
        <button onClick={onClick} className={`w-12 m-2 h-8 norder-1 rounded-md flex items-center justify-center cursor-pointer ${active ?"bg-indigo6-600 border-indigo6-700 text-gray-100":'border-indigo6 text-indigo6-300'}`}>{text}</button>
  )
}

export default ChartFilter