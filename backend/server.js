const express=require("express")
const app=express();
const spawn=require("child_process").spawn;
const cors=require("cors")


app.use(
    cors({
      origin: "*",
    })
  );

app.use(express.json());
const db=require("./db.js")

app.use('/db',db)


app.get("/:stock/:filter",(req,res)=>{
    if(req.params.filter!="undefined"){
        var out="400"
        console.log(req.params.filter)
        var pyPro = spawn("python",[__dirname+"/predict/stock_prediction.py",req.params.stock,req.params.filter]);
        pyPro.stdout.on("data",function(data){
            console.log(data.toString())
        var output=data.toString();
        output=output.match(/>>>>>> /)
        
        
        if(output!=null){
            output=output.input
            out=output.split(" ")[1]
            res.send({"output":out})
        }
        
       
    }
    );
}
   
    else{
        res.sendStatus(400)
    }
})
app.get("*",(req,res)=>{
    res.send("<h1>Route not found</h1><br><h1>Please try some other route</h1>");
})

app.listen(5000,()=>{
    console.log("Listening at 5000");
})