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

node bamazonCustomer.js

A list of all products will appear and a question asking which product.
Put the number of the item you want and the amount.

