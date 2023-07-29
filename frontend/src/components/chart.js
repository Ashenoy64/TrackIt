import React, { useState,useEffect,useContext } from 'react'
import { convertUnixTimestampToDate, convertDateToUnixTimestamp,createDate} from '../helpers/data-helper';
import {historicData} from "../const/mock"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartConfig } from '../const/config';
import ChartFilter from './chartfilter';
import {fetchData} from "../api/stockAPI";
import StockContex from './stockContex';


const Chart = () => {
    const [data,setData]=useState(historicData);
    const [filter,setFilter]=useState("1Y");
    const {stockSymbol}=useContext(StockContex);
    useEffect(()=>{
        const getDateRange=()=>{
            const {days,weeks,months,years}=chartConfig[filter];
            const endDate=new Date();
            const startDate=createDate(endDate,-days,-weeks,-months,-years);
            const startTimestampUnix=convertDateToUnixTimestamp(startDate);

            const endTimeStampUnix=convertDateToUnixTimestamp(endDate);
            
            return{startTimestampUnix,endTimeStampUnix};
        }
        const updateChart=async ()=>{
                try{
                    const r=getDateRange();
                    console.log(r);
                    const resolution=chartConfig[filter].resolution;
                    const result=await fetchData(stockSymbol,resolution,r.startTimestampUnix,r.endTimeStampUnix);
                    console.log(result);
                    setData(formatData(result));
                }
                catch(error){
                    setData({});
                    console.log(error)
                }
                
        }
        updateChart();
    },[stockSymbol,filter])
    const formatData=(data)=>{
        console.log(filter)
        return data.c.map((item,index)=>{
            return{
                value:item.toFixed(2),
                date:convertUnixTimestampToDate(data.t[index])
            }
        })
    }
  return (
    <>
    <ul className='flex absolute top-2 right-2 z-40'>
        {Object.keys(chartConfig).map((item)=>{
            return <li key={item}>
            <ChartFilter text={item} active={filter===item} onClick={()=>{setFilter(item)}}>

            </ChartFilter>
        </li>
        })}
    </ul>
        <ResponsiveContainer>
            <AreaChart data={data}>
            <Tooltip/>
            <XAxis dataKey={"date"}/>
                    <YAxis domain={["dataMin","dataMax"]}/>
                <Area type="monotone" dataKey="value" stroke='#312e81' fillOpacity={1} strokeWidth={0.5}>
                    
                 
                </Area>
            </AreaChart>
        </ResponsiveContainer>
    </>
  )
}

export default Chart