const express = require('express');

const vitalSigns = require('./vitalSignsController');

const vitalSignsRouter = express.Router();

vitalSignsRouter.post('/', function(req, res) {
  const vitalSign = req.body;

  vitalSigns
    .insert(vitalSign)
    .then(function(vitalSign) {
      res.status(201).json(vitalSign);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

vitalSignsRouter.get('/', function(req, res) {
  vitalSigns
    .get()
    .then(function(vitalSigns) {
      res.status(200).json(vitalSigns);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

vitalSignsRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  vitalSigns
    .get(id)
    .then(function(vitalSign) {
      if (vitalSign) {
        res.status(200).json(vitalSign);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

vitalSignsRouter.put('/:id', function(req, res) {
  const { id } = req.params;

  vitalSigns
    .update(id, req.body)
    .then(function(count) {
      if (count === 1) {
        vitalSigns
          .get(id)
          .then(function(vitalSign) {
            res.status(201).json(vitalSign);
          }); 
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

vitalSignsRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  vitalSigns
    .remove(id) 
    .then(function(count) {
      res.status(200).json({ removed: count });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

module.exports = vitalSignsRouter;