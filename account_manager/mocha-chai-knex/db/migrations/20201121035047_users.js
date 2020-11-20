exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
      table.increments('userid').primary().unsigned();
      table.integer('sessionid').notNullable();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('paygrade').notNullable();
      table.string('rank').notNullable();
      table.string('gender').notNullable();
      table.string('rankInt').notNullable();
      table.string('AFSC').notNullable();
      table.string('unit').notNullable();
      table.string('DOR').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };