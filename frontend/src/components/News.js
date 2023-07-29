// import React from "react";
// import '../styles/tailwind.css'
const fetch=require('node-fetch')
// import news from  './new.js'
// //import axios from 'axios'
var url='https://finnhub.io/api/v1'
var news;

apiKey = "ce24keiad3idecbgp5g0ce24keiad3idecbgp5gg"

fetch(url+'/calendar/ipo?from=2020-01-01&to=2020-04-30').then(res=>res.json).then(res=>console.log(res))

// class News extends React.Component{
//     constructor(props)
//     {
//         super(props)
        
       
//           this.state={
//           title:news[0]["name"],
//           descriptiom:news[0]["symbol"],
//           url:news[0]['price'],
//           token:news[0]['numberOfShares'],
//           current:0,
//           }
//     }
//     changeinc=()=>{
//         this.setState({ title:news[this.state.current+1]["name"],
//         descriptiom:news[this.state.current+1]["symbol"],
//         url:news[this.state.current+1]['price'],
//         tags:news[this.state.current+1]['numberOfShares'],
//         current:this.state.current+1,
//     })
//     }
//     changedec=()=>{
//         this.setState({ title:news[this.state.current-1]["name"],
//         descriptiom:news[this.state.current-1]["symbol"],
//         url:news[this.state.current-1]['price'],
//         tags:news[this.state.current-1]['numberOfShares'],
//         current:this.state.current-1,
//     })
//     }
//     render(){
//         return(
//             <div className="flex flex-row mx-12 p-6 justify-evenly bg-primary w-42 rounded-full my-36 ">
//          <button onClick={this.changedec} className="relative top-12 mx-12 my-6 w-9 h-10 font-bold p-auto text-black bg-white rounded-xl">&lt;</button>
//              <div className="py-8 w-42">
//                  <h2 className="font-bold">{this.state.symbol}</h2>
//                  <p className="mt-3">Tags:</p>
//                  <p className="text-red"> #{this.state.token[0]}  #{this.state.token[1]}  #{this.state.token[2]} </p>
//                  <p className="my-4"><span className="font-bold text-grey ">Description:  </span>{this.state.descriptiom}</p>
//              </div>
//          <button className="relative top-12 mx-12 my-6 w-9 p-auto text-black h-10 font-bold bg-white rounded-xl" onClick={this.changeinc}>&gt;</button>
//       </div> 
//         )
//     }
// }


// const News = (props) => { 
//     const [state, setState] = useState('');
//     const [display,setDisplay]=useState('');
    
//     useEffect(() => {
//         finnhubClient.ipoCalendar("2020-01-01", "2020-06-15", (error, data, response) => {
//         this.setState(data)});
//     }, [])
//     return ( 
//         <div className="flex flex-row mx-12 p-6 justify-evenly bg-primary w-42 rounded-full my-36 ">
//         <button onClick={this.changedec} className="relative top-12 mx-12 my-6 w-9 h-10 font-bold p-auto text-black bg-white rounded-xl">&lt;</button>
//             <div className="py-8 w-42">
//                 <h2 className="font-bold">{this.state.symbol}</h2>
//                 <p className="mt-3">Tags:</p>
//                 <p className="text-red"> #{this.state.token[0]}  #{this.state.token[1]}  #{this.state.token[2]} </p>
//                 <p className="my-4"><span className="font-bold text-grey ">Description:  </span>{this.state.descriptiom}</p>
//             </div>
//         <button className="relative top-12 mx-12 my-6 w-9 p-auto text-black h-10 font-bold bg-white rounded-xl" onClick={this.changeinc}>&gt;</button>
//        </div>  
//     ) 
// } 


// export default News;