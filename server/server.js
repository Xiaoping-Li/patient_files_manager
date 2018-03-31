const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const patientsEndPoints = require('./patients/patientsEndpoints.js');
const medFormsEndpoints = require('./medForms/medFormsEndpoints.js');
const medRecordsEndpoints = require('./medRecords/medRecordsEndpoints.js');

const server = express();
server.use(bodyParser.json());
server.use(cors());

server.use('/api/patients', patientsEndPoints);
server.use('/api/forms', medFormsEndpoints);
server.use('/api/records', medRecordsEndpoints);

server.listen(5000, err => {
  if (err) console.log(err);
  console.log('Server running on 5000'); 
});