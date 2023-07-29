import React, { useState } from 'react'
import {mockSearch} from "../const/mock"
import { searchSymbol } from '../api/stockAPI'
import {MagnifyingGlassIcon,XMarkIcon} from "@heroicons/react/24/solid"
import Searchresult from './searchresult'
const Search = () => {
    const [input,setInput]=useState("");
    const [bestMatch,setbestMatch]=useState([]);
const Clear=()=>{
    setInput("");
    setbestMatch([]);
}

const updateBestMatch=async ()=>{
    
    try{
        if(input){
            const searchResult=await searchSymbol(input);
            const result=searchResult.result;
            setbestMatch(result);
        }
    }
    catch{

    }
}
  return (
    <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
        <input type="text" value={input} className="w-full px-4 py-2 focus:outline-none rounded-md" placeholder='Search stock' onChange={(event)=>{
            setInput(event.target.value);
        }}
        onKeyPress={(event)=>{
            if (event.key==="Enter"){
                updateBestMatch();
            }
        }}></input>
    {input && (<button onClick={Clear} className=" m-1 p-2 ">
        <XMarkIcon className="h-4 w-4 fill-gray-500"></XMarkIcon>
    </button>)}
    {input&&bestMatch.length>0?<Searchresult results={bestMatch}></Searchresult> : null}
    <button onClick={updateBestMatch} className=" bg-indigo-400 rounded-md flex justify-center items-center m-1 p-2 "><MagnifyingGlassIcon className="h-4 w-4 fill-gray-200" ></MagnifyingGlassIcon></button>
    
    </div>
    
  )
    }



export default Search