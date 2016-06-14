
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ids', function(table){
    table.increments('id').primary();
    table.integer('user_id')
      .references('id')
      .inTable('users');
    table.integer('hunt_id')
      .references('id')
      .inTable('hunts');
    table.integer('clue_id')
      .references('id')
      .inTable('clues');
    table.boolean('score').nullable() ;
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ids');
};
