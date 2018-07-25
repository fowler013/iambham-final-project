import { Router } from 'express';
import base from './base'
import 'email-validator'
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
    if(firstname || lastname || email === undefined) {
      res.status(400).send('Invalid info')
    }else if (){

    } else {
      base.create('spCreateUser', [email, firstname, lastname,])
      .then(results => res.send(results))
    }
  })

  .put('/:id?', (req, res, next) => {
    let id = req.params.id;


  })

  .delete('/:id?', (req, res, next) => {
    let id = req.params.id;

  });


export default router;