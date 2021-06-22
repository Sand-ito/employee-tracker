const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeDB',
});

const viewEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
    });
    init();
};

const viewRoles = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
    });
    init();
};

const viewDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
    });
    init();
};

const init = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                // "Add employee.",
                // "Add role.",
                // "Add department.",
                "View employees.",
                "View roles.",
                "View deparments.",
                // "Update employee."
            ]
        }
    ]).then((answer) => {
        switch (answer.choice) {
            // case "Add employee.":
            //     addEmployee();
            //     break;

            // case "Add role.":
            //     addRole();
            //     break;

            // case "Add department.":
            //     addDepartment();
            //     break;

            case "View employees.":
                viewEmployees();
                break;

            case "View roles.":
                viewRoles();
                break;

            case "View deparments.":
                viewDepartments();
                break;

            // case "Update employee.":
            //     updateEmployee();
            //     break;

        };
    });

};

connection.connect((err) => {
    if (err) throw err;
    init();
});