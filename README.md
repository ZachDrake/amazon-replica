# amazon-replica
An Amazon-like storefront using  MySQL. The app takes in orders from customers and deplete stock from the store's inventory.

The program consist of two files: bamazonCustomer.js and bamazonManager.js. Each can be launched by typing "node" followed by their respective name.

bamazonCustomer.js asks the user which product they would like to buy and how many of that particular product. If the user selects a quantity larger than available they will recieve an "Insufficient quantity!" message. Once a product is selected with an available stock the user is given to total cost of the transaction. The stock quantity is then updated to reflect the purchase. 

bamazonCustom.js gif demo: