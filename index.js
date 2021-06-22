const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeDB',
});



const init = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "Add employee.",
                "Add role.",
                "Add department.",
                "View employees.",
                "View employee's by role.",
                "View emplyees by deparment.",
                "Update employee."
            ]
        }
    ]).then((answer) => {
        switch (answer.choice) {
            case "Add employee.":
                addEmployee();
                break;

            case "Add role.":
                addRole();
                break;

            case "Add department.":
                addDepartment();
                break;

            case "View employees.":
                viewEmployees();
                break;

            case "View employee's by role.":
                viewRoles();
                break;

            case "View emplyees by deparment.":
                viewDepartments();
                break;

            case "Update employee.":
                updateEmployee();
                break;

        };
    });

};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    init();
});