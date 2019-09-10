
exports.up = function(knex) {
  return knex.schema.createTable("cars" , table => {
      table.increments();
      table.string("VIN" , 18).unique().notNullable(); 

      table.string("make" , 50).notNullabl();
      tbl.string("model", 50).notNullable();
      tbl.string("title");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
