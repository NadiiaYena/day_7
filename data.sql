CREATE DATABASE my_database;
USE my_database;
CREATE TABLE user_input (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT
);