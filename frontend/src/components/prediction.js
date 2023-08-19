import React, { useEffect, useState } from 'react';
import { chartConfig } from '../const/config';
import { fetchPrediction } from '../api/stockAPI';
import ChartFilter from './chartfilter';


const Predict = ({stock}) => {



  const [predict,setPrediction]=useState(0);
  const [filter,setFilter]=useState("1W");
  useEffect(()=>{
      let result = null;

    const fetchPredictionOnce = async () => {
     {
        result = await fetchPrediction(stock, filter);

        if (result) {
          const trimmedOutput = result["output"].trim();
          setPrediction(trimmedOutput.substring(2, 8));
        } else {
          setPrediction(predict + 1);
        }
      }
    };

    fetchPredictionOnce();
  },[filter,stock,predict])
  return (
    <div className='w-full h-28 rounded-md relative p-8 border-2 bg-white border-neutral my-8 md:my-0'>
    <ul className='flex absolute top-2 right-2 z-40'>
        {Object.keys(chartConfig).map((item)=>{
            return <li key={item}>
            <ChartFilter text={item} active={filter===item} onClick={()=>{setFilter(item)}}>

            </ChartFilter>
        </li>
        })}
    </ul>
    <span className=' relative bottom-2'>
            {stock}
        </span>
 
        <div className=''>
            <span className='text-xl '>
                    Prediction {predict}
            </span>
          </div>
    </div>
  )
}

export default Predict