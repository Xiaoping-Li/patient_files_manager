const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const patientsEndPoints = require('./patients/patientsEndpoints.js');
const medFormsEndpoints = require('./medForms/medFormsEndpoints.js');
const medRecordsEndpoints = require('./medRecords/medRecordsEndpoints.js');

const server = express();

// Server static files from the React app
server.use(express.static(path.join(__dirname, 'client/build')));
server.use(bodyParser.json());
server.use(cors());

server.use('/api/patients', patientsEndPoints);
server.use('/api/forms', medFormsEndpoints);
server.use('/api/records', medRecordsEndpoints);

const port = process.env.PORT || 5000;
server.listen(port, err => {
  if (err) console.log(err);
  console.log('Server running on 5000'); 
});