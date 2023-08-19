import React,{useEffect,useState,useContext} from 'react'
import Card from "./card"
import Header from './header'
import Predict from './prediction'
import Details from './details'
import Overview from './overview'
import Chart from './chart'
import StockContex from './stockContex'
import NavBar from './NavBar'
import {  stockDetails, stockQuote } from '../api/stockAPI'



const Dashboard = () => {
    const {stockSymbol}=useContext(StockContex);
    const[stockDetail,setStockDetail]=useState({});
    const[quote,setQuote]=useState({});
    const[prediction,setPrediction]=useState({});

    useEffect(() => {
        const updateStockDetails = async () => {
          try {
            const result = await stockDetails(stockSymbol);
            setStockDetail(result);
            
          } catch (error) {
            setStockDetail({});
            
          }
        };
    
        const updateStockOverview = async () => {
          try {
            const result = await stockQuote(stockSymbol);
            setQuote(result);
          } catch (error) {
            setQuote({});
            console.log(error);
          }
          
        };
    
        updateStockDetails();
        updateStockOverview();
      }, [stockSymbol]);
    
  return (
    <>
    <NavBar logout={true}/>
    <div className='h-[150vh] md:h-[100vh] grid grid-rows-5  md:grid-cols-2   bg-blue-600 gap-6 md:gap-12 p-10'>
        <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1  clearfix justify-start items-center '>
                <Header name={stockDetail.name}></Header>    
        </div>

        <div >
            <Predict stock={stockSymbol}></Predict>
        </div>

        <div className='md:h-[50vh] h-72 my-auto   md:col-span-2 row-span-5'>
            <Card>
                <Chart></Chart>
            </Card>
        </div>
        
        <div>
            <div className='w-full h-28 rounded-md relative p-8 border-2 bg-white border-neutral'>
                <Overview symbol={stockSymbol} price={quote.pc} change={quote.d} currency={quote.dp} changePercent={stockDetail.currency} ></Overview>
            </div>
        </div>
       
        <div className=' row-span-6 xl:row-span-3 md:row-span-5  '>
            <Card>
                <Details cdetails={stockDetail}></Details>
            </Card>
        </div>
       
    </div>
    </>
  )
}

export default Dashboard