import { Router } from 'express';
import { row, rows } from '../config/db'
import base from './base'
let router = Router();


router.get('/',(req,res,next) => {

    base.readall('spGetAllFavorites').then(results => res.send(results))
})


// router.get('/:id?', (req, res) => {
//     let id = req.params.id;
//     if (id) {
//         base.read('spGetFavorites', [id]).then(results => res.send(results))
//     } else {

//     }

// });

router.post('/', (req, res) => {
    let {userid, recipeid} = req.body;
    console.log(userid);
    console.log(recipeid);
    if (!userid){
        res.status(400).send('Invaild User id')
    }else if(!recipeid){
        res.status(400).send('Invaild Recipe Id')
    }else{
        res.send('post favorites');
        // base.create('spCreateFavorite', [userid, rating, review])
            // .then(results => res.send(results)) 
    }

});

// router.put('/:id', (req, res) => {
//     let id = req.params.id;
//     let {userid,recipeid} = req.body;
//     console.log(userid);
//     console.log(recipeid);
//     if(!userid){

//     }

// });

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    if (id) {
base.destroy('spDeleteFavorites', [id]).then(results => res.send(results))
    } 
});

export default router;