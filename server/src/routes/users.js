import { Router } from 'express';
import base from './base'

let router = Router();

router
  .get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
base.read('spGetUser', [id]).then(results => console.log(results))
    } else {

    }
  })

  .post('/', (req, res, next) => {

  })

  .put('/:id?', (req, res, next) => {
    let id = req.params.id;


  })

  .delete('/:id?', (req, res, next) => {
    let id = req.params.id;

  });


export default router;