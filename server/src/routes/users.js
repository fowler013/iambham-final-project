import { Router } from 'express';
import base from './base'
import validator from 'email-validator' 
let router = Router();

router
  .get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
base.read('spGetUser', [id]).then(results => res.send(results))
    } else {

    }
  })

  .post('/', (req, res, next) => {
    let{firstname, lastname, email} = req.body
    console.log(firstname, lastname, email)
    console.log((firstname || lastname || email) === undefined)
    if((firstname || lastname || email) === undefined) {
      res.status(400).send('Invalid info')
    }else if (!validator.validate(email)){
      res.status(400).send('Invalid email')  
    }else if((firstname || lastname) ==="") {
      res.status(400).send('Invalid info')
    } else {

      res.send('got it')
      // base.create('spCreateUser', [email, firstname, lastname,])
      // .then(results => res.send(results))
    }
  })

  .put('/:id?', (req, res, next) => {
    let id = req.params.id;


  })

  .delete('/:id?', (req, res, next) => {
    let id = req.params.id;

  });


export default router;