DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;
CREATE TABLE products(
  ID int auto_increment PRIMARY KEY, 
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price integer ,
  stock_quantity int
);
INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "Iphone", "IT", 60, 3);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "Samsung", "IT", 40, 9);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "BB", "IT", 10, 1);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "TV", "home", 99, 7);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "cat", "animal", 30, 2);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "dog", "animal", 80, 7);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "washer", "home", 77, 4);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "ipad", "IT", 20, 1);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "watch", "IT", 18, 1);

INSERT INTO products( product_name,department_name, price, stock_quantity)
VALUES( "Ipod", "IT", 45, 3);

SELECT * FROM products; 




