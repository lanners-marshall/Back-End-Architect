
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', tbl =>{
      tbl.increments();
      tbl.string('imageUrl').notNullable()
      tbl.integer('upvotes').notNullable()
      tbl.integer('userId').notNullable().unsigned().references('id').inTable('users')
      tbl.string('description')
      tbl.string('postName').notNullable()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('posts')
};
