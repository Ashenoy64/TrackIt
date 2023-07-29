import React from 'react';
import Card from './card';
const Overview = ({symbol,price,change,changePercent,currency,prediction}) => {
  return (
    <>
        <span className='absolute left-4 top-4 text-neutral text-lg xl:text-xl 2xl:text-2xl'>
            {symbol}
        </span>
        <div className='w-full h-full flex items-center justify-around'>
            <span className='text-2xl xl:text:4xl 2xl:text-5xl flex items-center'>
                    ${price}
                    <span className='ext-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2'>
                    {currency}
            </span>
            
            </span>
           

            <span className='text-lg xl:text-xl 2xl:text-2xl}'>
                {change>0 ?<span className='text-lime-500'>
                    
                    {change} <span>({changePercent}%)</span>
                    </span>:<span className='text-red-500'>
                    
                    {change} <span>({changePercent}%)</span>
                    </span> }
                    
            </span>
            

        </div>
    </>
  )
}

export default Overview