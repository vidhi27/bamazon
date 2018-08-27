# bamazon

This acitivity's goal was to create an Amazon-like store front using Node.js and MySQL. It is a command-line application.

<b>What Each Javascript does</b>

`1.bamazonCustomerView.js`

-Print all the products available for sale
-Prompts customer about the product they would like to buy by ID number
-Asks for the quantity
 - If there is a sufficient amount of the product in stock, it will return the total for that purchase
 - However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product
 - If the purchase goes through, it updates the stock quantity to reflect the purchase
 - It will also update the product sales in the department table

`2.bamazonManagerView.js`

-Starts with a list of:
 -View Products for Sale
 -View Low Inventory
 -Add to Inventory
 -Add New Product
 -End Session

-If the manager selects View Products for Sale, it lists all of the products in the store including all of their details

-If the manager selects View Low Inventory, it'll list all the products with less than five items in its StockQuantity column

-If the manager selects Add to Inventory, it allows the manager to select a product and add inventory

-If the manager selects Add New Product, it allows the manager to add a new product to the store

-If the manager selects End Session, it ends the session and doesn't go back to the list

<b>Technologies Used</b>

-Node.js

-Inquirer NPM Package

-MySQL NPM Package
