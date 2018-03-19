const db = require('../database/dbConfiguration.js');

const get = function(id) {
  let query = db('patients');
  if (id) {
    query.where('pt_id', id).first();
  }
  return query;
};

module.exports = {
  get,

  getPatientDetails: function(id) {
    return db('patients as p ')
      .leftOuterJoin('medRecords as r', 'p.pt_id', 'r.patientID')
      .select('*')
      .where('p.pt_id', id);  
  },

  insert: function(patient) {
    return db('patients')
      .insert(patient)
      .then(ids => ids[0])
      .then(get);
  },

  update: function(id, patient) {
    return db('patients')
      .where('pt_id', id)
      .update(patient);
  },

  remove: function(id) {
    return db('patients')
      .where('pt_id', id)
      .del();
  },
};