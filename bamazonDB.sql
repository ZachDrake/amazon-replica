DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products(
 item_id INT(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
 product_name VARCHAR(40) NOT NULL, 
 department_name VARCHAR(20) NOT NULL, 
 price DECIMAL(10,2) NOT NULL,
 stock_quanity INT(10) NOT NULL
);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("None Stick Pan", "Cooking Supplies", 19.99, 200);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Knife Set", "Cooking Supplies", 374.99, 30);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Computer Monitor", "Office Supplies", 1099.99, 60);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Office Chair", "Office Supples", 499.99, 150);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Tool Box with tools", "Home Improvment", 149.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Bathroom Vanity", "Home Improvment", 1849.99, 25);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Bicycle", "Sports", 395.00, 10);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Baseball Mitt", "Sports", 10.74, 200);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Shirts & Tops", "Clothing", 19.99, 400);

INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES("Coats & Jackets", "Clothing", 35.99, 120);

