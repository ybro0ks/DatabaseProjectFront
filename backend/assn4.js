var mysql = require('mysql');

var con = mysql.createConnection({
    host: "***********",
    user: "************",
    password: "**************",
    database: "************"
});
updateUser();
console.log("Welcome to your database, you have four options: \nPress 1 to create new data, \nPress 2 to update existing data, \nPress 3 to retrieve data, \nPress 4 to delete data, \nPress 5 to exit.");
choose();
updateUser();

function choose() {
    const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (input) => {
    switch (input) {
      case '1':
        create();
        break;
      case '2':
        updateUser();
        break;
      case '3':
        retrieve();
        break;
      case '4':
        remove();
        break;
      case '5':
        console.log("Exiting application...");
        rl.close();
        break;
      default:
        console.log("Invalid option. Please enter a number between 1 and 5.");
    }
  });
}
function create(){
var identify = 0;

console.log("Welcome to your database. To begin, please include details of the person. This must contain: title, first name, surname, mobile, and email address. It is important you put it in this order.");
//retrieve();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userInputArray = [];

createInput(0);

function createInput(iteration) {
    rl.question("Enter a value (type 'done' to finish): ", (input) => {
        if (input.toLowerCase() === 'done') {
            rl.close();
            console.log('User input array:', userInputArray);
            insertDataIntoDatabase();
        } else {
            userInputArray.push(input);
            if (iteration < 4) {
                createInput(iteration + 1);
            } else {
                rl.close();
                console.log('User input array:', userInputArray);
                insertDataIntoDatabase();
            }
        }
    });
}


function insertDataIntoDatabase() {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Database connection successful, inputting data now");

        var title = userInputArray[0];
        var firstNames = userInputArray[1];
        var surname = userInputArray[2];
        var mobile = userInputArray[3];
        var email = userInputArray[4];
       
        var sql = 'INSERT INTO users.personalinformation (title, `first name`, surname, mobile, `email address`) VALUES (?, ?, ?, ?, ?)';

        // Execute the query with user input values
        con.query(sql, [title, firstNames, surname, mobile, email ], function(err, result) {
            if (err) throw err;
            console.log("Data inserted successfully");

            var newIdentify = result.insertId;
           console.log("New identify:", newIdentify);
           address(newIdentify);
          // Close the database connection
           
        });
    });
   
}

function address(identify){
     identify = identify;
    console.log("please enter your address line 1, line 2, town, county/city and eircode please");
//retrieve();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userInputArray = [];

createInput(0);

function createInput(iteration) {
    rl.question("Enter a value (type 'done' to finish): ", (input) => {
        if (input.toLowerCase() === 'done') {
            rl.close();
            console.log('User input array:', userInputArray);
            insertDataIntoDatabase();
        } else {
            userInputArray.push(input);
            if (iteration < 5) {
                createInput(iteration + 1);
            } else {
                rl.close();
                console.log('User input array:', userInputArray);
                insertDataIntoDatabase();
            }
        }
    });
}


function insertDataIntoDatabase() {
    // Assuming `con` is already connected or will be managed outside this function
    console.log("Database connection successful, inputting data now");

    var address1 = userInputArray[0];
    var address2 = userInputArray[1];
    var town = userInputArray[2];
    var county = userInputArray[3];
    var eircode = userInputArray[4];
     identify = identify;
    
    // Updated SQL statement to reflect 5 values and corrected column names
    var sql = 'INSERT INTO users.address (identify, line1, line2, town, countycity, eircode) VALUES (?, ?, ?, ?, ?, ?)';

    // Execute the query with user input values

    con.query(sql, [identify, address1, address2, town, county, eircode], function(err, result) {
        if (err) throw err;
        console.log("Data inserted successfully into address");
        // No need to capture the result here unless you need it for something else
    });
    con.end(); 
}

}

function retrieve(){
console.log("we shall retrieve all users matching a specific name, enter the name you want");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let userfindArray = [];
createretrieveInput(0);

function createretrieveInput(iteration) {
    rl.question("Enter a user name(FIRST NAME ONLY) ", (input) => {
        if (input.toLowerCase() === 'done') {
            rl.close();
            console.log('User input array:', userfindArray);
            insertDataIntoDatabase();
        } else {
            userfindArray.push(input);
            if (iteration < 1) {
                createretrieveInput(iteration + 1);
            } else {
                rl.close();
                console.log('User input array:', userfindArray);
               finddata();
            }
        }
    });
}

function finddata() {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Database connection successful, searching for data now please be patient");

        var name = userfindArray[0];
    
        var sql = 'SELECT * FROM users.personalinformation WHERE `first name` = ?';

        // Execute the query with user input values
        con.query(sql, [name], function(err, result) {
            if (err) throw err;
            console.log("Data found successfully");
            console.log(result);
            con.end(); // Close the database connection
        });
    });
}
}


//delete function
function remove(){

    console.log("Enter the email, phone and first name of the user you wish to delete(in that order please)");

    const readline = require('readline');
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    let userdeleteArray = [];
    createdeleteInput(0);
    
    function createdeleteInput(iteration) {
        rl.question("Input data here ", (input) => {
            if (input.toLowerCase() === 'done') {
                rl.close();
                console.log('User input array:', userdeleteArray);
                insertDataIntoDatabase();
            } else {
                userdeleteArray.push(input);
                if (iteration < 2) {
                    createdeleteInput(iteration + 1);
                } else {
                    rl.close();
                    console.log('User input array:', userdeleteArray);
                   deleteData();
                }
            }
        });
    }
    
    function deleteData() {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Database connection successful, beginning data deletion");
    
            var email = userdeleteArray[0];
            var phone = userdeleteArray[1];
            var name = userdeleteArray[2];
        
            // Corrected SQL query
            var sql = 'DELETE FROM users.personalinformation WHERE `first name` = ? AND mobile = ? AND `email address` = ?';
        
            // Execute the query with user input values
            con.query(sql, [name, phone, email], function(err, result) {
                if (err) throw err;
                console.log("Data deleted successfully");
                console.log(result.affectedRows + " row(s) deleted");
                con.end(); // Close the database connection
            });
        });
    }
}   
}

function updateUser(con) {
    const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    rl.question("Enter the first name of the user you want to update: ", (firstName) => {
      con.query('SELECT * FROM personalinformation WHERE `first name` = ?', [firstName], (err, result) => {
        if (err) throw err;
  
        if (result.length === 0) {
          console.log("No user found with that first name.");
          rl.close(); 
        } else {
          console.log("User found:", result);
          console.log("What information would you like to update?");
          console.log("1. Mobile Number");
          console.log("2. Email Address");
  
          rl.question("Choose an option: ", (option) => {
            switch (option) {
              case '1':
                rl.question("Enter the new mobile number: ", (newMobile) => {
                  con.query('UPDATE personalinformation SET mobile = ? WHERE `first name` = ?', [newMobile, firstName], (err, updateResult) => {
                    if (err) throw err;
                    console.log("Mobile number updated successfully.");
                    rl.close(); 
                  });
                });
                break;
              case '2':
                rl.question("Enter the new email address: ", (newEmail) => {
                  con.query('UPDATE personalinformation SET `email address` = ? WHERE `first name` = ?', [newEmail, firstName], (err, updateResult) => {
                    if (err) throw err;
                    console.log("Email address updated successfully.");
                    rl.close(); 
                  });
                });
                break;
              default:
                console.log("Invalid option. Please enter a valid option.");
                rl.close(); 
            }
          });
        }
      });
    });
  }

  
