import { Router } from 'express';
import goEdamam from '../config/edamam'

let router = Router();

router.get('/', (req, res) => {
    fetch(goEdamam(req.body), {
      method: "Get",
      headers: { "Content-Type": "application/json" }
    })
      .then(results => results.json())
      .then(results => {
        res.send(results);
      });
});

router.get('/:id', (req, res) => {
    fetch(goEdamam(req.body), {
      method: "Get",
      headers: { "Content-Type": "application/json" }
    })
      .then(results => results.json())
      .then(results => {
        res.send(results);
      });

});


router.post('/', (req, res) => {
    console.log(req.body);
    fetch(goEdamam(req.body), {
        method: 'Get',
        headers: { 'Content-Type': 'application/json' }
    }).then
        (results => results.json()).then((results) => {
            res.send(results)
        })
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