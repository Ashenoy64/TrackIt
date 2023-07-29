import React from "react";
import '../styles/tailwind.css'


class Joinus extends React.Component{
    render()
    {
        return(
            <div className="container p-12 rounded-lg h-96  bg-primary mx-auto my-12">
                <p className=" font-medium text-4xl mt-12 ml-5">Be the part for greater community-&gt;</p>
                <p className="text-5xl text-center mt-8 font-extrabold"><button className="rounded-xl p-3 bg-cyn">Join Us</button></p>
            </div>
        )
    }
}


export default Joinus;