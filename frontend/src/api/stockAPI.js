const basePath="https:finnhub.io./api/v1"

export const searchSymbol=async(query)=>{
    const url=`${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
    const response=await fetch(url);

    if(!response.ok){
        const message=`An error occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const stockDetails=async(stockSymbol)=>{
    const url=`${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response=await fetch(url);

    if(!response.ok){
        const message=`An error occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const stockQuote=async(stockSymbol)=>{
    const url=`${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`
    const response=await fetch(url);

    if(!response.ok){
        const message=`An error occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const fetchData=async(stockSymbol,resolution,from,to)=>{
    const url=`${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`
    const response=await fetch(url);

    if(!response.ok){
        const message=`An error occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const fetchPrediction=async(stockSymbol,filter)=>{
    console.log(`http://localhost:5050/${stockSymbol}/${filter}`)
    const url=`http://localhost:5050/${stockSymbol}/${filter}`
    const response=await fetch(url);
    if(!response.ok){
        const message=`An error occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}