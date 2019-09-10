
exports.up = function(knex) {
  return knex.schema.createTable("cars" , table => {
      table.increments();

      table.string("make" , 50).notNullable();

      table.string("model", 50).notNullable();

      table.string("title");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
