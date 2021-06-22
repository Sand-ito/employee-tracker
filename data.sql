DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

-- seed data for department table
INSERT INTO department 
    (department_name)
VALUES 
    ('R & D'),
    ('Manufacturering'),
    ('Finance'),
    ('Marketing');

-- seed data for role table
INSERT INTO role 
    (title, salary, department_id)
VALUES
   ("CEO", 1400000, null),
   ("Researcher", 70000, 1),
   ("Engineer", 75000, 2),
   ("Accountant", 80000, 3),
   ("Sales Manager", 70000, 4),
   ("Representative", 40000, 4);

-- seed data for employee table
INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Arthas", "Menethil", 1, null),
    ("Samuel", "Oak", 2, 1),
    ("Gordon", "Freeman", 3, 1),
    ("Marcus", "Fenix", 4, 1),
    ("Johnny", "Cage", 5, 1),
    ("Carmen", "Sandiego", 6, 5),
    ("Nathan", "Drake", 6, 5),
    ("Jill", "Valentine", 6, 5),
    ("Niko", "Bellic", 6, 5);