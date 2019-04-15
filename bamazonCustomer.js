// var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (error) {
    if (error) {
        console.log(error)
    };
    console.log("Connected as id" + connection.threadId + "\n");
    displayProducts();
});

function displayProducts() {
    connection.query("SELECT * FROM products", function (error, results) {
        if (error) {
            console.log(error);
        }
        for (var i = 0; i < results.length; i++) {
            console.log("Id: " + results[i].item_id +
                " Product: " + results[i].product_name + " | " +
                "Department: " + results[i].department_name + " | " +
                "Price: " + results[i].price + " | " +
                "In Stock: " + results[i].stock_quanity + "\n");

        }
        userPrompt();
    });
}

function userPrompt() {
    inquirer.prompt([
        {
            type: "input",
            message: "Which item would you like to purchase?\n (Specify by ID number)",
            name: "id"
        },
        {
            type: "input",
            message: "How many would you like to purchase?",
            name: "quanity"
        }
    ]).then(function (input) {
        if (input.quanity > )
    })
}