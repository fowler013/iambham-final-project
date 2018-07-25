import { Router } from 'express';
import { row, rows } from '../config/db'
let router = Router();


router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {

    } else {

    }

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

export default router;