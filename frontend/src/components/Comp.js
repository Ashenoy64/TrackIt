import React from "react";
import '../styles/tailwind.css'
import graph from '../public/graph2.svg'


class Comp extends React.Component{
    render()
    {
        return(
            <div className="flex flex-row justify-between">
            <div className="ml-3 p-16">
                    <p className="font-bold text-5xl">Predictor</p>

                    <br />
                    <br />
                    <p className=" text-xl my-4">Predictor Analyzes historical data and predicts tomorrows stock price.</p>
                    <p className="text-md my-4"> Also keep track of your favourite stock</p>
            </div>
            <div className="">
                <img src={graph} alt="" />
            </div>
        </div>
        )
        
    }
}

export default Comp;