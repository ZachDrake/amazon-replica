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
  console.log("Manager Access Granted...");
  main();
});

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Menu options",
        choices: [
          "View Products for Sale",
          "View Low Inventory",
          "Add to Inventory",
          "Add New Product",
          "Exit"
        ],
        name: "selection"
      }
    ])
    .then(function(response) {
      switch (response.selection) {
        case "View Products for Sale":
          displayProducts();
          break;
        case "View Low Inventory":
          lowInventory();
          break;
        case "Add to Inventory":
          addInventory();
          break;
        case "Add New Product (NOT WORKING)":
        main();
          // addNewProduct();
          break;
        case "Exit":
          connection.end();

        default:
          console.log(
            "Invalid Selection Please Try Again." + displayProducts()
          );
      }
    });
}

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
    main();
  });
}

function lowInventory() {
  connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(
    error,
    res
  ) {
    if (error) {
      console.log(error);
    }
    for (var i = 0; i < res.length; i++) {
      console.log("--------------------------------");
      console.log("These items need to be restocked:");
      console.log(
        "Id: " +
          res[i].item_id +
          " Product: " +
          res[i].product_name +
          " Remaining quantity in stock: " +
          res[i].stock_quantity
      );
      console.log("--------------------------------");
    }
    main();
  });
}

// INVENTORY DOES NOT UPDATE, ONLY REPLACES
// function addInventory() {
//   connection.query("SELECT * FROM products", function(err, res) {
//     var productNameArray = [];
//     for (var i = 0; i < res.length; i++) {
//       productNameArray.push(res[i].product_name);
//     }
//     inquirer
//     .prompt([
//       {
//         type: "list",
//         message: "Which item's inventory would you like to add to?",
//         choices: productNameArray,
//         name: "name"
//       },
//       {
//         type: "input",
//         message: "How many would you like to add?",
//         name: "add"
//       }
//     ])
//     .then(function(response) {
//       connection.query(
//         "UPDATE products SET ? WHERE ?",
//         [
//           {
//             stock_quantity: response.add
//           },
//           {
//             product_name: response.name
//           }
//         ],
//         function(err, res) {
//           if (err) {
//             console.log(err);
//           }
//           main();
//         }
//         );
//       });
//     });
// }

function addNewProduct() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Name of product you are adding",
        name: "name"
      },
      {
        type: "input",
        message: "Department of new product",
        name: "department"
      },
      {
        type: "input",
        message: "Price of product",
        name: "price"
      },
      {
        type: "input",
        message: "Stock quantity",
        name: "quantity"
      }
    ])
    .then(function(response) {
      connection.query(
        "INSERT INTO products SET ?",
        {
          product_name: response.name,
          department_name: response.department,
          price: response.price,
          stock_quantity: response.quantity
        },
        function(err, res) {
          if (err) {
            console.log(err);
          }
          displayProducts();
        }
      );
    });
}
