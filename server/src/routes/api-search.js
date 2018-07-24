import { Router } from 'express';
import goEdamam from '../config/edamam'

let router = Router();

router.get('/', (req, res) => {
    console.log(req.body)
    goEdamam(req.body)
    res.sendStatus(200)
});

router.get('/:id', (req, res) => {
    console.log(req.body)
    let {uri} = req.body

    res.sendStatus(200)
});


router.post('/', (req, res) => {
    console.log(req.body);
    goEdamam(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
});

router.delete('/:id', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
});

export default router;