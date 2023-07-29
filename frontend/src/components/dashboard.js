import React,{useEffect,useState,useContext} from 'react'
import Card from "./card"
import Header from './header'
import Predict from './prediction'
import Details from './details'
import Overview from './overview'
import Chart from './chart'
import StockContex from './stockContex'
import { fetchPrediction, stockDetails, stockQuote } from '../api/stockAPI'
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
            console.log(result);
          } catch (error) {
            setStockDetail({});
            console.log(error);
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
          try{
            const Presult=await fetchPrediction(stockSymbol,);
            setPrediction(Presult)
          }
          catch(error){
            setPrediction({})
          }
        };
    
        updateStockDetails();
        updateStockOverview();
      }, [stockSymbol]);
    
  return (
    <div className='h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr bg-blue-600 gap-6 p-10'>
        <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1  clearfix justify-start items-center '>
            
                <Header name={stockDetail.name}></Header>
            
        </div>
        <div >
            

            <Predict stock={stockSymbol}></Predict>
            
        
    </div>
        <div className='md:col-span-2 row-span-5'>
            <Card>
                <Chart></Chart>
            </Card>
        </div>
        
        <div>
            <Card>
                <Overview symbol={stockSymbol} price={quote.pc} change={quote.d} currency={quote.dp} changePercent={stockDetail.currency} prediction={prediction}></Overview>
            </Card>
        </div>
       
        <div className='row-span-2  row-span-6 xl:row-span-3 md:row-span-5  '>
            <Card>
                <Details cdetails={stockDetail}></Details>
            </Card>
        </div>
       
    </div>
  )
}

export default Dashboard