# amazon-replica
An Amazon-like storefront using  MySQL. The app takes in orders from customers and deplete stock from the store's inventory.

The program consist of two files: bamazonCustomer.js and bamazonManager.js. Each can be launched by typing "node" followed by their respective name.

bamazonCustomer.js asks the user which product they would like to buy and how many of that particular product. If the user selects a quantity larger than available they will recieve an "Insufficient quantity!" message. Once a product is selected with an available stock the user is given a total cost of the transaction. The stock quantity is then updated to reflect the purchase. 

bamazonCustom.js demo gif: https://github.com/ZachDrake/mysql-inquirer-storefront/blob/master/bamazonCustomer.gif

bamazonManager.js presents the user with four options. "View Products for Sale" lists all information on current products. "View Low Inventory" displays all products with less than five items in stock. "Add to Inventory", which is currently not working, will add to the stock inventory of existing products. As of right now it simple routes the user back to main, prompting the user to select another choice. finally, "Add New Product" adds a new product to the mysql database. 

bamazonManager.js demo gif: https://github.com/ZachDrake/mysql-inquirer-storefront/blob/master/bamazonManager.gif

I plan on revisiting this app to not only fix the "Add to Inventory" functionality but to also clean up the code with the goal of making it easily readable. 