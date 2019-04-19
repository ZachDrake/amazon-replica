var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "basic",
  password: "basic",
  database: "bamazonDB"
});

connection.connect(function(error) {
  if (error) {
    console.log(error);
  }
  console.log("Connected as id" + connection.threadId + "\n");
  displayProducts();
});

function displayProducts() {
  connection.query("SELECT * FROM products", function(error, res) {
    if (error) {
      console.log(error);
    }
    for (var i = 0; i < res.length; i++) {
      console.log(
        "Id: " +
          res[i].item_id +
          " Product: " +
          res[i].product_name +
          " | " +
          "Department: " +
          res[i].department_name +
          " | " +
          "Price: " +
          res[i].price +
          " | " +
          "In Stock: " +
          res[i].stock_quantity +
          "\n"
      );
    }
    userPrompt();
  });
}

function userPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Which item would you like to purchase?\n (Specify by ID number)",
        name: "id"
      },
      {
        type: "input",
        message: "How many would you like to purchase?",
        name: "quantity"
      }
    ])
    .then(function(input) {
      var query = "SELECT * FROM products WHERE item_id = ?";
      connection.query(query, [input.id], function(err, res) {
        if (err) {
          console.log(err);
        }
        var newStockquantity;
        var item;
        var price;
        for (var i = 0; i < res.length; i++) {
          item = res[i].item_id;
          if (res[i].stock_quantity < input.quantity) {
            displayProducts();
            console.log("--------------------------------");
            console.log("Insufficient Quantity!");
            console.log("--------------------------------");
            
          } else {
            newStockquantity = res[i].stock_quantity - input.quantity;
            price = res[i].price * input.quantity;
            updateQuantity();
            console.log("--------------------------------");
            console.log("Total cost of purchase " + price);
            console.log("--------------------------------");
          }
        }

        function updateQuantity() {
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [{ stock_quantity: newStockquantity }, { item_id: item }],
            function(err, res) {
              if (err) {
                console.log(err);
              }
              console.log(res.affectedRows + " product(s) updated!\n");
              control();
            }
          );
        }

        function control() {
          inquirer
            .prompt([
              {
                type: "list",
                message: "Would you like to make another purchase?",
                choices: ["Make another purchase", "Exit"],
                name: "control"
              }
            ])
            .then(function(response) {
              if (response.control === "Make another purchase") {
                displayProducts();
              } else {
                connection.end();
              }
            });
        }
      });
    });
}
