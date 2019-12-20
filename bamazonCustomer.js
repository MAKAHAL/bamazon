var mysql = require("mysql");

const inquirer = require("inquirer");
// table from https://www.npmjs.com/package/cli-table
var Table = require('cli-table');
// npm install cli-table



var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  user: "root",

  password: "Makah1998",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

});
//table from https://www.npmjs.com/package/cli-table
var displayForUser = function() {
	var display = new displayTable();
	connection.query('SELECT * FROM products', function(err, results){
		display.displayInventoryTable(results);
		start()
	});
}
    
function start() {
        inquirer.prompt([{
            name: "id",
            type: "input",
            message: " Enter the Item ID of the product you want to purchase",
    
        }, {
            name: "quantity",
            type: "input",
            message: " Enter the quantity you want to purchase",
    
        }]).then(function(answer) {
           
            connection.query('SELECT Product_Name, Department_Name, Price, Stock_Quantity FROM products WHERE ?', {ID: answer.id}, function(err,res) {
                
            console.log('\n  You would like to buy ' + answer.quantity + ' ' + res[0].Product_name + ' ' + res[0].Department_name + ' at $' + res[0].Price + ' each'
                );
                if (res[0].StockQuantity >= answer.quantity) {
          
                    var Quantity = res[0].Stock_Quantity - answer.quantity;
                    connection.query("UPDATE products SET ? WHERE ?", [
                    {
                        Stock_Quantity: Quantity
                    }, {
                        ID: answer.id
                    }], function(err,res) {
                        });	
                    var cost = res[0].Price * answer.quantity;
                    console.log('\n  added to your cart! Your cost is $' + cost.toFixed(2) + '\n');
                 
                
                        
                } else {
                
                    console.log( "sorrytryagain!");
                  
                 
                });
            
              });
            };
