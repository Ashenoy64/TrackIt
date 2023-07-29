import React from "react";
import '../styles/tailwind.css'



class Features extends React.Component {
    render() {
        return (
            <div className=" grid grid-cols-2 p-8 justify-center  my-36">
                <div className="border-l border-b-2 bg-primary p-12 rounded-l-xl">
                    <p className="font-bold">Features</p>
                    <p className="my-2">Take Advantage of our Unique Feature</p>
                    <button className="W-12 rounded-3xl px-8 py-2 my-9 border bg-secondary ">Register</button>
                </div>
                <div className="grid grid-cols-2 border-b-2 bg-primary shadow-xl rounded-r-xl p-8">
                    <div className="p-8 m-3 rounded-md bg-queternary shadow-xl text-light">
                        "Brief Case"
                        <p>We Handel And Organise Your Portfolio</p>
                    </div>
                    <div className="p-8 m-3 rounded-md  bg-queternary shadow-xl text-light">
                        "AI"
                        <p>Advanced ML To predict your possible profit streaks</p>
                    </div>
                    <div className="p-8 m-3 rounded-md  bg-queternary shadow-xl text-light">
                        "News"
                        <p>Latest News of the market</p>
                    </div>
                    <div className="p-8 m-3 rounded-md  bg-queternary text-light">
                        "Something"
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veniam assumenda doloribus velit et </p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Features;