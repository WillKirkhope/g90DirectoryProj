
exports.up = function(knex, Promise) {
  return knex.schema.createTable('directory', function(table){
    table.increments()
    table.text('firstname')
    table.text('lastname')
    table.text('photo')
    table.text('hometownLat')
    table.text('hometownLong')
    table.text('prevOccupation')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('directory')
}
