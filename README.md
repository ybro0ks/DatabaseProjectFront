# DatabaseProjectFront


Project Overview: Web Information Processing
Welcome to my project on Web Information Processing, originally inspired by an academic assignment. This project demonstrates the creation and management of a database for personal details, tailored for a hypothetical online store.

Features
This project provides full CRUD functionality for user information stored in a MySQL or MariaDB relational database. The project is divided into two key components: a backend application and a frontend interface with AJAX integration.

Database Structure
The database, named USERS, consists of tables that capture personal user information including:

Title
First Name(s)*
Surname*
Mobile*
Email Address*
Additionally, home and shipping addresses are stored with required fields marked by *:

Address Line 1*
Address Line 2
Town*
County/City*
Eircode
Backend Development
Key Functions
Create: Establishes user records, containing both personal and address details, and saves them to the database.
Retrieve: Searches and returns users matching a specified name.
Update: Modifies elements of user records such as Phone, Email, and Title, along with address data.
Delete: Removes records for users based on a combination of Email, Phone, and Name.
The backend can be executed using either PHP or NodeJS, and is designed to function as a console application, processing data from the USERS database.

Frontend Development
AJAX Integration
The frontend component incorporates AJAX for seamless interaction with the backend. It supports:

Creating new user records.
Retrieving existing user data.
While the project demonstrates AJAX in action, a complete set of HTML/CSS/JS CRUD forms is not mandated. Data interaction is showcased via an in-page console.

Development Guidelines
Core Coding: The project emphasizes fundamental code manipulation for databases without RESTful frameworks like Express.js.
Code Commentary: Includes detailed comments to clarify the implementation of CRUD functionality.
Best Practices in Database Design: Ensures effective relational database design with potential multiple tables and avoidance of monolithic structures.
