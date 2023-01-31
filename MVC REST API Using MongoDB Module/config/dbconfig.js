//here we can connect server to the database

let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://127.0.0.1:27017";
let dbClient;
exports.dbconnect = () => {
  mongoClient
    .connect(url)
    .then((res) => {
      dbClient = res;
      console.log("Database successfully connected!");
    })
    .catch((err) => console.log(err));
};
exports.getCollection = () => {
  return dbClient.db("mydb").collection("Employees");
};

