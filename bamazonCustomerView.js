var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Bamazon"
  })

  function start(){
//display the items for sale and their information
    connection.query('SELECT * FROM Products', function(err, res){
        if(err) throw err;

        console.log('========Welcome to BaMaZoN========')
        console.log('------------------------------------------------')

        for(var i = 0; i<res.length;i++){
            console.log("ID: " + res[i].Item_ID + " | " + "Products: " + res[i].Product_Name + " | "  + "Department: " + res[i].Department_Name + " | "  + "Price: " + res[i].Price + " | "  + "Quantity: " + res[i].Stock_Quantity);
            console.log('---------------------------------------------------')
        }

        console.log(' ');
        inquirer.prompt([
            {
                type: "input",
                name: "id",
                message: "What is the ID of the product you would like to buy?",
                validate: function(value){
                    if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
                        return true;
                      } else{
                        return false;
                      }
                }
            },
            {
                type: "input",
                name: "quantity",
                message: "How many units of the product would you like to buy?",
                validate: function(value){
                    if(isNaN(value)){
                        return false;
                      } else{
                        return true;
                      }
                }
            }

        ]).then(function(response){
            var productsToBuy = (response.id)-1;
            var productsQuantity = parseInt(response.quantity);
            var total = parseFloat(((res[productsToBuy].Price)*productsQuantity).toFixed(2));

            //function to check the quantity and if not available then it will say insufficient Quantity
            if(res[productsToBuy].Stock_Quantity >= productsQuantity){

                //if the quantity is available, the database will update the stock after the purchase
                connection.query("UPDATE Products SET ? WHERE ?", [
                    {Stock_Quantity: (res[productsToBuy].Stock_Quantity - productsQuantity)},
                    {Item_ID: response.id}
                ], function(err, result){
                    if(err) throw err;
                    console.log("Your order is complete! Your total is $" + total.toFixed(2) + ". Your item(s) will be shipped to you in 4-5 business days.");

                });
            connection.query("SELECT * FROM Departments", function(err, deptRes){
                if(err) throw err;
                var index;
                for(var i = 0; i < deptRes.length; i++){
                    if(deptRes[i].Department_Name === res[productsToBuy].Department_Name){
                        index = i;
                    }
                }

                //funtion to update the total sales in department table
                connection.query("UPDATE Departments SET ? WHERE ?",[
                    {Total_Sales: deptRes[index].Total_Sales + total},
                    {Department_Name: res[productsToBuy].Department_Name}
                ], function(err, deptRes){
                    if(err) throw err;
                    //console.log('Department Sales Updated');
                });

            });

            }else{
                console.log("Sorry, there's not enough stock for that product.");
            }
            reprompt();
        })

        })
    }

    //function to ask 
    function reprompt(){
        inquirer.prompt([{
          type: "confirm",
          name: "reply",
          message: "Would you like to purchase another item?"
        }]).then(function(ans){
          if(ans.reply){
            start();
          } else{
            console.log("Thank you for the purchase. Hope to see you soon!");
          }
        });
      }
      
      start();
