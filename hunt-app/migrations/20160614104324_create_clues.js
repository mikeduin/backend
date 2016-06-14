
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clues', function(table){
    table.increments('id').primary();
    table.integer('hunt_id')
      .references('id')
      .inTable('hunts');
    table.string('clue');
    table.string('location_name');
    table.integer('longitude');
    table.integer('latitude');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clues');
};
