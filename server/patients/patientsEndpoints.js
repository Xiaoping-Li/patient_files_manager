const express = require('express');

const patients = require('./patientsController');

const patientsRouter = express.Router();

patientsRouter.post('/', function(req, res) {
  const patient = req.body;
  patients
    .insert(patient)
    .then(function(patient) {
      res.status(201).json(patient);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

patientsRouter.get('/', function(req, res) {
  patients
    .get()
    .then(function(patients) {
      res.status(200).json(patients);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

patientsRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  patients
    .get(id)
    .then(function(patient) {
      if (patient) {
        res.status(200).json(patient);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

patientsRouter.get('/:id/records', function(req, res) {
  const { id } = req.params;

  patients
    .getPatientDetails(id)
    .then(function(data) {
      const detail = {
        id: null, 
        firstName: null, 
        lastName: null,
        DOB: null,
        gender: null, 
        records:[]
      };

      data.forEach(datum => {
        detail.id = datum.pt_id;
        detail.firstName = datum.firstname; 
        detail.lastName = datum.lastname;
        detail.DOB = datum.DOB;
        detail.gender = datum.gender;
        detail.records.push({record_id: datum.record_id, record_name: datum.record_name, fieldID: datum.fieldID});
      });

      res.status(200).json(detail);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
})

patientsRouter.put('/:id', function(req, res) {
  const { id } = req.params;
  patients
    .update(id, req.body)
    .then(function(count) {
      if (count === 1) {
        patients
          .get(id)
          .then(function(patient) {
            res.status(201).json(patient);
          });
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

patientsRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  patients
    .remove(id) 
    .then(function(count) {
      res.status(200).json({ removed: count });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

module.exports = patientsRouter;