const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get('/', function(request,response){
  queries.listAll().then(cohort => {
        response.json({cohort})
})
})

router.get('/:id', function(request,response){
  queries.readOne(request.params.id).then(student => {
      student
          ? response.json({student})
          : response.status(404).json({message: 'Not found'})
  })
})

router.post('/', function(request,response,next){
  queries.postOne(request.params.body)
  .then(student => {
    response.status(201).json({student})
  })
})

router.delete('/:id', function(request,response,next){
  queries.deleteOne(request.params.id)
  .then(() => {
    response.status(200)
  })
})

router.put('/:id', function(request,response,next){
  queries.update(request.body.id, request.body.name)
  .then(updatedUser => response.json({updatedUser}))
})

router.use(function(error,request,response,next){
  console.error(error.stack)
  response.status(400).send('ERROR ERROR ERROR')
})


module.exports = router;
