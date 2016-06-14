
exports.up = function(knex, Promise) {
  return knex.schema.createTable('invites', function(table){
    table.increments('id').primary();
    table.integer('hunt_id')
      .references('id')
      .inTable('hunts');
    table.string('email');
    table.string('name')
      .references('first_name')
      .inTable('users');
    table.date('rsvp_by');
    table.string('rsvp').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('invites');
};
