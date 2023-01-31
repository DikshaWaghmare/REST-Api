const { response } = require("express");
let express=require("express");
let dbInfo=require("./config/dbconfig");
let empRouter=require("./router/empRouter");
let app=express();

dbInfo.dbconnect();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Its working!")
})

    // extract json data from request body;
app.use("/api/employees",empRouter);


app.listen(3000,()=>console.log("Server running on port no. 3000"));