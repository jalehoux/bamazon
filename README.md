# Bamazon

## Description

This is a simple command line based store.  Where you can view products and order right from the command line. 
**Technonolgy Used**
* NPM and Node
* [inquirer](https://www.npmjs.com/package/inquirer)
* [mysql](https://www.npmjs.com/package/mysql)

### Installation

First git clone this repository.  In order to run this application, you should have the MySQL database already set up on your machine. To install go here: [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html). Once you have MySQL isntalled, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [Bamazon.sql](Bamazon.sql). Next create and ENV file and add your Mysql password into that file.  Once you have connected to your Mysql database you can use the command node bamazonCustomer.js to run the file.

### Usage

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

