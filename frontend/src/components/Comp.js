import React from "react";
import '../styles/tailwind.css'
import graph from '../public/graph2.svg'
import NavBar from "./NavBar";

class Comp extends React.Component{
    render()
    {
        return(
            <>
            <NavBar logout={false}/>
            <div className="flex flex-col my-12 md:flex-row-reverse justify-between">
            <div className="w-auto md:w-1/2">
                <img src={graph} alt="" />
            </div>
            <div className="ml-3 p-16">
                    <p className="font-bold text-5xl text-white">Predictor</p>

                    <br />
                    <br />
                    <p className=" text-xl my-4">Predictor Analyzes historical data and predicts tomorrows stock price.</p>
                    <p className="text-md my-4"> Also keep track of your favourite stock</p>
            </div>
            
        </div>
        </>
        )
        
    }
}

export default Comp;