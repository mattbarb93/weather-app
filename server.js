// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 8080;
const server = app.listen(port, listening);
function listening() {
  console.log(`running on localhost: ${port}`);
};
// Callback to debug


// Initialize all route with a callback function
app.get('/', callBack)


// Callback function to complete GET
function callBack(req, res) {
  res.send(projectData)
}

// Post Route

const userData = []

app.get('/all', getData)

function getData(req, res){
  res.send(userData)
}

app.post('/getUserEntry', function (req, res) {
  let data = req.body;
  console.log(data)
  newEntry = {
    temperature: data.temperature,
    date: data.date,
    feelings: data.feelings,
    comingFrom: "Coming from app.post"
  }

  userData.push(newEntry)
  res.send(userData)
  /*
  projectData["zip"] = data.zip;
  projectData["date"] = data.date;
  projectData["feelings"] = data.feelings;
  console.log(projectData)
  */

})
