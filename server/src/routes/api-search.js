import { Router } from 'express';

let router = Router();

router.get('/', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
});

router.get('/:id', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
});


router.post('/', (req, res) => {
    console.log(req.body)
    let {keyword} = req.body
    console.log(keyword)
    res.sendStatus(200)
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