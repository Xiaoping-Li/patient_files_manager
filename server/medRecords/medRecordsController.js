const db = require('../database/dbConfiguration.js');

const get = function(obj) {

  if (obj.patientID && obj.formID) {
    return db('medFields as fields ')
    .leftOuterJoin('medRecords as r', 'fields.field_id', 'r.fieldID')
    .select('*')
    .where({'fields.formID': obj.formID, 'r.patientID': obj.patientID}); 
  }
  return db('medRecords')
    .where('medRecords.patientID', obj.patientID);
};

module.exports = {
  get, 

  insert: function(records) {
    return db('medRecords')
      .insert(records)
      .then(ids => ({ id: ids[0] }));;
  },

  update: function(id, record) {
    return db('medRecords')
      .where('record_id', id)
      .update(record);
  },

  remove: function(id) {
    return db('medRecords')
      .where('record_id', id)
      .del();
  },
}; 