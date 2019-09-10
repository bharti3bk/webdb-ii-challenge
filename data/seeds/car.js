
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          model: "S 10",
          make : "Chevrolet",
          title: "clean"
        },
        { 
          model: "SW",
          make : "Nissan",
          title: "salvage"

        },
        { 
          model: "Tribute",
          make : "Mazda",
          title: "clean"
        },
        { 
          model: "Jetta",
          make : "Volkswagen",
          title: "clean"
        }
      ]);
    });
};
