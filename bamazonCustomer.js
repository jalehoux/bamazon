var inquirer = require('inquirer');
var mysql = require('mysql');
require('dotenv').config();

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: process.env.mysql_password,
	database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
});

function getInventory() {
	queryStr = 'SELECT * FROM products';

	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Current Inventory');
		console.log('...................\n');

		for (var i = 0; i < data.length; i++) {
            console.log(`Item ID:  ${data[i].item_id}\nProduct Name: ${data[i].product_name}\nDepartment: ${data[i].department_name}\nPrice: ${data[i].price}\n`);
            console.log("---------------------------------------------------------------------\n");
		}
		promptPurchase()
	})
}

function promptPurchase() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			filter: Number
		}
	]).then(function(input) {
		console.log(`You have selected: \nitem_id = ${input.item_id}\nquantity = ${input.quantity}`);

		var item = input.item_id;
		var quantity = input.quantity;

		// Query db to confirm that the given item ID exists in the desired quantity
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Enter Correct ID.  CLI Terminated');
				connection.end();

			} else {
				var productData = data[0];
				if (quantity <= productData.stock_quantity) {
					console.log('The product you requested is in stock! Placing order!');

					// Construct the updating query string
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					// console.log('updateQueryStr = ' + updateQueryStr);

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
					})
				} else {
					console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
					console.log('Please modify your order.  Connection Ended');
					console.log("\n---------------------------------------------------------------------\n");

					connection.end();
				}
			}
		})
	})
}

getInventory();
