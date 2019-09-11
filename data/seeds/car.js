
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { 
          VIN : "2876363897879",
          model: "S 10",
          make : "Chevrolet",
          title: "clean",
          mileage : 3000,
          transmission : "automatic"
        },
        { 
          VIN : "287636389722279",
          model: "SW",
          make : "Nissan",
          title: "salvage",
          mileage : 2000,
          transmission : "automatic"

        },
        { 
          VIN : "287636389711179",
          model: "Tribute",
          make : "Mazda",
          title: "clean",
          mileage : 4000,
          transmission : "automatic"
        },
        { 
          VIN : "287636389733379",
          model: "Jetta",
          make : "Volkswagen",
          title: "clean",
          mileage : 5000,
          transmission : "automatic"
        }
      ]);
    });
};
