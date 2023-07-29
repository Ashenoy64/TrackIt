import React from "react";
import '../styles/tailwind.css'
//import Poke from '../PokeBall.jpg'
//import Ultra from '../public/ultra.jpg'
import Master from '../public/master.jpg'



class Review extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="bg-primary p-8 m-6 rounded-tr-3xl boreder-t border-r rounded-bl-3xl my-36">
                <p className="font-bold text-2xl">Hear From Our Users</p>
                <div className="grid grid-cols-5 mx-5 h-96 my-12 ">
                    <div className="col-span-2  rounded-l-lg p-4">
                        <img src={Master} className="h-96 mx-auto rounded-3xl" alt="" />
                    </div>
                    <div className="col-span-3 border-l-2 rounded-r-lg  p-8 bg-cyn">
                        <div className="">
                        <p className="my-5">Avanish Shenoy</p>
                        <p className="">Rating 4/5</p>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit explicabo rem repellat quidem, obcaecati labore aspernatur consequuntur perferendis similique? Est repudiandae velit ipsum iusto porro iste unde maiores suscipit!</p>
                        </div>
                        <div className="relative top-12 w-72 mx-auto">
                        <button className="mx-8 rounded-full bg-black w-12 h-12">&lt;</button>
                
                        <button className="mx-8 rounded-full bg-black w-12 h-12">&gt;</button>
                        </div>
                
                    </div>
                </div>
            </div>
        )
    }
}


export default Review;