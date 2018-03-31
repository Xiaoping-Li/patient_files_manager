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
    .then(function(data) {
      if (data) {
        const form = {id: null, name: null, fields:[]};
        data.forEach(datum => {
          form.id = datum.form_id;
          form.name = datum.form_name;
          form.fields.push({field_id: datum.field_id, field_name: datum.field_name});
        }); 
        res.status(200).json(form);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});


module.exports = medFormsRouter;