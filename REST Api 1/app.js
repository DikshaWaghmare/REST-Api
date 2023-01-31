let express = require("express");
let bodyParser=require("body-parser");
let app = express();
app.use(bodyParser.json());
let cust1 = {cid:100,cname:"Ravi",age:21}
let cust2 = {cid:101,cname:"Ramesh",age:20}
let cust3 = {cid:102,cname:"Rajesh",age:24}
let cust4 = {cid:103,cname:"Lokesh",age:26}
let customers =[];
customers.push(cust1);
customers.push(cust2);
customers.push(cust3);
customers.push(cust4);
// http://localhost:3000/  it will give in text format 

app.get("/",(request,response)=> {
    response.send("welcome to rest api with get method")
})

// http://localhost:3000/getCustomer 

app.get("/getCustomer",(request,response)=> {
    response.json(cust1);
})

// http://localhost:3000/getCustomers

app.get("/getCustomers",(request,response)=> {
    response.json(customers);
})


// search customer using query param 
// http://localhost:3000/searchCustomerByQueryParam?cid=101
app.get("/searchCustomerByQueryParam",(request,response)=> {
  let cid = request.query.cid;
    let result = customers.find(c=>c.cid==cid);
    if(result!=undefined){
        response.json(result);
    }else {
    response.json({"msg":"Record not present"})
    }
})

// search customer using path param 
// http://localhost:3000/searchCustomerByPathParam/100
app.get("/searchCustomerByPathParam/:cid",(request,response)=> {
    let cid = request.params.cid;
      let result = customers.find(c=>c.cid==cid);
      if(result!=undefined){
          response.json(result);
      }else {
      response.json({"msg":"Record not present"})
      }
  })
app.post("/storeCustomer",(request,response)=> {
    let customer = request.body;
    //console.log(customer);
    let result = customers.find(c=>c.cid==customer.cid);
    //console.log(result)
    if(result == undefined){
            customers.push(customer);       // added in array 
            response.send("Customer details stored successfully");
    }else {
        response.send("Record didn't store, Customer id must be unique")
    }
})

app.listen(3000,()=>console.log("Server running on port number 30000"))