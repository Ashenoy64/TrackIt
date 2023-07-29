import { useState } from "react";
import Dashboard from "./components/dashboard";
import StockContext from "./components/stockContex";
import "./styles/App.css"
export default function App() {
  const [stockSymbol,setStockSymbol]=useState("GOOG")
  return (
    <StockContext.Provider value={{stockSymbol,setStockSymbol}}>
    <Dashboard></Dashboard>
    </StockContext.Provider>
    
  )
}

