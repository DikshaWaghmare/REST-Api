let empCollection=require("../config/dbconfig");

exports.getAllEmployees=async(req,res)=>{
    try{
        let result=await empCollection.getCollection().find().toArray();
        res.json(result);
    }catch(err){
        res.json({"msg":"Error generated "+err});
    }
}

exports.findEmpbyId=async(req,res)=>{
    let empId=eval(req.params._id);
    try{
        let result=await empCollection.getCollection().findOne({_id:empId});
        if(result==null){
            res.json({"msg":"Record not present with id as "+empId})
        }else {
            res.json(result);
        }
        }
        catch(err){
            response.json({"msg":"Error generated "+err});
        }
}

exports.findEmpsbyAge=async(req,res)=>{
    try{
        let result=await empCollection.getCollection().find({age:{$lt:30}}).toArray();
        if(result==null){
            res.json({"msg":"Record not present with id as "+empId})
        }else {
            res.json(result);
        }
    }catch(err){
        res.json({"msg":"Error generated "+err});
    }
}
exports.findEmpsbysalary=async(req,res)=>{
    try{
        let result=await empCollection.getCollection().find({salary:{$lt:30000}}).toArray();
        if(result==null){
            res.json({"msg":"Record not present with id as "+empId})
        }else {
            res.json(result);
        }
    }catch(err){
        res.json({"msg":"Error generated "+err});
    }
}

exports.storeEmployee= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().insertOne(emp);
    response.send(result);
    }catch(ex){
        response.send(ex);
    }
}

exports.deleteEmployee = async (request,response)=> {
    let empId = eval(request.params._id);
    try{
    let result  = await empCollection.getCollection().deleteOne({_id:empId});
    //response.send(result);
    if(result.deletedCount>0){
        response.send("Record deleted successfully")
    }else{
        response.send("Record not present with id as "+empId);
    }
    }catch(ex){
        response.send(ex);
    }
}

exports.deleteEmployeeByAge = async (request,response)=> {
    let empAge = eval(request.params.age);
    try{
    let result  = await empCollection.getCollection().deleteMany({age:{$lt:empAge}});
    //response.send(result);
    if(result.deletedCount>0){
        response.send("Record deleted successfully")
    }else{
        response.send("Record not present with age as "+empAge);
    }
    }catch(ex){
        response.send(ex);
    }
}


exports.updateEmployeeSalary= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().updateOne({_id:emp._id},{$set:{salary:emp.salary}});
    
    if(result.modifiedCount>0){
        response.send("Salary updated successfully")
    }else if(result.matchedCount>0){
        response.send("Age didn't update becuase old and new salary are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}

exports.updateEmployeeAge= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().updateOne({_id:emp._id},{$set:{age:emp.age}});
    if(result.modifiedCount>0){
        response.send("Age updated successfully")
    }else if(result.matchedCount>0){
        response.send("Age didn't update becuase old and new Age are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}



// exports.insertEmp=async(req,res)=>{
//     try{
//         let emp = {_id:11,name:"Rohit",age:24,salary:20000};
//         let result=await empCollection.getCollection().insertOne(emp);
//         res.send("Data inserted ",result);
//     }catch(err){
//         res.json({"msg":"Error generated "+err});
//     }
// }

// exports.insertEmp=async(req,res)=>{
//         let result=await empCollection.getCollection().deleteOne({_id:11});
//         res.send("Data Deleted! ");
    
// }



// insert Many
// let emp1 = {_id:1,name:"Lila",age:22,salary:28000};
// let emp2 = {_id:2,name:"Vina",age:24,salary:22000};
//         let emp3 = {_id:3,name:"shyam",age:25,salary:29000};
//         let emp4 = {_id:4,name:"Vinit",age:28,salary:23000};
//         db.collection("Employees").insertMany([emp3,emp4],(err1,result)=> {
//             if(!err1){
//                     console.log(result)
//             }else {
//                     console.log(err1)
//             }
//             client.close();
//         })
//     }else{
//         console.log(err);
//     }
// })

//db.Emp.find({$and:[{salary:{$gt:22000}},{salary:{$lt:26000}}]});