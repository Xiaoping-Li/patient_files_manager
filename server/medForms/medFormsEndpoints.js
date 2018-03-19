const express = require('express');

const medForms = require('./medFormsController');

const medFormsRouter = express.Router();



medFormsRouter.get('/', function(req, res) {
  medForms
    .getList()
    .then(function(medForms) {
      res.status(200).json(medForms);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

medFormsRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  medForms
    .getDetails(id)
    .then(function(medForm) {
      if (medForm) {
        res.status(200).json(medForm);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});


module.exports = medFormsRouter;