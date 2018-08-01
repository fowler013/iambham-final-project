import { Router } from 'express';
import goEdamam from '../config/edamam'
import 'isomorphic-fetch'

let router = Router();

router.get('/:id?', (req, res) => {
let id = req.params.id;
if (id) {
    fetch(goEdamam({ uri: `http://www.edamam.com/ontologies/edamam.owl#recipe_${id}` }), {
        method: "Get",
        headers: { "Content-Type": "application/json" }
    })
        .then(results => results.json())
        .then(results => {
            res.send(results);
        });

} else {
    fetch(goEdamam({keyword: 'all'}), {
        method: "Get",
        headers: { "Content-Type": "application/json" }
    })
        .then(results => results.json())
        .then(results => {
            res.send(results);
        });
    }
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