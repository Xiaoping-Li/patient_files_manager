
exports.up = function(knex) {
  return createPatientsTable(knex)
    .then(createVitalSignsTable) 
    .catch(error => {
      console.log(error);
      reject(error);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('vitalSigns')
    .then(function() {
      console.log('dropping Patients');
      return knex.schema.dropTableIfExists('patients');
    })
    .catch(error => console.log(error));
};

function createPatientsTable(knex) {
  console.log('creating patients table');

  return new Promise(function(resolve, reject) {
    knex.schema
      .createTable('patients', function(patients) {
        patients.increments('id').primary();
        patients.string('firstname', 128).notNullable();
        patients.string('lastname', 128).notNullable();
        patients.date('DOB').notNullable();
        patients.string('gender', 128);
        patients.timestamp('createAt').defaultTo(knex.fn.now()); 
        
        console.log('patients table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  })
}

function createVitalSignsTable(knex) {
  console.log('creating vitalSigns table');

  return new Promise(function(resolve, reject) {
    knex.schema
      .createTable('vitalSigns', function(vitalSigns) {
        vitalSigns.increments('id').primary();
        vitalSigns.decimal('temperature', 4, 1);
        vitalSigns.integer('heart_rate');
        vitalSigns.integer('systolic');
        vitalSigns.integer('diastolic');
        vitalSigns.date('test_date');
        vitalSigns
          .integer('patientID')
          .references('id')
          .inTable('patients')
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('RESTRICT')
          .index();
        vitalSigns.timestamp('createAt').defaultTo(knex.fn.now());

        console.log('vitalSigns table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  })
} 
