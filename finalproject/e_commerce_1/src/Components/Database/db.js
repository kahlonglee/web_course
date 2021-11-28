let testDB = require("./Database");
let createDB = require("./Database");
let insertData = require("./Database");
let createTable = require("./Database");

let data =
  "INSERT into persons (PersonID, LastName, FirstName, Address, City) VALUES ('1232', 'Lee', 'John', 'Singapore', 'Singapore')";
insertData(data, "testing1");
