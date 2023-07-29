import React from 'react'
import Card from './card'
const Details = (cdetails) => {
    
    const details={
        name:"Name",
        country:"Country",
        currency:"Currency",
        ipo:"IPO Date",
        marketCapitalization:"Market Capitalization",
        finnhubIndustry:"Industry",
    };

    const convertMilliontoBillion=(number)=>{
        return (number/1000).toFixed(2);
    }
  return (
    <Card>
        <ul className='w-full h-full flex flex-col justify-between divide-y-1'>
                {Object.keys(details).map((item)=>{
                    return <li key={item} className="flex-1 flex justify-between item-center">
                        <span>{details[item]}</span>
                        
                       <span>{item==='marketCapitalization' ?`${convertMilliontoBillion(cdetails['cdetails'][item])}B`:cdetails['cdetails'][item]}</span>
                    </li>
                })}
        </ul>
    </Card>
  )
}

export default Details