const express = require('express');

const medRecords = require('./medRecordsController');

const medRecordsRouter = express.Router();

medRecordsRouter.post('/', function(req, res) {
  const medRecord = {
    fieldID: req.body.fieldID,
    patientID: req.body.patientID,
    record_value: req.body.record_value,
  };
  

  medRecords
    .insert(medRecord)
    .then(function(medRecord) {
      res.status(201).json(medRecord);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

medRecordsRouter.get('/', function(req, res) {
  medRecords
    .get(req.query)
    .then(function(medRecords) {
      res.status(200).json(medRecords);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

medRecordsRouter.put('/:id', function(req, res) {
  const { id } = req.params;

  medRecords
    .update(id, req.body)
    .then(function(count) {
      if (count > 0) {
        res.status(200).json({ updated: count });
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

medRecordsRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  medRecords
    .remove(id) 
    .then(function(count) {
      res.status(200).json({ removed: count });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

module.exports = medRecordsRouter;