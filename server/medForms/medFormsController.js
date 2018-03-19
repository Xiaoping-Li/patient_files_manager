const db = require('../database/dbConfiguration.js');


module.exports = {
  getList: function() {
    return db.select('form_name').table('medForms');
  },

  getDetails: function(formID) {
    return db('medForms as form ')
      .leftOuterJoin('medFields as field', 'form.form_id', 'field.formID')
      .select('form.form_id', 'field.field_id', 'form.form_name', 'field.field_name', )
      .where('form.form_id', formID);
  },
}; 