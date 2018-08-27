CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
    Item_ID INT AUTO_INCREMENT NOT NULL,
	Product_Name VARCHAR(100) NOT NULL,
	Department_Name VARCHAR(50) NOT NULL,
	Price DECIMAL(10,2) NOT NULL,
	Stock_Quantity INT(10) NOT NULL,
	primary key(Item_ID)
    );

SELECT * FROM Products;

INSERT INTO Products (Product_Name,Department_Name,Price,Stock_Quantity)
VALUES ("Ticket To Ride","TOYS AND GAMES",59.50,75),
    ("Echo Dot","ELECTRONICS",69.99,180),
    ("Foldable Basket Bins","HOUSEHOLD",28.99,50),
    ("Gourmet Chocolate Gift Basket","GROCERY",75.00,9),
    ("Trench Coat","CLOTHING",39.98,35),
    ("Camping Hammock","SPORTS & OUTDOORS",39.99,25),
    ("Round Pet Bed","PET SUPPLIES",19.49,18),
    ("Call of Duty: Infinite Warfare","GAMING",19.95,68),
    ("Baby Diaper Caddy","BABY",64.09,27),
    ("The 48 Laws of Power","BOOKS",25.25,45);
    
CREATE TABLE Departments(
	Department_ID INT AUTO_INCREMENT NOT NULL,
    Department_Name VARCHAR(50) NOT NULL,
    OverHead_Costs DECIMAL(10,2) NOT NULL,
    Total_Sales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(Department_ID)
    );
    
INSERT INTO Departments(Department_Name,OverHead_Costs,Total_Sales)
VALUES ('TOYS AND GAMES', 35000.00, 10000.00),
('ELECTRONICS', 90000.00, 80000.00),
('HOUSEHOLD', 10000.00, 6000.00),
('CLOTHING', 25000.00, 18000.00),
('PET SUPPLIES', 12000.00, 8000.00),
('GROCERY', 1200.00, 15000.00),
('GAMING', 35000.00, 37000.00),
('BOOKS', 3000.00, 10000.00),
('BABY', 12000.00, 10000.00),
('SPORTS AND OUTDOORS', 30000.00, 40000.00) 
    
    







    

