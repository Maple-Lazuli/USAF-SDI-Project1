exports.up = function(knex, Promise) {
    return knex.schema.createTable('supervisors', function(table){
      table.increments('index').primary().unsigned();
      table.foreign('user').references('userid').inTable('users').notNull().onDelete('cascade') //if a user gets deleted, drop this row
      table.foreign('supervisor').references('userid').inTable('users').notNull().onDelete('cascade') //if a supervisor gets deleted, drop this row
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('supervisors');
  };