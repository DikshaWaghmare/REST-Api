let express=require("express");
let router=express.Router(); //router is a express module.....//load 
let employeeController=require("../Controller/empController");//load controller file

// http://localhost:3000/api/employees/getEmployees
router.get("/getEmployees",employeeController.getAllEmployees);// geting all empoloyees data


//http://localhost:3000/api/employees/findEmpbyId/1
router.get("/findEmpbyId/:_id",employeeController.findEmpbyId);//getting emp by id

//http://localhost:3000/api/employees/findEmpsbyAge
router.get("/findEmpsbyAge",employeeController.findEmpsbyAge);

//http://localhost:3000/api/employees/findEmpsbysalary
router.get("/findEmpsbysalary",employeeController.findEmpsbysalary);

//http://localhost:3000/api/employees/storeEmployee 
router.post("/storeEmployee",employeeController.storeEmployee);

// http://localhost:3000/api/employees/deleteEmployeeById/1 
router.delete("/deleteEmployeeById/:_id",employeeController.deleteEmployee);

// http://localhost:3000/api/employees/deleteEmployeeByAge/25 
router.delete("/deleteEmployeeByAge/:age",employeeController.deleteEmployeeByAge);

// http://localhost:3000/api/employees/updateEmployeeSalary
router.patch("/updateEmployeeSalary",employeeController.updateEmployeeSalary);

// http://localhost:3000/api/employees/updateEmployeeAge
router.patch("/updateEmployeeAge",employeeController.updateEmployeeAge);

//http://localhost:3000/api/employees/insertEmp
//router.get("/insertEmp",employeeController.insertEmp);

module.exports=router;  //reference for router model
