const db = require('../database/dbConfiguration.js');

const get = function(id) {
    let query = db('vitalSigns');
    if (id) {
      query.where('id', id).first();
    }
    return query;
  };

module.exports = {
  get,
 
  insert: function(vitalSign) {
    return db('vitalSigns')
      .insert(vitalSign)
      .then(ids => ids[0])
      .then(get);
  },

  update: function(id, vitalSign) {
    return db('vitalSigns')
      .where('id', id)
      .update(vitalSign);
  },

  remove: function(id) {
    return db('vitalSigns')
      .where('id', id)
      .del();
  },
};