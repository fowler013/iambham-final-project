import { Router } from 'express';
import { row, rows } from '../config/db'
import base from './base'
let router = Router();


router.get('/',(req,res,next) => {
    
    base.readall('spGetAllFavorites', [id]).then(results => res.send(results))
})


router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        base.read('spGetFavorites', [id]).then(results => res.send(results))
    } else {

    }

});

router.post('/', (req, res) => {
    let {userid, recipeid} = req.body;
    console.log(userid);
    console.log(recipeid);
    if (!userid){
        res.status(400).send('Invaild User id')
    }else if(!recipeid){
        res.status(400).send('Invaild Recipe Id')
    }else{
        res.send('got favorites')
    }

});

router.put('/:id', (req, res) => {
    let {userid,}
});

router.delete('/:id', (req, res) => {

});

export default router;