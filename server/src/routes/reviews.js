import { Router } from 'express';
import base from './base'
let router = Router();

router
    .get('/', (req, res, next) => {

        base.readall('spGetAllUserReviews', []).then(results => res.send(results))

    })


    .get('/:id', (req,res, next) => {
        let id = req.params.id;
        if(id){
            base.read('spGetUserReview', [id]).then(results => res.send(results))
        }
    })

    .post('/', (req, res, next) => {
        let {userid, review, rating} = req.body
        if (!review|| !rating) {
            res.status(400).send("Invaid post")
        } else {
        res.send('got post')
            // base.create('spCreateUserReview', [userid, rating, review])
            // .then(results => res.send(results))            
        }

    })
    .put('/:id?', (req, res, next) => {
        let {rating, review} = req.body;
        let id = req.params.id;
        if (!review || !rating) {
            res.status(400).send("Invaid update")
        }else{
            res.send('got update')
            // base.update('spUpdateUserReview', [id, +rating, review])
            // res.sendStatus(200)
        }
    })
    
      .delete('/:id?', (req, res, next) => {
        let id = req.params.id;
        if (id) {
    base.destroy('spDeleteUserReview', [id]).then(results => res.send(results))
        } else {
    
        }
    
      });
      export default router;