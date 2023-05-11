# coronaManagementSystem

Overview:
This system is designed to manage a COVID patient database, which includes patient details as well as vaccination information as needed. The system is built using modern technologies such as MongoDB for database management, React for building the user interface, and Node.js for server-side development and data retrieval. In order to enable low-cost and efficient code performance, we used external libraries such as Axios to make server requests, as well as Express to create server API interfaces and Multer to manage and add images to the database.

Installation:
To install the project, follow these steps:
*Download the repository from GitHub.
*Open your package manager and run npm install to install all necessary packages.
*Run the command npm start to start the React and run the command node app.js to start the database.

General Description:
The system's login page displays all COVID patients with their details. We have an "Add Patient" button that allows the user to add a new patient to the database, and the user can cancel the action, by clicking on cancel button. Additionally, there is a button next to each patient in the system that allows the user to add a patient image. When the user clicks the "Add Image" button, a new window opens that allows the user to choose an image from the computer and upload it to the database. When the user clicks the "Save" button, the image is saved in the database, and the user can see the image.

To use the ready-made functions for retrieving data of sick people from the server or adding patient data to the server, 
you need to use the following functions: 
http://localhost:5000/people/
GET to retrieve data from the server, getPeopleById to retrieve a specific sick person by ID, and POST to add a sick person to the database.

Similarly, for the vaccination database, to use the ready-made functions for retrieving vaccination data, 
you need to use the following functions: 
http://localhost:5000/vaccination/
GET to retrieve all vaccinations and getVaccinationById to retrieve a specific vaccination by ID, and POST to add a vaccination to the database.
![image](https://github.com/YaelShocht/coronaManagementSystem/assets/126409438/35237863-a2f0-49b5-a431-b5d1f455c3fb)
![2](https://github.com/YaelShocht/coronaManagementSystem/assets/126409438/2cd4c873-ccf2-4724-8e34-7ecb075e03d8)
![3](https://github.com/YaelShocht/coronaManagementSystem/assets/126409438/13990bb2-74e2-4962-abea-64f1dfa961e1)
