const database = require("./database-connection");

module.exports = {
  listAll(){
    return database('directory').select()
  },
  readOne(id){
    return database('directory').select().where('id', id)
  },
  postOne(student){
    return database('directory')
      .insert(student)
      .returning('*')
      .then(record => record[0])
  },
  deleteOne(id){
    return database('directory')
      .delete()
      .where('id', id)
  },
  update(id, student){
    return database('directory')
      .update(student)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  }
}
