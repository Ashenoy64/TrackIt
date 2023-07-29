import React, { useEffect, useState } from 'react';
import { chartConfig } from '../const/config';
import { fetchPrediction } from '../api/stockAPI';
import ChartFilter from './chartfilter';
import Card from './card';
const Predict = ({stock}) => {

  const [predict,setPrediction]=useState(0);
  const [filter,setFilter]=useState("1W");
  useEffect(()=>{
      const result=fetchPrediction(stock,filter);
      
      result.then(data=>data["output"].trim())
      result.then(data=>setPrediction(data["output"].substring(2,8)))
      if(result){
        setPrediction("Calculating..")
      }
      else{

        setPrediction(predict+1);
      }
  },[filter,stock])
  return (
    <Card>
    <ul className='flex absolute top-2 right-2 z-40'>
        {Object.keys(chartConfig).map((item)=>{
            return <li key={item}>
            <ChartFilter text={item} active={filter===item} onClick={()=>{setFilter(item)}}>

            </ChartFilter>
        </li>
        })}
    </ul>
    <span className='absolute bottom-20'>
            {stock}
        </span>
 
            
        <div className='w-full h-full p-5 justify-around'>
          
            <span className='text-xl xl:text:2xl 2xl:text-4xl flex items-center'>
                    
                    Prediction ${predict}
                    
            
            </span>
          </div>
    </Card>
  )
}

export default Predict