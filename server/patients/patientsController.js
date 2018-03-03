const db = require('../database/dbConfiguration.js');

const get = function(id) {
  let query = db('patients');
  if (id) {
    query.where('id', id).first();
  }
  return query;
};

module.exports = {
  get,

  getPatientDetails: function(id) {
    return db('patients as p ')
      .leftOuterJoin('vitalSigns as v', 'p.id', 'v.patientID')
      .select('*')
      .where('p.id', id);  
  },

  insert: function(patient) {
    return db('patients')
      .insert(patient)
      .then(ids => ids[0])
      .then(get);
  },

  update: function(id, patient) {
    return db('patients')
      .where('id', id)
      .update(patient);
  },

  remove: function(id) {
    return db('patients')
      .where('id', id)
      .del();
  },
};