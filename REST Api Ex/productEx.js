let express = require("express");
let app = express();
let bodyParser=require("body-parser");

app.use(bodyParser.json());
let Products =[];
let product1 = {pid:100,pname:"TV",price:40000};
Products.push(product1);
let product2 = {pid:101,pname:"Laptop",price:50000};
Products.push(product2);
let product3 = {pid:102,pname:"Computer",price:30000};
Products.push(product3);
let product4 = {pid:103,pname:"Mobile",price:26000};
Products.push(product4);

app.get("/",(req,res)=> {
    res.send("welcome to rest api with get method");
})


app.get("/getProduct",(req,res)=> {
    res.json(product1);
})


app.get("/getProducts",(req,res)=> {
    res.json(Products);
})


app.get("/productByQueryParam",(req,res)=> {
  let pid = req.query.pid;
    let result = Products.find(c=>c.pid==pid);
    if(result!=undefined){
        res.json(result);
    }else {
    res.json({"msg":"Product not present"});
    }
})

app.get("/productByPathParam/:pid",(req,res)=> {
    let pid = req.params.pid;
      let result = Products.find(c=>c.pid==pid);
      if(result!=undefined){
          res.json(result);
      }else {
      res.json({"msg":"Product not present"});
      }
  })

  app.post("/storeProduct",(request,response)=> {
    let product = request.body;
    console.log(product);
    let result = Products.find(c=>c.pid==product.pid);
    //console.log(result)
    if(result == undefined){
            Products.push(product);       // added in array 
            response.send("Product details stored successfully");
    }else {
        response.send("Record didn't store, Product id must be unique")
    }
})

app.listen(3000,()=>console.log("Welcome on port number 3000!"))