
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        tbl.string('VIN', 128).notNullable().unique().index();
        tbl.string('make', 128).notNullable().index();
        tbl.string('model', 128).notNullable().index();
        tbl.integer('mileage').notNullable().index();
        tbl.string('transmission type', 128).index();
        tbl.boolean('title').defaultTo(true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExist('cars')
};
