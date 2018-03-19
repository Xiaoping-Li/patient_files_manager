
exports.up = function(knex) {
  return createPatientsTable(knex)
    .then(createMedFormsTable)
    .then(createMedFieldsTable)
    .then(createMedRecordsTable)
    .catch(error => {
      console.log(error);
      reject(error);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('medRecords')
    .then(function() {
      console.log('Dropping MedFields Table');
      return knex.schema.dropTableIfExists('medFields');
    })
    .then(function() {
      console.log('Dropping MedForms Table');
      return knex.schema.dropTableIfExists('medForms');
    })
    .then(function() {
      console.log('Dropping Patients Table');
      return knex.schema.dropTableIfExists('patients')
    })
    .catch(error => console.log(error));
};

function createPatientsTable(knex) {
  console.log('creating patients table');

  return new Promise(function(resolve, reject) {
    knex.schema
      .createTable('patients', function(table) {
        table.increments('pt_id').primary();
        table.string('firstname', 128).notNullable();
        table.string('lastname', 128).notNullable();
        table.date('DOB').notNullable();
        table.string('gender', 128); 
        table.timestamp('createAt').defaultTo(knex.fn.now()); 
        
        console.log('patients table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  })
}

function createMedFormsTable(knex) {
  console.log('creating medForms table');

  return new Promise(function(resolve, reject) {
    knex.schema
      .createTable('medForms', function(table) {
        table.increments('form_id').primary();
        table.string('form_name', 128).notNullable().unique();
        table.timestamp('createdAt').defaultTo(knex.fn.now());

        console.log('medForms table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  })
}

function createMedFieldsTable(knex) {
  console.log('creating medFields table');

  return new Promise(function(resolve, reject) {
    knex.schema
      .createTable('medFields', function(table) {
        table.increments('field_id').primary();
        table.string('field_name', 128).notNullable().unique();
        table
          .integer('formID')
          .references('form_id')
          .inTable('medForms')
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('RESTRICT')
          .index();
        table.timestamp('createdAt').defaultTo(knex.fn.now());

        console.log('medFields table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  })
}

function createMedRecordsTable(knex) {
  console.log('creating medRecords table');

  return new Promise(function(resolve, reject) {
    knex.schema
      .createTable('medRecords', function(table) {
        table.increments('record_id').primary();
        table.text('record_value','longtext');
        table
        .integer('patientID')
        .references('pt_id')
        .inTable('patients')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('RESTRICT')
        .index();
        table
        .integer('fieldID')
        .references('field_id')
        .inTable('medFields')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('RESTRICT')
        .index();
        table.timestamp('createdAt').defaultTo(knex.fn.now());

        console.log('medRecords table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  })
}